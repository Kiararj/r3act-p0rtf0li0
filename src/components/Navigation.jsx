import Typewriter from "./Typewriter";

function Navigation({ currentPage, handlePageChange }) {
    return (
//       <nav class="navbar navbar-expand-md">
//     <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//         <ul class="navbar-nav mr-auto">
//         <li className="nav-item">
//          <a
//            href="#aboutme"
//            onClick={() => handlePageChange('AboutMe')}
//             // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
//              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
//            >
//              About Me
//            </a>
//        </li>
//          <li className="nav-item">
//          <a
//              href="#portfolio"
//              onClick={() => handlePageChange('Portfolio')}
//              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//            >
//              Portfolio
//            </a>
//          </li>
//          <li className="nav-item">
//            <a
//              href="#contact"
//              onClick={() => handlePageChange('Contact')}
//              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//            >
//              Contact
//            </a>
//          </li>
//          <li className="nav-item">
//            <a
//              href="#resume"
//              onClick={() => handlePageChange('Resume')}
//              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//            >
//              Resume
//            </a>
//          </li>
//         </ul>
//     </div>
// </nav>

<nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
<h1 class='navbar-brand'>
          Hi, I'm Kiara!{" "}
          <Typewriter text="Full Stack Web Developer" delay={100} infinite />
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Kiara Johnson</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    <li class="nav-item">
     <a class='nav-link active'
       href="#aboutme"
       onClick={() => handlePageChange('AboutMe')}
        // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
         // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
         className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
       >
         About Me
       </a>
   </li>
     <li className="nav-item">
     <a class='nav-link'
         href="#portfolio"
         onClick={() => handlePageChange('Portfolio')}
         // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
         className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
       >
         Portfolio
       </a>
     </li>
     <li className="nav-item">
       <a class='nav-link'
         href="#contact"
         onClick={() => handlePageChange('Contact')}
         // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
       >
         Contact
       </a>
     </li>
     <li className="nav-item">
       <a class='nav-link'
         href="#resume"
         onClick={() => handlePageChange('Resume')}
         // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
         className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
       >
         Resume
       </a>
     </li>
    </ul>
    </div>
</div>
</div>
</nav>
    );
  }
  
  export default Navigation;
  