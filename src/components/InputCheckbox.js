function InputCheckbox({label,id}){
    return(
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="نعم" id={id}/>
            <label class="input-group-text" htmlFor={id}>
                {label}
            </label>
        </div>
    );
}
export default InputCheckbox;