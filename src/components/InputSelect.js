function InputSelect(props){
    return(
        <div className="input-group mb-3 align-items-center">
                <label className="input-group-text" htmlFor={props.id}>{props.label}</label>
                <select className="form-select" id={props.id} onChange={(e)=>props.handleChange(e)} defaultValue={props.value}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
        </div>
    );
}
export default InputSelect;