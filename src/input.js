const Input = (props) => {
    return (
        <div>
            <label>{props.label}:
                <input type={props.type} name={props.name} value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                    style={{ width: "100%", height: "30px", fontSize: "large", marginBottom: "10px" }}
                />
            </label>
            <br />
        </div>
    )

}

export default Input;