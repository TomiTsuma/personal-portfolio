import React from 'react';
import './GNNDefinitions.css';

const GNNDefinitions = () => {
    return (
        <div className="page-container container animate-fade-in" style={{ paddingBottom: '8rem' }}>
            <div className="research-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', color: '#1a202c' }}>
                    GRAPH NEURAL NETWORKS - DEFINITION OF TERMS
                </h1>
                <div className="post-meta" style={{ color: '#718096', fontSize: '0.9rem', marginTop: '1rem' }}>
                    <span>February 2026</span> • <span>Graph Theory & Topology</span>
                </div>
            </div>

            <div className="research-content">
                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>INTRODUCTION</h2>
                    </div>
                    <p>
                        In this post, I will definitionally go over the concept of Graph with respect to Graph Neural Networks. Core to developing GNNs is the rudimentary comprehension of the discrete mathematical principles behind logical graphs. Understandably, I will not delve deep into the definitions as I am trying not to rewrite a book on the topic of Graphs. My aim is simply to set up a baseline that will be relevant in future posts following any future advancements in my research.
                    </p>
                    <p>Here are the concepts I will go over:</p>
                    <ul className="concepts-list">
                        <li>Graphs</li>
                        <li>Types of Graphs</li>
                        <li>Graph Composition</li>
                        <li>Matrix Representation of Graphs</li>
                        <li>Topological Invariants</li>
                        <li>Euler & Shlaefli Invariants</li>
                    </ul>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', marginTop: '4rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Graphs</h2>
                    </div>
                    <p>
                        By definition, a graph is an ordered 2-tuple <span className="formula-inline">(V(G), E(G))</span> structure comprising of a set <span className="formula-inline">V(G)</span> of vertices and a set <span className="formula-inline">E(G)</span> of edges connecting said vertices.
                    </p>

                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Vertex vs Null Graphs</h3>
                            <p>A vertex graph is one where there exists connection (edges) between each of the nodes.</p>
                            <p>Conversely, a null graph is one where no edges connect the nodes in a graph</p>
                        </div>

                        <div className="definition-card">
                            <h3>Self-loop / Self-edge / Buckle</h3>
                            <p>An edge with a non-distinct endpoint is called a self-loop. A simpler way to put this would be to describe a self-loop as the occurrence of an edge that connects a singular vertex to itself.</p>
                            <div className="diagram-container">
                                <svg width="100" height="80" viewBox="0 0 100 80" className="diagram-svg">
                                    <circle cx="50" cy="50" r="8" fill="#3182ce" />
                                    <path d="M 54 44 C 70 10, 30 10, 46 44" fill="none" stroke="#4a5568" strokeWidth="2" />
                                    <text x="50" y="70" textAnchor="middle" fill="#2d3748" fontSize="12" fontWeight="600">Self-loop</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="concept-block">
                        <h3>Multi-Graph</h3>
                        <p><strong>Parallel Edges</strong>: Parallel Edges describe a scenario in graph theory where two or more edges connect the exact same pair of vertices thus providing multiple paths between the two points.</p>
                        <p>Graphs with parallel edges are referred to a MultiGraphs</p>

                        <div className="diagram-container" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
                            <svg width="240" height="100" viewBox="0 0 240 100" className="diagram-svg">
                                <g transform="translate(0, 0)">
                                    <circle cx="20" cy="40" r="6" fill="#3182ce" />
                                    <circle cx="80" cy="40" r="6" fill="#3182ce" />
                                    <line x1="26" y1="40" x2="74" y2="40" stroke="#4a5568" strokeWidth="2" />
                                    <text x="50" y="80" textAnchor="middle" fill="#2d3748" fontSize="12" fontWeight="600">Simple Graph</text>
                                </g>
                                <g transform="translate(140, 0)">
                                    <circle cx="20" cy="40" r="6" fill="#3182ce" />
                                    <circle cx="80" cy="40" r="6" fill="#3182ce" />
                                    <path d="M 26 38 Q 50 20, 74 38" fill="none" stroke="#4a5568" strokeWidth="2" />
                                    <path d="M 26 42 Q 50 60, 74 42" fill="none" stroke="#4a5568" strokeWidth="2" />
                                    <text x="50" y="80" textAnchor="middle" fill="#2d3748" fontSize="12" fontWeight="600">Multi-Graph</text>
                                </g>
                            </svg>
                        </div>

                        <p><strong>Simple-Graph</strong>: These are antithetical to multi-graphs in that they contain no two or more paths between any two points.</p>
                        <p><strong>Multiplicity of an Edge</strong>: This refers to the number of edges that connect to a single vertex-pair.</p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Edge Train / Edge Walk</h2>
                    </div>
                    <p>This is the most fundamental way to traverse an infinite graph.</p>
                    <p>It involves alternative sequences of vertices and edges in the format: </p>
                    <div className="formula-block">
                        V₀, e₁, v₁, e₂, v₂, ...
                    </div>
                    <p>
                        Where each edge <span className="formula-inline">eᵢ</span> connects vertex <span className="formula-inline">vᵢ₋₁</span> and vertex <span className="formula-inline">vᵢ</span>.
                        The key feature of edge walk is that both vertices and edges can be repeated, meaning that movement back and forth along the same edges or revisiting the same vertex multiple times is allowed, with the walk’s length being the total number of edges traversed.
                    </p>

                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Closed Edge Train</h3>
                            <p>This is referred to as a circuit, owing to the fact that complete traversal of the graph requires that starting and end vertex to be the same:</p>
                            <div className="formula-block" style={{ fontSize: '1.1rem' }}>v₀ == vₙ</div>
                        </div>

                        <div className="definition-card">
                            <h3>Open Edge Train</h3>
                            <p>This refers to an open-trail graph traversal. It requires two solid conditions to be met:</p>
                            <ul>
                                <li>No singular edge should be repeated (Vertices can be traversed multiple times)</li>
                                <li>The starting and end vertices must be different</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="research-section">
                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Connected Graph</h3>
                            <p>A connected graph is one where you can arrive at any node from any other node using graph traversal. This means that the graph has not been split at any point.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Subgraph</h3>
                            <p>This refers to a subset of <span className="formula-inline">V(G)</span> and <span className="formula-inline">E(G)</span> obtained from the original graph (G). Where the original connections of vertices are maintained from the original graph.</p>
                            <div className="formula-block" style={{ fontSize: '1.1rem' }}>Gₛ ⊆ G</div>
                        </div>
                    </div>

                    <div className="concept-block">
                        <h3>Spanning Tree</h3>
                        <p>A spanning tree of a connected graph G is a subgraph that includes all the vertices of G but explicitly no cycles. It uses the minimum number of edges (n-1 for n vertices) to connect everything, essentially creating a “skeleton” that connects all points with strictly no redundancies. It is crucial for network design and path-finding algorithms.</p>
                    </div>

                    <div className="concept-block">
                        <h3>Hamiltonian Class of Graphs</h3>
                        <p><strong>Hamiltonian Cycle</strong>: A Hamiltonian Cycle is a simply cycle visiting every vertex exactly once.</p>
                        <p><strong>Hamiltonian Loop</strong>: This is a closed path in a graph that visits every single vertex exactly once and returns to its starting vertex.</p>
                        <p><strong>Hamiltonian Path</strong>: This is a path that visits every single vertex in a graph exactly once, without repeating any vertex.</p>
                        <p>A Hamiltonian Class of Graphs refers to the broad set of graphs that contain Hamiltonian Cycles. These are extensively studies due to the NP-complete nature of finding these cycles, leading to research into specific graph subclasses with efficient algorithms.</p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Chords and Links</h3>
                            <p>A chord serves as an edge between two non-consecutive vertices within a cycle, but is not itself part of that cycle’s edges. It essentially just serves as a shortcut across the loop.</p>
                            <p>This is an important concept when designing Chordal Graphs which are graphs where every cycle of four or more vertices must contain at least one chord, making them “triangulated” and structurally simple.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Spanning Forest</h3>
                            <p>This is a subgraph that is a collection of spanning trees, covering all vertices of a potentially disconnected graph without creating any cycles. It extends the idea of a spanning tree (used for connected graphs) to disconnected graphs, finding the minimal connections within each part.</p>
                        </div>
                    </div>

                    <div className="concept-block" style={{ borderRightColor: '#48bb78', background: '#f0fff4' }}>
                        <h3>Bipartite Graph</h3>
                        <p>This is a graph whose vertices can be subdivided into two separate, non-overlapping sets (X and Y) such that every edge connects a vertex from set X to a vertex in set Y, with no edges existing within the same set.</p>
                        <div className="diagram-container">
                            <svg width="200" height="120" viewBox="0 0 200 120" className="diagram-svg">
                                <circle cx="50" cy="30" r="6" fill="#3182ce" />
                                <circle cx="50" cy="60" r="6" fill="#3182ce" />
                                <circle cx="50" cy="90" r="6" fill="#3182ce" />
                                <circle cx="150" cy="30" r="6" fill="#63b3ed" />
                                <circle cx="150" cy="60" r="6" fill="#63b3ed" />
                                <circle cx="150" cy="90" r="6" fill="#63b3ed" />
                                <line x1="56" y1="30" x2="144" y2="30" stroke="#a0aec0" strokeWidth="1" />
                                <line x1="56" y1="30" x2="144" y2="60" stroke="#a0aec0" strokeWidth="1" />
                                <line x1="56" y1="60" x2="144" y2="90" stroke="#a0aec0" strokeWidth="1" />
                                <line x1="56" y1="90" x2="144" y2="30" stroke="#a0aec0" strokeWidth="1" />
                                <text x="50" y="115" textAnchor="middle" fill="#2c5282" fontSize="10" fontWeight="600">Set X</text>
                                <text x="150" y="115" textAnchor="middle" fill="#2b6cb0" fontSize="10" fontWeight="600">Set Y</text>
                            </svg>
                        </div>
                        <p><strong>Complete Bipartite Graph</strong>: This is one where every vertex in one partition is connected by an edge to every vertex in the other partition. Think of the dense layer (fully connected layer) of a neural network where each individual neuron of one of the hidden layers is connected to each other neuron of the next layer but not to any neuron of the current layer.</p>
                    </div>

                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Graph Isomorphism</h3>
                            <p>This refers to the aspect of two graphs being structurally similar that is having the same number of vertices, and edges, and the same connections even if their vertex labels or drawing styles differ.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Layered Graph</h3>
                            <p>This refers to a directed graph where vertices are organized into horizontal rows(layers) with edges generally flowing downwards, emphasizing a hierarchy or flow.</p>
                        </div>
                    </div>
                </section>

                <section className="research-section">
                    <div className="concept-block">
                        <h3>Directed Graph</h3>
                        <p>A DiGraph is a set of vertices connected by edges that have specific direction indicating a one-way relationship.</p>
                        <p><strong>Acyclic Digraph</strong>: This is a type of graph that comprises vertices and directed edges which form no direct cycles.</p>
                        <p><strong>Strongly Connected Digraph</strong>: This is a graph where you can reach any vertex from any other vertex by following the direction of the edges.</p>
                        <p><strong>Weakly Connected Digraph</strong>: This is one where you can get from one node to any other node by traversing edges in a certain direction.</p>
                    </div>

                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Pendant Edge</h3>
                            <p>This is an edge connected to a pendant vertex which is simply a vertex with a degree of one.</p>
                        </div>
                        <div className="definition-card">
                            <h3>Cut Vertex</h3>
                            <p>Also called an Articulation Point, is a vertex in a connected graph whose removal (along with its incident edges) increases the number of connected components, effectively disconnecting the graph or a part of it.</p>
                        </div>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', marginTop: '4rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>MATRIX REPRESENTATION OF GRAPH</h2>
                    </div>
                    <p>There exists several matrix representation that can be used to explain the composition and structure of a graph.</p>
                    <ul className="matrix-list">
                        <li>Incident Matrices</li>
                        <li>Cut-set Matrices</li>
                        <li>Tie-set Matrices</li>
                        <li>Mesh Matrices</li>
                        <li>Adjacency Matrices</li>
                        <li>Interconnection Matrices</li>
                    </ul>

                    <div className="concept-block">
                        <h3>Adjacency Matrix</h3>
                        <p>Let Graph G be a directed graph with n vertices, and no parallel edges. The adjacency matrix X = [xᵢ,ⱼ] of the digraph G is an n X n binary valued matrix whose element xᵢⱼ = 1 if there is an edge from the i-th vertex to the j-th vertex otherwise 0.</p>
                        <div className="formula-block">
                            X = {'{'} xᵢ,ⱼ {'}'} where xᵢ,ⱼ ∈ {'{'}0, 1{'}'}
                        </div>
                    </div>
                    <div className="concept-block">
                        <h3>Interconnection Matrix</h3>
                        <p>This is similar to an adjacency matrix other that the fact that each diagonal element is 1. Is denoted as C = [cᵢⱼ]</p>
                    </div>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', marginTop: '4rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>TOPOLOGICAL INVARIANTS</h2>
                    </div>
                    <p>This section summarizes certain properties of graphs that provide graphical representation of structures, such as polyhedra, that remain invariant under topological information.</p>
                    <p>A mapping Φ of one geometrical figure or structure A into another structure B is a topological transformation or a structure homeomorphism if the mapping is one-to-one and bicontinuous.</p>

                    <div className="definition-card" style={{ marginBottom: '2rem' }}>
                        <p><strong>One-to-one (bijective, biunique)</strong> mapping Φ means that for any two points vᵢ, vⱼ in the structure, Φ(vᵢ) = Φ(vⱼ) IIF vᵢ = vⱼ.</p>
                        <p>An inverse mapping Φ⁻¹ should exist such that Φ⁻¹(vₖ) = vᵢ IIF Φ(vᵢ) = vₖ.</p>
                        <p><strong>Bicontinuity</strong> in the map Φ means that both Φ and Φ⁻¹ are continuous and it allows Φ(vᵢ) and Φ(vⱼ) to be arbitrarily close if vᵢ and vⱼ are sufficiently close.</p>
                    </div>
                    <p>Topological transformation naturally leads to loss of metric and projective properties.</p>
                </section>

                <section className="research-section">
                    <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', marginTop: '4rem' }}>
                        <div style={{ width: '4px', height: '40px', background: '#00d690' }}></div>
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>EULER AND SCHLAEFLI INVARIANTS</h2>
                    </div>
                    <p><strong>Euler</strong>: A polyhedron (a solid whose surface only has polygonal faces) without holes having |V| vertice, |E| edges and |F| faces satisfies the constraint:</p>
                    <div className="formula-block">
                        |V| - |E| + |F| = 2
                    </div>

                    <div className="concept-block">
                        <h3>Genus</h3>
                        <p>A property that remains invariant under a topological transformation is that of the genus as defined as follows: A Genus of a surface is the largest number of non-intersecting simple closed curves (Jordan Curves) that can be drawn on the surface without separating it.</p>
                        <p>A genus γ(G) of a graph G is the smallest genus of all surfaces on which G can be embedded (drawn).</p>
                        <p>Graphs of genus 0 are planar graphs. On that note, a dual graph is formed from a planar graph by creating a new graph where each vertex represents a face of the original, and an edge connects two vertices if their corresponding faces share an edge in the original graph.</p>
                    </div>

                    <div className="definition-grid">
                        <div className="definition-card">
                            <h3>Thickness</h3>
                            <p>It refers to the minimum number of subgraphs of genus at most n whose union is G. The n-thickness of a graph G is denoted by tₙ(G).</p>
                        </div>
                        <div className="definition-card">
                            <h3>Crossing Number</h3>
                            <p>The crossing number v(G) of a graph g is the minimum number of pairwise intersections (excluding those at the vertices of G) of its edges when G is drawn in the plane.</p>
                        </div>
                    </div>
                    <div className="concept-block">
                        <h3>Coarseness</h3>
                        <p>The coarseness of a graph G is the maximum number of edge-disjoint non-planar subgraphs into which G may be decomposed.</p>
                    </div>
                </section>

                <section className="summary-card">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>CONCLUSION</h2>
                    <p>
                        While it stands true that this post makes scarce-little connection with neural networks, which is the overarching focus, it establishes some important principles that will be required when understanding the resultant graph neural network architectures as well as the modeling of structures like paragraphs into graphs. Next, we will get into detail on the work done so far. I will delve into the previous data preparation steps, neural network architectures, and optimization methods used. I will couple each of these with the supporting research papers that formed the basis of my understanding.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default GNNDefinitions;
