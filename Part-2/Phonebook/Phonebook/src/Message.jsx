import "./style.css";

const Message = ({ message, error }) => {
    return <div className={`message${error ? " error" : ""}`}>{message}</div>;
};

export default Message;
