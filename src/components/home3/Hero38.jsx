// import { Button } from 'flowbite-react'
import { MdDateRange } from "react-icons/md";

import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero38() {
  return (
    <div className="min-h-screen bg-[#393536] relative overflow-hidden  mx-auto">
      <img
        className="hidden lg:block absolute right-0 bottom-0 top-0 h-full object-cover object-right"
        src="https://github.com/LouisPierre-Andre/images/blob/main/Photographer/watch.jpg?raw=true"
        alt=""
      />
      <img
        className="absolute bottom-0 lg:hidden "
        src="https://github.com/LouisPierre-Andre/images/blob/main/Photographer/watch2.jpg?raw=true"
        alt=""
      />
      <img
        className="absolute dark:hidden bottom-0 lg:-bottom-16"
        src="https://github.com/LouisPierre-Andre/images/blob/main/Photographer/hero_asset-01.png?raw=true"
        alt=""
      />

      <div className=" relative flex flex-col justify-center items-center h-screen   pb-40 lg:pb-10  lg:items-start max-w-6xl mx-auto  px-4 md:px-10">
        <h2 className="font-cursive--- text-white text-4xl md:text-4xl md:max-w-lg max-w-md text-center lg:text-start">
          Système de réservation en ligne pour
        </h2>
        <h1 className="font-cursive2--- font-bold pt-2 text-5xl text-sky-500  md:text-7xl  lg:text-start ">
          Photographes
        </h1>
        <Link
          to="/reservation"
          className="flex bg-sky-500 py-3 px-6 text-white rounded-3xl  mt-9 mx-auto lg:mx-0"
        >
          <MdDateRange className="mr-3 text-lg" />
          Prendre Rendez-vous
        </Link>

        <p className=" lg:px-0 text-white text-xl mt-4 font-cursive2 bg-[#393536] lg:bg-transparent py-1 px-5 rounded-full">
          Aucune carte de crédit nécessaire
        </p>
      </div>
    </div>
  );
}
