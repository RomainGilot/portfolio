import React, { useState } from "react";
import Navbar from "./components/common/Navbar";
import Contact from "./components/Contact/Contact";
import Projets from "./components/Projets/Projets";
import AProposdeMoi from "./components/AProposdeMoi/AProposdeMoi";
import Footer from "./components/common/Footer";
import LoadingPage from "./components/LoadingPage"; // Importez votre composant de page de chargement
import moi from "./images/moi.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true); // État pour contrôler l'affichage de la page de chargement

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage setIsLoading={setIsLoading} />
      ) : (
        <>
          <Navbar />
          <AProposdeMoi />
          <section id="a-propos-de-moi" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                    <img className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src={moi} alt="photo de romain gilot" />
                  </div>
                </div>
                <div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">À propos de moi</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Qui suis-je ?</h1>
                    <div className="max-w-xl">
                      <p className="mt-6">
                        Petit explorateur digital de 20ans à la recherche de super pouvoirs numériques pour devenir un expert en clics et en codes. À la
                        conquête du royaume des compétences informatiques, avec sérieux et détermination! 🚀
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 flex">
                    <a href="https://www.linkedin.com/in/romaingilot/" className="text-base font-semibold leading-7 text-[#5FACD3]">
                      Retrouvez moi sur Linkedin <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Projets />
          <Contact />
          <Footer />
          <button
            className="fixed bottom-6 right-6 bg-[#5FACD3] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#5FACD3] focus:outline-none focus:ring-2 focus:ring-[#5FACD3]"
            onClick={scrollToTop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m17 14l-5-5m0 0l-5 5" />
            </svg>
          </button>
        </>
      )}
    </>
  );
}

export default App;
