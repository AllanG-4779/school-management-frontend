import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { Feedback, FormText } from "../base/FormComponents";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../../utils/validation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
    validationSchema: ContactValidationSchema,
  });
  return (
    <div className={`flex flex-row w-8/12 m-auto mt-5 `}>
      <div
        className={`flex flex-col gap-4 text-white bg-purple-600 p-6 rounded-md w-4/12`}
      >
        <h1 className={`text-2xl text-center`}>Our Contacts</h1>
        <div className="flex items-start gap-10">
          <div className="bg-purple-500 p-2 rounded-full mt-2">
            <FaLocationDot />
          </div>
          <div>
            <h1 className={`text-xl font-bold`}>Address</h1>
            <div className="text-gray-50 text-sm">
              <p>New Likoni Road</p>
              <p>P.O Box 17837 - 00500</p>
              <p>Nairobi, Kenya.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="bg-purple-500 p-2 rounded-full ">
            <FaPhone />
          </div>
          <div className="flex flex-col  ">
            <h1 className="font-bold text-xl">Phone(s)</h1>
            <p className="text-white text-sm ">+254-722505904</p>
            <p className="text-sm">+254-733588068</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="bg-purple-500 p-2 rounded-full ">
            <GoMail />
          </div>
          <div className="flex flex-col  ">
            <h1 className="font-bold text-xl">Email</h1>
            <p className="text-white text-sm ">info@mercymukuru.co.ke</p>
          </div>
        </div>
      </div>
      <div
        className={` rounded-md p-6 w-7/12 flex flex-col shadow-xl shadow-gray-300`}
      >
        <h1 className={`text-2xl text-gray-600 text-center`}>
          Submit Your Query
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={`flex flex-col gap-2 mb-5`}>
            <label className="">First Name</label>
            <div>
              <FormText
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                name="firstName"
                id="firstName"
                isInvalid={
                  formik.touched.firstName! &&
                  typeof formik.errors.firstName !== "undefined"
                }
              />
              <Feedback
                text={formik.errors.firstName!}
                visible={
                  formik.touched.firstName! &&
                  typeof formik.errors.firstName !== "undefined"
                }
                success={false}
              />
            </div>
          </div>
          <div className={`flex flex-col gap-2 mb-5`}>
            <label className="">Last Name</label>
            <div>
              <FormText
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                id="lastName"
                name="lastName"
                isInvalid={
                  formik.touched.lastName! &&
                  typeof formik.errors.lastName !== "undefined"
                }
              />
              <Feedback
                text={formik.errors.lastName!}
                visible={
                  formik.touched.lastName! &&
                  typeof formik.errors.lastName !== "undefined"
                }
                success={false}
              />
            </div>
          </div>
          <div className={`flex flex-col gap-2 mb-5`}>
            <label className="">Email</label>
            <div>
              <FormText
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                id="email"
                isInvalid={
                  formik.touched.email! &&
                  typeof formik.errors.email !== "undefined"
                }
              />
              <Feedback
                text={formik.errors.email!}
                visible={
                  formik.touched.email! &&
                  typeof formik.errors.email !== "undefined"
                }
                success={false}
              />
            </div>
          </div>
          <div className={`flex flex-col gap-2 mb-5`}>
            <label className="">Mesage</label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.message}
              name="message"
              cols={20}
              onBlur={formik.handleBlur}
              id="message"
              rows={4}
              className={`border  ${
                formik.touched.message! &&
                typeof formik.errors.message !== "undefined"
                  ? "border-red-500"
                  : " border-gray-400"
              } outline-none w-full p-3`}
            ></textarea>
            <Feedback
              text={formik.errors.message!}
              visible={
                formik.touched.message! &&
                typeof formik.errors.message !== "undefined"
              }
              success={false}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="p-2 bg-purple-600 rounded-md w-full text-white hover:bg-purple-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
