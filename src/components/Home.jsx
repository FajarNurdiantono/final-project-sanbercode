import React from 'react';
import Jumbotron from '../assets/jumbotron.jpg';

function Home() {
  return (
    <div>
      <div className=" text-black py-3 bg-slate-200">
        <img src={Jumbotron} alt="Jumbotron" className="mx-auto rounded-lg shadow-lg " />
      </div>
    </div>
  );
}

export default Home;
