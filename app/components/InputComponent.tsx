import React from "react";

export const InputComponent: React.FC<InputComponentProps> = ({
  type,
  name,
  placeholder,
  Icon,
}) => {
  return (
    <div className=" border  border-gray-500 p-3 rounded-md w-full] flex items-center gap-2">
      <div className="mr-2 text-gray-600">{Icon}</div>
      <input
        className="w-full outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export const DropDownComponent: React.FC<InputComponentProps> = ({
  options,
  onChange,
}) => {
  return (
    <div className="   border-gray-500 py-2 px-1 rounded-md w-full flex  gap-3 items-center ">
      <p>Login as:</p>
      {options!.map((option, index) => (
        <div key={index} className="flex  gap-3">
          {" "}
          <input
            value={option.value}
            name={option.name}
            onChange={onChange}
            type="radio"
          />
          <p>{option.label}</p>
        </div>
      ))}
    </div>
  );
};

type InputComponentProps = {
  Icon?: React.ReactNode;
  placeholder?: string;
  type: string;
  label: string;
  name?: string;
  options?: Array<{ name: string; value: string; label: string }>;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
