import { useState } from "react";

const Navbar = ({setPage}) => {
    const [active , setActive] = useState("characters");

    function navbarBtn (e) {
        const getText = e.target.innerText;
        setPage(getText);
        setActive(getText);
    }
  return (
    <nav className="nav">
        <div className="container">
            <h1>Starwar Info</h1>
            <div className="navbar-btn">
                <button className={active === "characters" ?"active btn" : "btn" } onClick={navbarBtn}>characters</button>
                <button className={active === "planets" ? "active btn" : "btn"} onClick={navbarBtn}>planets</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar