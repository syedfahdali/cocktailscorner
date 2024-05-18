import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../pages/firebase";
import { AuthContext } from './AuthContext';
import { doc, updateDoc, setDoc } from "firebase/firestore"; 

export default function Cocktail({ image, name, id, info, glass }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    updateFavoriteInFirestore(id, !isFavorite);
    console.log(id, !isFavorite);
  };

  const updateFavoriteInFirestore = async (cocktailId, isFavorite) => {
    // Update favorites in Firestore
    const favoritesRef = doc(db, 'favorites', currentUser.uid);
    const favoritesDoc = await favoritesRef.get();

    if (!favoritesDoc.exists()) {
      // Create the document if it doesn't exist
      await setDoc(favoritesRef, {});
    }

    // Update the favorite status of the cocktail
    await updateDoc(favoritesRef, {
      [cocktailId]: isFavorite
    });
  };

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <button
          className={`btn btn-primary btn-details ${isFavorite ? 'favorite' : ''}`}
          onClick={toggleFavorite}
        >
          <i className="fas fa-heart"></i>
        </button>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
