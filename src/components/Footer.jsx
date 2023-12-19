function Footer () {
    const footerStyle = {
        backgroundColor: '#A594F9', 
    }

    const listStyle = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    
    return (
        <footer style={footerStyle}>
            <ul style={listStyle}>
                <li>
                    <a href="https://www.linkedin.com/in/kiara-johnson54/"><img src="../../assets/images/linkedin.png" /></a>
                </li>
                <li>
                    <a href="https://github.com/Kiararj"><img src="../../assets/images/github.png" /></a>
                </li>
                <li>
                    <a href="https://dev.to/kiararj"><img src="../../assets/images/dev.png" /></a>
                </li>
                <li>
                    <a href="https://medium.com/@kiarajohnson91"><img src="../../assets/images/medium.png" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/codewithkiara/"><img src="../../assets/images/instagram.png" /></a>
                </li>
            </ul>
            <h6>Made with 💜</h6>
        </footer>
    );
};

export default Footer;