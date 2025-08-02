import { useState } from 'react';
import SearchIcon from '../assets/search-icon.png'

interface SearchBarProps {
    updateToons: (prefix:string) => void;
    navigateToProfile: () => void;
}

export default function SearchBar( { updateToons, navigateToProfile } : SearchBarProps ) {
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
            onChange={(e) => {
                setCurrentInput(e.target.value);
                updateToons(e.target.value);
            }} 
            onKeyDown={(e) =>{
                if (e.key === "Enter") {
                    navigateToProfile()
                }
            }}
            >
            </input>
            <button
            onClick={() => {
                updateToons(currentInput)
                navigateToProfile()
            }}>
                <img src={`${SearchIcon}`} alt="Search" style={{ width: '30px', height: '30px' }} />
            </button>
        </div>
    )
}