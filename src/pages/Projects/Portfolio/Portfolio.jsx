import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import Autres from "../../../components/Projets/components/Autres/Autres";
import GeneralInfo from "../../../components/Projets/components/GeneralInfo/GeneralInfo";
import Objectifs from "../../../components/Projets/components/Objectifs/Objectifs";
import ReturnButton from "../../../components/Projets/components/ReturnButton/ReturnButton";
import Technologies from "../../../components/Projets/components/Technologies/Technologies";
import imgPortfolio from "../../../images/portfolio.png";

function Portfolio() {
  const mesObjectifs = [
    "Présentation professionnelle",
    "Mise en valeur des compétences clés",
    "Démonstration de l'expérience",
  ];
  const mesTechnologies = ["React.js", "Node JS", "HTML / CSS", "Tailwind CSS"];
  return (
    <>
      <Header />
      <div className="p-10 lg:pl-28 lg:pr-28 lg-32 lg-32 mb-10">
        <div class="flex flex-col md:flex-row flex-wrap flex-wrap-reverse">
          <div className="pr-20 mb-20">
            <ReturnButton />
            <GeneralInfo name="Portfolio" year="2023" />
            <Objectifs objectifs={mesObjectifs} />
            <Technologies technologies={mesTechnologies} />
            <Autres repoGithub="portfolio" urlSite="https://romain-gilot.fr/" />
          </div>
          <div className="text-lg lg:w-3/5 text-gray-500">
            <img src={imgPortfolio} className="shadow-2xl" alt="" />
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">
              Contexte
            </h2>
            <p>
              J'ai créé ce portfolio pour rendre ma carrière plus accessible et
              compréhensible. C'est un moyen simple et direct de présenter qui
              je suis professionnellement. <br />
              <br />
              Chaque projet ici raconte une histoire sur mes compétences et ma
              passion. C'est ma manière de montrer ce dont je suis capable, et
              surtout, de faciliter le dialogue avec ceux qui partagent des
              intérêts similaires. <br />
              <br />
              Ce portfolio, c'est ma carte de visite en ligne, prête à ouvrir
              des portes vers de nouvelles opportunités et collaborations
              passionnantes.
            </p>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">
              Déploiement de l'application
            </h2>
            <p>
              Concernant la mise en production de l'application, j'ai hébergé
              mon application sur mon VPS Debian de chez{" "}
              <a
                href="https://ovh.com"
                className="text-[#62B9CB] hover:text-[#5FACD3]"
                target="_blank"
              >
                OVH
              </a>
              . <br />
              <br />
              Pour le certificat SLL, je me suis orienté vers{" "}
              <a
                href="https://certbot.eff.org/"
                className="text-[#62B9CB] hover:text-[#5FACD3]"
                target="_blank"
              >
                Certbot
              </a>{" "}
              car c'est un outil gratuit facile à utiliser.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
