import './Project.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#66a2fe', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#66a2fe', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  };

const Projects = () => {
    const projects = [
      {
        title: "Super Hero Resume",
        description: "Swing into action with my Spider-Man-themed resume. Showcase your skills and experiences in a heroic way! This project was built using HTML, CSS, and Git.",
        techStack: "HTML|CSS|Git",
        repoLink: "https://github.com/khushboo8252/React-pb-3/tree/main/Project2",
        websiteLink: "https://64971146b48fbc72e3584a06--resonant-marzipan-ad5b12.netlify.app/",
        imageSrc: "image/Project1.png"
      },
      {
        title: "Revv Rental Car",
        description: "Rev up your journey with the Revv Rental Car website, your one-stop destination for renting cars hassle-free. This full-stack project incorporates HTML, CSS, JavaScript, React, Node.js, and Git.",
        techStack: "HTML|CSS|JavaScript|React|Node.js|Git",
        repoLink: "https://github.com/khushboo8252/Project1",
        websiteLink: "https://656b1d57db89ad397b415f6f--storied-kataifi-a7568c.netlify.app/",
        imageSrc: "image/Project2.png"
      },
      {
        title: "Clock",
        description: "Experience the elegance of time with our modern and functional clock application. This project showcases a sleek digital or analog clock, providing accurate timekeeping with a user-friendly interface. Built using HTML, CSS, and JavaScript, this clock not only serves its practical purpose but also adds a touch of sophistication to any web environment. Explore the simplicity of time representation and enjoy the seamless experience of tracking hours, minutes, and seconds.",
        techStack: "HTML|CSS|JavaScript|Node.js|Git",
        repoLink: "https://github.com/masai-course/khushboo_kumari_cap05_035/tree/master/Clock%20Using%20HTML%2C%20CSS%20%26%20JS",
        websiteLink: "https://656b20354cdb7d3b25eec3ed--sparkly-chaja-70e6db.netlify.app/",
        imageSrc: "image/Project3.png"
      },
      {
        title: "Product List App",
        description: "Introducing our Product List App — the perfect tool to manage and organize your inventory. This full-stack application empowers businesses and individuals to keep track of products, streamline inventory management, and enhance overall efficiency. With a user-friendly interface, the app allows you to add, edit, and delete products seamlessly. The technology stack includes HTML, CSS, JavaScript, React for the frontend, Node.js for the backend, and MongoDB for data storage. Experience the convenience of a centralized product catalog and boost productivity with our Product List App.",
        techStack: "HTML|CSS|JavaScript|React|Node.js|Git",
        repoLink: "https://github.com/khushboo8252/DOM-Assignment/tree/main/fetch-scholar",
        websiteLink: "https://marvelous-druid-392cc3.netlify.app/",
        imageSrc: "image/Project4.png"
      },
      {
        title: "Weather App",
        description: "Stay ahead of the forecast with our Weather App — your go-to solution for real-time weather information. This intuitive application provides accurate weather updates, including temperature, humidity, wind speed, and more, for any location worldwide. Built using HTML, CSS, and JavaScript, with data fetched from a weather API, our Weather App offers a sleek and responsive design for a seamless user experience. Whether you're planning a trip or just staying informed about the local weather, our app has you covered. Explore the world of meteorology with our Weather App today!",
        techStack: "HTML|CSS|JavaScript",
        repoLink: "https://github.com/your-username/weather-app",
       websiteLink: "https://656b270ccf0cf53eeb49ed25--singular-sable-ab5788.netlify.app/",
        imageSrc: "image/Project5.png"
      },
      {
        title: "TATA 1mg",
        description: "TATA 1mg is an online healthcare platform that provides users with access to a wide range of healthcar products, services and information.",
        repoLink: "https://github.com/khushboo8252/Project-1mg/tree/main/Project-2",
        techStack: "HTML|CSS|JavaScript|Node.js|Git|React|Node.js|MongoDB|Express.js",
        websiteLink: "https://65c6fe92cf29b62c62ea1151--silver-lamington-c305ff.netlify.app/",
        imageSrc: "image/Project6.png"
      },
      
    ];
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enable arrow navigation
        nextArrow: <SampleNextArrow />, // Custom next arrow component
        prevArrow: <SamplePrevArrow />  // Custom previous arrow component
      };
  
    return (
      <div id="projects" className="projects-container">
          <h2 className='project-heading'>Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img className='imagesrc' src={project.imageSrc} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Tech Stack: {project.techStack}</p>
                <div className="project-buttons">
                  <button onClick={() => window.open(project.repoLink)}>Git Repo</button>
                  <button onClick={() => window.open(project.websiteLink)}>Website</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default Projects;
  
  