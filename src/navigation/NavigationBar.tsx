import { useLocation } from 'react-router-dom';
import NavButton from "./NavButton";

const TABS = ["Search", "Saved Toons", "About"]

export default function() {
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase().split('/')[1] || '';

    return(
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
        }}>
            <ul style = {{
                position: 'absolute',
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                {TABS.map((label) => (
                    <li key={label}>
                        <NavButton
                        selected = {currentPath == label.toLowerCase().replace(' ', '')}
                        text={label}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}