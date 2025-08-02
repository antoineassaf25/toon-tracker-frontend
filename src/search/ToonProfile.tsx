import { useState, useEffect } from "react"
import { districtIdToName } from "../library/districts"
import { locationIdToName } from "../library/locations"
import OfflineDot from '../assets/offline-dot.png'
import OnlineDot from '../assets/online-dot.png'
import { Gags } from "./Gags"
import { Suits } from "./Suits"

interface ToonProfileProp {
    toonid : number
}

export interface ToonStatsType {
    toon_id: number,
    name: string,
    species: number,
    laff: number,
    photo: string,
    toonup: number,
    trap: number,
    lure: number,
    sound: number,
    throw: number,
    squirt: number,
    drop: number,
    organic: string,
    sellbot: string,
    cashbot: string,
    lawbot: string,
    bossbot: string
}

interface ToonStats {
    toonStatsType: ToonStatsType
}

interface LocationData {
    district: number,
    location: number,
    time: string
}

interface HistoryData extends ToonStats {
    created_at: string
}

interface Payload {
    toonStats: ToonStats,
    locationData: LocationData,
    userHistoryData: HistoryData[]
}

const VITE_TOON_INFO_ENDPOINT = import.meta.env.VITE_TOON_INFO_ENDPOINT;

export function ToonProfile({ toonid } : ToonProfileProp) {
    const [ results, setResults ] = useState<Payload | null>(null);


    useEffect(() => {
        const fetchToonInfo = async function() {
            const response = await fetch(`${VITE_TOON_INFO_ENDPOINT}/${toonid}`);
            const responseJSON : Payload = (await response.json()).payload;
    
            setResults(responseJSON);
        }

        fetchToonInfo();
    }, [])

    const isOnline = ((new Date()).getTime() - new Date(results?.locationData.time ?? "").getTime()) / (1000 * 60 * 60) < 1.5
    return (
        <div
        style = {{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            backgroundColor: "rgba(255, 255, 255, .3)",
            borderRadius: "20px",
            padding: '1.5rem 1.5rem',
        }}>
            <div
            style = {{

            }}>
                <div
                style = {{
                    backgroundColor: "rgba(255, 255, 255, .8)",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    background:"white",
                    padding: '0.75rem 1.5rem',
                    width: '100%',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                }}>
                    <div style = {{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "24px"
                        }}>
                        {results?.toonStats.toonStatsType.name}
                    </div>
                    <div style=
                    {{
                        backgroundColor: "rgba(205,205,205, 1)",
                        color: "black",
                        width: "60%",
                        margin: '0 auto',
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "20px",
                        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                        padding: ".15rem .5rem",
                        fontStyle: "italic",
                        fontSize: ".8rem",
                        marginTop: '.2rem',
                        zIndex: 2
                    }}
                    >

                        {
                            isOnline
                            ? 'Online'
                            : 'Offline'
                        }
                        <img src={
                            isOnline
                            ? `${OnlineDot}`
                            : `${OfflineDot}`
                        }
                            style={{
                            width: '15px',
                            height: '15px',
                            objectFit: 'contain',
                            }}/>
                    </div>
                    <img src={`${results?.toonStats.toonStatsType.photo}`}
                    style = {{
                        width: "128px",
                        height: "128px",
                        marginTop: '-1.5rem'
                    }}/>
                    <div style = {{color: "black"}}>
                        {results?.toonStats.toonStatsType.laff} Laff Points
                    </div>
                </div>
                
                <div
                style = {{
                    backgroundColor: "rgba(255, 255, 255, .8)",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    background:"white",
                    padding: '0.75rem 1.5rem',
                    width: 'fit-content',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                    marginTop: '1rem'
                }}>
                    <div>
                        <div style = {{color: "black"}}>
                        <strong>Last Seen:</strong> {new Date(results?.locationData.time ?? "").toLocaleString()}
                        </div>
                        <div style = {{color: "black"}}>
                        <strong>District:</strong>  {districtIdToName[results?.locationData.district ?? 0]}
                        </div>
                        <div style = {{color: "black"}}>
                        <strong>Location:</strong>  {locationIdToName[results?.locationData.location ?? 0]}
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{
                backgroundColor: "rgba(255, 255, 255, .8)",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: '0.75rem .2rem',
                width: '100%',
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                marginLeft: '1rem'
            }}>
                <Gags stats={results?.toonStats.toonStatsType}/>
                <Suits stats={results?.toonStats.toonStatsType}/>
            </div>
        </div>
    )
}

