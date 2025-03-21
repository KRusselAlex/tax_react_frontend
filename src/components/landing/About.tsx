const About = () => {
  return (
    <div>
      <section
        id="about"
        className="pt-10 overflow-hidden min-h-screen h-full bg-secondaryColor md:pt-0 sm:pt-16 2xl:pt-16"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Leontine Toumno, CPA, MBA, CRMA
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                I specialize in accounting services and income tax preparation.
                My expertise includes corporate income tax/incorporation,
                personal/family, self-employment, U.S. tax, non-residents,
                international students (income tax refunds), rental income,
                GST/QST registration/returns, IFTA, and retirement planning.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                Additionally, I offer payroll accounting, business plans,
                bookkeeping, and consultation services.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Feel free to reach out to me at{" "}
                <a
                  href="mailto:leontine.toumno@hec.ca"
                  title="Email Leontine Toumno"
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  leontine.toumno@hec.ca
                </a>{" "}
                or call me at{" "}
                <a
                  href="tel:5142178361"
                  title="Call Leontine Toumno"
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  514-217-8361
                </a>
                .
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                Address: 601 Capuchon Way, Ottawa, ON K4A 0W2
              </p>
            </div>
            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
