const Frequently = () => {
  return (
    <div>
      <div className="bg-third min-h-screen h-full flex flex-col justify-normal md:justify-center items-center">
        <div className="w-full max-w-6xl px-2 mx-auto py-12">
          <h3 className="mt-3 text-xl font-bold text-white md:text-3xl text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid max-w-6xl mx-auto mt-6 divide-y divide-gray-200">
            <details className="group py-4">
              <summary className="flex items-center justify-between text-white font-medium list-none cursor-pointer">
                <span>
                  What services do you offer for personal income tax
                  preparation?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-400"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-white group-open:animate-fadeIn text-sm">
                We assist with personal, family, and self-employment income tax
                preparation, including U.S. tax filings, non-resident tax
                returns, and international student income tax refunds.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex items-center justify-between text-white font-medium list-none cursor-pointer">
                <span>
                  Do you provide corporate income tax and incorporation
                  services?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-400"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-white group-open:animate-fadeIn text-sm">
                Yes, we provide corporate income tax preparation and
                incorporation services to help businesses comply with tax
                regulations and establish their legal structure.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex items-center justify-between text-white font-medium list-none cursor-pointer">
                <span>
                  Can you assist with GST/QST registration and returns?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-400"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-white group-open:animate-fadeIn text-sm">
                Absolutely! We help businesses with GST/QST registration and
                filing returns to ensure compliance with tax authorities.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex items-center justify-between text-white font-medium list-none cursor-pointer">
                <span>
                  What bookkeeping and payroll accounting services do you offer?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-400"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-white group-open:animate-fadeIn text-sm">
                We provide comprehensive bookkeeping and payroll accounting
                services to help businesses manage their financial records and
                employee payments efficiently.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex items-center justify-between text-white font-medium list-none cursor-pointer">
                <span>
                  Do you offer consultations for business plans and retirement
                  planning?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-400"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-white group-open:animate-fadeIn text-sm">
                Yes, we offer consultations for creating business plans and
                retirement planning to help you achieve your financial goals.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
