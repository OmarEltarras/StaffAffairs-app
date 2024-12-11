function InputSelect({label,id}){
    return(
        <div class="input-group mb-3 align-items-center">
                <label class="input-group-text" htmlFor={id}>{label}</label>
                <select class="form-select" id={id}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
        </div>
    );
}
export default InputSelect;