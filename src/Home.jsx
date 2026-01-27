import "../src/index.css";

function Home(){
    return(
        <>
        <section className="flex justify-center min-h-screen bg-linear-to-r from-[#051024] to-[#18181A]">
            <img/>
            <div className="flex flex-col justify-center p-10 gap-4">
                <h1 className="text-bold font-5xl p-4 text-white">Hi, I'm Kelly Thabo Nkohla.</h1>
                <h2 className="text-white text-3xl ">Junior Web Developer| React. Javascript. Node.js</h2>
                <p className="text-white text-lg">I'm a self taught web developer with hands on experience building responsive, real-world web applications. 
                    I focus on creating clean user interfaces, writing maintainable code, and solving practical problems using 
                    modern web technologies.
                </p>
                <p className="text-white text-lg">
                    I enjoy turning ideas into working products and continuously improving my skills through hands-on projects and real-world development.
                </p>
            </div>
        </section>
        </>
    )
}

export default Home;