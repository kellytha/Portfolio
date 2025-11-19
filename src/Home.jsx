import "../src/Home.css";
import CV from "../public/Kelly Thabo Nkohla 1.pdf"

function Home(){
    return(
        <>
        <section className="home">
            <img/>
            <div className="text-section">
                <h1 className="kelly">Kelly Thabo Nkohla.</h1>
                <h2>Frontend-End Developer/Data Analyst</h2>
                <a href={ CV }className="home-btn">See my Resume</a>
            </div>
        </section>
        </>
    )
}

export default Home;