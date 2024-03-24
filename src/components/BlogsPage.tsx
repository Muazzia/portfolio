import multer from "@/assets/multer.png";

const BlogsPage = () => {
  const data = [
    {
      heading: "How to Handle Images using Multer Memory Storage",
      logo: multer,
      href: "https://medium.com/@muazzia9/how-to-handle-image-files-in-nodejs-using-multer-memorystorage-6bda0f63da73",
    },
  ];
  return (
    <section className="my-5">
      <p className="font-sm capitalize text-2xl md:text-4xl font-bold leading-none text-maingrey">
        Blogs
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-5 md:px-4 gap-y-4 md:gap-y-7 md:gap-x-4  ">
        {data.map((d, i) => {
          return (
            <a key={i} href={d.href} target="_blank" className="group ">
              <div className="transition-all md:group-hover:scale-105  rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <img src={d.logo} alt="" className="" />
              </div>
              <div className="mt-3 ml-2">
                <h2 className="text-xl font-semibold">{d.heading}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default BlogsPage;
