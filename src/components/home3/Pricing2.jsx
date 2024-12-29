import React from 'react';
import { Link } from 'react-router-dom';

const Pricing2 = () => {
  const plans = [
    {
      title: 'Starter',
      description: 'Idéal pour les séances photo personnelles et petits projets.',
      price: '$99',
      duration: '/séance',
      features: [
        '1 heure de séance photo',
        '15 photos retouchées',
        'Galerie en ligne privée',
        'Livraison en 5 jours',
        'Conseils de pose inclus'
      ]
    },
    {
      title: 'Professionnel',
      description: 'Parfait pour les événements ou les projets commerciaux.',
      price: '$299',
      duration: '/séance',
      features: [
        '3 heures de séance photo',
        '50 photos retouchées',
        'Galerie en ligne privée',
        'Livraison en 3 jours',
        'Photos de groupe incluses'
      ]
    },
    {
      title: 'Entreprise',
      description: 'Pour des besoins photo à grande échelle.',
      price: '$899',
      duration: '/événement',
      features: [
        'Couverture journée complète',
        '100+ photos retouchées',
        'Galerie en ligne privée',
        'Livraison express en 48h',
        'Utilisation commerciaux'
      ]
    }
  ];

  return (
    <section className="bg-sky-50 dark:bg-gray-900">
      <div className="max-w-6xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-sky-600 dark:text-white">
            Des Tarifs Adaptés à Tous Tes Besoins
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-md max-w-2xl mx-auto dark:text-gray-400">
            Que ce soit pour des photos personnelles, un événement spécial, ou des besoins professionnels, nos offres sont conçues pour capturer chaque instant précieux.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{plan.description}</p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl text-sky-900 dark:text-sky-400 font-extrabold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.duration}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/reservation" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">
                Réserver maintenant
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
