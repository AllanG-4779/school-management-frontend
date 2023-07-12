import { Link } from "react-router-dom";
import { AuthHeader } from "./AuthHeader";
import { useFormik } from "formik";

const OTPInput = () => {
  const formik = useFormik({
    initialValues: { username: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <>
      <div className=" w-4/12 mx-auto mt-10 flex flex-col p-2 gap-5">
        <AuthHeader title="Account Validation" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col  gap-2">
            <label htmlFor="">Enter 6-digit PIN sent to your mobile</label>
            <div className=" flex w-full  gap-3 items-center justify-between">
              {[1, 2, 3, 4, 5, 6].map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="\d{1}"
                  value={digit}
                  maxLength={1}
                  className="border border-slate-300 text-gray-600 h-16 w-full  text-lg  rounded-md text-center"
                />
              ))}
            </div>
          </div>
          <button className="p-2 bg-purple-600 rounded-sm hover:bg-purple-700 transition-all text-white">
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700 text-center">
            Didn't receive Text?{" "}
            <Link to={""} className="text-purple-800 font-light">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default OTPInput;
