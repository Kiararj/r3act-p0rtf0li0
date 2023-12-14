import Navigation from "./Navigation";
// import Typewriter from "./Typewriter";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>
        {/* <h1>
          Hi, I'm Kiara!{" "}
          <Typewriter text="Full Stack Web Developer" delay={100} infinite />
        </h1> */}
      </div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
