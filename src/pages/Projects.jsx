import "../styles/Projects.css";

function Projects(){

const projects = [
  {
    title:"PureCars Vehicle Management System",
    image:"/images/purecars.png",
    description:
    "A full-stack vehicle management application built with PHP MVC architecture, MySQL database integration, and CRUD functionality.",
    tech:[
      "PHP",
      "MySQL",
      "MVC",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github:"https://github.com/maucol3633/PureCars"
  },

  {
    title:"Sports Reference Redesign",
    image:"/images/sports-reference.jpg",
    description:
    "A React-based redesign of Sports Reference featuring modern UI components, responsive layouts, and sports-focused navigation.",
    tech:[
      "React",
      "Vite",
      "CSS",
      "UI/UX"
    ],
    github:"https://github.com/maucol3633/sports-reference-redesign"
  },


  {
    title: "Royster Fight Hub",
    image: "/images/royster-fight-hub.jpg",
    description:
      "A web application focused on organizing and managing fight-related content with a modern responsive interface.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "UI/UX"
    ],
    github:"https://github.com/maucol3633/royster_fight_hub"
  },


  {
    title:"Shoe Tracker Dashboard",
    image:"/images/shoe-tracker.png",
    description:
    "An inventory and sales tracking dashboard for managing products, sales history, and reporting.",
    tech:[
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    github:"https://github.com/maucol3633/shoe_dashboard"
  }

];


return(

<section className="projects">

<div className="projects-container">

<h1>
Web Development Projects
</h1>

<p className="projects-intro">
A collection of full-stack applications, responsive websites,
and UI/UX development projects.
</p>


<div className="projects-grid">


{projects.map((project,index)=>(

<div 
className="project-card"
key={index}
>


<img 
src={project.image}
alt={project.title}
/>


<div className="project-content">

<h2>
{project.title}
</h2>


<p>
{project.description}
</p>


<div className="tech-list">

{project.tech.map((item)=>(

<span key={item}>
{item}
</span>

))}

</div>


<a 
href={project.github}
target="_blank"
rel="noreferrer"
>

<button>
View GitHub
</button>

</a>


</div>


</div>

))}


</div>

</div>

</section>

);

}

export default Projects;