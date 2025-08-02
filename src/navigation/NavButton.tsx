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
            color: "black",
            fontFamily: 'Nunito Sans, cursive',
            fontWeight: 'bolder',
            fontSize: '20px',
            textDecoration: selected ? 'underline' : '',
            display: 'flex',
            justifyContent: "center",
            height: '100%',
            width: '100%',
            alignItems: "center",
        }}
        to={`/${text.toLowerCase().replace(' ', '')}`}
        >
          {text}
        </NavLink>
    );
}