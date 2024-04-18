import { useParams } from "react-router-dom"

export default function Profil(){

    const {slug} = useParams()
    return(
        <div>
            Profil ! - {slug}
        </div>
    )
 }