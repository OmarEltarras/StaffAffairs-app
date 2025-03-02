import { Link } from "react-router";

function FormCreate(props){
    return(
        <div className="mb-3 text-center">
                <Link to="create">
                    <button type="button" className="btn btn-success">{props.title}</button>
                </Link>
            </div>
    );
}
export default FormCreate;