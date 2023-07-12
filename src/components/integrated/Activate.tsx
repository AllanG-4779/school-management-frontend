import { Link } from "react-router-dom";
import { FormText } from "../base/FormComponents";
import { AuthHeader } from "./AuthHeader";
import { useFormik } from "formik";

const Activate = () => {
  const formik = useFormik({
    initialValues: { username: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <>
      <div className=" w-4/12 mx-auto mt-10 flex flex-col p-2 gap-5">
        <AuthHeader title="Activate Account" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Staff No. / ADM No.</label>
            <FormText
              value={formik.values.username}
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
export default Activate;
