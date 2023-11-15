function Technologies({technologies}) {
    return(
        <>
            <h2 className="text-2xl text-sky-950 font-semibold mt-10">Technologie(s)</h2>
                {technologies.map((technologie, index) => (
                    <li key={index} className="text-lg text-gray-500">
                        {technologie}
                    </li>
                ))}
        </>
    )
}

export default Technologies;