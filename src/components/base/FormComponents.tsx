import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaCircleInfo,
  FaCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";
import Select from "react-select";
import { useToggle } from "../../utils/customhooks";

type inputProps = {
  id?: string;
  name?: string;
  type?: INPUT_TYPES | "text" | "hidden";
  onBlur?: FocusEventHandler<any>;
  Icon?: ReactNode;
  value: string | number;
  isInvalid?: boolean;
  onChange: ChangeEventHandler<any>;
};
type feedbackProps = {
  text: string;
  visible: boolean;
  success?: boolean;
};
type checkBoxProps = {
  count: number;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  labels: string[];
};
type SelectProps = {
  data: { value: string; label: string }[];

  onChangeHandler: (option: any) => void;
};
export const FormText = (props: inputProps) => {
  return (
    <div
      className={`border border-gray-400 ${
        props.isInvalid ? "border-red-500" : ""
      }  flex flex-row items-center rounded-sm`}
    >
      <input
        className={` flex-1 p-2 outline-none text-md text-gray-700  rounded-sm`}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      <div className=" mr-2">{props.Icon}</div>
    </div>
  );
};
export const PasswordInput = (props: inputProps) => {
  const [see, toggle] = useToggle();
  return (
    <div
      className={`border border-gray-400 relative  ${
        props.isInvalid ? "border-red-500" : ""
      } flex flex-row items-center`}
    >
      <input
        className={` flex-1 p-2  outline-none text-md text-gray-700  rounded-sm`}
        type={see ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        onBlur={props.onBlur}
      />
      <div className=" mr-2 text-gray-600">
        {!see ? (
          <FaEye
            onClick={toggle}
            className={`${props.isInvalid ? "text-red-500" : ""}`}
          />
        ) : (
          <FaEyeSlash
            className={`${props.isInvalid ? "text-red-500" : ""}`}
            onClick={toggle}
          />
        )}
      </div>
    </div>
  );
};
export const Feedback = (props: feedbackProps) => {
  return (
    <>
      <div
        className={` flex-row gap-1 items-center ${
          props.visible ? "flex" : "hidden"
        }`}
      >
        <div>
          {typeof props.success === "undefined" ? (
            <FaCircleInfo className={`text-purple-600 text-xs`} />
          ) : !props.success ? (
            <FaCircleExclamation className={`text-red-600 text-xs`} />
          ) : (
            <FaCircleCheck className={`text-green-700 text-xs`} />
          )}
        </div>
        <div
          className={`${
            typeof props.success === "undefined"
              ? "text-purple-600"
              : !props.success
              ? `text-red-500`
              : `text-green-700`
          } text-xs`}
        >
          {props.text}
        </div>
      </div>
    </>
  );
};
export const CheckBox = (props: checkBoxProps) => {
  return (
    <>
      <div className="flex flex-row gap-10 mt-2">
        {[...Array(props.count).keys()].map((each) => (
          <div className=" flex flex-row gap-2 items-center">
            <input
              key={each}
              type="checkbox"
              className="text-2xl"
              value={props.value}
              onChange={props.onChangeHandler}
            />
            <label>{props.labels[each]}</label>
          </div>
        ))}
      </div>
    </>
  );
};
export const SelectBox = (props: SelectProps) => {
  return (
    <Select
      onChange={props.onChangeHandler}
      options={props.data}
      defaultValue={props.data[0]}
    />
  );
};
