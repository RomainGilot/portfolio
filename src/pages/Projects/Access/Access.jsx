import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import Autres from "../../../components/Projets/components/Autres/Autres";
import GeneralInfo from "../../../components/Projets/components/GeneralInfo/GeneralInfo";
import Objectifs from "../../../components/Projets/components/Objectifs/Objectifs";
import ReturnButton from "../../../components/Projets/components/ReturnButton/ReturnButton";
import Technologies from "../../../components/Projets/components/Technologies/Technologies";
import imgPortfolio from "../../../images/portfolio.png";

function Access() {
  const mesObjectifs = ["Gestion des temps de travail", "Gestion d'un planning", "Gestion des absences", "Gestion des accès"];
  const mesTechnologies = ["ReactJS", "Node JS", "Tailwind CSS", "MySQL", "Raspberry PI"];
  return (
    <>
      <Header />
      <div className="p-10 lg:pl-28 lg:pr-28 lg-32 lg-32 mb-10">
        <div class="flex flex-col lg:flex-row flex-wrap-reverse">
          <div className="pr-20 mb-20">
            <ReturnButton />
            <GeneralInfo name="Access" year="2023 - 2024" />
            <Objectifs objectifs={mesObjectifs} />
            <Technologies technologies={mesTechnologies} />
          </div>
          <div className="text-lg lg:w-3/5 text-gray-500">
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">Contexte</h2>
            <code>En cours d'écriture...</code>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Access;
