function Input(props){
    return(
        <div className="d-flex align-items-center mb-3 ">
            <label className="input-group-text" htmlFor={props.id} > {props.label} </label>
            <input type={props.type}  defaultValue={props.value} onChange={(e)=>props.handleChange(e)} className="form-control" id={props.id} />
        </div>
    );
}
export default Input;