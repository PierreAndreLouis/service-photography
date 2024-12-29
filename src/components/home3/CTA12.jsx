// import { Button } from 'flowbite-react'
import React from "react";
import { Link } from "react-router-dom";

export default function CTA12() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.findbanquet.com/blog/wp-content/uploads/2024/06/photographers.jpg)",
        backgroundPosition: "right",
      }}
      className="object-right   relative py-72 bg-fixed bg-cover bg-center"
    >
      <div
        className="absolute inset-0 z-[2]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.70)" }}
      ></div>

      <div
        className="flex flex-col px-2 
           justify-center items-center absolute inset-0 z-[3]"
      >
        <h1 className="text-white text-4xl text-center font-bold lg:text-5xl max-w-4xl">
          Avez vous besoin d'une seance{" "}
          <span className="text-sky-400"> Photographie </span>?
        </h1>
        <p className="text-center text-gray-300 mt-10 lg:text-md max-w-3xl">
          nous offrons des solutions sur mesure qui répondent à vos besoins
          spécifiques, avec un soutien constant pour garantir votre succès. Nous
          faisons en sorte que chaque stratégie soit efficace et adaptée à vos
          objectifs.{" "}
        </p>
        <Link
          to="/reservation"
          className="border border-sky-400 text-sky-400 rounded-md mt-12 p-3 px-8 font-bold text-md"
        >
          Prendre Rendez-vous
        </Link>
      </div>
    </div>
  );
}
