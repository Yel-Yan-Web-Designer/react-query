import { useQuery } from "@tanstack/react-query";
import PeopleCard from "./PeopleCard";

async function fetchPeople (key) {
  const {queryKey} = key;
  const page = queryKey[1];
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
}

const Characters = () => {
  const {error , data , isLoading} = useQuery({
    queryKey : ['characetrs' , 2],
    queryFn : fetchPeople
  })

  if(isLoading) return "Loading people data...";
  if(error) return "error has been occured " + error.message;

  const {results} = data;
  return (
    <div className="characters">
        <div className="container">
            <h2>Characters</h2>

            <div className="people-card-container">
              {results.map(x => <PeopleCard key={x.name} result ={x}/>)}
            </div>
        </div>
    </div>
  )
}

export default Characters