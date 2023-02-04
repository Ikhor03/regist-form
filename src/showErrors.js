const ShowErrors = ({ errors }) => {
    return (
        <div style={{
            border: "1px solid tomato",
            color: "red",
            margin: "10px",
            fontSize: "15px",
            backgroundColor: "lightpink"
        }}>
            <ul>
                <li>{errors[0]}</li>
            </ul>
        </div>
    )
}

export default ShowErrors;