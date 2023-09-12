import "../App.css";
export default function GenButton(props) {
    const buttonStyle = {
        backgroundColor: props.backgroundColor || 'black'
    }
  return (
    <div className="gen--btn" style={buttonStyle}>
      <a href="">{props.label}</a>
    </div>
  );
}
