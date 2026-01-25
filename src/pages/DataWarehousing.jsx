import React from 'react';
import { Link } from 'react-router-dom';
import './DataWarehousing.css';

const DataWarehousing = () => {
    const blogPosts = [
        {
            title: "Building a Production-Grade Data Warehouse from First Principles",
            date: "January 2026",
            description: "Documenting the journey of building a production-grade data warehouse that rivals Snowflake's capabilities, incorporating graph neural network principles and focusing on correctness, predictability, and maintainability.",
            tags: ["Data Warehousing", "First Principles", "System Design", "GNN"],
            link: "/research/data-warehousing/first-principles"
        }
    ];

    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">Data Warehousing Research</h1>
                <p className="research-subtitle">
                    Building production-grade data warehousing systems from first principles,
                    incorporating modern techniques and rigorous engineering practices.
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

export default DataWarehousing;
