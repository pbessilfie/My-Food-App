/* eslint-disable react/prop-types */
import "../App.css";
export default function GenButton(props) {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || "black",
  };
  return (
    <div
      className="gen--btn"
      style={buttonStyle}
      onClick={props.handleClick}
    >
      <a href="">{props.label}</a>
    </div>
  );
}
