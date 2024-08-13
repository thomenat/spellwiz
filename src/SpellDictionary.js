import React, { useState} from "react";
import axios from "axios";
import "./SpellDictionary.css";

export default function SpellDictionary() {
   let [keyword, setKeyword] = useState(" ");

   function handleResponse(response) {
    console.log(response.data);
}

   function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
}


let spellSlug = keyword
let apiUrl = `https://api.potterdb.com/v1/spells/${spellSlug}`

axios.get(apiUrl).then(handleResponse);

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