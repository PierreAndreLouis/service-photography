import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

export default function Faq5() {
    const [active_id, setActive_id] = useState(1);

    const faqItems = [
        {
            id: 1,
            question: 'Quel est le délai pour obtenir votre premier article de blog ?',
            answer: 'Le délai pour préparer votre premier article de blog est de 2 à 3 semaines. Cela inclut la recherche approfondie et la création de votre stratégie de marketing de contenu mensuelle avant la rédaction de votre premier article.'
        },
        {
            id: 2,
            question: 'Comment puis-je suivre l\'avancement de ma commande ?',
            answer: 'Vous pouvez suivre l\'avancement de votre commande directement depuis votre espace client sur notre site web.'
        },
        {
            id: 3,
            question: 'Quels sont les moyens de paiement acceptés ?',
            answer: 'Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire.'
        },
        {
            id: 4,
            question: 'Quel est le délai pour obtenir votre premier article de blog ?',
            answer: 'Le délai pour préparer votre premier article de blog est de 2 à 3 semaines. Cela inclut la recherche approfondie et la création de votre stratégie de marketing de contenu mensuelle avant la rédaction de votre premier article.'
        },


        {
            id: 5,
            question: 'Quel est le délai pour obtenir votre premier article de blog ?',
            answer: 'Le délai pour préparer votre premier article de blog est de 2 à 3 semaines. Cela inclut la recherche approfondie et la création de votre stratégie de marketing de contenu mensuelle avant la rédaction de votre premier article.'
        },
        {
            id: 6,
            question: 'Comment puis-je suivre l\'avancement de ma commande ?',
            answer: 'Vous pouvez suivre l\'avancement de votre commande directement depuis votre espace client sur notre site web.'
        },
        {
            id: 7,
            question: 'Quels sont les moyens de paiement acceptés ?',
            answer: 'Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire.'
        },
        {
            id: 8,
            question: 'Quel est le délai pour obtenir votre premier article de blog ?',
            answer: 'Le délai pour préparer votre premier article de blog est de 2 à 3 semaines. Cela inclut la recherche approfondie et la création de votre stratégie de marketing de contenu mensuelle avant la rédaction de votre premier article.'
        },
    ];

    const toggleFAQ = (id) => {
        setActive_id(active_id === id ? null : id);
    };

    return (
        <div className='relative overflow-hidden min-h-screen bg-gray-100 pt-24 px-4 dark:bg-slate-900'>

            <div className="hidden md:block absolute inset-0 -left-40 ">
                <div className='w-[105rem] h-[35rem] bg-sky-300/10 dark:bg-sky-500/5 rotate-45'></div>
            </div>

            <div className='relative bg-gray-300'></div>
            <div className='relative max-w-6xl mx-auto'>
                <div className='flex flex-col items-center justify-center text-center pb-16'>
                    <h3 className='font-semibold text-xl dark:text-gray-300'>FAQ</h3>
                    <h1 className='font-semibold text-3xl text-sky-500'>Des questions ? regardez ici</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-6 justify-start items-start'>


                    <div className='bg-gray-400 rounded-lg overflow-hidden transition-all duration-300'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photographe faq' />
                    </div>


                    <div className='grid gap-3 '>
                        {faqItems.slice(0, 4).map((item, index) => (
                            <div key={item.id} className='grid bg-white rounded-xl dark:bg-slate-800'>
                                <h3
                                    onClick={() => toggleFAQ(item.id)}
                                    className={`bg-white rounded-xl leading-[1.5rem] transition-all duration-300 ${active_id === item.id ? 'sh-[100%] rounded-t-xl' : 'sh-[1rem] rounded-xl'} 
                                border border-gray-50 dark:border-gray-600 cursor-pointer bg-gray-100 flex gap-3 items-center p-3 text-lg font-semibold text-gray-700 dark:bg-slate-800 dark:text-gray-300`}
                                >
                                    <FaChevronDown className={`${active_id === item.id ? "rotate-180" : "rotate-0"} text-4xl xl:text-xl transition-all duration-300}`} />
                                    {item.question}
                                </h3>
                                <p
                                    className={`overflow-hidden dark:bg-slate-800 dark:text-gray-300 text-gray-600 bg-white rounded-b-xl transition-all duration-300 px-4 ${active_id === item.id ? 'h-[11rem] py-4' : ' h-[0rem] '}`}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>


        

             
                </div>

            </div>
        </div>
    );
}








