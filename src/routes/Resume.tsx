const Resume = () => {
  const fontendData = [
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/html_sx3o4c.png",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      alt: "html",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464822/kenjimmy.me/css_llfioq.png",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      alt: "css",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464819/kenjimmy.me/tailwindcss_xvxlaw.png",
      href: "https:/tailwindcss.com/",
      alt: "tailwind",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/javascript_wpr45g.png",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      alt: "js",
    },
  ];
  const backendData = [
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464816/kenjimmy.me/nodejs_ymmm0h.png",
      href: "https://nodejs.org/",
      alt: "node",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464819/kenjimmy.me/express_r3isbu.png",
      href: "https://expressjs.com/",
      alt: "express",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464817/kenjimmy.me/mongodb_xz90eg.png",
      href: "https://mongodb.com/",
      alt: "mongodb",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653462738/kenjimmy.me/kisspng-postgresql-logo-computer-software-database-open-source-vector-images-5aaa26e1ef9611.3514090315211005139814_ihme0t.png",
      href: "https://www.postgresql.org/",
      alt: "postgres",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464817/kenjimmy.me/mongoose_fmvf1q.png",
      href: "https://mongoosejs.com/",
      alt: "mongoose",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653463796/kenjimmy.me/kisspng-angularjs-typescript-javascript-vue-js-5b342607e4f524.2219525715301442639378_jgy8fc.png",
      href: "https://www.typescriptlang.org/",
      alt: "typescript",
    },
  ];
  const extraData = [
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/npm_c4lqfw.png",
      href: "https://www.npmjs.com/",
      alt: "npm",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/git_fmjpe4.png",
      href: "https://git-scm.com/",
      alt: "git",
    },
    {
      img: "zhttps://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/github_cctzbu.png",
      href: "https://github.com/",
      alt: "github",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/heroku_oaffec.png",
      href: "https://heroku.com/",
      alt: "heroku",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464816/kenjimmy.me/puppeteer_ytymx8.png",
      href: "https://pptr.dev/",
      alt: "puppeterr",
    },
    {
      img: "https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464818/kenjimmy.me/postman_thyot5.png",
      href: "https://www.postman.com/",
      alt: "postman",
    },
  ];
  return (
    <div className="text-maingrey font-roboto">
      <h1 className="mt-6 text-2xl font-bold capitalize">Tech i use</h1>
      <div className="mt-4 w-32">
        <div className="w-2 h-2 rounded-full "></div>
      </div>
      <div className="mt-8">
        <div>
          <div className="mb-8 p-3 md:px-10 md:py-5 border-2">
            <h2 className="text-gray mb-10">
              <i>
                These include, but are not limited to, the technologies I use
                for building client-side applications
              </i>
            </h2>
            <div className="flex items-center space-x-10">
              {fontendData.map((d, i) => {
                return (
                  <a key={i} href={d.href} target="_blank" className="group">
                    <img
                      src={d.img}
                      alt={d.alt}
                      className="w-10 group-hover:scale-105 transition-all object-fill"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mb-8 p-3 md:px-10 md:py-5 border-2">
            <h2 className="text-gray mb-10">
              <i>
                These include, but are not limited to, the technologies I use
                for building fast and scalable backend applications
              </i>
            </h2>
            <div className="flex space-x-10 items-center">
              {backendData.map((d, i) => {
                return (
                  <a href={d.href} key={i} target="_blank" className="group">
                    <img
                      src={d.img}
                      alt={d.alt}
                      className="w-10 group-hover:scale-105 transition-all object-fill"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mb-8 p-3 md:px-10 md:py-5 border-2">
            <h2 className="text-gray mb-10">
              <i>Others...and more!</i>
            </h2>
            <div className="flex  items-center space-x-5">
              {extraData.map((d, i) => {
                return (
                  <a key={i} href={d.href} target="_blank" className="group">
                    <img
                      src={d.img}
                      alt={d.alt}
                      className="w-10 group-hover:scale-105 transition-all object-fill"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
