import './styles/Header.css'

const styles = {
  header: {
    background: 'purple'
  },
  h1: {
  color: 'white'
  },
};
function Header() {

  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;