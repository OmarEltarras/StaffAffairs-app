import { Link } from "react-router";

function FormSubmit(props){
    return(
        <div className="text-center mb-5">
            <button type="submit" className="btn btn-success d-inline ms-3">اضافة</button>
            <Link className="btn btn-dark d-inline py-2" to={props.href}>عودة</Link> 
        </div>
    );
}
export default FormSubmit;