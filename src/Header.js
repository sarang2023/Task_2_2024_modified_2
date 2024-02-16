function Header()
{
    return(<>
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid p-2 bg-black">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand text-center mx-auto p-1" href="#">
            <p className="h4 text-light">
              <span>F</span>est
              <i className="bi bi-lightning color"></i>
              <i className="fa-sharp fa-solid fa-u text-danger "></i>p
            </p>
          </a>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

          
            
            <ul class="nav mx-2">
  <li class="nav-item ">
    <a class="nav-link text-light" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">List Your Event</a>
  </li>
  </ul>


           

             
            </ul>
           
            <form className="d-flex flex-column flex-lg-row align-items-center" role="search">
              
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-dark rounded-5 mb-2 mb-lg-0 mx-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <i className="bi bi-geo-alt"></i>
      Indore
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
             
             
             
          
            </form>
          </div>
          <a className="navbar-brand text-center mx-auto" href="#">
          <button type="button" className="btn btn-dark rounded-circle ">
                <i className="fa-solid fa-user"></i>
              </button>
          </a>

          
        </div>
      </nav>
    </>)
}
export default Header;