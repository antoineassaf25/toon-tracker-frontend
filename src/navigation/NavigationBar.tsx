import { useLocation } from 'react-router-dom';
import NavButton from "./NavButton";
import Icon from "../assets/toon-tracker-icon.png"

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
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    flexDirection:"row",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: "20px",
                    padding: '0.1rem 1rem',
                    width: 'fit-content',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                    marginTop: '1rem'
                }}>
                    <img src={`${Icon}`} style={{ width: "4rem", height: "4rem"}}></img>
                    <div 
                    className ="rubik-glitch-regular"
                    style={{
                        // fontFamily:"Nunito Sans, cursive",
                        // fontWeight:"bolder",
                        fontSize:"2rem",
                        background: "linear-gradient(90deg, #FF6B6B, #FFD93D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "2px black",
                        textShadow: "0 0 16px rgba(0,0,0,0.2)"
                    }}>
                        Toon Tracker
                    </div>
                </div>
                <div
                style = {{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center",
                    flexDirection:"row",
                    backgroundColor: "rgba(255,255,255)",
                    borderRadius: "20px",
                    padding: '.5rem 4rem',
                    width: "60%",
                    height: "100%",
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                    marginTop:"1rem",
                }}>
                    {TABS.map((label) => (
                        <li key={label}
                        style={{
                            //backgroundColor: "rgba(255, 255, 255, 1)",
                            borderRadius: "20px",
                            padding: '0.2rem 1rem',
                            width: '30%',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                            background: (currentPath == label.toLowerCase().replace(' ', '')) ? "linear-gradient(90deg, #FFADAD, #FFEB5E)" : "white"
                            }}>
                            <NavButton
                            selected = {currentPath == label.toLowerCase().replace(' ', '')}
                            text={label}/>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}