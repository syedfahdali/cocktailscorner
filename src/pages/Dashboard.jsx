import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import { db } from './firebase';  // Ensure this import path is correct
import { collection, addDoc, getDocs } from 'firebase/firestore';

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
    <div>
      <h1>Welcome, {currentUser?.displayName}</h1>
      <div>
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Add a new favorite cocktail"
        />
        <button onClick={addFavorite}>Add Favorite</button>
      </div>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
