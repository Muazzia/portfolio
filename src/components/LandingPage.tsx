// import mainImage from "../assets/image.avif";

const LandingPage = () => {
  return (
    <section className="main flex flex-col md:flex-row justify-center md:justify-start items-center mt-5">
      {/* md:w-1/2 */}
      <div className="left md:w-[80%]">
        <section className="flex justify-center md:justify-start flex-col items-center md:items-start text-maingrey text-center md:text-left">
          <h2 className="font-bold text-[3rem] md:text-[5rem]">Muaz Zia</h2>
          <p className="font-bold md:text-2xl">Full Stack Developer</p>
          {/* -[200px] md:w-[325px] lg:w-[350px] */}
          <section className="my-10 text-sm md:text-xl w-[100%]">
            <p className="text-center md:text-left">
              Software Developer From pakistan with good experience in building
              complex applications in cutting edge technologies
            </p>
          </section>
        </section>
      </div>
      <div className="right">
        <section>
          <div className="flex justify-center items-center">
            {/* <img src={mainImage} alt="" className="w-40 md:w-[280px]" /> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default LandingPage;
