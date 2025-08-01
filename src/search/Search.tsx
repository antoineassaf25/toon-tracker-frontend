import { Layout } from "../welcome/Layout";
import { SearchBar } from "./SearchBar";

export default function Search() {

    function updateToons(prefix: string) {

    }

    return (
        <Layout>
            <SearchBar onClick={(prefix: string) => updateToons(prefix)}/>
        </Layout>
    );
}