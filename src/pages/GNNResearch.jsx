import React from 'react';
import { Link } from 'react-router-dom';
import './GNNResearch.css';

const GNNResearch = () => {
    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">Graph Neural Networks for Evidence Extraction</h1>
                <p className="research-subtitle">
                    A unified, graph-based framework for evidence extraction from unstructured text and structured tabular data using GraphVAEs and conditional GraphGANs.
                </p>
            </div>

            <div className="research-content">
                {/* 1. Graph Construction */}
                <section className="research-section">
                    <h2>1. Graph Construction Framework</h2>
                    <p>
                        The core novelty lies in converting two fundamentally different modalities—unstructured text and structured tables—into a unified graph representation.
                    </p>

                    <div className="subsection">
                        <h3>1.1 Text → Graph via Semantic Segmentation</h3>
                        <p>
                            Unlike simple sentence-based segmentation, this approach uses a semantic text segmentation network (Transformer-based) to define nodes.
                        </p>
                        <div className="feature-grid">
                            <div className="feature-card">
                                <h4><i className="lni lni-nodes"></i> Nodes</h4>
                                <p>Represent semantic segments. Features include contextual embeddings (BERT), local semantics, and positional metadata.</p>
                            </div>
                            <div className="feature-card">
                                <h4><i className="lni lni-network"></i> Edges</h4>
                                <p>Represent logical coherence: Sequential, Coreference-based, Topic-similarity, and Causal/Justification edges.</p>
                            </div>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>1.2 Tables → Multi-Layered Relational Graphs</h3>
                        <p>
                            A unique formulation capturing row-level and column-level relationality, ideal for reasoning-heavy datasets like TAT-QA.
                        </p>
                        <div className="graph-structure-visual">
                            <div className="gs-layer">
                                <span className="gs-label">Columns</span>
                                <div className="gs-nodes">
                                    <div className="gs-node col">C1</div>
                                    <div className="gs-node col">C2</div>
                                    <div className="gs-node col">C3</div>
                                </div>
                            </div>
                            <div className="gs-connections">
                                <i className="lni lni-arrows-vertical"></i> Column-to-Cell
                            </div>
                            <div className="gs-layer">
                                <span className="gs-label">Cells (Rows)</span>
                                <div className="gs-nodes">
                                    <div className="gs-node cell">V1,1</div>
                                    <div className="gs-node cell">V1,2</div>
                                    <div className="gs-node cell">V1,3</div>
                                </div>
                            </div>
                        </div>
                        <ul className="tech-list">
                            <li><strong>Row-connectivity:</strong> Fully connected intra-row nodes ($v_{`{i,j}`} \leftrightarrow v_{`{i,k}`}$) for arithmetic reasoning.</li>
                            <li><strong>Column-to-cell:</strong> Each cell connects to its column header ($v_{`{i,j}`} \leftrightarrow c_j$).</li>
                            <li><strong>Column-to-column:</strong> Fully connected columns ($c_j \leftrightarrow c_k$) for schema semantics.</li>
                        </ul>
                    </div>
                </section>

                {/* 2. Two-Stage Generative Framework */}
                <section className="research-section">
                    <h2>2. Two-Stage Generative Framework</h2>
                    <p>
                        The architecture consists of two complementary generative models designed to reconstruct evidence nodes from incomplete or noisy graphs.
                    </p>

                    <div className="pipeline-diagram">
                        <div className="stage">
                            <div className="stage-title">Stage 1: GraphVAE</div>
                            <div className="stage-desc">Learns the "Evidence Manifold"</div>
                        </div>
                        <div className="arrow">→</div>
                        <div className="stage">
                            <div className="stage-title">Stage 2: Pix2Pix GraphGAN</div>
                            <div className="stage-desc">Maps Full Graphs to Evidence Embeddings</div>
                        </div>
                    </div>
                </section>

                {/* 3. Stage 1: GraphVAE */}
                <section className="research-section">
                    <h2>3. Stage 1: GraphVAE (Evidence)</h2>
                    <p>
                        Learns a latent space of what evidence looks like—isolated, sparse, context-heavy nodes.
                    </p>
                    <div className="tech-details">
                        <div className="detail-block">
                            <h4>Training Data</h4>
                            <p>Evidence nodes retain embeddings; non-evidence nodes are masked. The model learns "evidence-structure".</p>
                        </div>
                        <div className="detail-block">
                            <h4>U-Net Architecture</h4>
                            <p>Encoder GNN (GCN, GraphSAGE, GAT) compresses graph into latent $Z \sim N(\mu, \sigma)$. U-Net skip connections preserve fine-grained relationships.</p>
                        </div>
                        <div className="detail-block">
                            <h4>Decoder</h4>
                            <p>Reconstructs node feature vectors and adjacency patterns. Once trained, weights are frozen to define the evidence manifold.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Stage 2: Pix2Pix GraphGAN */}
                <section className="research-section">
                    <h2>4. Stage 2: Pix2Pix GraphGAN</h2>
                    <p>
                        A conditional GAN that maps full graphs to the evidence-latent embeddings learned by the GraphVAE.
                    </p>
                    <div className="math-block">
                        <p><strong>Goal:</strong> $G(G_{`{orig}`}) \approx Enc_{`{evidence}`}(G_{`{evidence}`})$</p>
                        <p><strong>Loss Function:</strong></p>
                        <code className="math-code">
                            L_{`{total}`} = L_{`{GAN}`}(G,D) + ||G(G_{`{orig}`}) - Enc_{`{ev}`}(G_{`{ev}`})|| + ||Dec_{`{ev}`}(G(G_{`{orig}`})) - G_{`{ev}`}||
                        </code>
                    </div>
                    <ul className="tech-list">
                        <li><strong>Generator:</strong> GNN-based encoder-decoder outputting node embeddings.</li>
                        <li><strong>Discriminator:</strong> PatchGAN adapted to graphs, evaluating local node neighborhoods for relational consistency.</li>
                    </ul>
                </section>

                {/* 5. Inference & Experiments */}
                <div className="split-section">
                    <section className="research-section">
                        <h2>5. Inference Process</h2>
                        <ol className="process-list">
                            <li><strong>Build Graph:</strong> Construct text/table graph.</li>
                            <li><strong>Generate Embeddings:</strong> Feed into GraphGAN generator.</li>
                            <li><strong>Decode:</strong> Pass embeddings to GraphVAE decoder.</li>
                            <li><strong>Reconstruct:</strong> Convert evidence graph to spans/cells.</li>
                        </ol>
                    </section>

                    <section className="research-section">
                        <h2>6. Experiments (TAT-QA)</h2>
                        <p>
                            Applied to TAT-QA (Table-and-Text QA), a dataset requiring arithmetic and multi-hop reasoning.
                        </p>
                        <p>
                            The model excels here because evidence chains span tables and text, and the graph structure explicitly models these multi-hop connections where Transformers often struggle.
                        </p>
                    </section>
                </div>

                {/* 7. Contributions */}
                <section className="research-section highlight-section">
                    <h2>7. Scientific Contributions</h2>
                    <div className="contributions-grid">
                        <div className="contribution-item">
                            <span className="num">1</span>
                            <p>Unified graph representation for Text + Tables.</p>
                        </div>
                        <div className="contribution-item">
                            <span className="num">2</span>
                            <p>GraphVAE for learning the latent "Evidence Manifold".</p>
                        </div>
                        <div className="contribution-item">
                            <span className="num">3</span>
                            <p>Pix2Pix GraphGAN for projecting full graphs to evidence embeddings.</p>
                        </div>
                        <div className="contribution-item">
                            <span className="num">4</span>
                            <p>Structural multi-hop reasoning without relying solely on attention.</p>
                        </div>
                    </div>
                </section>

                {/* 8. Research Articles */}
                <section className="research-section">
                    <h2>Research Articles</h2>
                    <div className="blog-posts-list">
                        <Link to="/research/gnn/definition-of-terms" className="blog-post-card">
                            <div className="blog-post-content">
                                <h3>GRAPH NEURAL NETWORKS - DEFINITION OF TERMS</h3>
                                <span className="post-date">February 2026</span>
                                <p>A definitional overview of the concepts of Graphs with respect to Graph Neural Networks, establishing a baseline for discrete mathematical principles.</p>
                                <div className="tags">
                                    <span>#GraphNeuralNetworks</span>
                                    <span>#DeepLearning</span>
                                    <span>#Research</span>
                                </div>
                            </div>
                            <div className="read-link">
                                Read <i className="lni lni-arrow-right"></i>
                            </div>
                        </Link>
                        <Link to="/research/gnn/extractive-capabilities" className="blog-post-card">
                            <div className="blog-post-content">
                                <h3>EXPLORING THE EXTRACTIVE CAPABILITIES OF GRAPH NEURAL NETWORKS</h3>
                                <span className="post-date">February 2026</span>
                                <p>Exploring the ability to present data presented in text or tabular format as graphs and to perform several reasoning based tasks by extracting the appropriate information from the penultimate graph representation.</p>
                                <div className="tags">
                                    <span>#GraphNeuralNetworks</span>
                                    <span>#EvidenceExtraction</span>
                                    <span>#Research</span>
                                </div>
                            </div>
                            <div className="read-link">
                                Read <i className="lni lni-arrow-right"></i>
                            </div>
                        </Link>
                        <Link to="/research/gnn/gnnformer-architecture" className="blog-post-card">
                            <div className="blog-post-content">
                                <h3>GNNFORMER ARCHITECTURE FOR GRAPH TASK COMPLETION</h3>
                                <span className="post-date">March 2026</span>
                                <p>Defining the GNNFormer architecture, its layer-by-layer implementation, superiority over Graph Transformers, and its optimized message passing format using PT blocks and SwishGLU.</p>
                                <div className="tags">
                                    <span>#GraphNeuralNetworks</span>
                                    <span>#GNNFormer</span>
                                    <span>#Research</span>
                                </div>
                            </div>
                            <div className="read-link">
                                Read <i className="lni lni-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GNNResearch;
