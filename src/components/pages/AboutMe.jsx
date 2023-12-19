export default function AboutMe() {
  const aboutmeStyle = {
    backgroundColor: '#F5EFFF', 
  };
    return (
      <div style={aboutmeStyle}>
        <h1>About Me</h1>
        <div>
        <img src="../../../assets/images/profile.png"></img>
        </div>
      <p>
        Hi, I'm Kiara! <span role="img" aria-label="hand-wave">👋🏾</span> I am a Full Stack Web Developer from Austin, Texas. I have recently graduated from the UT PLE Bootcamp Full Stack Coding Program and 
        am eager to apply the skills I have learned to future projects. 
      </p>
        </div>
    );
  }