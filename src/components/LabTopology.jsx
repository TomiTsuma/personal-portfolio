import React from 'react';
import './LabTopology.css';

const LabTopology = () => {
    return (
        <div className="topology-container">
            <h2 className="section-title">High-Level Topology</h2>
            <div className="topology-diagram">
                {/* Internet / External */}
                <div className="zone external">
                    <div className="zone-label">Internet</div>
                    <div className="node cloud">
                        <i className="lni lni-cloud"></i>
                        <span>Cloud / Remote</span>
                        <small>(B2 Backups, GitHub)</small>
                    </div>
                </div>

                <div className="connection-vertical"></div>

                {/* Edge / DMZ */}
                <div className="zone dmz">
                    <div className="zone-label">Edge / DMZ</div>
                    <div className="node bastion">
                        <i className="lni lni-shield"></i>
                        <span>Bastion / Edge</span>
                        <small>Nginx, WireGuard, CI Runners</small>
                    </div>
                </div>

                <div className="connection-vertical"></div>

                {/* Internal Network */}
                <div className="zone internal">
                    <div className="zone-label">Internal Lab Network (10.0.10.x)</div>

                    <div className="nodes-grid">
                        <div className="node-group">
                            <div className="node proxmox">
                                <i className="lni lni-layers"></i>
                                <span>Proxmox Host</span>
                                <small>Hypervisor & Orchestration</small>
                            </div>

                            <div className="sub-nodes">
                                <div className="node vm truenas">
                                    <i className="lni lni-database"></i>
                                    <span>TrueNAS VM</span>
                                    <small>ZFS Storage</small>
                                </div>
                                <div className="node vm docker">
                                    <i className="lni lni-docker"></i>
                                    <span>Docker Node</span>
                                    <small>Apps & Services</small>
                                </div>
                            </div>
                        </div>

                        <div className="node gpu">
                            <i className="lni lni-display-alt"></i>
                            <span>GPU Compute</span>
                            <small>Training & Inference</small>
                        </div>

                        <div className="node experiment">
                            <i className="lni lni-flask"></i>
                            <span>Experiment Node</span>
                            <small>Jupyter, MLFlow</small>
                        </div>

                        <div className="node monitor">
                            <i className="lni lni-pulse"></i>
                            <span>Monitoring</span>
                            <small>Prometheus, Grafana</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabTopology;
