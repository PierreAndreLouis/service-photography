import React from 'react';

const features = [
  {
    title: 'Paiements en ligne ou sur place',
    description: ' Permettez à vos clients de payer un acompte ou le prix total lors de la réservation ou accepter le paiement sur place via la fonction POS dans SimplyBook.me',
    img_icon: 'https://simplybook.me/build/images/icons/features/static/icon_payment.790dae82.svg',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rocket"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>




    ),
  },
  {
    title: "Aucun conflit d'horaire",
    description: 'Vous pouvez activer la synchronisation bidirectionnelle des calendriers entre vos calendriers professionnels et personnels Google et Outlook. En activant cette fonction pour tous les membres de votre personnel, vous évitez de doubler votre temps de travail.',
    img_icon: 'https://simplybook.me/build/images/icons/features/static/icon_reschedule-booking.bbc3a56e.svg',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bookmark-plus"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
        <line x1="12" x2="12" y1="7" y2="13"></line>
        <line x1="15" x2="9" y1="10" y2="10"></line>
      </svg>


    ),
  },
  {
    title: 'Rappels automatiques',
    description: 'Réduisez les non-présentations en envoyant des notifications automatiques par SMS et par e-mail à vos clients avant le début de l"événement.',
    img_icon: 'https://simplybook.me/build/images/icons/features/static/icon_reminders.4f32dd3f.svg',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-video"
      >
        <path d="m22 8-6 4 6 4V8Z"></path>
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
      </svg>
    ),
  },
  // {
  //   title: 'Advanced Quiz Generation',
  //   description: 'Take your knowledge testing to the next level with advanced quiz generation, providing more customization options for your quizzes.',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="lucide lucide-file-question"
  //     >
  //       <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
  //       <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
  //       <path d="M12 17h.01"></path>
  //     </svg>
  //   ),
  // },
];

const Service4 = () => {
  return (
    <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 py-10">
      <div className="containerss p-6 px-3 mx-auto space-y-12 lg:px-8 lg:max-w-7xl ">
        <div>
          <h2 className="text-3xl text-sky-600 dark:text-sky-600 font-bold text-center sm:text-3xl">
            Alors, pourquoi nous choisir ?</h2>
          <p className="max-w-3xl text-gray-600 dark:text-gray-200 mx-auto mt-4 text-md text-center">
            Découvrez les avantages que nous offrons pour maximiser vos résultats.          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 ">
          <div>
            <div className="mt-4 space-y-6 lg:space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row border border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-800 lg:dark:bg-transparent py-4 px-2 lg:border-none lg:bg-transparent lg:p-0 ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-w-20 rounded-md  ">
                      {/* {feature.icon} */}
                      <img className='w-[100%] ' src={feature.img_icon} alt='' />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-2xl font-bold dark:text-gray-200 text-gray-700">{feature.title}</h4>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              
              src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/photography-projects-1001.jpg?w=1500&ssl=1"

              className="lg:h-96 object-cover mx-auto rounded-lg shadow-lg dark:bg-sky-500"
              alt="Learning features"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4;
