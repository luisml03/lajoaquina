import { useState } from "react";

import React from 'react';
import { Fragment } from 'react';
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



function RegisterPage() {
const [open, setOpen] = useState(true);
const [datos, setDatos] = useState({
  username: " ",
  email: "",
  password: "",
  cpassword: ""
  
})


  
 

  
    return(
    <div className="flex">
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
          Designer
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
            $`}
          >
            <img src= {Calendar} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Calendario
            </span>
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
            <img src= {inbox} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Contactanos
            </span>
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
    <header>
      <h1 className="font-bold">Registrarse</h1>
      </header>
    <div className="register-container ">
      <div className="img-register">
      <img src= {logon} alt="" className="img-register" />
      </div>
     
      <main className="mb-100px">
        <section>
      <form onSubmit= ''>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          onChange=''
          placeholder="Usernanme"
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          onChange=''
          placeholder="Email"
          
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange=''
          placeholder="Password"
        />
          <label htmlFor="cpassword"></label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          onChange=''
          placeholder="Confirm your password"
        />

        <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold" >Registrarse</button>
      </form>

      <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
      </section>
      </main>
      </div>
      <footer>
      <p>&copy; 2023 Escuela de Conducción. Todos los derechos reservados.</p>
    </footer>

      <style jsx>{`
        .register-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        header {
          color: #FFFFFF;
background: rgb(8 26 81 / var(--tw-bg-opacity));;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
        }
        .img-register {
          margin: 0px auto;
          height:100px;
          width: 100%
        }

        h1 {
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-top: 10px;
        }

        input {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #555;
        }

        p {
          margin-top: 10px;
          text-align: center;
        }

        p a {
          color: #333;
          text-decoration: none;
        }
      `}</style>
    
    </div>
        </div>

   
  );
};
export default RegisterPage;