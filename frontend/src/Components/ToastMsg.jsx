import "./ToastMsg.css";

function ToastMsg({
  message,
  type,
  visible,
}) {
  if (!visible) return null;

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
}

export default ToastMsg;