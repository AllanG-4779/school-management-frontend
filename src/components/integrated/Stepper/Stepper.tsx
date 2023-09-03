type StepperProps = {
  steps: string[];
  currentStep: number;
};
const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className=" bg-white w-full max-h-full p-3 flex shadow-sm">
      {/* The progress status bar*/}
      <div className="bg-grey-500 p-2 w-full"></div>
      {/* The components goes here */}
      {/* The buttons */}
    </div>
  );
};

export default Stepper;
