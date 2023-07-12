import { useFormik } from "formik";
import {
  Feedback,
  FormText,
  PasswordInput,
  SelectBox,
} from "../base/FormComponents";
import { object, string } from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthHeader } from "./AuthHeader";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: object({
      username: string()
        .min(4, "Username must be 4 or more characters")
        .required("Username is required"),
      password: string()
        .min(5, "Password must be 5 or more characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const [_, setLoginAs] = useState<{
    label: string;
    value: string;
  } | null>(null);

  return (
    <div className={"w-5/12 mx-auto mt-10 "}>
      <AuthHeader title={"Account Login"} />
      <form
        onSubmit={formik.handleSubmit}
        className={"flex flex-col p-3 gap-3"}
      >
        <div className="flex flex-col">
          <p className="my-2">Logging In As</p>
          <SelectBox
            data={[
              { label: "Student", value: "student" },
              { label: "Staff", value: "staff" },
              { label: "Parent", value: "parent" },
            ]}
            onChangeHandler={(option) => setLoginAs(option)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <FormText
            name={"username"}
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            isInvalid={
              typeof formik.errors.username !== "undefined" &&
              formik.touched.username
            }
          />
          {formik.touched.username && formik.errors.username ? (
            <Feedback
              text={formik.errors.username}
              visible={true}
              success={false}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <PasswordInput
            name={"password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            isInvalid={
              typeof formik.errors.password !== "undefined" &&
              formik.touched.password
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <Feedback
              text={formik.errors.password}
              visible={true}
              success={false}
            />
          ) : null}
        </div>
        <button className="bg-purple-600 p-2 text-white  rounded-md hover:bg-purple-400 transition-all">
          Submit
        </button>
      </form>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-700 text-center">
          Don't have an account?{" "}
          <Link to={"/auth/activate"} className="text-purple-800 font-light">
            Activate Account
          </Link>
        </p>
        <p className="text-sm text-gray-700 text-center">
          Still having trouble?{" "}
          <Link to={"/homepage/contact"} className="text-purple-800 font-light">
            Talk to us
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
