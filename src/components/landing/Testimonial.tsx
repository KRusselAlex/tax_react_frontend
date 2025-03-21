const Testimonial = () => {
  return (
    <div id="features" className="bg-third">
      <section className="max-w-6xl mx-auto w-full min-h-screen h-full flex flex-col justify-center px-10 py-10">
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
                Expert Financial Guidance
              </p>
              <p className="font-medium text-white">
                The accounting services provided have been instrumental in
                helping us manage our finances effectively. Their expertise is
                unmatched.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="John Doe"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">John Doe</p>
              <p className="text-sm font-medium text-slate-100/70">
                Accountant at FinancePro Solutions
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Strategic Business Consulting
              </p>
              <p className="font-medium text-white">
                Their consulting services have helped us streamline our
                operations and achieve our business goals efficiently.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Jane Smith"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Jane Smith
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                Consultant at BizGrowth Advisors
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Personalized Tax Solutions
              </p>
              <p className="font-medium text-white">
                Their personalized tax strategies have saved us a significant
                amount of money while ensuring compliance with regulations.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/60.jpg"
                alt="Robert Brown"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Robert Brown
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                CFO at Global Enterprises
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Comprehensive Business Insights
              </p>
              <p className="font-medium text-white">
                Their insights into market trends and business strategies have
                been invaluable for our growth and success.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Emily Davis"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-white">
                Emily Davis
              </p>
              <p className="text-sm font-medium text-slate-100/70">
                Business Consultant at Insight Partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
