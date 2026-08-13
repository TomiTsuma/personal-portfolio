import React from 'react';
import './Publications.css';

// NOTE: keep `status` in sync with reality. When the manuscript below is
// actually submitted, change status from "in-preparation" to "under-review",
// and update `statusLabel` accordingly. Don't let this go stale.
const publications = [
    {
        authors: 'Tsuma, T., Amin, Z.',
        title: 'A Systematic Scoping Review of Diffusion-Based De Novo Molecular Generation: Architectures, Evaluation, and Open Challenges for Computational Drug Discovery',
        venue: 'Manuscript in preparation for submission to Briefings in Bioinformatics (Oxford University Press)',
        details: 'PRISMA-ScR methodology; synthesized 90+ primary sources.',
        status: 'in-preparation',
        statusLabel: 'In Preparation',
    },
];

const Publications = () => {
    return (
        <div className="page-container container animate-fade-in">
            <h1 className="page-title">Publications</h1>
            <p className="publications-subtitle">
                Peer-reviewed and in-progress academic research, distinct from the independent projects and
                write-ups under Research.
            </p>

            <div className="publications-cv-link">
                <a href={`${import.meta.env.BASE_URL}Thomas_Tsuma_CV_PhD.pdf`} target="_blank" download="Thomas_Tsuma_CV_PhD.pdf">
                    Download PhD CV <i className="lni lni-download"></i>
                </a>
            </div>

            <div className="publications-list">
                {publications.map((pub, index) => (
                    <div className="publication-card" key={index}>
                        <span className={`publication-status status-${pub.status}`}>{pub.statusLabel}</span>
                        <h2 className="publication-title">{pub.title}</h2>
                        <p className="publication-authors">{pub.authors}</p>
                        <p className="publication-venue">{pub.venue}</p>
                        <p className="publication-details">{pub.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publications;
