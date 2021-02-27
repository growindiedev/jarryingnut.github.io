import React from 'react';
import Footer from './Footer';
import Header from './Header';
//import animation from './animation.css'


const Layout = (props) => {

    return( 
            <div >
                {/* <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div> */}
                <Header/>
                <div className="content-main">
                 {props.children}
                </div>
                <Footer/>
            </div>
    )
}

export default Layout