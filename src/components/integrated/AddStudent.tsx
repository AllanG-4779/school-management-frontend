import Stepper from "./Stepper/Stepper";

const AddStudent = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-gray-500">Add New Student</p>
      <Stepper steps={["Management"]} currentStep={0} />
    </div>
  );
};
export default AddStudent;
