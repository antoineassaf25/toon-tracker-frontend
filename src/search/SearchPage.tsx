import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../welcome/Layout";
import AutoCompleteDropdown from "./AutoCompleteDropdown";
import SearchBar from "./SearchBar";

const API_TOON_IDS_ENDPOINT = import.meta.env.VITE_TOON_IDS_ENDPOINT;

export interface PrefixToon {
    toon_id: number;
    name: string;
    laff: number;
    photo: string;
}

export function SearchPage() {

    const [ results, setResults ] = useState<PrefixToon[]>([]);
    const navigate = useNavigate();
    
    async function updateToons(prefix: string) {

        if (prefix.length <= 2) {
            setResults([]);
            return;
        }

        const response = await fetch(`${API_TOON_IDS_ENDPOINT}?q=${prefix}&exact=0`);
        const responseJSON : PrefixToon[] = (await response.json()).payload;

        setResults(responseJSON);
    }

    function navigateToProfile(id = 0) {
        if (id === 0) {
            if (results.length > 0) {
                navigate(`/search/${results[0].toon_id}`);
            } else {
                return;
            }
        } else {
            navigate(`/search/${id}`)
        }
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
                <SearchBar updateToons={updateToons} navigateToProfile={navigateToProfile}/>

                <div
                style={{
                    position: "absolute",
                    top: "110%",
                    left: "-10%",
                    width: "120%"
                }}>
                    <AutoCompleteDropdown toonDataJSON={results} navigateToProfile={navigateToProfile}/>    
                </div>
                
            </div>
        </Layout>
    );
}