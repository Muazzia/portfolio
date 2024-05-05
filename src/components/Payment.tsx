const Payment = () => {
  const data = [
    {
      description: "",
      url: "https://res.cloudinary.com/dbmxzpfxd/video/upload/v1714849209/portfolio%20videos/video_1_pqaa0y.mp4",
    },
    {
      description: "",
      url: "https://res.cloudinary.com/dbmxzpfxd/video/upload/v1714849209/portfolio%20videos/video_hvxjbf.mp4",
    },
  ];
  return (
    <section>
      <p className="font-sm capitalize text-2xl md:text-4xl font-bold leading-none text-maingrey">
        Wix Payment Integration
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-5 md:px-4 gap-y-4 md:gap-y-7 md:gap-x-4 ">
        {data.map((d, i) => {
          return (
            <div className="" key={i}>
              <video src={d.url} controls muted className="rounded-lg border-2">
                This video is not supported in at the moment
              </video>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Payment;
