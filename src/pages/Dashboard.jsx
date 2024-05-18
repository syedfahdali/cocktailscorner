import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  useEffect(() => {
    if (currentUser) {
      const fetchFavorites = async () => {
        try {
          const favoritesCollection = collection(db, 'users', currentUser.uid, 'favorites');
          const querySnapshot = await getDocs(favoritesCollection);
          setFavorites(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      };
      fetchFavorites();
    }
  }, [currentUser]);

  const addFavorite = async () => {
    if (currentUser && newFavorite) {
      try {
        const favoritesCollection = collection(db, 'users', currentUser.uid, 'favorites');
        const docRef = await addDoc(favoritesCollection, { name: newFavorite });
        setFavorites([...favorites, { id: docRef.id, name: newFavorite }]);
        setNewFavorite('');
      } catch (error) {
        console.error('Error adding favorite:', error);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="welcome-text">Welcome, {currentUser?.displayName}</h1>
      <div className="input-container">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Add a new favorite cocktail"
          className="input"
        />
        <button onClick={addFavorite} className="add-button">Add Favorite</button>
      </div>
      <ul className="favorites-list">
        {favorites.map(favorite => (
          <li key={favorite.id} className="favorite-item">{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
