import React from 'react';
import './DWFirstPrinciples.css';

const DWFirstPrinciples = () => {
    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">Building a Production-Grade Data Warehouse from First Principles</h1>
                <p className="research-subtitle">
                    Documenting the journey of building a data warehouse that rivals Snowflake's capabilities,
                    incorporating graph neural network principles and rigorous engineering practices.
                </p>
                <div className="post-meta">
                    <span className="post-date">January 2026</span>
                    <div className="post-tags">
                        <span>#DataWarehousing</span>
                        <span>#FirstPrinciples</span>
                        <span>#SystemDesign</span>
                        <span>#GNN</span>
                    </div>
                </div>
            </div>

            <div className="research-content">
                {/* Introduction */}
                <section className="research-section">
                    <p className="intro-text">
                        Most people that know me have experienced how critical I am of Snowflake and their offerings
                        despite the fact that I am easily their most loyal user (I'm a walking contradiction). I realize
                        now that it probably only makes sense to build what my idea of a production-grade data warehouse
                        software would be. It also makes sense that I document the process in as much technical detail
                        as possible both for my own future reference as well as to guide any other person who may want
                        to build upon the work that I do.
                    </p>
                    <p className="intro-text">
                        Understandably, as this work coincides with my research on graph neural networks, I will attempt
                        to incorporate some of those principles in this project as well. As well, note my use of "first
                        principles" and not "from scratch". I don't plan on inventing a new programming language but I
                        do want to get down to the basics of what building a data warehouse entails.
                    </p>
                </section>

                {/* Why Production-Grade */}
                <section className="research-section">
                    <h2>Why Production-Grade?</h2>
                    <p>
                        I'm keen on working on a production grade data warehousing software since most "first principles"
                        or "from scratch" projects often end up in the prototypes section of people's GitHub repositories.
                        I'd like to see if I can rival Snowflake's provisions. To accurately ascertain the capabilities
                        of my system, I'll test it out on the following measures:
                    </p>

                    <div className="measures-grid">
                        <div className="measure-card">
                            <div className="measure-icon">
                                <i className="lni lni-checkmark-circle"></i>
                            </div>
                            <h3>Correctness under heavy loads</h3>
                            <p>Ensuring accurate results even when processing massive data volumes</p>
                        </div>
                        <div className="measure-card">
                            <div className="measure-icon">
                                <i className="lni lni-shield"></i>
                            </div>
                            <h3>Predictability under failure</h3>
                            <p>Maintaining consistent behavior when components fail</p>
                        </div>
                        <div className="measure-card">
                            <div className="measure-icon">
                                <i className="lni lni-users"></i>
                            </div>
                            <h3>Explainability to users</h3>
                            <p>Providing clear insights into system operations and decisions</p>
                        </div>
                        <div className="measure-card">
                            <div className="measure-icon">
                                <i className="lni lni-cog"></i>
                            </div>
                            <h3>Ease of maintenance over time</h3>
                            <p>Designing for long-term sustainability and updates</p>
                        </div>
                        <div className="measure-card">
                            <div className="measure-icon">
                                <i className="lni lni-brain"></i>
                            </div>
                            <h3>Ability to function as an expert system</h3>
                            <p>Leveraging domain knowledge for intelligent optimization</p>
                        </div>
                    </div>

                    <p className="highlight-text">
                        Analytical systems within data warehouses must always be able to handle large data volumes,
                        concurrency, partial failures, and schema evolution among others while ensuring that the
                        results are deterministic.
                    </p>
                </section>

                {/* First Principle Decomposition */}
                <section className="research-section">
                    <h2>First Principle Decomposition</h2>
                    <p>
                        While I am insistent on approaching the understanding of data warehouses on a much lower level,
                        it still makes sense to break down the high level aspects:
                    </p>

                    <div className="decomposition-list">
                        <div className="decomposition-item">
                            <div className="decomposition-header">
                                <i className="lni lni-database"></i>
                                <h3>Storage</h3>
                            </div>
                            <p>
                                I plan on incorporating inbuilt storage for purposes of creating a staging area for data
                                that may require later processing. In a medallion architecture this would be labelled as
                                the bronze section. I aim to rid my data warehouse of the need to interact with a data
                                lake as this only increases overhead in the system.
                            </p>
                        </div>

                        <div className="decomposition-item">
                            <div className="decomposition-header">
                                <i className="lni lni-tag"></i>
                                <h3>Metadata</h3>
                            </div>
                            <p>
                                Comprehensive metadata management to track data lineage, schema evolution, and system state.
                            </p>
                        </div>

                        <div className="decomposition-item">
                            <div className="decomposition-header">
                                <i className="lni lni-rocket"></i>
                                <h3>Execution</h3>
                            </div>
                            <p>
                                The ability to crawl files, move data, perform parallel operations, ensure memory safety etc.
                            </p>
                        </div>

                        <div className="decomposition-item">
                            <div className="decomposition-header">
                                <i className="lni lni-dashboard"></i>
                                <h3>Optimization</h3>
                            </div>
                            <p>
                                Resistance to failure as well as an ease of recovery from it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="research-section conclusion-section">
                    <h2>Conclusion</h2>
                    <p>
                        While this was not meant to be a deep description of the work that I am doing, I certainly hope
                        it provided you with a general enough understanding of what I plan on doing. From here on out
                        I will document my progress on a much more frequent basis.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DWFirstPrinciples;
