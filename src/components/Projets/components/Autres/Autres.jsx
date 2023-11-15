function Autres({repoGithub, urlSite}) {
    return(
        <>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10">Technologie(s)</h2>
            <li className="text-base text-gray-500">
                <a href={`https://github.com/RomainGilot/${repoGithub}`} className="text-[#62B9CB] hover:underline" target="_blank">Github du projet</a>
            </li>
            <li className="text-base text-gray-500">
                <a href={urlSite} className="text-[#62B9CB] hover:underline" target="_blank">Lien du site</a>
            </li>
        </>
    )
}

export default Autres;