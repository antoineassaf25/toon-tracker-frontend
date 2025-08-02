import { ToonStatsType } from "./ToonProfile";
import { suitAndTierToCogData } from "../library/cogSuits"

const SUITS : string[][] = [
    ["sellbot", "38,11,9"],
    ["cashbot", "33,53,49"],
    ["lawbot", "62,63,97"],
    ["bossbot", "91,46,41"]
]

export function Suits( { stats } : { stats?: ToonStatsType } ) {
    if (!stats) {
        return (
            <div style={{ color: 'grey', fontStyle: 'italic' }}>
                No Suit Data Available
            </div>
        );
    }

    return (
        <div>
            <ul
            style = {{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "1rem",
            }}>
                {SUITS.map(
                    (suit, index) => {
                        const encoding = stats[suit[0] as keyof ToonStatsType] as string
                        const tier = Number(encoding.slice(0, 1))
                        const v2 = encoding.slice(1, 2) == "2"
                        const level = parseInt(encoding.slice(2), 16)

                        if (tier === 0) {
                            return (
                            <li key={index}
                            style = {{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                borderRadius: "10px",
                                backgroundColor: `rgba(${suit[1]}, .2)`,
                                width: "6rem",
                                marginLeft: ".5rem",
                                boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                            }}
                            />)
                        }

                        console.log(`toonhq.org/static/assets/cogs/${suitAndTierToCogData[suit[0]][tier].asset}`)
                        return (
                            <li key={index}
                            style = {{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                borderRadius: "10px",
                                backgroundColor: `rgba(${suit[1]}, .2)`,
                                width: "6rem",
                                marginLeft: ".5rem",
                                boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                            }}>
                                <img
                                src={`https://toonhq.org/static/assets/cogs/${suitAndTierToCogData[suit[0]][tier].asset}`}
                                style = {{
                                    width: "4rem",
                                    height: "4rem"
                                }}/>
                                <div style = {{color: "black", fontSize: ".8rem"}}> 
                                    {suitAndTierToCogData[suit[0]][tier].name}
                                </div>
                                <div style = {{color: "black", fontSize: ".8rem"}}> 
                                    {suit[0].slice(0, 1).toUpperCase() + suit[0].slice(1)}
                                </div>
                                <div style = {{color: "black", fontSize: ".8rem"}}> 
                                    Lvl. {level} {v2 ? "v2.0" : ""}  
                                </div>
                            </li>)
                    }
                )}
            </ul>

        </div>
    )
}