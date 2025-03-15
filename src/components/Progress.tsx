const Progress = () => {
  return (
    <div>
      <div className="bg-[#f4f8fb] p-4 text-whiteflex-grow  min-h-screen flex justify-center items-center ">
        <div className="max-w-6xl mx-auto h-full px-6 md:px-12 xl:px-6 py-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-900"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-gray-900 md:text-4xl">
              Comment ça marche ?
            </h2>
            <p className="text-gray-900 ">
              Suivez ces étapes pour vous inscrire et utiliser notre site de
              gestion RH.
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y  overflow-hidden rounded-3xl border text-gray-600  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="group relative bg-[#4f87a8] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  1. Contact
                </h5>
                <p className="text-white">Aller a la section contact</p>
              </div>
            </div>
            <div className="group relative bg-[#3d6d8c] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  2. Validation
                </h5>
                <p className="text-white">
                  Confirmez votre adresse e-mail en cliquant sur le lien envoyé
                  dans votre boîte de réception.
                </p>
              </div>
            </div>
            <div className="group relative bg-[#325872] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  3. Configuration
                </h5>
                <p className="text-white">
                  Complétez votre profil, ajoutez vos employés et configurez les
                  paramètres RH selon vos besoins.
                </p>
              </div>
            </div>
            <div className="group relative bg-[#2d4b5f] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  4. Gestion RH
                </h5>
                <p className="text-white">
                  Commencez à gérer les présences, congés et performances de vos
                  employés efficacement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress
