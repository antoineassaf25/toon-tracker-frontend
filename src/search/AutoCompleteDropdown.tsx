import { PrefixToon } from "./SearchPage";

interface AutoCompleteDropdownProps {
    toonDataJSON: PrefixToon[];
    navigateToProfile: (id:number) => void;
}

export default function AutoCompleteDropdown({ toonDataJSON, navigateToProfile } : AutoCompleteDropdownProps) {
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
                key={toon.toon_id}
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
                    onClick={
                        () => navigateToProfile(toon.toon_id)
                    }>
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