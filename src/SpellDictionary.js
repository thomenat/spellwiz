import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SpellDictionary.css";

export default function SpellDictionary() {
   const [keyword, setKeyword] = useState(" ");
   const [spellMapping, setSpellMapping] = useState({});

    // Fetch and map spell names to slugs
    useEffect(() => {
        fetch('https://api.potterdb.com/v1/spells')
            .then(response => response.json())
            .then(data => {
                const spells = data.data;
                const mapping = spells.reduce((acc, spell) => {
                    const { name, slug } = spell.attributes;
                    acc[name.toLowerCase()] = slug; // Use lowercased name for case-insensitive search
                    return acc;
                }, {});
                setSpellMapping(mapping);
            })
            .catch(error => console.error('Error fetching spells:', error));
    }, []); // Empty dependency array means this effect runs once on component mount


   function handleResponse(response) {
    console.log(response.data); 
};

//documentation here https://docs.potterdb.com/apis/rest
function search(event) {
    event.preventDefault();
    const spellSlug = spellMapping[keyword.toLowerCase()]; // Look up the slug by keyword
    if (spellSlug) {
        const apiUrl = `https://api.potterdb.com/v1/spells/${spellSlug}`;
        axios.get(apiUrl).then(handleResponse);
    } else {
        alert('Spell not found!');
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

               </form>
            </div>
        );
}