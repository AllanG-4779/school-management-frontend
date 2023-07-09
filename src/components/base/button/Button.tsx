type button = {
  color?: string;
  size?: string;
  text: string;
};

const Button = (props: button) => {
  return (
    <button
      className={`transition-all opacity-4 ${props.color} p-2 text-white rounded-md w-full`}
    >
      {props.text}
    </button>
  );
};

export default Button;
