import React from 'react';
import LabTopology from '../components/LabTopology';
import './HomeLab.css';

const HomeLab = () => {
    return (
        <div className="page-container container animate-fade-in">
            <h1 className="page-title">Home Lab</h1>

            <div className="lab-intro">
                <p>
                    My home lab is the playground where I experiment with reproducible ML workflows,
                    host model training environments, and manage data infrastructure. It's designed for
                    scalability and sovereignty over my data and models.
                </p>
            </div>

            <LabTopology />

            <div className="lab-details">
                <section className="lab-section">
                    <h2><i className="lni lni-layers"></i> Proxmox Host (Hypervisor)</h2>
                    <p>The primary compute manager hosting VMs and containers on bare metal.</p>
                    <ul className="feature-list">
                        <li><strong>Role:</strong> Host VMs, manage ZFS pools, perform snapshots.</li>
                        <li><strong>Key Configs:</strong> IOMMU/VFIO GPU passthrough for training VMs.</li>
                        <li><strong>Storage:</strong> ZFS pools (RAIDZ1/RAIDZ2) for VM images.</li>
                        <li><strong>Networking:</strong> Multiple bridges (vmbr0 for LAN, vmbr1 for DMZ).</li>
                    </ul>
                    <div className="code-snippet">
                        <div className="snippet-header">Proxmox CLI - GPU Passthrough Check</div>
                        <pre><code>{`
# qemu GPU passthrough example snippet in /etc/pve/qemu-server/100.conf
hostpci0: 0000:03:00.0,kvm=1,x-vga=1
            `}</code></pre>
                    </div>
                </section>

                <section className="lab-section">
                    <h2><i className="lni lni-database"></i> TrueNAS VM (Storage Node)</h2>
                    <p>Central durable storage and dataset repository.</p>
                    <ul className="feature-list">
                        <li><strong>Role:</strong> NFS/SMB shares, S3 gateway, backups.</li>
                        <li><strong>Structure:</strong> Datasets for /datasets, /models, /media.</li>
                        <li><strong>Best Practices:</strong> ZFS compression (lz4), periodic snapshots, offsite replication to B2.</li>
                    </ul>
                    <div className="code-snippet">
                        <div className="snippet-header">Dataset Structure</div>
                        <pre><code>{`
tank/
 ├─ datasets/
 │   ├─ images/
 │   ├─ graphs/
 │   └─ text/
 ├─ models/
 │   ├─ checkpoints/
 │   └─ artifacts/
 └─ backups/
            `}</code></pre>
                    </div>
                </section>

                <section className="lab-section">
                    <h2><i className="lni lni-docker"></i> Docker / Application Node</h2>
                    <p>Hosts user-facing services via Docker Compose.</p>
                    <ul className="feature-list">
                        <li><strong>Services:</strong> MinIO (S3), Nginx (Reverse Proxy), Sonarr/Radarr, rrweb pipeline.</li>
                        <li><strong>Pipeline:</strong> Custom rrweb-to-mp4 conversion using Puppeteer + FFmpeg.</li>
                    </ul>
                    <div className="code-snippet">
                        <div className="snippet-header">docker-compose.yml (MinIO + Nginx)</div>
                        <pre><code>{`
version: '3.8'
services:
  minio:
    image: minio/minio:RELEASE.2025-01-01
    volumes:
      - /srv/minio/data:/data
    environment:
      MINIO_ROOT_USER: minio
      MINIO_ROOT_PASSWORD: <secret>
    command: server /data --console-address ":9001"
    networks:
      - svcnet

  nginx:
    image: nginx:stable
    ports:
      - "80:80"
      - "443:443"
    networks:
      - svcnet

networks:
  svcnet:
    driver: bridge
            `}</code></pre>
                    </div>
                </section>

                <section className="lab-section">
                    <h2><i className="lni lni-display-alt"></i> GPU Compute Node</h2>
                    <p>Heavy compute for training LLMs, GNNs, and GANs.</p>
                    <ul className="feature-list">
                        <li><strong>Hardware:</strong> NVIDIA GPUs with CUDA + cuDNN.</li>
                        <li><strong>Stack:</strong> PyTorch, DeepSpeed, Accelerate, BitsAndBytes.</li>
                        <li><strong>Ops:</strong> Ephemeral checkpointing to MinIO, MLFlow tracking.</li>
                    </ul>
                    <div className="code-snippet">
                        <div className="snippet-header">Docker Run with GPU</div>
                        <pre><code>{`
docker run --gpus '"device=0,1"' -v /data:/data your-train-image:latest python train.py
            `}</code></pre>
                    </div>
                </section>

                <section className="lab-section">
                    <h2><i className="lni lni-shield"></i> Bastion / Edge Node</h2>
                    <p>Public gateway and security perimeter.</p>
                    <ul className="feature-list">
                        <li><strong>Services:</strong> Nginx/Traefik, WireGuard/Tailscale, Fail2ban.</li>
                        <li><strong>Security:</strong> TLS termination (Let's Encrypt), SSH jumpbox.</li>
                    </ul>
                </section>

                <section className="lab-section">
                    <h2><i className="lni lni-pulse"></i> Backup & Monitoring</h2>
                    <p>Observability and disaster recovery.</p>
                    <ul className="feature-list">
                        <li><strong>Stack:</strong> Prometheus, Grafana, Alertmanager, Loki.</li>
                        <li><strong>Backups:</strong> Restic to B2, TrueNAS replication.</li>
                    </ul>
                </section>

                <section className="lab-section full-width">
                    <h2>Operational Recipes</h2>
                    <div className="recipe-grid">
                        <div className="recipe-card">
                            <h3>Systemd Timer: Hourly Model Copy</h3>
                            <p>Automated backup of model checkpoints.</p>
                            <div className="code-snippet">
                                <pre><code>{`
[Unit]
Description=Run copy-model hourly

[Timer]
OnCalendar=hourly
Persistent=true

[Install]
WantedBy=timers.target
                `}</code></pre>
                            </div>
                        </div>

                        <div className="recipe-card">
                            <h3>DVC Remote Config</h3>
                            <p>Setting up MinIO as DVC remote.</p>
                            <div className="code-snippet">
                                <pre><code>{`
dvc remote add -d minio s3://dvc-storage
dvc remote modify minio endpointurl http://minio:9000
dvc remote modify minio access_key <key>
dvc remote modify minio secret_key <secret>
                `}</code></pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeLab;
