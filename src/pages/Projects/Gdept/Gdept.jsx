import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import Autres from "../../../components/Projets/components/Autres/Autres";
import GeneralInfo from "../../../components/Projets/components/GeneralInfo/GeneralInfo";
import Objectifs from "../../../components/Projets/components/Objectifs/Objectifs";
import ReturnButton from "../../../components/Projets/components/ReturnButton/ReturnButton";
import Technologies from "../../../components/Projets/components/Technologies/Technologies";
import imgPortfolio from "../../../images/portfolio.png";

function Gdept() {
  const mesObjectifs = ["Gestion des remplacements", "Formulaire de remplacement d'un agent", "Formulaire de saisie des fonctions", "Génération d'un rapport"];
  const mesTechnologies = ["SvelteKit", "Node JS", "Tailwind CSS", "PostgreSQL"];
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
            <Autres repoGithub="gdept" />
          </div>
          <div className="text-lg lg:w-3/5 text-gray-500">
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">Contexte</h2>
            <p>
              Pendant mes 3ans d'alternance au{" "}
              <a href="https://www.sdis57.fr/" className="text-[#62B9CB] hover:text-[#5FACD3]">
                SDIS57
              </a>
              , j'ai mené diverses missions dont le développement d'une application web sur la gestion des gardes de commandement.
              <br />
              <br />
              Le <b>D</b>épartement des <b>A</b>ctivités <b>O</b>pérationnelles a exprimé le besoin d'automatiser leurs tâches afin d'optimiser la gestion des
              gardes de commandement. Ainsi, j'ai conçu et développé une application web intuitive et fonctionnelle qui répond aux besoins spécifiques du{" "}
              <strong>DAO</strong> du SDIS57. <br />
              <br />
              Cette application offre une interface permettant aux bénéficiaire de planifier, suivre et gérer efficacement les gardes de commandement. Elle
              intègre des fonctionnalités telles que la création de plannings, la gestion des disponibilités du personnel, et la génération de rapports...
            </p>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">Pourquoi SvelteKit ?</h2>
            <p>
              Afin d'unifier tous les développements internes, le Département du Numérique du SDIS57 a décidé d'utiliser le framework Javascript SvelteKit car
              il présente:
            </p>
            <li>Facilité d'apprentissage</li>
            <li>Intégration facile avec les API</li>
            <li>Développement rapide</li>
            <li>Vue basée sur des composants réutilisables</li>
            <li>Uniformisation des développements</li>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10 mb-10">Déploiement</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gdept;
