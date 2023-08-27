import React from 'react';
import Profile from '../assets/Profile.jpeg';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGitlab } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-600 text-white  shadow-md p-8 mx-auto max-w">
      <div className="flex justify-center">
        <div>
          <img src={Profile} alt="Profile" className="w-[250px] h-[250px] rounded-lg mx-auto mb-4 border-4 border-white" />
          <h1 className="text-2xl font-semibold text-center mb-2">Fajar Nurdiantono</h1>
          <p className="text-center text-gray-300 mb-6">Bekasi, 15 Juli 2000</p>
        </div>
        <div className="mb-6 ml-24">
          <h2 className="text-xl font-semibold mb-2">Keahlian</h2>
          <ol className="list-decimal list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Wordpress</li>
          </ol>
        </div>

        <div className="mb-6 ml-24">
          <h2 className="text-xl font-semibold mb-2">Lulusan Bootcamp</h2>
          <ol className="list-decimal list-inside">
            <li>My Skill</li>
            <li>Coding Studio</li>
            <li>Dicoding Indonesia</li>
            <li>IT Box</li>
            <li>Cintessa Academy</li>
            <li>Programming Hero</li>
            <li>Skilvul</li>
            <li>Coding ID</li>
            <li>Binar</li>
            <li>Edspert</li>
          </ol>
        </div>
        <div className="mb-6 ml-24">
          <h1 className="text-xl font-semibold mb-2">Follow Us</h1>
          <a href="https://wa.me/6288293925488" target="blank" className="items-center space-x-2 text-white hover:text-green-700 flex">
            <BsWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/fajar_tono/" target="blank" className="items-center space-x-2 text-white hover:text-pink-700 flex">
            <BsInstagram />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/fajarnurdiantono/" target="blank" className="items-center space-x-2 text-white hover:text-blue-700 flex">
            <BsLinkedin />
            <span>Linkedin</span>
          </a>
          <a href="https://gitlab.com/FajarNurdiantono" target="blank" className="items-center space-x-2 text-white hover:text-orange-700 flex">
            <FaGitlab />
            <span>Gitlab</span>
          </a>
          <a href="mailto:nurdiantonof@gmail.com" target="blank" className="items-center space-x-2 text-white hover:text-red-700 flex">
            <SiGmail />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
