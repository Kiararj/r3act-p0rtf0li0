function Footer () {
    const footerStyle = {
        backgroundColor: '#A594F9', 
        padding: '10px'
    }

    const listStyle = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const imageStyle = {
        height: '40px'
    }
    
    const footStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <footer style={footerStyle}>
            <ul style={listStyle}>
                <li>
                    <a href='https://www.linkedin.com/in/kiara-johnson54/'><img src='../../assets/images/linkedin.png' style={imageStyle}/></a>
                </li>
                <li>
                    <a href='https://github.com/Kiararj'><img src='../../assets/images/github.png' style={imageStyle}/></a>
                </li>
                <li>
                    <a href='https://dev.to/kiararj'><img src='../../assets/images/dev.png' style={imageStyle}/></a>
                </li>
                <li>
                    <a href='https://medium.com/@kiarajohnson91'><img src='../../assets/images/medium.png' style={imageStyle}/></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/codewithkiara/'><img src='../../assets/images/instagram.png' style={imageStyle}/></a>
                </li>
            </ul>
            <h6 style={footStyle}>Made with 💜</h6>
        </footer>
    );
};

export default Footer;