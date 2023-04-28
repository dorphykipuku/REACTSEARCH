
import { Link } from "react-router-dom"

const Navbar= function(){


    return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link className="nav-item nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/test">
          Ajouter
        </Link>
        <Link className="nav-item nav-link" to="/exe">
         Exercice
        </Link>
      </ul>
     
    
    </div>
  </div>
</nav>
    </div>
    
    )

}
export default Navbar