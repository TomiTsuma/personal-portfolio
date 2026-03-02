import React from 'react';
import './GNNExtractive.css';

const GNNExtractive = () => {
    const jsonSegments = [
        {
            "uid": "1ef0dbdd-15d0-4577-b068-dca80af4f851",
            "order": 1,
            "text": "11 Intangible assets (continued)"
        },
        {
            "uid": "87193521-f886-49d3-b059-f8e7f5fc7dc1",
            "order": 2,
            "text": "(a) Intangible assets"
        },
        {
            "uid": "1ef948be-979b-4ac2-9593-67114ccef125",
            "order": 3,
            "text": "RIGHTS AND LICENCES"
        },
        {
            "uid": "5874de4f-3b36-4659-ad37-059679ef445d",
            "order": 4,
            "text": "Certain licences that NEXTDC possesses have an indefinite useful life and are carried at cost less impairment losses and are subject to impairment review at least annually and whenever there is an indication that it may be impaired."
        },
        {
            "uid": "faa001e2-1bc2-446b-9c2c-9d4479013962",
            "order": 5,
            "text": "Other licences that NEXTDC acquires are carried at cost less accumulated amortisation and accumulated impairment losses. Amortisation is recognised on a straight-line basis over the estimated useful life. The estimated useful life and amortisation method are reviewed at the end of each annual reporting period."
        },
        {
            "uid": "82ad7605-6ce3-40a1-919f-a8c7b3ca36ab",
            "order": 6,
            "text": "INTERNALLY GENERATED SOFTWARE"
        },
        {
            "uid": "ddf26912-5783-4b3b-b351-87e91b4a5f5b",
            "order": 7,
            "text": "Internally developed software is capitalised at cost less accumulated amortisation. Amortisation is calculated using the straight-line basis over the asset’s useful economic life which is generally two to three years. Their useful lives and potential impairment are reviewed at the end of each financial year."
        },
        {
            "uid": "ba5b9da5-9420-4035-ae46-6239e4548a9e",
            "order": 8,
            "text": "SOFTWARE UNDER DEVELOPMENT"
        },
        {
            "uid": "5f491929-b2e4-4fad-909b-bb77e3a440b4",
            "order": 9,
            "text": "Costs incurred in developing products or systems and costs incurred in acquiring software and licenses that will contribute to future period financial benefits through revenue generation and/or cost reduction are capitalised to software and systems. Costs capitalised include external direct costs of materials and services and employee costs."
        },
        {
            "uid": "5f92f6fc-fdca-4f15-bab6-bcecd521d07a",
            "order": 10,
            "text": "Assets in the course of construction include only those costs directly attributable to the development phase and are only recognised following completion of technical feasibility and where the Group has an intention and ability to use the asset."
        }
    ];

    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">EXPLORING THE EXTRACTIVE CAPABILITIES OF GRAPH NEURAL NETWORKS</h1>
                <div className="post-meta">
                    <span className="post-date">February 2026</span>
                    <div className="post-tags">
                        <span>#GraphNeuralNetworks</span>
                        <span>#EvidenceExtraction</span>
                        <span>#Research</span>
                    </div>
                </div>
            </div>

            <div className="research-content">
                <section className="research-section">
                    <p className="intro-text">
                        I have based my current line of research on the notion that a wide variety of things can be represented as graphs. Take for example road networks whose cities serve as vertices and the roads connecting them being the edges. Social networks with users serving as nodes and friendships representing edges between them. Perhaps an example that is as close to home as can be is the concept of a neural network itself (both Biological and AI) with neurons connected in a graph like structure.
                    </p>
                    <p className="intro-text">
                        My aim is to explore the ability to present data presented in text or tabular format as graphs and to perform several reasoning based tasks by extracting the appropriate information from the penultimate graph representation.
                    </p>
                </section>

                <section className="research-section">
                    <h2>GRAPH REPRESENTATION OF TEXT</h2>
                    <p>
                        A piece of text can be meant to address a particular set of themes or topics by combining words into sentences, sentences into paragraphs, paragraphs into sections, and sections into an entire story. Take for example the following block of text:
                    </p>

                    <div className="table-representation-container">
                        <div className="source-header">
                            <i className="lni lni-file-empty"></i>
                            <span>Source Document Snippet</span>
                        </div>
                        <div className="tabular-text">
                            11 Intangible assets (continued)<br />
                            (a) Intangible assets<br />
                            RIGHTS AND LICENCES<br />
                            Certain licences that NEXTDC possesses have an indefinite useful life and are carried at cost less impairment losses and are subject to impairment review at least annually and whenever there is an indication that it may be impaired. Other licences that NEXTDC acquires are carried at cost less accumulated amortisation and accumulated impairment losses. Amortisation is recognised on a straight-line basis over the estimated useful life. The estimated useful life and amortisation method are reviewed at the end of each annual reporting period.<br />
                            INTERNALLY GENERATED SOFTWARE<br />
                            Internally developed software is capitalised at cost less accumulated amortisation. Amortisation is calculated using the straight-line basis over the asset’s useful economic life which is generally two to three years. Their useful lives and potential impairment are reviewed at the end of each financial year.<br />
                            SOFTWARE UNDER DEVELOPMENT<br />
                            Costs incurred in developing products or systems and costs incurred in acquiring software and licenses that will contribute to future period financial benefits through revenue generation and/or cost reduction are capitalised to software and systems. Costs capitalised include external direct costs of materials and services and employee costs. Assets in the course of construction include only those costs directly attributable to the development phase and are only recognised following completion of technical feasibility and where the Group has an intention and ability to use the asset.
                        </div>
                    </div>

                    <p>
                        This can be broken down into semantically sound segments as follows:
                    </p>

                    <div className="json-block">
                        <div className="source-header">
                            <i className="lni lni-code"></i>
                            <span>JSON Representation</span>
                        </div>
                        <pre>{JSON.stringify(jsonSegments, null, 2)}</pre>
                    </div>

                    <p>
                        Our aim then becomes not just to have the information split into semantically-sound segments, but to ensure that we accurately connect ideas and steps. This is where the concept of a Graph comes in. The question then becomes, “How do we introduce connectivity(edges) between these sentences(nodes).
                    </p>
                </section>

                <section className="research-section">
                    <h2>GRAPH REPRESENTATION OF TABLES</h2>
                    <p>
                        Tabular data as well can and should be represented as graphs. Take the following table:
                    </p>

                    <div className="research-table-wrapper">
                        <table className="research-table">
                            <thead>
                                <tr>
                                    <th>Movements</th>
                                    <th>Rights and licenses ($'000)</th>
                                    <th>Internally generated software ($'000)</th>
                                    <th>Software under development ($'000)</th>
                                    <th>Total ($'000)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5"><strong>At 30 June 2019</strong></td>
                                </tr>
                                <tr>
                                    <td>Cost</td>
                                    <td>13</td>
                                    <td>12,961</td>
                                    <td>16,284</td>
                                    <td>29,259</td>
                                </tr>
                                <tr>
                                    <td>Accumulated amortisation</td>
                                    <td>-</td>
                                    <td>-5,580</td>
                                    <td>-</td>
                                    <td>-5,580</td>
                                </tr>
                                <tr>
                                    <td>Netbook amount</td>
                                    <td>13</td>
                                    <td>7,381</td>
                                    <td>16,284</td>
                                    <td>23,678</td>
                                </tr>
                                <tr>
                                    <td colSpan="5"><strong>30-Jun-18</strong></td>
                                </tr>
                                <tr>
                                    <td>Opening net book amount at 1 July 2017</td>
                                    <td>43</td>
                                    <td>442</td>
                                    <td>8,053</td>
                                    <td>8,538</td>
                                </tr>
                                <tr>
                                    <td>Additions – externally acquired</td>
                                    <td>13</td>
                                    <td>-</td>
                                    <td>5,253</td>
                                    <td>5,266</td>
                                </tr>
                                <tr>
                                    <td>Additions – internally developed</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>1,256</td>
                                    <td>1,256</td>
                                </tr>
                                <tr>
                                    <td>Amortisation</td>
                                    <td>-43</td>
                                    <td>-1,746</td>
                                    <td>-</td>
                                    <td>-1,789</td>
                                </tr>
                                <tr>
                                    <td>Transfers</td>
                                    <td>-</td>
                                    <td>7,563</td>
                                    <td>-7,563</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Transfer between classes</td>
                                    <td>-</td>
                                    <td>744</td>
                                    <td>-</td>
                                    <td>744</td>
                                </tr>
                                <tr>
                                    <td>Disposals</td>
                                    <td>-</td>
                                    <td>-618</td>
                                    <td>-490</td>
                                    <td>-1,108</td>
                                </tr>
                                <tr>
                                    <td>Closing net book amount</td>
                                    <td>13</td>
                                    <td>6,385</td>
                                    <td>6,509</td>
                                    <td>12,907</td>
                                </tr>
                                <tr>
                                    <td colSpan="5"><strong>At 30 June 2018</strong></td>
                                </tr>
                                <tr>
                                    <td>Cost</td>
                                    <td>104</td>
                                    <td>9,555</td>
                                    <td>6,509</td>
                                    <td>16,168</td>
                                </tr>
                                <tr>
                                    <td>Accumulated amortisation</td>
                                    <td>-91</td>
                                    <td>-3,170</td>
                                    <td>-</td>
                                    <td>-3,261</td>
                                </tr>
                                <tr>
                                    <td>Net book amount</td>
                                    <td>13</td>
                                    <td>6,385</td>
                                    <td>6,509</td>
                                    <td>12,907</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ marginTop: '2rem' }}>
                        While it may be much more complicated to determine how to structure a table such as this as a graph, we could simply decide to link each cell node to its respective column node and at each row level, link each cell node to every other cell node at that level. The relevance of this method will become apparent when we discuss adjacency.
                    </p>
                </section>

                <div className="summary-card">
                    <h2>SUMMARY</h2>
                    <p>
                        The aim of this piece was to simply introduce the subject of my research. As you can see, there are no technical terminologies or methods defined. Next will be a definition of terms.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GNNExtractive;
