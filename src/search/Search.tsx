import { useState } from "react";
import { Layout } from "../welcome/Layout";
import AutoCompleteDropdown from "./AutoCompleteDropdown";
import SearchBar from "./SearchBar";

const API_TOON_IDS_ENDPOINT = import.meta.env.VITE_TOON_IDS_ENDPOINT;

export interface PrefixToon {
    id: number;
    name: string;
    laff: number;
    photo: string;
}

export function Search() {

    const [ results, setResults ] = useState<PrefixToon[]>([]);

    async function updateToons(prefix: string) {

        if (prefix.length <= 2) {
            setResults([]);
            return;
        }

        const response = await fetch(`${API_TOON_IDS_ENDPOINT}?q=${prefix}&exact=0`);
        const responseJSON : PrefixToon[] = (await response.json()).payload;

        setResults(responseJSON);
    }

    return (
        <Layout>
            <div
            style={{
                position: "absolute",
                top: "10%",
                display: "flex",
                flexDirection: "column",
                //justifyContent: "center",
                alignItems: "center",
                //marginTop: "4rem"
            }}
            >
                <SearchBar updateToons={updateToons}/>

                <div
                style={{
                    position: "absolute",
                    top: "110%",
                    left: "-10%",
                    width: "120%"
                }}>
                    <AutoCompleteDropdown toonDataJSON={results}/>    
                </div>
                
            </div>
        </Layout>
    );
}