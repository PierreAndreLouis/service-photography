import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits, MdPhotoCamera } from "react-icons/md";
import { HiCamera } from "react-icons/hi";
import { MdPhotoLibrary } from "react-icons/md";
import { FaEdit, FaPortrait } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

// import { MdOutlineProductionQuantityLimits } from "react-icons/md";



const Service7 = () => {
    const Services = [
        {
            name: "Portrait Photography",
            description:
                "Capturer des portraits uniques et mémorables pour mettre en valeur ta personnalité.",
            image: "https://archphoto.studio/wp-content/uploads/2023/05/Christina-Matovu-089-1024px.jpg",
            icon: <FaPortrait className="text-4xl" />,
            bgColor: "bg-blue-500/50",
        },
        {
            name: "Event Photography",
            description:
                "Immortaliser les moments forts de tes événements avec une approche professionnelle.",
            image: "https://www.jesvenues.com/images/services/corporate-photography/corporate-event-photography-in-hyderabad-1.jpg",
            icon: <LuPartyPopper className="text-4xl" />,
            bgColor: "bg-lime-500/50",
        },
        {
            name: "Product Photography",
            description:
                "Mettre en valeur tes produits avec des photos de haute qualité pour attirer l'attention.",
            image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_large/v1/attachments/project_item/attachment/c81eab03d1022353e28970a6ea14afad-1715505744056/1.jpg",
            icon: <MdOutlineProductionQuantityLimits className="text-4xl" />,
            bgColor: "bg-fuchsia-500/50",
        },
        {
            name: "Photo Editing",
            description:
                "Offrir des services de retouche photo pour sublimer tes images et les rendre parfaites.",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/180900105857305.5f82c522c731f.jpg",
            icon: <FaEdit className="text-4xl" />,
            bgColor: "bg-orange-500/50",
        },
    ];

    return (
        <div className="dark:bg-slate-900 bg-white px-4 md:px-8 lg:px-10 pt-20 relative">



            <section className="max-w-6xl mx-auto bg-secondary dark:text-white py-10">
                <div className="container flex flex-col items-center mx-auto">
                    <h1 className="inline-block text-sky-600 text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
                        Voici ce que nous vous proposons
                    </h1>
                    <p className="text-slate-500 dark:text-slate-100 text-center md:w-[50%] mx-auto">
                        Découvre nos services de photographie professionnels adaptés à tous tes besoins. Des portraits aux événements, en passant par la retouche, nous avons tout ce qu'il te faut.
                    </p>
                </div>
                <div>
                    <section id="services" className="my-10 container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {Services.map(({ name, description, image, icon, bgColor }) => (
                                <div
                                    key={name}
                                    className={` ${bgColor}  overflow-hidden h-64 flex flex-col justify-end relative rounded-xl text-white bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
                                >
                                    <div id="containt" className=" relative z-30 p-3 md:p-16 backdrop-blur-xs space-y-3 rounded-xl">
                                        <p className="text-sky-400 ">{icon}</p>
                                        <h1 className="text-2xl font-bold">{name}</h1>
                                        <p>{description}</p>
                                    </div>
                                    <div id="filter" className="bg-slate-950/70 absolute inset-0 z-20"></div>
                                    <img className="absolute inset-0 h-full w-full object-cover z-10"
                                        src={image} alt={name} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Service7;
