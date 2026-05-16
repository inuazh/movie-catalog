'use client'
import { useState } from "react";

export default function FavoriteButton () {

    const [isFavorite, setFavorite] = useState (false);

    const toggleFavorite = () =>{
        setFavorite(prev => !prev)
    }

    return (
        <button onClick={toggleFavorite} className={isFavorite ? 'bg-yellow-400 text-white' : "bg-gray-200 text-black"}>
         {isFavorite ? "delete from favorite" : "add to favorite"}   
        </button>
    )
}