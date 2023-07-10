import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { Feedback, FormText } from "../base/FormComponents";
import Button from "../base/button/Button";
const ContactForm = () => {
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
        <div className={`flex flex-col gap-2 mb-5`}>
          <label className="">First Name</label>
          <div>
            <FormText type="text" />
            <Feedback text="This is info." visible={false} />
          </div>
        </div>
        <div className={`flex flex-col gap-2 mb-5`}>
          <label className="">First Name</label>
          <div>
            <FormText type="text" />
            <Feedback text="This is info." visible={false} />
          </div>
        </div>
        <div className={`flex flex-col gap-2 mb-5`}>
          <label className="">Email</label>
          <div>
            <FormText type="text" />
            <Feedback text="This is info." visible={false} />
          </div>
        </div>
        <div className={`flex flex-col gap-2 mb-5`}>
          <label className="">Mesage</label>
          <textarea
            cols={20}
            rows={4}
            className=" border border-gray-400 outline-none w-full p-3"
          ></textarea>
        </div>
        <div className="w-full">
          <Button text="Submit" color="bg-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
