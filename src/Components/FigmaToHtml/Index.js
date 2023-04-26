import React , {useState} from 'react';
import "./index.css"
import logo from "../FigmaToHtml/img/Logo.svg";
import Hero from "../FigmaToHtml/img/heroimg.svg";
import insta from "../FigmaToHtml/img/Vector.svg";
import fb from "../FigmaToHtml/img/Vector1.svg";
import twitter from "../FigmaToHtml/img/Vector2.svg";
import rightBg from "../FigmaToHtml/img/vectorbg.svg";
import RectangleBrown from "../FigmaToHtml/img/Rectangle6.svg";
import RectangleRed from "../FigmaToHtml/img/Rectangle7.svg";
import RectangleLight from "../FigmaToHtml/img/Rectangle8.svg";
import mblRightBg from "../FigmaToHtml/img/mbl-right-bg.svg";
import mblLeftBg from "../FigmaToHtml/img/mbl-left-bg.svg";
import mbloptions from "../FigmaToHtml/img/menu-icon.svg";
import mblcross from "../FigmaToHtml/img/menu-cross.svg";

export default function Index() {
    let [visibility , setVisibility]=useState(true);
    const menuHandler = ()=>{
        setVisibility(false);
    }
    const crossHandler=()=>{
        setVisibility(true);
    }
    return (
        <div className='tab'>
            <div className='main-container'>
                {/* Nav section start */}
                <nav>
                    <div className='logo'>
                        <img src={logo} alt='logo'></img>
                    </div>
                    <div className='nav-items'>
                        <ul><li><a className='active'>Home</a></li></ul>
                        <ul><li><a>Testimonials</a></li></ul>
                        <ul><li><a>Features</a></li></ul>
                        <ul><li><a>Downloads</a></li></ul>
                        <ul><li><a className='btn btn-light'>Contact</a></li></ul>
                    </div>
                    <div className='mobile-menu' style={{display:!visibility?"none":"block"}}>
                        <div onClick={menuHandler} className='mobile-options mbl-active'><img src={mbloptions} alt='mbl-options'></img></div>
                    </div>
                </nav>
                <nav className='mobile-nav' style={{display:visibility?"none":"block"}}>
                    <div className='mbl-nav-items'>
                        <div onClick={crossHandler} className='mobile-cross'><img src={mblcross} alt='mbl-cross'></img></div>
                        <ul>
                        <li><a className='active'>Home</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Features</a></li>
                        <li><a>Downloads</a></li>
                        <li><a className='btn btn-light'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
                {/* Nav Section End */}

                {/* Hero Section */}
                <div className='hero-section'>
                    <div className='hero-section-left'>
                        <img src={Hero} alt='Hero-img'></img>
                        <div className='hero-ground'></div>
                    </div>

                    <div className='hero-section-right'>
                        <h1 className='hero-heading'>Learn To Design<br />
                            Awesome Websites</h1>
                        <p>The best way to learn is to actually do it. You can find step by step
                            tutorials for web designing here</p>
                        <a className='btn btn-dark'>Learn More</a>
                    </div>
                </div>
                <div className='social-links'>
                    <a href='#'><img src={insta} alt='insta'></img></a>
                    <a href='#'><img src={fb} alt='fb'></img></a>
                    <a href='#'><img src={twitter} alt='twitter'></img></a>
                </div>
                {/* mobile bg */}
            <div><img className='mbl-right-bg' src={mblRightBg} alt='right-bg'></img></div>
            <div><img className='mbl-left-bg' src={mblLeftBg} alt='right-bg'></img></div>
            </div>
            {/* Main Container */}
            <div className='right-bg'>
                <div><img className='left-bg3' src={RectangleLight} alt='right-bg'></img></div>
                <div><img className='left-bg2' src={RectangleRed} alt='right-bg'></img></div>
                <div><img className='left-bg1' src={RectangleBrown} alt='right-bg'></img></div>
                <div><img className='right-bg1' src={rightBg} alt='right-bg'></img></div>
            </div>
        </div>
    )
}
