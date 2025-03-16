const Features = () => {
  return (
    <div>
      <div
        id="features"
        className="relative overflow-hidden bg-third pt-16 pb-32 space-y-24"
      >
        {/* <!-- Section 1 : Gestion financière automatisée --> */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#71a3bf]">
                    {/* <!-- Icône de calculatrice --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 3v2H4v14h16V5h-4V3h-4v2h-4V3z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6 ">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Gestion financière automatisée
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Simplifiez vos tâches comptables avec des outils automatisés
                    pour la gestion des dépenses, des factures et des rapports
                    financiers, vous permettant de gagner du temps et de réduire
                    les erreurs humaines.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-pink-700"
                      href="/login"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/assets/images/gestion_financiere.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section 2 : Optimisation fiscale --> */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#71a3bf]">
                    {/* <!-- Icône de calcul --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 9h18M3 15h18M9 3v18"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Optimisation fiscale
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Profitez de conseils d'experts pour optimiser votre
                    fiscalité, réduire vos impôts et améliorer la rentabilité de
                    votre entreprise ou de vos finances personnelles.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-pink-700"
                      href="/login"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Optimisation fiscale"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/assets/images/optimisation_fiscale.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section 3 : Suivi de la rentabilité et des investissements --> */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#71a3bf]">
                    {/* <!-- Icône de graphique --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 10h4v10H3zM10 6h4v14h-4zM17 14h4v6h-4z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Suivi de la rentabilité et des investissements
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Suivez vos investissements et analysez la rentabilité de
                    votre entreprise avec des outils de suivi financier et de
                    reporting détaillé, vous permettant de prendre des décisions
                    éclairées.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bounce-effect inline-flex rounded-full bg-[#71a3bf] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#71a3bf] hover:bg-[#71a3bf] hover:ring-pink-700"
                      href="/login"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="646"
                  height="485"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/assets/images/rentabilite_investissements.jpg"
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
