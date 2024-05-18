// Dashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import { db } from '../pages/firebase';

export default function Dashboard(props) {
  const { currentUser } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      const favoritesRef = db.collection('favorites').doc(currentUser.uid);
      favoritesRef.get().then((doc) => {
        if (doc.exists) {
          setFavorites(doc.data().favorites);
        } else {
          console.log('No favorites found!');
        }
        setLoading(false);
      }).catch((error) => {
        console.error('Error getting favorites:', error);
        setLoading(false);
      });
    }
  }, [currentUser]);

  return (
    <div>
      <h1>Welcome, {currentUser?.displayName}</h1>
      <h2>Favorite Cocktails</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
