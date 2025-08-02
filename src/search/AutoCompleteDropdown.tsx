import { PrefixToon } from "./SearchPage";

interface AutoCompleteDropdownProps {
    toonDataJSON: PrefixToon[];
}

export default function AutoCompleteDropdown({ toonDataJSON } : AutoCompleteDropdownProps) {
    return (
        <ul style = {{
            display: "flex",
            flexDirection: "column",
            gap: '.2rem',
            maxHeight: '500px',
            overflowY: 'auto',
            }}>
            {toonDataJSON.map((toon: PrefixToon, index) => (
                <li
                key={toon.id}
                style = {{
                    display: "flex",
                    flexDirection: "column"
                }}
                >
                    <button
                    style = {{
                        borderRadius: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: '35px',
                        backgroundColor: index === 0 ? 'rgba(180, 180, 255, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(10px)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                        padding: "0 1rem"
                    }}
                    >
                        <div style = {{color:"black"}}>
                            {`${toon.name} (${toon.laff})`}
                        </div>
                        <img src={`${toon.photo}`} alt="Search" style={{ width: '30px', height: '30px' }} />
                    </button>
                </li>
            ))}
        </ul>
    )
}