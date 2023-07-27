import {useQuery} from "@tanstack/react-query";
import PlanetCard from "./PlanetCard";
const Planets = () => {
    
    async function fetchPlanets () {
        const res = await fetch('http://swapi.dev/api/planets/');
        return res.json();
    }
    const {isLoading , error , data} = useQuery({
        queryKey : ['planets'],
        queryFn : fetchPlanets,
        cacheTime : 6000
    })
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    const {results} = data;

  return (
    <div className="planets">
        <div className="container">
            <h2>Planets</h2>
            <div className="planet-card-container">
                {results.map(x => <PlanetCard key={x.name} result={x}/>)}
            </div>
        </div>
    </div>
  )
}

export default Planets