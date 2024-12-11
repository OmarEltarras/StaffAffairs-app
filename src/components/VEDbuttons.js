import { Link } from "react-router";

function VEDbuttons(){
    return(
        <>
            <Link className="me-2">
                <button className="btn btn-info">View</button>
            </Link>
            <Link className="me-2" to=":mid/edit">
                <button className="btn btn-primary" >Edit</button>
            </Link>
            <Link className="me-2">
                <button className="btn btn-danger">Delete</button>
            </Link>
        </>
    );
}
export default VEDbuttons;