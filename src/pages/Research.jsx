import React from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

const Research = () => {
    const papers = [
        {
            title: "Lung Cancer Diagnosis: Making Machines That Think Like Human Beings",
            platform: "Medium / Analytics Vidhya",
            description: "Built a neural network to classify CT lung scans for nodules using Keras, image augmentation, and PCA.",
            tags: ["CNN", "Medical Imaging", "Keras"],
            link: "https://medium.com" // Placeholder or actual link if known
        },
        {
            title: "Generative Adversarial Networks",
            platform: "ResearchGate",
            description: "Research on GANs, likely involving synthetic data generation and augmentation.",
            tags: ["GANs", "Deep Learning", "Generative Models"],
            link: "https://www.researchgate.net"
        },
        {
            title: "AI Agents for Supercharged Supply Chain and Inventory Management",
            platform: "Core & Outline Blog",
            description: "Explores Deep Q-Learning with Shaped Rewards to optimize inventory management.",
            tags: ["Reinforcement Learning", "Supply Chain", "AI Agents"],
            link: "#"
        }
    ];

    const interests = [
        {
            area: "Large Language Models (LLMs)",
            details: "Fine-tuning and instruction-tuning (e.g., llama-2-7b-chat-hf, nyx-finance-instruct).",
            link: null
        },
        {
            area: "Graph Neural Networks (GNNs)",
            details: "Graph analytics, structured data applications for business intelligence.",
            link: "/research/gnn"
        },
        {
            area: "Computer Vision",
            details: "Medical imaging, object detection, and spectral analysis.",
            link: null
        },
        {
            area: "Data Warehousing",
            details: "Building production-grade data warehousing systems from first principles.",
            link: "/research/data-warehousing"
        },
        {
            area: "Solving the Energy Crisis",
            details: "Implementing Physics and Neural Networks in enhancing Geothermal, Nuclear, and Hydroelectric power.",
            link: "/research/energy-crisis"
        }
    ];

    return (
        <div className="page-container container animate-fade-in">
            <h1 className="page-title">Research</h1>

            <div className="research-section">
                <h2>Research Interests</h2>
                <div className="interests-grid">
                    {interests.map((item, index) => (
                        item.link ? (
                            <Link to={item.link} className="interest-card" key={index}>
                                <h3>{item.area} <i className="lni lni-arrow-right-circle" style={{ fontSize: '0.8em' }}></i></h3>
                                <p>{item.details}</p>
                            </Link>
                        ) : (
                            <div className="interest-card" key={index}>
                                <h3>{item.area}</h3>
                                <p>{item.details}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>

            <div className="research-section">
                <h2>Publications & Articles</h2>
                <div className="papers-list">
                    {papers.map((paper, index) => (
                        <div className="paper-card" key={index}>
                            <div className="paper-content">
                                <h3>{paper.title}</h3>
                                <span className="platform">{paper.platform}</span>
                                <p>{paper.description}</p>
                                <div className="tags">
                                    {paper.tags.map((tag, i) => (
                                        <span key={i}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="read-link">
                                Read <i className="lni lni-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
