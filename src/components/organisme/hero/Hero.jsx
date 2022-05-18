import PartHeader from "../part/Header2";

function Hero() {
  const handleMove = () => {
    window.location.href = "/survey-preview";
  };
  return (
    <div className="h-screen" data-theme="telkom">
      <div className="flex">
        <main className="w-full relative">
          <div className="absolute top-0 h-full w-full bg-primary/60" />
          <div className="absolute top-0 w-full">
            <div className="container flex-initial w-11/12 mx-auto">
              <PartHeader />
              <article>
                <h1 className="mt-32 ml-44 font-bold text-white w-1/3 text-4xl">
                  Create an Awesome Quiz in Minutes
                </h1>
                <h6 className="mt-6 ml-44 text-white w-1/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </h6>
                <button
                  type="button"
                  onClick={handleMove}
                  className="btn btn-gradient pt-4 pb-5 pl-14 pr-14 ml-44 mt-12 text-white border-none rounded-md"
                >
                  demo Quiz, NOW!
                </button>
              </article>
            </div>
          </div>
          <img
            src="/src/assets/img/imagee.jpg"
            alt=""
            className="object-cover w-full"
          />
        </main>
      </div>
    </div>
  );
}

export default Hero;
