import "./AboutUs.css";
import "animate.css";


function AboutUs() {
    let backgroundStyles = {
        backgroundImage: `url("https://kimsasianbucket.s3.amazonaws.com/teaset.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="about-container" style={backgroundStyles}>
            <div className="gradient-overlay">
                <div className="about-left" />
                <p className="about-right">
                    <h1 className="about-header">
                        Welcome to&nbsp;
                        <span className="name-kim">KIM&apos;S</span>&nbsp;
                        <span className="name-asian-market">ASIAN MARKET</span>
                    </h1>
                    <span className="korean-text">안녕하세요</span>&nbsp;
                    <span className="english-text">(Hello)</span>.&nbsp;
                    Here the vibrant spirit of Korean-American heritage
                    meets the rich tapestry of Asian culture. As the proud owners we are thrilled to share our passion for
                    authentic flavors, diverse traditions, and the joy of exploring the culinary and cultural treasures of Asia
                    with Asheville!&nbsp;
                    <span className="korean-text">감사합니다</span>&nbsp;
                    <span className="english-text">(Thank you)</span>&nbsp;
                    for being a part of our Kim&apos;s family!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
