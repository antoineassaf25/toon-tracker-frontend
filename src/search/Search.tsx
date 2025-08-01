import { Layout } from "../welcome/Layout";
import { SearchBar } from "./SearchBar";

const API_TOON_IDS_ENDPOINT = import.meta.env.VITE_TOON_IDS_ENDPOINT;

export default function Search() {

    async function updateToons(prefix: string) {

        if (prefix.length <= 2) {
            return
        }

        console.log(prefix);
        console.log(API_TOON_IDS_ENDPOINT);
        const response = await fetch(`${API_TOON_IDS_ENDPOINT}?q=${prefix}&exact=0`);
        const responseJSON = await response.json();
        console.log(responseJSON)
    }

    return (
        <Layout>
            <SearchBar updateToons={(prefix: string) => updateToons(prefix)}/>
        </Layout>
    );
}