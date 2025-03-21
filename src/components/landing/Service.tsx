const Service = () => {
  return (
    <div id="service" className="bg-white">
      <main className="container mx-auto px-6 py-8 min-h-screen h-full flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corporate Income Tax / Incorporation */}
          <div className="bg-buttonColor flex flex-col justify-center items-center md:items-start md:justify-start rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v9M12 15v4m4-4h-8"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Corporate Income Tax / Incorporation
            </h2>
            <p className="text-white text-center md:text-start">
              Expert assistance with corporate income tax filings and business
              incorporation services tailored to your needs.
            </p>
          </div>

          {/* Personal / Family / Self-Employment / U.S. Tax */}
          <div className="bg-buttonColor rounded-xl flex flex-col justify-center items-center md:items-start md:justify-start shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5h16M4 10h16M4 15h16M4 20h16"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Personal / Family / Self-Employment / U.S. Tax
            </h2>
            <p className="text-white text-center md:text-start">
              Comprehensive tax preparation services for individuals, families,
              self-employed professionals, and U.S. tax filings.
            </p>
          </div>

          {/* Non-Residents / International Students */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform flex flex-col justify-center items-center md:items-start md:justify-start transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12M8 11h12M8 15h12M8 19h12"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Non-Residents / International Students
            </h2>
            <p className="text-white text-center md:text-start">
              Specialized tax services for non-residents and international
              students, including income tax refunds.
            </p>
          </div>

          {/* Rental Income / GST/QST Registration / Returns */}
          <div className="bg-buttonColor rounded-xl shadow-lg flex flex-col justify-center items-center md:items-start md:justify-start p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2h6V3h-6zM3 7h18M3 17h18M3 12h18"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Rental Income / GST/QST Registration / Returns
            </h2>
            <p className="text-white text-center md:text-start">
              Assistance with rental income reporting, GST/QST registration, and
              filing returns.
            </p>
          </div>

          {/* Payroll Accounting / Business Plans */}
          <div className="bg-buttonColor rounded-xl flex flex-col justify-center items-center md:items-start md:justify-start shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l3 3-3 3m0 0H3m6 0h6m4 4v4h-4m0 0H9"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Payroll Accounting / Business Plans
            </h2>
            <p className="text-white text-center md:text-start">
              Efficient payroll accounting services and expert guidance in
              creating business plans for success.
            </p>
          </div>

          {/* Bookkeeping / Consultation */}
          <div className="bg-buttonColor rounded-xl shadow-lg flex flex-col justify-center items-center md:items-start md:justify-start p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v9M12 15v4m4-4h-8"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Bookkeeping / Consultation
            </h2>
            <p className="text-white text-center md:text-start">
              Accurate bookkeeping services and personalized consultations to
              help your business thrive.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-center sm:flex-row items-center gap-4 mt-8"
          data-aos="fade-up"
        >
          <a
            href="#team"
            className="cursor-pointer rounded-full bg-buttonColor hover:bg-buttonHover text-white py-3 px-8"
          >
            Meet the team
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border-2 py-3 px-8 border-buttonColor text-buttonColor hover:bg-buttonHover hover:text-white transition duration-300 ease-in-out"
          >
            Contact - Us
          </a>
        </div>
      </main>
    </div>
  );
};

export default Service;
