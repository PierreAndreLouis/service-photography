import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({ grid }) {
    return (
        <div className='mx-4 pb-10'>
            <div className={`md:grid ${grid ? 'md:grid-cols-2 my-20' : ""} bg-sky-50 gap-6 dark:bg-gray-800 pt-16 pb-16 px-4 max-w-6xl mx-auto rounded-md overflow-hidden shadow-md`}>
                <div className="relative">
                    <img
                        className="w-full max-h-[25rem] h-full object-cover rounded-md"
                        src="https://static.vecteezy.com/system/resources/previews/022/334/268/large_2x/camera-worldgraphy-day-the-beauty-of-an-image-photo.jpeg"
                        alt="Produit phare"
                    />
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                        EN SOLDE
                    </div>
                </div>
                <div className="pt-6">
                    <h3 className="text-xl md:text-2xl text-gray-800 dark:text-sky-500 font-bold mb-4">
                        Découvrez notre produit le plus populaire !
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Ce produit est très apprécié pour sa qualité et ses caractéristiques uniques. Ne manquez pas l'occasion de l'ajouter à votre collection !
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Conçu pour répondre à vos besoins spécifiques, il combine performance et design moderne. C'est le choix parfait pour vous simplifier la vie.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Profitez de cette offre exceptionnelle et faites-vous plaisir avec ce produit incontournable. Vous ne le regretterez pas !
                    </p>

                    <div className="flex items-center justify-between mt-6">
                        <span className="font-bold text-lg text-gray-800 dark:text-white">$19.99</span>
                        <Link
                            to="/product"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Acheter maintenant
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
