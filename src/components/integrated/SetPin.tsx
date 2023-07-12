import { Link } from "react-router-dom";
import { PasswordInput } from "../base/FormComponents";
import { AuthHeader } from "./AuthHeader";
import { useFormik } from "formik";

const SetPin = () => {
  const formik = useFormik({
    initialValues: { password: "", confirm: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <>
      <div className=" w-4/12 mx-auto mt-10 flex flex-col p-2 gap-5">
        <AuthHeader title="Set Account Password" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
              Password
            </label>
            <PasswordInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
              Confirm Password
            </label>
            <PasswordInput
              value={formik.values.confirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <button className="p-2 bg-purple-600 rounded-sm hover:bg-purple-700 transition-all text-white">
            <Link to="/auth/validate">Submit</Link>
          </button>
        </form>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700 text-center">
            Have an account?{" "}
            <Link to={"/auth/login"} className="text-purple-800 font-light">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default SetPin;
