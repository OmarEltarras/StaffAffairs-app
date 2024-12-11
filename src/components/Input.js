function Input({label,type,value,onChange,id}){
    return(
        <div className="d-flex align-items-center mb-3 ">
            <label className="input-group-text" htmlFor={id} > {label} </label>
            <input type={type}  value={value} onChange={onChange} className="form-control" id={id} />
        </div>
    );
}
export default Input;