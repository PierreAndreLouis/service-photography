import React, { useState } from 'react';

const testimonialsData = [
    {
        image: 'https://img.freepik.com/photos-gratuite/homme-afro-americain-portant-chapeau-elegant_23-2148634061.jpg?t=st=1723570792~exp=1723574392~hmac=4645de614fcdee6caf2d24acba11ff5de08a9b0a01f79e1e788360814cd3229f&w=740',
        title: 'Une productivité boostée grâce à leur créativité',
        text: '“Les photos capturées par l’équipe ont transformé notre image de marque, nous inspirant à aller encore plus loin. Un vrai levier de productivité !”',
        name: 'Mia Brown',
        position: 'Marketing Manager chez Stech',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/portrait-etudiant-peau-sombre-attrayant-portant-chemise-carreaux-expression-confiante-joyeuse-debout-mur-du-tableau_273609-5907.jpg?t=st=1723570902~exp=1723574502~hmac=620933b68073e7c7dc2b07e9ad85112aba81d945628a7ec52bd175f0d882009f&w=900',
        title: 'Un service exceptionnel et un œil pour le détail',
        text: '“L’équipe a fait preuve d’un talent remarquable et d’une grande attention aux détails, livrant des résultats qui ont dépassé toutes nos attentes.”',
        name: 'John Doe',
        position: 'Senior Developer chez Techie',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/plan-horizontal-etudiant-satisfait-utilise-nouvelle-application-cool-son-telephone-portable-porte-bloc-notes-pour-ecrire-notes-porte-lunettes-foulard-soie-pull-tricot-isole-mur-bleu_273609-26316.jpg?t=st=1723570924~exp=1723574524~hmac=4ec6c0f28c5b9b3cad367099b249132e3958864fca359250388e5a521a4e12ea&w=900',
        title: 'Des visuels qui inspirent et motivent',
        text: '“Leur approche unique et leurs visuels inspirants ont donné un coup de pouce à notre motivation et productivité. Nous ne pourrions pas être plus satisfaits !”',
        name: 'Sophia Lee',
        position: 'Creative Director chez InspireCo',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/portrait-employe-bureau-masculin-confiant-serieux-lunettes-chemise-formelle-peau-foncee-pose-dans-armoire-spacieuse_273609-3441.jpg?t=st=1723570974~exp=1723574574~hmac=26537581f0c0b7f3ce73ad30b34071e3a5a4ce649ef21cb1cb5d59e22a78b4a6&w=900',
        title: 'Des clichés qui parlent d’eux-mêmes',
        text: '“Chaque photo racontait une histoire unique. Leur travail a vraiment capturé l’essence de ce que nous voulions transmettre.”',
        name: 'Lucas Martin',
        position: 'Project Manager chez Innovatech',
    },
];


export default function Testimonial4() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const { image, title, text, name, position } = testimonialsData[currentIndex];

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 py-10">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img
                            className="object-cover object-center lg:w-1/2 lg:mx-6 w-32 h-32 rounded-full md:w-full md:h-96 mx-auto md:rounded-lg lg:h-[36rem]"
                            src={image}
                            alt="testimonial"
                            style={{
                                opacity: 1,
                                transition: 'opacity 0.5s ease-in-out',
                            }}
                        />
                        <div className="md:mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-sky-500 leading-3">“</p>
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                {title}
                            </h1>
                            <p className="max-w-lg mt-3 md:mt-6 text-gray-500 dark:text-gray-400">
                                {text}
                            </p>
                            <h3 className="mt-6 text-lg font-medium text-sky-500">{name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{position}</p>
                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <button
                                    onClick={handlePrevClick}
                                    title="left arrow"
                                    className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextClick}
                                    title="right arrow"
                                    className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
