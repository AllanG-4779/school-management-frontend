type button = {
  color: string;
  size: string;
  text: string;
};

const Button = (props: button) => {
  return (
    <button className={`${props.color} ${props.size}`}>{props.text}</button>
  );
};

export default Button;
