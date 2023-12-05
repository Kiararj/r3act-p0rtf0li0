function Navigation({ currentPage, handlePageChange }) {
    return (
      <nav class="navbar navbar-expand-md">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
        <li className="nav-item">
         <a
           href="#home"
           onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
             // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
             className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
           >
             Home
           </a>
       </li>
         <li className="nav-item">
         <a
             href="#portfolio"
             onClick={() => handlePageChange('Portfolio')}
             // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
             className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
           >
             Portfolio
           </a>
         </li>
         <li className="nav-item">
           <a
             href="#contact"
             onClick={() => handlePageChange('Contact')}
             // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
           >
             Contact
           </a>
         </li>
         <li className="nav-item">
           <a
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
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">Navbar 2</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2 end">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
</nav>
    );
  }
  
  export default Navigation;
  