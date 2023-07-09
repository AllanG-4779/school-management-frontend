import { ChangeEventHandler, ReactNode } from "react";
import {
  FaCircleExclamation,
  FaCircleInfo,
  FaCircleCheck,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import { useToggle } from "../../utils/customhooks";
import Select from "react-select";

type inputProps = {
  type: INPUT_TYPES | "text" | "hidden";
  Icon?: ReactNode;
};
type feedbackProps = {
  text: string;
  visible: false;
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
    <div className="border border-gray-400  flex flex-row items-center">
      <input
        className={` flex-1 p-2 outline-none text-md text-gray-700  rounded-sm`}
        type={props.type}
      />
      <div className=" mr-2">{props.Icon}</div>
    </div>
  );
};
export const PasswordInput = () => {
  const [see, toggle] = useToggle();
  return (
    <div className="mt-12 border border-gray-400  flex flex-row items-center">
      <input
        className={` flex-1 p-2 outline-none text-md text-gray-700  rounded-sm`}
        type={see ? "text" : "password"}
      />
      <div className=" mr-2 text-gray-600">
        {!see ? <FaEye onClick={toggle} /> : <FaEyeSlash onClick={toggle} />}
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
  return <Select onChange={props.onChangeHandler} options={props.data} />;
};
