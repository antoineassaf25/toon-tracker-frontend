import { useState } from 'react';
import SearchIcon from '../assets/search-icon.png'

interface SearchBarProps {
    updateToons: (prefix:string) => void;
}

export function SearchBar( { updateToons } : SearchBarProps ) {
    const [ currentInput, setCurrentInput ] = useState("")

    return (
        <div
        style={{
            background:"white",
            padding: '0.75rem 1.5rem',
            borderRadius: '20px',
            width: 'fit-content',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
            fontFamily: 'Nunito Sans, cursive',
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <input
            placeholder={"Enter toon name!"}
            style = {{
                background: "white"
            }}
            value={currentInput}
            onChange={(e) => {setCurrentInput(e.target.value)}}
            onKeyDown={(e) => {
                updateToons(currentInput)
                //if (e.key === 'Enter') updateToons(currentInput);
            }}
            >
            </input>
            <button
            onClick={() => updateToons(currentInput)}>
                <img src={`${SearchIcon}`} alt="Search" style={{ width: '30px', height: '30px' }} />
            </button>
        </div>
    )
}