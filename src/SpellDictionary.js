import React, { useState} from "react";
import "./SpellDictionary.css";

export default function SpellDictionary() {
   let [keyword, setKeyword] = useState(" ");

   function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
}

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