import "../src/index.css";
import CV from "/Kelly Thabo Nkohla 12.pdf"

function About() {
    return (
    <section className="flex flex-col justify-center p-10 gap-4 min-h-screen bg-linear-to-r from-[#18181A] to-[#051024] text-white shadow-lg">
      <h1 className="text-bold font-5xl p-4">About Me</h1>
      <p className="text-lg">
        I'm a junior web developer with  astrong foundation in full stack development. 
        I've completed a full stack web development bootcamp where I gained hands-on experience with technologies like React, JavaScript, Node.js, and more.
      </p>
      <p className="text-lg">I enjoy working on projects that involve :</p>
      <ul>
        <li>Clean and responsive UI design</li>
        <li>Logical problem solving </li>
        <li>Building features that improve user experience </li>
        <li>Learning new technologies and improving existing skills</li>
      </ul>
      <a className="p-5 mt-3 text-black hover:bg-black-200" href={ CV }>Kelly's CV</a>
    </section>
  );
}

export default About;

