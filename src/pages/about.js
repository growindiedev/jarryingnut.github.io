import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import importedImage from "../images/profile.jpeg"
import aboutcss from './about.css'





const About = (props) => {

    return (
        <Layout>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> 
                <img src={importedImage} className={aboutStyle.img} alt="" / >
                </div>
                
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>New Delhi, India</p></div>
                <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>UIET, Kurukshetra University</p></div>
                {/* <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p></p></div> */}
                <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>English and Hindi</p></div>
                </div>
            </div>

            <div className={aboutStyle.derecha}>
                <p>
                My name is Abhishek Ranjan and I'm a full-stack developer. I’m currently working towards the completion of my degree in computer science. 
                I have various hobbies but I’m extremely passionate about stock markets, startups, and the innovation happening around me probably because 
                of my dream to start my own company one day and change lives by creating something meaningful for the world.
                </p>
                <p>
                I'm fluent in JavaScript and proficient in TypeScript and the JS/TS web stack (Node, express, React/Redux). 
                If you'd like to chat, you can contact me through e-mail, LinkedIn , Github and twitter. I'm always interested in hearing about any new hybrid role which involves multiple skills. 
                This website was written in React and built with Gatsy.js. The source code can be viewed <a href="https://github.com/jarryingnut/portfolio" className={aboutStyle.here} target="_blank">here.</a>
                </p>
               
                

                        <div id="skillsDiv" className={aboutStyle.logoContainer}>
                        <div id="techTitle" data-aos="fade-up" className={aboutStyle.logoContainer}>
                        <h3>Technologies I've Worked With</h3>
                        </div>
                        <div id="skillsMain">
                        <div class="techDiv" id="frontend" data-aos="fade-up">
                            <div class="techDivTitle">
                            Frontend
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/reactlogo2.png" alt="React" />
                            <span class="tooltiptext">React</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/reduxlogo2.png" alt="Redux" />
                            <span class="tooltiptext">Redux</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/htmllogo.png" alt="HTML" />
                            <span class="tooltiptext">HTML</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/csslogo.png" alt="CSS" />
                            <span class="tooltiptext">CSS</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/chakra.png" alt="chakra" />
                            <span class="tooltiptext">ChakraUI</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/gatsby.svg" alt="gatsby" />
                            <span class="tooltiptext">GatsbyJs</span>
                            </div>
                            
                        </div>

                        <div class="techDiv" id="backend" data-aos="fade-up">
                            <div class="techDivTitle">
                            Backend
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/nodelogo.png" alt="Node.js" />
                            <span class="tooltiptext">Node.js</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/expresslogo2.png" alt="Express" />
                            <span class="tooltiptext">Express</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/sequelize.png" alt="Sequelize" />
                            <span class="tooltiptext">Sequelize</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/postgreslogo.png" alt="PostgreSQL" />
                            <span class="tooltiptext">PostgreSQL</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/firebase.png" alt="firebase.js"/>
                            <span class="tooltiptext">Firebase</span>
                            </div>
                            
                            <div class="tech tooltip">
                            <img src="/assets/tech/graphql.svg" alt="graphql"/>
                            <span class="tooltiptext">GraphQl</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/mongodb.png" alt="mongodb"/>
                            <span class="tooltiptext">MongoDB</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/apollo.png" alt="apollo"/>
                            <span class="tooltiptext">Apollo</span>
                            </div>
                            
                        </div>

                        <div class="techDiv" id="devops" data-aos="fade-up">
                            <div class="techDivTitle">
                            DevOps
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/gitlogo.png" alt="Git" />
                            <span class="tooltiptext">Git</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/githublogo.png" alt="Github" />
                            <span class="tooltiptext">Github</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/heroku.png" alt="Heroku" />
                            <span class="tooltiptext">Heroku</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/aws.png" alt="aws"/>
                            <span class="tooltiptext">AWS</span>
                            </div>
                        </div>

                        <div class="techDiv" id="languages" data-aos="fade-up">
                            <div class="techDivTitle">
                            Languages
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/jslogo.png" alt="JavaScript" />
                            <span class="tooltiptext">JavaScript</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/typescript.png" alt="typescript" />
                            <span class="tooltiptext">TypeScript</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/java.png" alt="Java" />
                            <span class="tooltiptext">Java</span>
                            </div>
                        </div>

                        <div class="techDiv" id="tools" data-aos="fade-up">
                            <div class="techDivTitle">
                            Tools
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/vscode.png" alt="VS Code" />
                            <span class="tooltiptext">VS Code</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/postman.png" alt="Postman" />
                            <span class="tooltiptext">Postman</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/chrome.png" alt="chrome"/>
                            <span class="tooltiptext">Chrome</span>
                            </div>
                            
                        </div>

                        <div class="techDiv" id="testing" data-aos="fade-up">
                            <div class="techDivTitle">
                            Testing
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/cypress.png" alt="cypress" />
                            <span class="tooltiptext">Cypress</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/jest.png" alt="jest" />
                            <span class="tooltiptext">Jest</span>
                            </div>
                            <div class="tech tooltip">
                            <img src="/assets/tech/react-testing-library.png" alt="react testing library" />
                            <span class="tooltiptext">React Testing Library</span>
                            </div>
                        </div>
                        
                        </div>
                    </div>
  

           
                <div className={aboutStyle.socialContainer}>
                <p>Send me a message!</p>
                <a className={aboutStyle.social} href='https://github.com/jarryingnut' target='_blank'><i className="fab fa-github"></i></a>
                <a className={aboutStyle.social} href='https://twitter.com/jarryingnut' target='_blank'><i className="fab fa-twitter"></i></a>
                <a className={aboutStyle.social} href='https://linkedin.com/in/jarryingnut' target='_blank'><i className="fab fa-linkedin"></i></a>
                <a className={aboutStyle.social} href='https://stackoverflow.com/users/15129870/jarryingnut' target='_blank'><i className="fab fa-stack-overflow"></i></a>
                <a className={aboutStyle.social} href="mailto:abhishekranjan622@outlook.com"><i class="fab fa fa-envelope" ></i></a>
                </div>




            </div>

            </div>
        </Layout>
    )
}

export default About