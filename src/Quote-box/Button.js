function Button(props) {
  return (
    <a
      href={props.href}
      id={props.id}
      className={props.className}
      target={props.target ? "_blank" : null}
      rel={props.target ? "noopener noreferrer" : null}
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
}

export default Button;
