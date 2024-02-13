import "./AboutUs.css";
import "animate.css";

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-right"></div>
            <p className="about-left">
                <span className="korean-text">
                    안녕하세요
                </span>
                <span className="english-text">
                    (Hello)
                </span>
                and welcome to Kim's Asian Market, where the vibrant spirit of Korean-American heritage
                meets the rich tapestry of Asian culture. As the proud owners we are thrilled to share our passion for
                authentic flavors, diverse traditions, and the joy of exploring the culinary and cultural treasures of Asia
                with Asheville!
                <span className="korean-text">
                    감사합니다
                </span>
                <span className="english-text">
                        (Thank you)
                </span> for being a part of our Kim's family!
            </p>
        </div>
    );
}

export default AboutUs;
