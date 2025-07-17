import { useParams } from "react-router-dom"

export default function() {
    const params = useParams<{profileId : string}>();
    return (
        <div>
            Profile {params.profileId}
        </div>
    )
}