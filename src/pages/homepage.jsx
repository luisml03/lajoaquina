import { useState } from "react";
import Carrusel from "./slider";

import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import control from '../assets/control.png'
import logo from '../assets/logo.png'
import logon from '../assets/register-img.png'
import dashboard from '../assets/Chart_fill.png'
import Calendar from '../assets/Calendar.png'
import charts from '../assets/Chart.png'
import inbox from '../assets/Chat.png'
import user from '../assets/User.png'
import about from '../assets/Search.png'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  return (

    <div className=" flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple min-h-screen p-5  pt-8 relative duration-300`}
      >
       
        <img
          src= {control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        
        <div className="flex gap-x-4 items-center">
          <img
            src= {logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ProDrive
          </h1>
        </div>
        <ul className="pt-6">
            <li
              className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <a href="/">
              <img src= {dashboard} />
              
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
              </a>
            </li>

            <li
              className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
            >
               <a href="/calendar" target="_blank" rel="noopener noreferrer">
              <img src= {Calendar} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Calendario
              </span>
              </a>
            </li>

            <li
              className={`flex  mt-9 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <img src= {charts} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Analisis
              </span>
            </li>

            <li
              className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            `}
            >
              <a href="/contact">
              <img src= {inbox} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Contactanos
              </span>
              </a>
            </li>

            <li
              className={`flex mt-9 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
            >
              <img src= {user} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Mi perfil
              </span>
            </li>

            <li
              className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <img src= {about} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                About us
              </span>
            </li>
          
        </ul>
      </div>
      <div className="min-h-screen flex-1 p-0">
      <div className="min-h-screen">
    <header>
      <h1>La joaquina</h1>
      <nav className={`ml-96`}>
        <ul className={`ml-96`}>
          <li>
            <Link to="/register">Registrarse</Link>
          </li>
          <li>
            <a href="/login">Blog</a>
          </li>
        </ul>
      </nav>
    </header>

    <main className="min-h-screen">
      <section>
        <h2>La joaquina</h2>
        <Carrusel />
        <p>
          Dondo un cafe de calidad desde tiempos inmemoriabkes
        </p>
        <p>
          No solo es una tasa de cafe es toda una experiencia
        </p>
        <p>
          ¡Animate a probar!
        </p>
        <Link to="/register" className="cta-button">¡Regístrate ahora!</Link>
      </section>
    </main>

    <footer>

      <ul >
        <li className=" chover: hover:text-gray-300">
          <a href="http://">
           location
          </a>
        </li>

        <li>
          <a href="http://">
            Contact with us
          </a>
        </li>
        <li>
          <a href="http://">
            Near you
          </a>
        </li>
      </ul>
      <p>&copy; 2023 Escuela de Conducción. Todos los derechos reservados.</p>
    </footer>

   
  </div>
      </div>
      
     
      
    </div>

   



  );
};
export default Sidebar;
