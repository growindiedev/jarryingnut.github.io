import React from 'react';
import './header.styles.scss';
import {Link, graphql, useStaticQuery} from 'gatsby'


const Header = () => {

    const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }
    `)
    
    return (
            <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>

                <div className="header-main">
                        <div className="dev">
                        <h1>{data.site.siteMetadata.title}</h1>
                        <span className="attr">Maverick</span>
                        <span className="dot">•</span>
                        <span className="attr">Developer</span>
                        <span className="dot">•</span>
                        <span className="attr">Wanderer</span>
                        </div>
                        <div className="icons">
                        <a href='https://github.com/jarryingnut' target='_blank'><i className="fab fa-github"></i></a>
                        <a href='https://twitter.com/jarryingnut' target='_blank'><i className="fab fa-twitter"></i></a>
                        <a href='https://linkedin.com/in/jarryingnut' target='_blank'><i className="fab fa-linkedin"></i></a>
                        <a href='https://stackoverflow.com/users/15129870/jarryingnut' target='_blank'><i className="fab fa-stack-overflow"></i></a>
                        <a href="mailto:abhishekranjan622@outlook.com"><i class="fab fa fa-envelope" ></i></a>
                        <a href="./documents/Abhishek.pdf" target="_blank"><i class="fab fa fa-file-pdf" ></i></a>


                        </div>
                        <span className="pages-link"><Link to="/" ><span className="attr-link">Portfolio</span></Link>
                        |
                        <Link to="/blog"><span className="attr-link">Blog</span></Link>
                        |
                        <Link to="/about" ><span className="attr-link">About</span></Link>
                        </span>

                        
                        <hr/>
                 </div>
            </div>
        
    );
}

export default Header