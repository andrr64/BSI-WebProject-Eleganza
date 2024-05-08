import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { ROUTE } from "../../AppRoute"

export default function Profile() {
    return (    
    <div className="transition hover:translate-y-1 ease-in-out">
        <Link to={ROUTE.user.signup}>
        <FontAwesomeIcon icon={faUser} color="white" size="lg"/>
        </Link>
    </div>
    )
}
