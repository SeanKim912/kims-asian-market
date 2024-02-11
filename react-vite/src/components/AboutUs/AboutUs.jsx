import "./AboutUs.css";
import "animate.css";

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-right"></div>
            <p className="about-left">
                <span className="korean-text">
                    <span className="animate__animated animate__fadeIn">
                        안녕하세요
                    </span>
                </span>
                <span className="english-text">
                    <span className="animate__animated animate__fadeIn">
                        (Hello)
                    </span>
                </span>
                and welcome to Kim's Asian Market, where the vibrant spirit of Korean-American heritage
                meets the rich tapestry of Asian culture. As the proud owners we are thrilled to share our passion for
                authentic flavors, diverse traditions, and the joy of exploring the culinary and cultural treasures of Asia
                with Asheville!
                <span className="korean-text">
                    <span className="animate__animated animate__fadeIn">
                        감사합니다
                    </span>
                </span>
                <span className="english-text">
                    <span className="animate__animated animate__fadeIn">
                        (Thank you)
                    </span>
                </span> for being a part of our Kim's family!
            </p>
        </div>
    );
}

export default AboutUs;
