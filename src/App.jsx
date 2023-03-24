import Me from "./assets/me.jpeg";
import Logo from "./assets/logo.jpg";
import experience from "./assets/experience.js";

const App = () => {
  const experienceStr = JSON.stringify(experience, null, 4);
  return (
    <>
      <header className="p-3 pb-3 box-border shadow-md fixed bg-white flex justify-center w-full">
        <img src={Logo} className="w-2/4" />
      </header>
      <div className="h-screen">
        <section className="p-5">
          <div>
            <div className="mt-14 mb-5">
              <img
                src={Me}
                className="rounded-lg rounded-br-[40px] rounded-tl-[40px]"
              />
            </div>
            <p className="leading-tight mb-5 text-slate-600">
              Hi! 👋 my name is <b>Pablo Quezada</b>. I'm a Software Engineer
              from Chile with 12+ years of experience 🙄... I finally have some
              extra time, so a I've created this simple website to start sharing
              some things about me.
            </p>
            <div>
              <h2 className="text-center text-xl font-medium mb-2 uppercase">
                Where am I?
              </h2>
              <div>
                <ul className="flex gap-2 justify-between flex-wrap  text-slate-600">
                  <li>
                    <a target="_blank" href="https://dev.to/pqzada">
                      Dev.to
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/pqzada">
                      Github
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://pqzada.medium.com/">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/pqzada/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/pqzada">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-center text-xl mb-2 font-medium uppercase">
              Experience
            </h2>
            <pre className="w-full whitespace-pre-wrap font-sans">
              {experienceStr}
            </pre>
          </div>
        </section>
        <footer>pqzada.cl &copy; all rights reserved</footer>
      </div>
    </>
  );
};

export default App;
