// LoadingPage.js

import React, { useEffect } from "react";
import logo from "../images/logov2.svg";

const LoadingPage = ({ setIsLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Met fin au chargement après un certain délai
    }, 2000); // Délai en millisecondes
    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <div className="loading-container">
      <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          transition: opacity 0.5s ease; /* Ajoute une transition d'opacité */
          opacity: 1; /* Affiche toujours la page de chargement */
          z-index: 9999; /* Assurez-vous que la page de chargement est au-dessus de tout le reste */
        }
        .loading-image {
          width: 200px;
          height: auto;
        }
      `}</style>
      <img src={logo} alt="Loading" className="loading-image" />
    </div>
  );
};

export default LoadingPage;
