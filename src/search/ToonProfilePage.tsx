import { useParams } from "react-router-dom"
import { Layout } from "../welcome/Layout";
import { ToonProfile } from "./ToonProfile";

export default function ToonProfilePage() {
    const params = useParams<{toonid : string}>();
    return (
        <Layout>
            <ToonProfile toonid={Number(params.toonid)}/>
        </Layout>
    
    );
}