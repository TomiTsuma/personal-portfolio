import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero container">
                <div className="hero-content animate-fade-in">
                    <div className="badge">
                        Hi everyone <span className="wave">👋</span>, I'm Thomas Tsuma
                    </div>

                    <h1>
                        Machine Learning Engineer <br />
                        Based in <span className="text-primary">Nairobi, Kenya</span>
                    </h1>

                    <p className="hero-description">
                        I'm a Machine Learning Engineer passionate about building local capacity and creating designs that not only meet functional requirements but also delight users.
                        Specializing in LLMs, GNNs, and automated data platforms.
                    </p>

                    <div className="hero-actions">
                        <a href="mailto:tommytsuma7@gmail.com" className="btn btn-primary">
                            Get In Touch <i className="lni lni-arrow-right"></i>
                        </a>
                        <a href="/resume.pdf" target="_blank" className="btn btn-outline">
                            Download CV <i className="lni lni-download"></i>
                        </a>
                    </div>

                    <div className="social-links">
                        <span>Find me on:</span>
                        <a href="https://www.linkedin.com/in/tomitsuma" target="_blank" rel="noopener noreferrer"><i className="lni lni-linkedin-original"></i></a>
                        <a href="https://github.com/TomiTsuma" target="_blank" rel="noopener noreferrer"><i className="lni lni-github-original"></i></a>
                        <a href="https://huggingface.co/core-outline" target="_blank" rel="noopener noreferrer">HF</a>
                    </div>
                </div>

                <div className="hero-image animate-fade-in">
                    <div className="image-wrapper">
                        {/* Placeholder for user image - user should replace this */}
                        <img src="https://ui-avatars.com/api/?name=Thomas+Tsuma&background=1a1a1a&color=fff&size=500" alt="Thomas Tsuma" />
                        <div className="decorative-shape"></div>
                        <div className="scroll-down">
                            <div className="circle-text">
                                <svg viewBox="0 0 100 100" width="100" height="100">
                                    <defs>
                                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fontSize="12">
                                        <textPath xlinkHref="#circle">
                                            explore more about me • scroll down •
                                        </textPath>
                                    </text>
                                </svg>
                                <i className="lni lni-arrow-down center-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
