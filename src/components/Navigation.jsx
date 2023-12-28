import Typewriter from './Typewriter';

function Navigation({ currentPage, handlePageChange }) {

  const navStyle = {
    backgroundColor: '#A594F9', 
  };
  
  return (
    <nav class='navbar navbar-expand-lg' style={navStyle}>
      <div class='container-fluid'>
        <h1 className='navbar-brand'>
          Hi, I'm Kiara! {'👋🏾 '}
          <Typewriter text='Full Stack Web Developer' delay={100} infinite />
        </h1>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav ms-auto'>
            <li class='nav-item'>
              <a
                href='#aboutme'
                onClick={() => handlePageChange('AboutMe')}
                // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'
                }
              >
                About Me
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
                }
              >
                Portfolio
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === 'Resume' ? 'nav-link active' : 'nav-link' 
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
