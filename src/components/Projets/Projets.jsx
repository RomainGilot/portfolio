import { ArrowRightIcon } from "@heroicons/react/24/outline";
import imgPortfolio from "../../images/portfolio.png";
import Box from "./components/Box/Box";

function Projets() {
  return (
    <>
      <div className="bg-gray-50 p-10 ">
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Projets;
