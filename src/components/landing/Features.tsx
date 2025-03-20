import imageOne from "../../assets/1.jpeg";
import imageTwo from "../../assets/2.jpeg";
import imageThree from "../../assets/acount.jpeg";
const Features = () => {
  return (
    <div>
      <div id="features" className=" bg-third pt-16 pb-32 space-y-24">
        {/* <!-- Section 1 : Gestion financière automatisée --> */}

        <div className="lg:mx-auto  grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 items-center lg:gap-24 gap-4 lg:px-8">
          <div className="mx-auto max-w-xl  px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 grid justify-center md:justify-start  gap-5">
            <div className="flex w-full justify-center md:justify-start">
              <span className="flex h-12 w-12 items-center justify-center  rounded-xl bg-[#71a3bf]">
                {/* <!-- Icône de calculatrice --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 3v2H4v14h16V5h-4V3h-4v2h-4V3z"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-6 flex flex-col items-center md:items-start justify-center md:justify-start ">
              <h2 className="text-3xl font-bold tracking-tight text-center md:text-start  text-white">
                Automated Financial Management
              </h2>
              <p className="mt-4 text-lg text-center md:text-start text-gray-300">
                Simplify your accounting tasks with automated tools for expense
                management, invoicing, and financial reporting, allowing you to
                save time and reduce human errors.
              </p>
              <div className="mt-6">
                <a
                  className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-third"
                  href="#contact"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2 lg:px-0">
              <img
                loading="lazy"
                width="647"
                height="486"
                className="w-full h-full object-cover  rounded-xl shadow-2xl "
                src={imageOne}
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 items-center lg:gap-24 flex flex-col gap-5 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2 flex flex-col ">
            <div className="flex justify-center md:justify-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#71a3bf]">
                {/* <!-- Icône de calcul --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9h18M3 15h18M9 3v18"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-6 flex flex-col items-center  md:items-start justify-center md:justify-start">
              <h2 className="text-3xl font-bold tracking-tight text-center md:text-start text-white">
                Tax Optimization
              </h2>
              <p className="mt-4 text-lg text-center md:text-start text-gray-300">
                Our team of expert accountants helps businesses and individuals
                navigate tax complexities. From identifying deductions and
                credits to ensuring compliance with the latest tax laws, we
                provide personalized strategies to minimize tax burdens. Let us
                handle tax filing, reporting, and optimization while you focus
                on growth.
              </p>
              <div className="mt-6">
                <a
                  className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-third"
                  href="#contact"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" lg:m-0 px-2 lg:h-full lg:px-0">
              <img
                alt="Optimisation fiscale"
                loading="lazy"
                width="647"
                height="486"
                className="w-full rounded-xl  h-full object-cover shadow-xl "
                src={imageThree}
              />
            </div>
          </div>
        </div>

        {/* <!-- Section 3 : Suivi de la rentabilité et des investissements --> */}
        <div className="">
          <div className="lg:mx-auto flex flex-col gap-4 lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 grid gap-4">
              <div className="flex justify-center md:justify-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#71a3bf]">
                  {/* <!-- Icône de graphique --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h4v10H3zM10 6h4v14h-4zM17 14h4v6h-4z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6 flex flex-col items-center md:items-start w-full justify-center md:justify-start ">
                <h2 className="text-3xl font-bold tracking-tight text-center md:text-start text-white">
                  Tax Optimization
                </h2>
                <p className="mt-4 text-lg flex justify-center w-full text-center md:text-start md:justify-start text-gray-300">
                  Our team of expert accountants helps businesses and
                  individuals navigate tax complexities. From identifying
                  deductions and credits to ensuring compliance with the latest
                  tax laws, we provide personalized strategies to minimize tax
                  burdens. Let us handle tax filing, reporting, and optimization
                  while you focus on growth.
                </p>
                <div className="mt-6">
                  <a
                    className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-pink-700"
                    href="#contact"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full h-full px-2 lg:m-0  lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl  object-cover h-full shadow-2xl "
                  src={imageTwo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
