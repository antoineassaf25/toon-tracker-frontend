import { JSX } from "react";
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
    text: string;
    selected: boolean;
    onClick: () => void;
}

export default function NavButton({ text, selected, onClick } : NavButtonProps): JSX.Element {
    return (
      <button
        style = {{
            color: selected ? "blue" : "black",
            fontFamily: 'Nunito Sans, cursive',
            fontWeight: 'bolder',
            fontSize: '20px',
            textDecoration: selected ? 'underline' : ''
        }}
        onClick={onClick}
        >
          {text}
          </button>
    );
}