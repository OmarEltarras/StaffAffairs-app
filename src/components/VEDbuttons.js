import { Link, useNavigate } from "react-router";
import {Swal} from 'sweetalert2'
import { deleteSpecificData, getAllData } from "../api";
function VEDbuttons(props){
    let navigate = useNavigate()
    return(
        <>
            <Link className="me-2 btn btn-info">View</Link>
            <Link className="me-2 btn btn-primary" to={`${props.memberId}/edit`}>Edit</Link>
            <Link className="me-2 btn btn-danger" onClick={()=>{deleteSpecificData(props.url,props.memberId)
                navigate(props.routing)
            }}>Delete</Link>
        </>
    );
}
export default VEDbuttons;