import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PersonWorkspace, MortarboardFill } from 'react-bootstrap-icons'
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';

export const Projects = () => {

  const codingProfiles = [
    { platform: 'LeetCode', icon: <SiLeetcode fontSize={'4.5rem'} />, src: 'https://leetcode.com/abhay_9839/', username: 'abhay_9839' },
    { platform: 'HackerRank', icon: <FaHackerrank fontSize={'4.5rem'} />, src: "https://www.hackerrank.com/profile/abhay_9839", username: '@abhaysharma0983' },
    { platform: 'GeeksforGeeks', icon: <SiGeeksforgeeks fontSize={'4.5rem'} />, src: "https://auth.geeksforgeeks.org/user/abhay_9839/practice/", username: 'abhay_9839' },
    { platform: 'CodeChef', icon: <SiCodechef fontSize={'4.5rem'} />, src: "https://www.codechef.com/users/abhay_9839", username: 'abhay_9839' },
  ];

  const experiences = [
    {
      year: 'January 2025 - Present',
      title: 'Software Engineer @Genicminds Tech Pvt Ltd',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <li>
            Delivered 5+ full-stack web applications, including 3 government portals (Ulhasnagar & Kulgaon Badlapur Municipal Corporations) serving 20,000+ monthly active users.
          </li>
          <li>
            Architected an AI-powered CMS integrating OpenAI & Gemini APIs with RBAC across 4+ websites, cutting manual content authoring effort by 40%.
          </li>
          <li>
            Engineered end-to-end core modules for the 360 Degree Animal Parenting System, covering procurement, beneficiary lifecycle, reporting, and livestock management.
          </li>
          <li>
            Built the Smart Neckband (SNB) IoT tracking module for real-time livestock monitoring, integrating GPS, temperature, heart rate, and activity sensor streams.
          </li>
          <li>
            Designed scalable REST APIs and optimized database queries to slash response times by up to 25%, securing portals with JWT, bcrypt, and dynamic CAPTCHA.
          </li>
          <li>
            Built high-performance dashboards using React.js and Tailwind CSS while driving 15+ Agile sprint cycles, conducting code reviews, and resolving 15+ production issues.
          </li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: 'June 2024 - December 2024 (6 months)',
      title: 'SDE Intern @Salgem Infoigy Tech Pvt Ltd',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Gained hands-on experience in software development through real-world projects.</li>
          <li>Contributed to the design, implementation, and optimization of key software solutions.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality outcomes.</li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: 'August 2023 - December 2023 (5 months)',
      title: 'SDE Intern @Essentia.dev',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Directed the seamless deployment and tailored configuration of open-source ERPNext software modules and layouts within a robust production environment on Amazon EC2.</li>
          <li>Employed Docker and Nginx to elevate the efficiency and precision of the company&apos;s business processes, meticulously fine-tuning resource allocation.</li>
          <li>This strategic integration streamlined operations, enhancing overall performance with an optimized workflow.</li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    { year: '2020 - 2024', title: 'Dr. A. P. J. Abdul Kalam Technical University', description: 'Bachelor of Technology (Computer Science and Engineering)', icon: <MortarboardFill /> }
  ];

  const projects = [
    {
      title: "Code Campus",
      description: "Fostering a vibrant community committed to empowering students and enthusiasts within the dynamic landscape of computing, our mission is to kindle a fervor for information technology that transcends the boundaries of conventional coursework.",
      imgUrl: img7,
      src: "https://cosmiccoders-official.web.app/",
    },
    {
      title: "Code Campus",
      description: "An online learning website solely dedicated to assisting students in acquiring coding skills",
      imgUrl: img1,
      src: "https://codecampus363.web.app/",
    },
    {
      title: "Invoice App",
      description: "A user-friendly app that empowers shopkeepers to generate invoices within seconds by following a simple set of instructions",
      imgUrl: img2,
      src: "https://invoicer-app.netlify.app/",
    },
    {
      title: "Contact Manager",
      description: "Web contact manager app which can store contacts and user can perform CRUD operations on the contacts",
      imgUrl: img3,
      src: "https://contact-manager-v8pm.onrender.com/",
    },
    {
      title: "iNotebook",
      description: "iNotebook is a React Application for managing personal notes on the cloud",
      imgUrl: img4,
      src: "https://github.com/Abhay31/iNotebook",
    },
    {
      title: "TextUtils",
      description: "TextUtils is a utility website that enables you to manipulate your text according to your preferences",
      imgUrl: img5,
      src: "https://textutils-we-bapp.netlify.app/",
    },
    {
      title: "Urban News",
      description: "UrbanNews is a ultimate news app designed to deliver quick daily news bites",
      imgUrl: img6,
      src: "https://github.com/Abhay31/UrbanNews",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Work</h2>
                  <p>Throughout my exploration of the realm of Computer Science and Engineering, I have acquired a versatile skill set and fostered a mindset centered around problem-solving. My projects showcases my proficiency in implementing innovative solutions and delivering concrete outcomes.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: "pointer" }}>Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ cursor: "pointer" }}>Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ cursor: "pointer" }}>Profiles</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Container className='m-5 p-5'>
                          <VerticalTimeline>
                            {experiences.map((experience, index) => (
                              <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element"
                                contentStyle={{ background: 'white', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '25px solid  #f4f4f4' }}
                                date={experience.year}
                                iconStyle={{ background: '#383838', color: '#fff' }}
                                icon={experience.icon}
                              >
                                <h3 className="vertical-timeline-element-title d-flex justify-content-center text-muted">{experience.title}</h3>
                                <span className='d-flex h5 justify-content-around m-4 text-muted'>{experience.description}</span>
                              </VerticalTimelineElement>
                            ))}
                          </VerticalTimeline>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className='justify-content-between'>
                          <Row>
                            {codingProfiles.map((profile, index, src) => (
                              <Col key={index} xs={6} sm={3}>
                                <div className="profile m-4 d-flex justify-content-center align-items-center flex-column">
                                  <a href={profile.src} target="_blank" rel="noreferrer">
                                    <div className="icon m-2 text-light">{profile.icon}</div>
                                  </a>
                                  <div className="platform m-2">{profile.platform}</div>
                                  <div className="username m-2">{profile.username}</div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="image6" src={colorSharp2}></img>
    </section>
  )
}
