import { Link } from "react-router";

function FormCreate({title}){
    return(
        <div className="mb-3 text-center">
                <Link to="create">
                    <button type="button" className="btn btn-success">{title}</button>
                </Link>
            </div>
    );
}
export default FormCreate;