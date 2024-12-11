import { Link } from "react-router";

function FormEdit({href}){
    return(
        <div className="text-center mb-5">
            <input type="submit" className="btn btn-primary d-inline ms-3" value="تعديل"/>
            <Link className="btn btn-dark d-inline py-2" to={href}>عودة</Link> 
        </div>
    );
}
export default FormEdit;