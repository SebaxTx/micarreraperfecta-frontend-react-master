import React from "react";
import logo from "./../../assets/MiCarreraPerfectaLogo.jpg";
import { useNavigate } from "react-router";

const Modul = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/register");
  return (
    <div className="bg-[url('./assets/landing_bg.jpg')] bg-no-repeat bg-cover h-screen">
      <div className="absolute flex flex-col items-center w-[25vw] text-center right-10 top-10">
        <h1 className="text-5xl rounded-lg text-[#F1FAEE] bg-[#1D3557] py-2 shadow-md shadow-[#457B9D]">
          Mi Carrera Perfecta
        </h1>
        <h3 className="text-xl text-[#A8DADC] rounded-md mt-1 w-[22vw] bg-[#1D3557] py-2 shadow-md shadow-[#457B9D]">
          Animate a descubrir tu futuro
        </h3>
        <div className="w-full flex justify-center items-center h-[30vh]">
          <img
            className="h-[25vh] aspect-auto rounded-[40px]"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[30vw] h-[20vh] flex items-center justify-center ">
        <button
          onClick={handleClick}
          className="w-[14vw] h-[7vh] p-0 bg-[#E63946] hover:scale-110 transition-all ease-in-out duration-500 text-2xl rounded-lg text-[#F1FAEE]"
        >
          Iniciar mi test
        </button>
      </div>
    </div>
  );
};

export default Modul;
