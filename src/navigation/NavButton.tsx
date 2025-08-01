import { JSX } from "react";
import { NavLink } from "react-router-dom";

interface NavButtonProps {
    text: string;
    selected: boolean;
}

export default function NavButton({ text, selected } : NavButtonProps): JSX.Element {
    return (
      <NavLink
        style = {{
            color: selected ? "blue" : "black",
            fontFamily: 'Nunito Sans, cursive',
            fontWeight: 'bolder',
            fontSize: '20px',
            textDecoration: selected ? 'underline' : ''
        }}
        to={`/${text.toLowerCase().replace(' ', '')}`}
        >
          {text}
        </NavLink>
    );
}