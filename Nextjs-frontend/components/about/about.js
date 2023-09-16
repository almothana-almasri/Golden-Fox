import React from 'react';
import Image from 'next/image';
import email from './images/email.png'
import github from './images/github.png'
import mothana from './images/mothan.jpeg'
import mahdi from './images/mahdi.jpeg'
import moath from './images/moath.jpg'

function About() {
    return (
        <div className='whole-about'>
            <div className='body11'>
                <div className='aboutbody'>

                    <h1 className="aboutheader1">MEET OUR TEAM</h1>
                    <div className="aboutline1"></div>
                    <div className="card-row">

                        <div className="person">
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 1" />
                                    <img className="img img3" src={moath.src} alt="Image 1" />
                                </div >
                            </div>
                            <div className="divider"></div>
                            <div className="name">Mo'ath Shakhatreh</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: moath.shakhatreh@gmail.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>

                        <a href="https://github.com/Moath-shakhatreh" target="_blank">
                            <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                        </div>

                        <div className="person">
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 3" />
                                    <img className="img img3" src={mahdi.src} alt="Image 3" />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="name">Mahdi Malkawi</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: mahdimalkawi98@hotmail.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>

                        <a href="https://github.com/mahdimalkawi1" target="_blank">
                        <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                        </div>

                        <div className="person">
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 2" />
                                    <img className="img img3" src="https://avatars.githubusercontent.com/u/125547543?v=4" alt="Image 2" />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="name">Mutaz Abutaha</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: mutazabutaha13@outlook.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>

                        <a href="https://github.com/MutazAbutaha" target="_blank">
                        <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                            
                        </div>
                    </div>
                    <div className="card-row">

                        <div className="person">
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 2" />
                                    <img className="img img3" src={mothana.src} alt="Image 2" />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="name">Al-Mothana Al-Masri</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: mothana.almasri.99@gmail.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>

                        <a href="https://github.com/almothana-almasri" target="_blank">
                        <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                        </div>

                        <div className="person">
                            
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 2" />
                                    <img className="img img2" src="https://avatars.githubusercontent.com/u/125805246?v=4" alt="Image 2" />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="name">Duaa Melhem</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: Drduaamelhem@gmail.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>
                        
                        <a href="https://github.com/doaamelhem96" target="_blank">
                        <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                        </div>

                        <div className="person">
                            <div className="container">
                                <div className="container-inner">
                                    <img className="circle" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg" alt="Profile Image 2" />
                                    <img className="img img2" src="https://avatars.githubusercontent.com/u/125604498?v=4" alt="Image 2" />
                                    <a href={`mailto:moath.shakhatreh@gmail.com`} className="icon">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                {/* Icon for GitHub */}
                                <a href="https://github.com/Moath-shakhatreh" className="icon">
                                    <i className="fab fa-github"></i>
                                </a>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="name">Zekra Quraan</div>
                            <div className="title">Software Developer</div>
                            <div className="links">
                        <a href="mailto: zekraquraan7@gmail.com" target="_blank">
                        <img className="link4" src={email.src} alt=""></img>
                        </a>

                        <a href="https://github.com/zekraquraan" target="_blank">
                        <img className="link4" src={github.src} alt=""></img>
                        </a>
                    </div>
                        </div>
                    </div>
                </div>

                <div className="p1_A">
                    <div>

                        <h1 className="aboutheader3">Golden Fox</h1>
                        <div className="aboutline"></div>
                    </div>
                    {/* <img className="logo" src="https://scalebranding.com/wp-content/uploads/2022/02/golden-fox.jpg" alt=""></img> */}
                    <div className='aboutbox'>
                    <p className='bbb'>An online store where you can explore a vast collection of products and effortlessly make purchases.
                        Additionally, you have the option to create a curated list of your favorite items for easy reference and future shopping.</p>
                    </div>
                </div>
                <div className="p2_A">
                    <div>
                        <h1 className="aboutheader2">Our vision</h1>
                        <div className="aboutline"></div>
                    </div>
                    <div className='visionbox'>
                    <p className='bbb'>Our vision is to be the ultimate online shopping destination,
                        offering a wide range of high-quality products while enabling customers to easily create and manage their personalized lists of favorites,
                        making shopping both convenient and enjoyable.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;