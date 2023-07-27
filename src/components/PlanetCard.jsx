const PlanetCard = ({result}) => {
    const {name , population , terrain} = result;
  return (
    <div className="planet-card">
        <h4>{name}</h4>
        <p>Population - {population}</p>
        <p>Terrain - {terrain}</p>
    </div>
  )
}

export default PlanetCard