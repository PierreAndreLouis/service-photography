import React, { useContext, useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { DataContext } from "../../context/DataContext";
import { MdLocationPin, MdDateRange } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import Navigation_bar from "./Navigation_bar";
import PC_header from "./PC_header";
import DateTimePicker from "./DateTimePicker";

function Historique({ setShowListOption }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const {
    mergedData,
    isLoading,
    currentVehicule,
    updateCurrentVehicule,
    loadingHistoriqueFilter,
  } = useContext(DataContext);

  const dataFusionee = mergedData ? Object.values(mergedData) : [];

  useEffect(() => {
    if (selectedCar) {
      updateCurrentVehicule(selectedCar);
    }
  }, [selectedCar, updateCurrentVehicule]);

  // Fonctions pour formater le temps et la date
  function formatTimestampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="p-4 flex flex-col gap-4 mt-4 mb-32 px-4 sm:px-12 md:px-20 lg:px-40">
      <Navigation_bar />
      <PC_header />
      {showDatePicker && (
        <DateTimePicker setShowDatePicker={setShowDatePicker} />
      )}

      {loadingHistoriqueFilter && (
        <div className="fixed z-10 inset-0 bg-gray-200/50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="border-blue-500 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-100/0" />
          </div>
        </div>
      )}

      <div className="mb-6 md:mt-16">
        <div className="flex justify-center items-center gap-3 w-full">
          <select
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="" disabled>
              Choisissez une voiture
            </option>
            {dataFusionee.map((vehicule, index) => (
              <option key={index} value={vehicule.description}>
                {vehicule.description}
              </option>
            ))}
          </select>

          <div
            onClick={() => setShowDatePicker(true)}
            className="flex gap-3 min-w-[9.7rem] shadow-md border border-orange-100 rounded-xl p-2 cursor-pointer bg-orange-50"
          >
            <p className="text-md text-gray-500">Filtre par Date</p>
            <MdDateRange className="text-2xl text-orange-600" />
          </div>
        </div>

        <div className="py-7 md:pb-0 md:pt-7 md:w-full text-center">
          <h2 className="text-xl md:text-4xl mb-2 md:mb-4 text-orange-600">
            Historique...
          </h2>
        </div>
      </div>

      {isLoading ? (
        <p>Chargement des données...</p>
      ) : dataFusionee.length > 0 ? (
        currentVehicule?.vehiculeDetails?.map((vehicle, index) => (
          <div
            key={index}
            className={`${
              vehicle.speedKPH >= 1 ? "bg-green-50" : "bg-orange-50/50"
            } shadow-md rounded-lg p-3`}
          >
            <div className="flex relative gap-3 md:py-6">
              <div className="flex flex-col items-center md:min-w-32">
                <div className="w-12 sm:w-14 md:w-20 mb-2">
                  <img
                    src={
                      vehicle.speedKPH >= 1
                        ? "img/cars/green_vitess.png"
                        : "img/cars/vitess.png"
                    }
                    alt=""
                  />
                </div>

                <h2
                  className={`${
                    vehicle.speedKPH >= 1 ? "text-green-500" : "text-orange-500"
                  } sm:text-lg md:text-xl font-semibold whitespace-nowrap`}
                >
                  {parseFloat(vehicle.speedKPH || 0).toFixed(0)}
                </h2>
                <h2
                  className={`${
                    vehicle.speedKPH >= 1 ? "text-green-500" : "text-orange-500"
                  } text-[.8rem] sm:text-lg md:text-xl font-semibold whitespace-nowrap`}
                >
                  SpeedKPH
                </h2>
              </div>

              <div>
                <h2 className="text-gray-800 font-semibold text-md md:text-xl mb-2">
                  {currentVehicule?.description}
                </h2>

                <div className="flex mb-2 gap-4 text-gray-400 text-md">
                  <div className="flex gap-3 items-center">
                    <FaRegCalendarAlt className="text-gray-500/80" />
                    <h3 className="text-sm sm:text-sm md:text-md">
                      {formatTimestampToDate(vehicle.timestamp)}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoMdTime className="text-gray-500/80 text-xl" />
                    <h3 className="text-sm sm:text-sm md:text-md">
                      {formatTimestampToTime(vehicle.timestamp)}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2">
                  <FaCar className="text-gray-500/80" />
                  <span
                    className={`${
                      vehicle.speedKPH >= 1
                        ? "bg-green-200/60 text-green-700"
                        : "bg-red-200/50 text-red-700"
                    } pb-[.2rem] px-2 py-0 text-sm rounded-md`}
                  >
                    {vehicle.speedKPH >= 1 ? "active" : "inactive"}
                  </span>
                </div>

                <div className="text-md sm:flex text-gray-500 mt-2 md:text-lg">
                  <MdLocationPin className="text-xl text-gray-500/80 -translate-x-1 mt-1" />
                  {vehicle.address || "Adresse non disponible"}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucune donnée disponible</p>
      )}
    </div>
  );
}

export default Historique;