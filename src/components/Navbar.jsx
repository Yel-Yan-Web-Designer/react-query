const Navbar = ({setPage}) => {
  return (
    <nav className="nav">
        <div className="container">
            <h1>Starwar Info</h1>
            <div className="navbar-btn">
                <button className="btn" onClick={() => setPage("characters")}>Characters</button>
                <button className="btn" onClick={() => setPage("planets")}>Planets</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar