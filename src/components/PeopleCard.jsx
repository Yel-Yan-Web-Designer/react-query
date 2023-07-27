
const PeopleCard = ({result}) => {
    const {name , gender , birth_year} = result;
  return (
    <div className="people-card">
        <h4>{name}</h4>
        <p>Gender - {gender}</p>
        <p>Birth Year - {birth_year}</p>
    </div>
  )
}

export default PeopleCard