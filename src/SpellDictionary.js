import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SpellDictionary.css";

export default function SpellDictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [spellData, setSpellData] = useState("");
    const [error, setError] = useState("");


    function handleResponse(response) {
 
        if (response.data && response.data.data && response.data.data.length > 0) {
            setSpellData({
                spellIncantation: response.data.data[0].attributes.incantation,
                spellName: response.data.data[0].attributes.name,
                spellEffect: response.data.data[0].attributes.effect.toLowerCase(),
                spellImage: response.data.data[0].attributes.image,
            }); // Store the API response in state
            setError(""); // Clear any previous error


        } else {
            // If the spell doesn't exist or the response is incomplete
            setError("Spell not found!");
            setSpellData(null);
        }
    }

    function search(event) {
        if (event) {
            event.preventDefault();
        }

        const spell = keyword.toLowerCase();
        if (keyword) {
            const apiUrl = `https://api.potterdb.com/v1/spells?filter[incantation_cont]=${spell}`;
            axios.get(apiUrl)
                .then(handleResponse)
                .catch((error) => {
                    setError("An error occurred. Please try again.");
                    setSpellData(null);
                });
        } else {
            setError('Please enter a spell name!');
            setSpellData(null);
        }
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

      // Use useEffect to trigger the default search when the component mounts
      useEffect(() => {
        search();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="SpellDictionary">
            <form onSubmit={search}>
                <input 
                    type="search" 
                    autoFocus={true} 
                    placeholder="Type a spell..."
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword}
                />
                <input className="revealButton" type="submit" value="Reveal" />
            </form>

            {spellData && (
                <div className="spell-info">
                    <h2>{spellData.spellName}</h2>
                    <h3>{spellData.spellIncantation}</h3>
                    <p>
                    <strong>Effect:</strong> {spellData.spellEffect} 
                        </p>
                    <img className="spell-image" src={spellData.spellImage}>
                    </img>
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
