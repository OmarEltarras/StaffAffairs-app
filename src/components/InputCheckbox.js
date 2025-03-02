function InputCheckbox(props){
    return(
        <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="نعم" id={props.id}/>
            <label className="input-group-text" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}
export default InputCheckbox;