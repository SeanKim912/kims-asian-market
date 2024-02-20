import "./AboutUs.css";
import Map from "../Map";
import "animate.css";

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-left">
                <Map />
            </div>
            <p className="about-right">
                <span className="korean-text">
                    안녕하세요
                </span>&nbsp;
                <span className="english-text">
                    (Hello)
                </span>&nbsp;
                and welcome to Kim&apos;s Asian Market, where the vibrant spirit of Korean-American heritage
                meets the rich tapestry of Asian culture. As the proud owners we are thrilled to share our passion for
                authentic flavors, diverse traditions, and the joy of exploring the culinary and cultural treasures of Asia
                with Asheville!
                <span></span>&nbsp;
                <span className="korean-text">
                    감사합니다
                </span>&nbsp;
                <span className="english-text">
                        (Thank you)
                </span>&nbsp;for being a part of our Kim&apos;s family!
            </p>
        </div>
    );
}

export default AboutUs;
