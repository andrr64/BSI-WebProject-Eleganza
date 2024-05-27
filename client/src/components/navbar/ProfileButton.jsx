import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { ROUTE } from "../../AppRoute"

export default function ProfileButton() {
    return (    
    <div>
        <Link to={ROUTE.user.profile}>
            <FontAwesomeIcon icon={faUser} color="white" size="lg"/>
        </Link>
    </div>
    )
}
