import React from 'react'

const Testimonial = () => {
  return (
    <div id="features" className="bg-third">
      <section className="max-w-5xl mx-auto w-full px-10 py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
            Voici ce que nos <span className="text-[#45B3BA]">clients</span> ont
            à dire
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Découvrez comment notre service peut vous être bénéfique
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Support client efficace
              </p>
              <p className="font-medium text-white">
                L'équipe de support client de notre service est incroyablement
                réactive et serviable. Ils ont fait tout leur possible pour
                m'aider à résoudre mon problème.
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
                Responsable Marketing chez ABC Company
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Excellentes fonctionnalités du produit
              </p>
              <p className="font-medium text-white">
                Les fonctionnalités offertes par notre service sont
                exceptionnelles. Elles ont considérablement amélioré notre flux
                de travail et notre efficacité.
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
                PDG chez XYZ Corporation
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Processus d'intégration sans faille
              </p>
              <p className="font-medium text-white">
                L'intégration de nos systèmes avec notre service s'est déroulée
                de manière fluide et sans encombre. L'équipe de support nous a
                guidés à chaque étape du processus.
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
                CTO chez XYZ Corporation
              </p>
            </div>
          </div>
          <div className="border p-7 rounded-xl bg-[#71a3bf] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">
                Disponibilité de service fiable
              </p>
              <p className="font-medium text-white">
                Notre service maintient en permanence un taux de disponibilité
                élevé, assurant ainsi le bon déroulement de nos opérations sans
                interruption.
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
                COO chez XYZ Corporation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial
