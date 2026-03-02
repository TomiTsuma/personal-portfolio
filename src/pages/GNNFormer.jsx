import React from 'react';
import './GNNFormer.css';

const GNNFormer = () => {
    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">GNNFORMER ARCHITECTURE FOR GRAPH TASK COMPLETION</h1>
                <div className="post-meta">
                    <span>March 2026</span> • <span>Graph Transformer Evolution</span>
                </div>
            </div>

            <div className="research-content">
                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>INTRODUCTION</h2>
                    </div>
                    <p>
                        As we proceed to the depths of architecture definition for the Graph models, it is important that I outline the importance of understanding the deep-seated implications of the layer-by-layer setup of our models.
                    </p>
                    <p>
                        The efficacy of our chosen architecture is commensurate with the following aspects:
                    </p>
                    <ul className="concepts-list">
                        <li>Ability to minimize global noise</li>
                        <li>Ability to enhance long-range attention</li>
                        <li>Ability to scale with large graphs</li>
                        <li>Handle most graph-based tasks</li>
                    </ul>
                    <p>
                        We will explore the widely accepted Graph Transformer architecture that utilizes multi-head attention (MHA) to facilitate high-order message passing. In our analysis we will be sure to critique the several shortcomings of this method to outline its lack of suitability for the kind of tasks we are trying to solve. GT successes have been well outlined by their proponents therefore it makes little sense to go over them here as well.
                    </p>
                    <p>
                        This post will culminate in the definition of a GNNFormer architecture. We will outline its layer-by-layer implementation, superiority over GTs, message passing format, computation limitations, and variants.
                    </p>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>PRELIMINARIES</h2>
                    </div>
                    <p>
                        First we must reiterate the basics defined in this article. A graph G is denoted by <span className="formula-inline">G = (V, E, X, Y)</span>, where <span className="formula-inline">V</span> and <span className="formula-inline">E</span> are the set of nodes and edges respectively.
                    </p>
                    <ul className="concepts-list">
                        <li><span className="formula-inline">X ∈ ℝ<sup>|V|×d</sup></span> is the node feature matrix.</li>
                        <li><span className="formula-inline">Y ∈ ℝ<sup>|V|×c</sup></span> is the node label matrix.</li>
                        <li>Each node is associated with a feature vector <span className="formula-inline">x ∈ ℝ<sup>d</sup></span>, and a one-hot encoded label vector <span className="formula-inline">y ∈ ℝ<sup>c</sup></span>.</li>
                        <li><span className="formula-inline">|V|</span> represents the number of nodes.</li>
                        <li><span className="formula-inline">d</span> represents the dimension of the node features.</li>
                        <li><span className="formula-inline">C</span> represents the number of classes.</li>
                    </ul>
                    <p>
                        The Graph topology information <span className="formula-inline">(V,E)</span> can also be represented by an adjacency matrix <span className="formula-inline">A ∈ ℝ<sup>|V| × |V|</sup></span>.
                    </p>
                    <p>
                        Based on the adjacency matrix, we can define the degree distribution of <span className="formula-inline">G</span> as a diagonal degree matrix <span className="formula-inline">D ∈ ℝ<sup>|V| × |V|</sup></span> with <span className="formula-inline">D<sub>ii</sub> = ∑<sup>|V|</sup><sub>j=1</sub> A<sub>ij</sub></span> which represents the degree value of <span className="formula-inline">v<sub>i</sub></span>.
                    </p>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>THE GRAPH TRANSFORMER</h2>
                    </div>
                    <p>
                        Following the many successes of transformer technology in recent works, their implementation in Graph Neural Network was not only expected but also necessary. They were aimed at solving two problems that were fairly common with traditional GNNs:
                    </p>
                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Oversquashing</h3>
                            <p>Describes a phenomenon where excessive information from an exponentially growing neighborhood is compressed into fixed-size node embeddings, causing nodes to become insensitive to distant information.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Long-range dependencies</h3>
                            <p>GNNs can struggle to capture long range dependencies owing to the fact that message-passing is limited to local k-hop neighborhoods. This leads to oversmoothing (indistinguishable nodes) or over-squashing.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Weak connectivity</h3>
                            <p>Issues stem from scenarios of sparse or disconnected graphs or graphs with directed edges that do not allow for efficient message passing between all nodes. These affect the message passing mechanism.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Limited expressiveness</h3>
                            <p>Most GNNs are bounded by the 1-dimensional Weisfeiler-Lehman (1-WL) graph isomorphism test. They fail to distinguish non-isomorphic graphs with similar local structures and even more to count specific substructures (e.g. cycles).</p>
                        </div>
                    </div>
                    <p>
                        GTs help assuage these issues by employing the self-attention mechanism to allow them to receive information from all other nodes, thereby capturing higher-order relationships.
                    </p>
                    <div className="concept-block warning-block">
                        <p>It must be noted however that self-attention actually disregards the topological structure of the graph and treats it as fully connected. Expectedly, irrelevant information, or noise is thereby added especially in homophilous scenarios.</p>
                        <p>As well, the self-attention mechanism which is already computationally expensive in linear data becomes unmanageable when considering large-scale graph computations. For vanilla GTs, the computation complexity of self-attention is quadratic w.r.t. the number of nodes.</p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>EXPLORING GT ARCHITECTURE</h2>
                    </div>
                    <p>Transformers comprise two modules:</p>
                    <div className="pill-container">
                        <span className="pill">Multi-head self attention module (MHA)</span>
                        <span className="pill">Feed-forward network (FFN)</span>
                    </div>
                    <p>
                        The MHA transforms the node features into query vectors (Q), key vectors (K) and value vectors (V) then performs the inner product operation on the former two to compute the attention scores, and ultimately employs the obtained scores for weighted aggregation of the value vector:
                    </p>
                    <div className="formula-block">
                        Q = HW<sup>Q</sup>, K = HW<sup>K</sup>, V = HW<sup>V</sup><br />
                        H' = softmax (QK<sup>T</sup>/√d)V
                    </div>
                    <p>
                        Where <span className="formula-inline">H = [h<sup>T</sup><sub>1</sub>, … , h<sup>T</sup><sub>|v|</sub>] ∈ ℝ<sup>|V|×d</sup></span> denotes the input node embedding matrix. <span className="formula-inline">W<sup>Q</sup>, W<sup>K</sup>, W<sup>V</sup> ∈ ℝ<sup>d×d</sup></span> are the projection matrices.
                    </p>

                    <div className="illustration-box gt-arch-box">
                        <div className="illustration-title">Graph Transformer Architecture</div>
                        <div className="gt-architecture-diagram">
                            {/* Top Output Label */}
                            <div className="node-label">H<sup>(l)</sup></div>
                            <div className="flow-arrow up"></div>

                            {/* Top LN/Residual Block */}
                            <div className="dual-block">
                                <div className="block-part ln">LayerNorm</div>
                                <div className="block-part res">Residual</div>
                                <div className="residual-entry"></div>
                            </div>
                            <div className="flow-arrow up"></div>

                            {/* FFN Block */}
                            <div className="block ffn">FFN (ReLU)</div>
                            <div className="flow-arrow up junction-2"></div>

                            {/* Gray Area (MHA Block) */}
                            <div className="mha-area">
                                {/* Mid LN/Residual Block */}
                                <div className="dual-block">
                                    <div className="block-part ln">LayerNorm</div>
                                    <div className="block-part res">Residual</div>
                                    <div className="residual-entry"></div>
                                </div>
                                <div className="flow-arrow up"></div>

                                {/* MHA Block */}
                                <div className="block mha">Multi-Head Attention</div>

                                {/* QKV lines coming from below */}
                                <div className="qkv-junction">
                                    <div className="qkv-input"><span>Q</span><div className="flow-arrow up"></div></div>
                                    <div className="qkv-input"><span>K</span><div className="flow-arrow up"></div></div>
                                    <div className="qkv-input"><span>V</span><div className="flow-arrow up"></div></div>
                                </div>
                                <div className="flow-arrow up junction-1"></div>
                            </div>
                            <div className="flow-arrow up"></div>

                            {/* Linear Block */}
                            <div className="block linear">Linear</div>
                            <div className="flow-arrow up"></div>

                            {/* Bottom Input Label */}
                            <div className="node-label bottom-node">H<sup>(l-1)</sup></div>

                            {/* Global Residual Connections */}
                            <div className="residual-path p1"></div>
                            <div className="residual-path p2"></div>
                        </div>
                    </div>

                    <p>
                        The GT architecture called GraphBERT, utilizes a top-k affinity sampling to extract unlinked subgraphs as training samples, and incorporates three positional embeddings to pre-train a vanilla GT for node representation learning.
                    </p>
                    <p>
                        Seeing as how graph topology is important to graph representation learning, some studies also incorporate edge embeddings as additional inputs to the MHA to recalibrate attention computation. This provides better utilization of the graph connectivity inductive bias.
                    </p>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>THE GNNFORMER</h2>
                    </div>
                    <p>
                        I acknowledge the several attempts to mitigate the issues brought about by GTs by other researchers. However, it makes sense to focus my attention on work done by researchers to find alternative solutions to the problem rather than fixes built on top of GTs. Hence my exploration of the GNNFormer.
                    </p>
                    <p>The GNNFormer comprises three main modifications:</p>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h4>PT blocks</h4>
                            <p>The original MHA module is substituted with stackable PT combination message passing blocks.</p>
                        </div>
                        <div className="feature-card">
                            <h4>SwishGLU</h4>
                            <p>The FFN is optimized via SwishGLU activation function.</p>
                        </div>
                        <div className="feature-card">
                            <h4>Initial Residual</h4>
                            <p>The original residual connection is improved to the initial residual connection.</p>
                        </div>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>CONVENTIONAL MESSAGE PASSING</h2>
                    </div>
                    <p>
                        Currently GNNs follow a unified message passing framework that is decomposable into three steps:
                    </p>
                    <div className="illustration-box">
                        <div className="flow-container horizontal">
                            <div className="box">Message Generation</div>
                            <div className="arrow-right"></div>
                            <div className="box">Neighbor Aggregation</div>
                            <div className="arrow-right"></div>
                            <div className="box">Update</div>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>MESSAGE GENERATION</h3>
                        <div className="formula-block">
                            m<sup>(l)</sup><sub>i ← j</sub> = MES<sup>(l)</sup>(h<sup>(l-1)</sup><sub>j</sub>, h<sup>(l-1)</sup><sub>i</sub>, e<sub>ji</sub>)
                        </div>
                        <p>
                            This denotes a message sent from node <span className="formula-inline">v<sub>j</sub></span> to node <span className="formula-inline">v<sub>i</sub></span> at iteration step <span className="formula-inline">l</span>, and depends on the feature <span className="formula-inline">h<sub>j</sub><sup>(l-1)</sup></span> of the sending node and the feature <span className="formula-inline">e<sub>ji</sub></span> of edge between them.
                        </p>
                    </div>

                    <div className="subsection">
                        <h3>AGGREGATION</h3>
                        <div className="formula-block">
                            m<sup>(l)</sup><sub>i</sub> = AGG ({'m^{(l)}_{i \leftarrow j} | j \in N(i)'})
                        </div>
                        <p>
                            AGG is the aggregation function, such as summation, averaging, and maximum, which is used to aggregate messages from the neighborhood <span className="formula-inline">N(i)</span> of the target node <span className="formula-inline">v<sub>i</sub></span>.
                        </p>
                    </div>

                    <div className="subsection">
                        <h3>UPDATE</h3>
                        <div className="formula-block">
                            h<sup>(l)</sup><sub>i</sub> = UPD<sup>(l)</sup>(h<sup>(l-1)</sup><sub>i</sub>, m<sub>i</sub><sup>(l)</sup>)
                        </div>
                        <p>
                            This can be an NN that integrates the current node state and the aggregated messages to produce a new node state.
                        </p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>PT MESSAGE PASSING</h2>
                    </div>
                    <p>
                        The conventional message passing can be further decoupled into two functionally independent operations: <strong>Propagation</strong> and <strong>Transformation</strong>.
                    </p>
                    <div className="formula-block">
                        prop: h<sup>(l)</sup><sub>i</sub> = P(h<sup>(l-1)</sup><sub>i</sub>, {'{h^{(l-1)}_j, e_{ji} | j \in N(i)}'})<br />
                        trans: h<sup>(l)</sup><sub>i</sub> = T(h<sup>(l)</sup><sub>i</sub>)
                    </div>
                    <p>
                        P is the propagation function that combines message generation and aggregation. T performs a non-linear transformation on the state of the nodes after propagation.
                    </p>
                    <p>
                        Existing GNN architectures can be categorized into four types according to the stacking order:
                    </p>
                    <div className="pill-container">
                        <span className="pill">PTPT</span>
                        <span className="pill">PPTT</span>
                        <span className="pill">TTPP</span>
                        <span className="pill">TPTP</span>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>GNNFORMER ARCHITECTURE</h2>
                    </div>
                    <p>
                        The GNNFormer consists of only a single transformer block, which takes node features and adjacency information as input and outputs the final node representations.
                    </p>

                    <div className="illustration-box gnnf-arch-box">
                        <div className="illustration-title">Instantiation of GNNFormer</div>
                        <div className="gnnf-architecture">
                            {/* Inputs and Bottom Layer */}
                            <div className="gnnf-flow">
                                <div className="node-label top-z">Z</div>
                                <div className="arrow-up z-arrow"></div>

                                <div className="top-junction">
                                    <div className="gamma-label">γ</div>
                                    <div className="top-linear-path">
                                        <div className="block linear small">Linear</div>
                                        <div className="arrow-left-short"></div>
                                    </div>
                                </div>

                                <div className="dual-block top-ln">
                                    <div className="block-part ln">LayerNorm</div>
                                    <div className="block-part res">Initial Residual</div>
                                </div>
                                <div className="arrow-up"></div>

                                <div className="block ffn swish">FFN (SwishGLU)</div>
                                <div className="node-label sub">H<sup>(2)</sup></div>
                                <div className="arrow-up"></div>

                                {/* Layer 2 */}
                                <div className="gnnf-layer-wrap">
                                    <div className="dual-block">
                                        <div className="block-part ln">LayerNorm</div>
                                        <div className="block-part res">Initial Residual</div>
                                    </div>
                                    <div className="arrow-up"></div>
                                    <div className="pt-block-group">
                                        <div className="block p-block">GCN-like P</div>
                                        <div className="block t-block">MLP-like T</div>
                                    </div>
                                    <div className="node-label sub">H<sup>(1)</sup></div>
                                </div>
                                <div className="arrow-up"></div>

                                {/* Layer 1 */}
                                <div className="gnnf-layer-wrap">
                                    <div className="dual-block">
                                        <div className="block-part ln">LayerNorm</div>
                                        <div className="block-part res">Initial Residual</div>
                                    </div>
                                    <div className="arrow-up"></div>
                                    <div className="pt-block-group">
                                        <div className="block p-block">GCN-like P</div>
                                        <div className="block t-block">MLP-like T</div>
                                    </div>
                                    <div className="node-label sub">H<sup>(0)</sup></div>
                                </div>
                                <div className="arrow-up"></div>

                                <div className="block linear peach">Linear</div>
                                <div className="arrow-up"></div>
                                <div className="node-label bottom-x">X</div>
                            </div>

                            {/* Left Residual Line (Beta/Alpha) */}
                            <div className="left-res-spine">
                                <div className="res-arrow" data-label="β"></div>
                                <div className="res-arrow" data-label="α₂"></div>
                                <div className="res-arrow" data-label="α₁"></div>
                            </div>

                            {/* Right Adjacency Line (A) */}
                            <div className="right-adj-spine">
                                <div className="node-label label-a">A</div>
                                <div className="adj-line"></div>
                                <div className="adj-arrow"></div>
                                <div className="adj-arrow"></div>
                                <div className="adj-arrow"></div>
                            </div>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>Initial Embedding</h3>
                        <div className="formula-block">
                            H<sup>(0)</sup> = ReLU(XW<sub>0</sub>)
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>Stacking PT Blocks</h3>
                        <p>Each PT block comprises a message passing function f, an initial residual connection, and layer normalization.</p>
                        <div className="formula-block">
                            H<sup>(l)</sup> = LN(α<sub>l</sub> · H<sup>(0)</sup> + (1 - α<sub>l</sub>) · f(H<sup>(l-1)</sup>, A))
                        </div>
                        <p>Where α<sub>l</sub> is a learnable parameter for adaptive residual connection.</p>
                    </div>

                    <div className="subsection">
                        <h3>Optimized FFN</h3>
                        <div className="formula-block">
                            Z' = Swish(H<sup>(l)</sup>W<sub>1</sub>) ⊗ H<sup>(l)</sup>W<sub>2</sub>) W<sub>3</sub><br />
                            Z' = LN(β · H<sup>(0)</sup> + (1 - β) · Z')
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>Final Integration</h3>
                        <div className="formula-block">
                            Z = γ · Z' + (1 - γ) · AW<sub>4</sub>
                        </div>
                        <p>Finally, we apply a softmax or sigmoid layer depending on the task type.</p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper">
                        <div className="section-accent"></div>
                        <h2>CONCLUSION</h2>
                    </div>
                    <p>
                        The inadequacies of attention mechanisms in graph-based tasks are well highlighted here. While they make waves in terms of resolving major issues with vanilla GNNs like oversquashing and long-range dependencies, they birth new issues like noise and OOM errors. The current work done to mitigate these issues can only be termed as hot-fixes since they do not actually resolve the error but reduce the effects.
                    </p>
                    <p>
                        Hence the exploration of alternative model architectures for graph-based tasks remains as important as it was before the introduction of GTs. Despite this post giving an introduction on the issues of GTs, it does not detail deeply enough why the issues occur, just that they do.
                    </p>
                    <div className="next-post-teaser">
                        <p><strong>Next Post:</strong> A deeper probe into the activation patterns within graph neural networks. This will inform the future adaptations we make in the GNNFormer described in this article.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GNNFormer;
