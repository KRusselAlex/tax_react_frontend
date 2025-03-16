const Testimonial = () => {
  return (
    <div id="features" className="bg-third">
      <section className="max-w-6xl mx-auto w-full min-h-screen h-full flex flex-col justify-center  px-10 py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
            Here’s what our <span className="text-[#45B3BA]">clients</span> have
            to say
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Discover how our service can benefit you
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Efficient Customer Support
              </p>
              <p className="font-medium text-white">
                Our service's customer support team is incredibly responsive and
                helpful. They went above and beyond to assist me in resolving my
                issue.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="Emily Smith"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Emily Smith
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                Marketing Manager at ABC Company
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Excellent Product Features
              </p>
              <p className="font-medium text-white">
                The features offered by our service are exceptional. They have
                significantly improved our workflow and efficiency.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Michael Johnson"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Michael Johnson
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                CEO at XYZ Corporation
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Seamless Onboarding Process
              </p>
              <p className="font-medium text-white">
                Integrating our systems with this service was smooth and
                hassle-free. The support team guided us through each step of the
                process.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt="Sarah Brown"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Sarah Brown
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                CTO at XYZ Corporation
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Reliable Service Availability
              </p>
              <p className="font-medium text-white">
                Our service consistently maintains a high uptime, ensuring our
                operations run smoothly without interruption.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/71.jpg"
                alt="James White"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                James White
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                COO at XYZ Corporation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
