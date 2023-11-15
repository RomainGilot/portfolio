import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar"
import Autres from "../../../components/Projets/components/Autres/Autres";
import GeneralInfo from "../../../components/Projets/components/GeneralInfo/GeneralInfo";
import Objectifs from "../../../components/Projets/components/Objectifs/Objectifs";
import ReturnButton from "../../../components/Projets/components/ReturnButton/ReturnButton";
import Technologies from "../../../components/Projets/components/Technologies/Technologies";

function Portfolio() {
    const mesObjectifs = [
        "Présentation professionnelle",
        "Mise en valeur des compétences clés",
        "Démonstration de l'expérience"
    ];
    const mesTechnologies = [
        "React.js",
        "Node JS",
        "HTML / CSS",
        "Tailwind CSS"
    ];
    return(
        <>
            <Navbar/>
            <div class="flex flex-wrap pl-28 pr-28 lg-32 lg-32 mt-20 mb-10">
                <div className="pr-20 mb-20">
                    <ReturnButton/>
                    <GeneralInfo name="Portfolio" year="2023"/>
                    <Objectifs objectifs={mesObjectifs}/>
                    <Technologies technologies={mesTechnologies}/>
                    <Autres repoGithub="portfolio" urlSite="https://romain-gilot.fr/"/>
                </div>
                <div className="text-lg w-3/5 text-gray-500">
                J'ai créé ce portfolio pour rendre ma carrière lgus accessible et compréhensible. C'est un moyen simple et direct de présenter qui je suis professionnellement. <br/><br/>Chaque projet ici raconte une histoire sur mes compétences et ma passion. C'est ma manière de montrer ce dont je suis capable, et surtout, de faciliter le dialogue avec ceux qui partagent des intérêts similaires. <br/><br/>Ce portfolio, c'est ma carte de visite en ligne, prête à ouvrir des portes vers de nouvelles opportunités et collaborations passionnantes.
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Portfolio;