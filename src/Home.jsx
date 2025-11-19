import "../src/Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <section className="home">
            <img/>
            <div className="text-section">
                <h1 className="kelly">Kelly Thabo Nkohla.</h1>
                <h2>Frontend-End Developer/Data Analyst</h2>
                <Link to="/contact"><button className="home-btn">Contact Me</button></Link><br/>
                <button className="home-btn">See my Resume</button>
            </div>
        </section>
        </>
    )
}

export default Home;