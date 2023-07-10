import {Link} from "react-router-dom";

type button = {
  color?: string;
  size?: string;
  text: string;
  to: string
};

const Button = (props: button) => {
  return (
    <Link
        to={props.to}
      className={`transition-all opacity-4 ${props.color} p-2 text-white rounded-md w-full`}
    >
      {props.text}
    </Link>
  );
};

export default Button;
