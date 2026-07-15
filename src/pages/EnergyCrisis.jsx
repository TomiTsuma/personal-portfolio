import React from 'react';
import { Link } from 'react-router-dom';
import './EnergyCrisis.css';

const EnergyCrisis = () => {
    const blogPosts = [
        {
            title: "Stabilizing Plasma in Tokamaks",
            date: "July 2026",
            description: "Implementing an imitation-learning controller that stabilizes kinetic plasma instabilities from just four sparse density sensors, using a causal TCN + Transformer to imitate a privileged field-cancellation expert.",
            tags: ["Plasma Physics", "Nuclear Fusion", "Imitation Learning"],
            link: "/research/energy-crisis/plasma-stabilization"
        },
        {
            title: "A Physics-Informed Neural Network for Digital-Twin Simulation of Binary Columnar Distillation",
            date: "June 2026",
            description: "Building a Physics-Informed Neural Network for simulating binary columnar distillation, modelling the separation of two chemical components toward 95% purity targets.",
            tags: ["PINN", "Chemical Engineering", "Digital Twin"],
            link: "/research/energy-crisis/columnar-distillation"
        }
    ];

    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">Solving the Energy Crisis</h1>
                <p className="research-subtitle">
                    Implementing Physics and Neural Networks in enhancing Geothermal, Nuclear, and Hydroelectric power.
                </p>
            </div>

            <div className="research-content">
                <section className="research-section">
                    <h2>Blog Posts</h2>
                    <div className="blog-posts-list">
                        {blogPosts.map((post, index) => (
                            <Link to={post.link} className="blog-post-card" key={index}>
                                <div className="blog-post-content">
                                    <h3>{post.title}</h3>
                                    <span className="post-date">{post.date}</span>
                                    <p>{post.description}</p>
                                    <div className="tags">
                                        {post.tags.map((tag, i) => (
                                            <span key={i}>#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="read-link">
                                    Read <i className="lni lni-arrow-right"></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EnergyCrisis;
