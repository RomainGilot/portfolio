import Footer from "../../../components/common/Footer/Footer";
import Header from "../../../components/Header/Header";
import Autres from "../../../components/Projets/components/Autres/Autres";
import GeneralInfo from "../../../components/Projets/components/GeneralInfo/GeneralInfo";
import Objectifs from "../../../components/Projets/components/Objectifs/Objectifs";
import ReturnButton from "../../../components/Projets/components/ReturnButton/ReturnButton";
import Technologies from "../../../components/Projets/components/Technologies/Technologies";
import imgPortfolio from "../../../images/portfolio.png";

function Gdept() {
  const mesObjectifs = [
    "Présentation professionnelle",
    "Mise en valeur des compétences clés",
    "Démonstration de l'expérience",
  ];
  const mesTechnologies = ["SvelteKit", "Node JS", "HTML / CSS", "Tailwind CSS", "PostgreSQL"];
  return (
    <>
      <Header />
      <div className="p-10 lg:pl-28 lg:pr-28 lg-32 lg-32 mb-10">
        <div class="flex flex-col lg:flex-row flex-wrap flex-wrap-reverse">
          <div className="pr-20 mb-20">
            <ReturnButton />
            <GeneralInfo name="GDEPT" year="2023 - 2024" />
            <Objectifs objectifs={mesObjectifs} />
            <Technologies technologies={mesTechnologies} />
            <Autres repoGithub="gdept"  />
          </div>
          <div className="text-lg lg:w-3/5 text-gray-500">
            {/* <img src={imgPortfolio} className="shadow-2xl" alt="" /> */}
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">
              Contexte
            </h2>
            <p>
              Pendant mes 3ans d'alternance au SDIS57, j'ai mené diverse missions dont le développement d'une application web sur la gestion des gardes de commandement.<br/><br/>
              Le <b>D</b>épartement des <b>A</b>ctivités <b>O</b>pérationnelles a exprimé le besoin d'automatiser leur tâches, pour optimiser la gestion des gardes de commandement. Ainsi, j'ai conçu et développé une application web intuitive et fonctionnelle qui répond aux besoins spécifiques du <strong>DAO</strong> du SDIS57. <br/><br/>

Cette application offre une interface permettant aux bénéficiaire de planifier, suivre et gérer efficacement les gardes de commandement. Elle intègre des fonctionnalités avancées telles que la création de plannings, la gestion des disponibilités du personnel, et la génération de rapports... 
            </p>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gdept;
