import stmics from "../../assets/hero.png";

const Intro = () => {
  return (
    <>
      <div className={`flex flex-row p-6 w-11/12 mx-auto mt-12 justify-between`}>
        <div className="text-section font-sans">
          <h1>Quality Education for the Vulnerable Communities</h1>
          <h1 className={`text-5xl  font-extrabold mt-5 text-gray-800`}>
            Grab an opportunity to fulfull your dream career{" "}
          </h1>
          <p className={`text-gray-500 mt-3`}>
            St Michaels Secondary school is duly accredited by the MOE of Kenya
            to provide Secondary Education within the 8-4-4 curriculum
          </p>
          <div className={`flex flex-row mt-5 w-full  gap-4`}>
            <button
              className={`bg-purple-600 text-white p-3 align-middle rounded-lg font-semibold`}
            >
              Join Us Today
            </button>
            <button
              className={`bg-white border transition-all  hover:bg-purple-600 hover:text-white hover:border-white border-gray-600  text-gray-800 p-3 align-middle rounded-lg font-semibold`}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className={` mt-[-90px]`}>
          <img src={stmics} />
        </div>
      </div>
    </>
  );
};

export default Intro;
