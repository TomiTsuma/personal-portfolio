import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Crop Nutrition Laboratory Services (Cropnuts)",
            role: "Machine Learning Engineer",
            period: "September 2022 - Present",
            location: "Limuru, Kenya",
            description: [
                "Developed an end-to-end automation pipeline for ANN optimization, standardizing model updates with a 4-day turnaround.",
                "Built evaluation tools for soil spectroscopy models integrating advanced metrics (RMSE, R², etc.).",
                "Designed spectral outlier detection using RNN Autoencoder.",
                "Deployed models as Azure Functions on Microsoft Azure ML.",
                "Generated synthetic alpha-atr spectra using pix2pix GANs, leading to a $3M USD contract."
            ]
        },
        {
            company: "Paylend Limited",
            role: "Mobile Development | AI Engineer",
            period: "January 2022 - September 2022",
            location: "Nairobi, Kenya",
            description: [
                "Engineered object identification model using TensorFlow for ID detection, reducing fraud.",
                "Implemented RFM analysis model for data-driven loan limits.",
                "Developed seasonal trend forecasting using ARIMA.",
                "Built credit risk model using logistic regression to predict defaulters."
            ]
        },
        {
            company: "Circularity Ltd",
            role: "Machine Learning Engineer",
            period: "November 2020 - July 2022",
            location: "Ongata Rongai, Kenya",
            description: [
                "Designed plastic bottle identification system using CNN and TensorFlow Object Detection.",
                "Adapted InceptionV3 for image classification.",
                "Produced MVP leading to MOU with Coca-Cola.",
                "Featured on KTN’s The Innovator."
            ]
        }
    ];

    return (
        <div className="page-container container animate-fade-in">
            <h1 className="page-title">Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="role">{exp.role}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <div className="meta">
                                <span className="period"><i className="lni lni-calendar"></i> {exp.period}</span>
                                <span className="location"><i className="lni lni-map-marker"></i> {exp.location}</span>
                            </div>
                            <ul className="description-list">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
