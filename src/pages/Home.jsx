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
                        Based in <span className="text-primary">Malaysia</span>
                    </h1>

                    <p className="hero-description">
                        I'm an ML engineer working on generative and graph neural architectures for molecular
                        design, and physics-informed learning for scientific and engineering systems — spanning
                        de novo drug discovery, plasma control, and process simulation.
                    </p>

                    <div className="hero-actions">
                        <a href="mailto:tommytsuma7@gmail.com" className="btn btn-primary">
                            Get In Touch <i className="lni lni-arrow-right"></i>
                        </a>
                        <a href={`${import.meta.env.BASE_URL}Thomas_Tsuma_Resume_Research_Scientist.pdf`} target="_blank" className="btn btn-outline" download="Thomas_Tsuma_Resume_Research_Scientist.pdf">
                            Download CV <i className="lni lni-download"></i>
                        </a>
                    </div>

                    <div className="resume-variants">
                        Also available:
                        <a href={`${import.meta.env.BASE_URL}Thomas_Tsuma_Resume_Applied_ML.pdf`} target="_blank" download="Thomas_Tsuma_Resume_Applied_ML.pdf">Applied ML resume</a>
                        <span aria-hidden="true">·</span>
                        <a href={`${import.meta.env.BASE_URL}Thomas_Tsuma_CV_PhD.pdf`} target="_blank" download="Thomas_Tsuma_CV_PhD.pdf">PhD CV</a>
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
                        <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt="Thomas Tsuma" />
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
