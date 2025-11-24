import React from 'react';
import './Entrepreneurship.css';

const Entrepreneurship = () => {
    return (
        <div className="page-container container animate-fade-in">
            <h1 className="page-title">Entrepreneurship</h1>

            <div className="venture-card">
                <div className="venture-header">
                    <div className="venture-logo">C&O</div>
                    <div className="venture-title">
                        <h2>Core & Outline</h2>
                        <p className="subtitle">Co-Founder & Lead Engineer</p>
                    </div>
                </div>

                <div className="venture-body">
                    <p className="venture-description">
                        An automated data platform for fintech and SaaS companies. We help businesses turn raw data into actionable dashboards and machine learning insights—fully automated from ingestion to visualization.
                    </p>

                    <div className="tech-stack">
                        <span>AWS</span>
                        <span>SageMaker</span>
                        <span>Snowflake</span>
                        <span>Kafka</span>
                        <span>React</span>
                        <span>Python</span>
                        <span>LLMs</span>
                    </div>

                    <div className="achievements">
                        <h3>Key Achievements</h3>
                        <ul>
                            <li><i className="lni lni-checkmark-circle"></i> Engineered data pipelines using AWS Lambda and Glue.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Built reinforcement learning-based recommendation engine.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Created text classification models for customer complaint routing.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Maintained open-source datasets on Hugging Face (nyx-finance-instruct).</li>
                        </ul>
                    </div>

                    <div className="venture-links">
                        <a href="https://huggingface.co/core-outline" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Hugging Face Org <i className="lni lni-link"></i>
                        </a>
                        {/* Add website link if available, otherwise just HF */}
                    </div>
                </div>
            </div>

            <div className="other-ventures">
                <h3>Other Ventures</h3>
                <div className="venture-grid">
                    <div className="mini-card">
                        <h4>Pawa Trip</h4>
                        <p>Co-Founder. Mobile app development for travel.</p>
                    </div>
                    <div className="mini-card">
                        <h4>Rydr</h4>
                        <p>Route-Based Ride Matching App. Built with React Native & Node.js.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entrepreneurship;
