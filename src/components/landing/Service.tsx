const Service = () => {
  return (
    <div id="service" className="bg-white">
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Our Accounting Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tax Preparation Service */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v9M12 15v4m4-4h-8"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Tax Preparation
            </h2>
            <p className="text-white">
              We provide professional tax preparation services to ensure you
              comply with all tax laws while minimizing your tax liability.
            </p>
          </div>

          {/* Financial Planning */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5h16M4 10h16M4 15h16M4 20h16"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Financial Planning
            </h2>
            <p className="text-white">
              We help you manage your financial goals with personalized
              strategies to grow your wealth and secure your future.
            </p>
          </div>

          {/* Bookkeeping */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12M8 11h12M8 15h12M8 19h12"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-2">
              Bookkeeping
            </h2>
            <p className="text-white">
              Keep track of your business transactions and finances with
              accurate bookkeeping services to ensure proper financial
              reporting.
            </p>
          </div>

          {/* Payroll Services */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2h6V3h-6zM3 7h18M3 17h18M3 12h18"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white  mb-2">
              Payroll Service
            </h2>
            <p className="text-white">
              Efficient payroll processing with compliance to tax regulations,
              ensuring employees are paid on time with accurate deductions.
            </p>
          </div>

          {/* Auditing Services */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l3 3-3 3m0 0H3m6 0h6m4 4v4h-4m0 0H9"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white  mb-2">Auditing</h2>
            <p className="text-white">
              Our auditing services help businesses ensure their financial
              statements are accurate and compliant with the latest regulations.
            </p>
          </div>

          {/* Consultancy Services */}
          <div className="bg-buttonColor rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v9M12 15v4m4-4h-8"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white  mb-2">
              Consultancy
            </h2>
            <p className="text-white">
              Our expert consultants provide tailored advice on financial
              management, tax planning, and more, ensuring your business
              thrives.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-center sm:flex-row items-center gap-4 mt-8"
          data-aos="fade-up"
        >
          <a
            href="#team"
            className="cursor-pointer  rounded-full bg-buttonColor hover:bg-buttonHover text-white py-3 px-8"
          >
            Rencontrez notre équipe
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border-2 py-3 px-8 border-buttonColor text-buttonColor hover:bg-buttonHover hover:text-white transition duration-300 ease-in-out"
          >
            Contactez-nous
          </a>
        </div>
      </main>
    </div>
  );
};

export default Service;
