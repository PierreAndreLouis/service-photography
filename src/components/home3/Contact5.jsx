import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import emailjs from 'emailjs-com';




const Contact5 = () => {
  const [loading, setLoading] = useState(false);


  function sendMail(e) {
    e.preventDefault(); 


    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,

      message: document.getElementById("message").value,
    };

    if (Object.values(params).some(value => !value)) {
      alert("Veuillez remplir tous les champs avant d'envoyer votre message.");
      return;
    }

    setLoading(true); // Active le mode chargement


    const serviceID = import.meta.env.VITE_CONTACT_SERVICE_ID;
    const templateID = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_CONTACT_PUBLIC_KEY;


    emailjs.init(publicKey); // Clé publique

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        // Réinitialise les champs du formulaire
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Votre message a été envoyé avec succès !");
      })
      .catch(err => {
        console.log(err);
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      })
      .finally(() => {
        setLoading(false); // Désactive le mode chargement après l'envoi
      });
  }


  return (
    <div className="bg-white mx-auto p-0 md:p-5 lg:p-16 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 mx-auto max-w-6xl md:grid-cols-12 border dark:border-gray-700">
        <div className="bg-sky-950 dark:bg-gray-800 md:col-span-4 p-5 md:p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-sky-500">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="flex items-center gap-4 mt-5 justify-center">
            <FaLocationDot className='text-3xl text-sky-500' />
            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
          </div>
          <div className="flex items-center mt-5 gap-4">
            <FaPhoneSquare className='text-2xl text-sky-500' />
            <span className="text-sm">+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5 gap-4">
            <FaHeadphones className='text-2xl text-sky-500' />
            <span className="text-sm">24/7</span>
          </div>
        </div>
        <form className="md:col-span-8 p-5 md:p-10 bg-sky-50 dark:bg-gray-800">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="first-name">
                Your Name
              </label>
              <input
                className="appearance-none block w-full  dark:bg-gray-700 text-gray-700
                 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3
                 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800"
                id="name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input className="appearance-none block w-full  dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-400"
                id="email" type="email" placeholder="********@*****.**" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id='message'
                rows="10"
                className="appearance-none block w-full  dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" />
            </div>
            <div className="flex justify-between w-full px-3">
              <label className="block text-gray-500 dark:text-gray-400 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>

              <button
                className="shadow bg-sky-500 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                disabled={loading}
                onClick={(e) => { sendMail(e) }}
                type="submit"
              >
                {loading ? 'Envoi en cours...' : 'Rendez-vous'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact5;
