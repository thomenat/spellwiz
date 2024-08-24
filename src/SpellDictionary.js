import React, { useState } from "react";
import axios from "axios";
import "./SpellDictionary.css";

export default function SpellDictionary() {
   const [keyword, setKeyword] = useState("");
   const [spellData, setSpellData] = useState(null);
   const [error, setError] = useState("");

   function handleResponse(response) {
    // Ensure that response contains valid spell data
    if (response.data && response.data.name && response.data.description) {
        setSpellData(response.data); // Store the API response in state
        setError(""); // Clear any previous error
    } else {
        // If the spell doesn't exist or the response is incomplete
        setError("Spell not found!");
        setSpellData(null);
    }
}

    function search(event) {
        event.preventDefault();

        const spell = keyword.toLowerCase().replace(/\s/g, '_'); // Replace spaces with underscores for case-insensitive search
        if (keyword) {
            const apiUrl = `https://potterhead-api.vercel.app/api/spells/${spell}`;
            axios.get(apiUrl).then(handleResponse).catch((error) => {
                setError("An error occurred. Please try again.");
                setSpellData(null);
            });
        } else {
            setError('Please enter a spell name!');
            setSpellData(null);
        }
    };

   function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
            <div className="SpellDictionary">
               <form onSubmit={search}>
                <input 
                type="search" 
                autoFocus={true} 
                placeholder="Type a spell..."
                onChange={handleKeywordChange}
                />
                <input className="revealButton" type="submit" value="Reveal" />
               </form>

               {spellData && (
                <div className="spell-info">
                    <h2>{spellData.name}</h2>
                    <p><strong>Description:</strong> {spellData.description}</p>
                </div>
            )}

            {error && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}
