import { ArrowRightIcon } from "@heroicons/react/24/outline";
import imgPortfolio from "../../images/portfolio.jpg";
import badge from "../../images/badge.jpg";
import sdis57 from "../../images/sdis57.jpg";
import Box from "./components/Box/Box";
import juliedaubie from "../../images/juliedaubie.svg";
import robertschuman from "../../images/robertschuman.svg";
import mns from "../../images/logo-mns.svg";
function Projets() {
  return (
    <>
      <div className="bg-gray-50 pt-10 " id="mes-projets">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
            Mes projets
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            J'ai réalisé quelques projets, regardez les !
          </p>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <Box
              title="Portfolio"
              img={imgPortfolio}
              message="Ce projet est le site sur lequel vous vous trouvez actuellement ! Bonne visite :)"
              projectName="portfolio"
            />
            <Box
              title="GDEPT"
              img={sdis57}
              message="Ce projet a été réalisé dans le cadre de mon alternance au SDIS57."
              projectName="gdept"
            />
            <Box
              title="Access"
              img={badge}
              message="Ce projet a été réalisé dans le cadre de mon bachelor Développeur Full-Stack."
              projectName="access"
            />
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-50" id="parcours">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
            Mon parcours
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            Quel est mon parcours ?
          </p>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <a
              href="#"
              className="flex items-center ms:mx-auto hover:scale-105 delay-75 transform transition-transform duration-300 cursor-pointer"
            >
              <img src={juliedaubie} className="w-28 h-28" />
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <span className="text-2xl  tracking-tight text-gray-900">
                  Baccalauréat Général
                </span>
                <dd className="order-first text-gray-600">2018-2021</dd>
              </div>
            </a>
            <a
              href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
              className="flex items-center ms:mx-auto hover:scale-105 delay-75 transform transition-transform duration-300 cursor-pointer"
            >
              <img src={robertschuman} className="w-28 h-28" />
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <span className="text-2xl  tracking-tight text-gray-900">
                  BTS SIO SLAM
                </span>
                <dd className="order-first text-gray-600">2021 - 2023</dd>
              </div>
            </a>
            <a
              href="https://www.metz-numeric-school.fr/fr/formations/developpement-informatique/developpeur-full-stack-en-alternance"
              className="flex items-center ms:mx-auto hover:scale-105 delay-75 transform transition-transform duration-300 cursor-pointer"
            >
              <img src={mns} className="w-28 h-28" />
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <span className="text-2xl  tracking-tight text-gray-900">
                  Bachelor Développeur Full-Stack
                </span>
                <dd className="text-gray-600 order-first">2023 - 2024</dd>
              </div>
            </a>
          </dl>
        </div>
      </div>
    </>
  );
}
export default Projets;
