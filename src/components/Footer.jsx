import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-blue-800 text-white">
        <div className="container mx-auto py-2 flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">SMA Negeri 14 Bekasi</p>
          <div className="flex space-x-6">
            <a href="https://www.sman14bekasi.sch.id/" target="blank" className="text-white hover:underline hover:font-800 hover:text-gray-500 transition duration-300">
              Website
            </a>
            <a href="https://www.facebook.com/smanegeri14kotabekasi/?locale=id_ID" target="blank" className="text-white hover:underline hover:font-800 hover:text-gray-500 transition duration-300">
              Facebook
            </a>
            <a href="https://www.instagram.com/sman14kotabekasi/" target="blank" className="text-white hover:underline hover:font-800 hover:text-gray-500 transition duration-300">
              Instagram
            </a>
          </div>
          <p className="mt-4 text-sm">&copy; 2023 SMAN 14 Bekasi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
