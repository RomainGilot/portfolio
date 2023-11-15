function Objectifs({objectifs}) {
    return(
        <>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10">Objectif(s)</h2>
                {objectifs.map((objectif, index) => (
                    <li key={index} className="text-lg text-gray-500">
                        {objectif}
                    </li>
                ))}
        </>
    )
}

export default Objectifs;