import { ToonStatsType } from "./ToonProfile";
import { trackAndTierToGagData } from "../library/gags"

const GAG_TRACKS : string[][] = [
    ["toonup", "157,0,255"],
    ["trap", "255,255,0"],
    ["lure", "0,255,0"],
    ["sound", "176,224,230"],
    ["throw", "255,165,0"],
    ["squirt", "255,192,203"],
    ["drop", "0,128,128"]
]

export function Gags( { stats } : { stats?: ToonStatsType } ) {
    if (!stats) {
        return (
            <div style={{ color: 'grey', fontStyle: 'italic' }}>
                No Gag Data Available
            </div>
        );
    }

    return (
        <div
        style = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <ul>
                {GAG_TRACKS.map(
                    (track, index) => {
                        const organic = stats.organic === track[0];
                        return (
                            <li key={index}
                            style = {{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            }}>
                                {
                                    <div
                                    style = {{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        backgroundColor: `rgba(${track[1]}, .5)`,
                                        borderRadius: "10px",
                                        padding: '0.1rem .4rem',
                                        width: '100%',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                                        margin: '.1rem'                            
                                    }}>
                                        <div
                                        style = {{
                                            width: "4rem",
                                            color: organic ? "blue" : "black",
                                            fontWeight: organic ? "bolder" : "bold",
                                            fontSize: ".85rem" 
                                        }}>
                                            {track[0].toUpperCase()}
                                        </div>
                                        {[...Array(7)].map((_, tier) => {
                                            const unlockedGag = stats[track[0] as keyof ToonStatsType] > tier;

                                            return(
                                                <div style = {{
                                                    backgroundColor: !unlockedGag ? `rgba(100,100,200, .4)` : organic ? `rgba(20,240,255, 1)` : `rgba(0,173,255, .8)`,
                                                    borderRadius: "10px",
                                                    width: "40px",
                                                    height: "30px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginLeft: ".3rem"
                                                }}>
                                                    <img
                                                    src = {`https://toonhq.org/static/assets/gags/ttr/${trackAndTierToGagData[track[0]][tier + 1].asset}`}
                                                    style = {{
                                                        width: "70%",
                                                        height: "85%",
                                                        contain: "content",

                                                        filter: unlockedGag ? "brightness(100%)" : "brightness(50%)",
                                                        opacity: unlockedGag ? 1 : .3
                                                    }}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </li>)
                    }
                )}
            </ul>

        </div>
    )
}