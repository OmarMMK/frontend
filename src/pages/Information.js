import React from 'react';
import './Information.css';

const Information = () => {
  const roadmapSteps = [
    {
      title: "1. Foundation",
      items: [
        "Linux Fundamentals",
        "Networking Basics",
        "Git Version Control",
        "Basic Scripting (Bash/Python)"
      ]
    },
    {
      title: "2. Infrastructure as Code",
      items: [
        "Terraform",
        "Cloud Platforms (AWS/Azure/GCP)",
        "Configuration Management (Ansible/Puppet)",
        "Containerization (Docker)"
      ]
    },
    {
      title: "3. CI/CD",
      items: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "ArgoCD"
      ]
    },
    {
      title: "4. Container Orchestration",
      items: [
        "Kubernetes",
        "Docker Swarm",
        "Service Mesh (Istio)",
        "Helm Charts"
      ]
    },
    {
      title: "5. Monitoring & Logging",
      items: [
        "Prometheus & Grafana",
        "ELK Stack",
        "Jaeger",
        "New Relic/Datadog"
      ]
    },
    {
      title: "6. Security",
      items: [
        "Security Scanning",
        "Secrets Management",
        "Compliance & Governance",
        "Security Best Practices"
      ]
    }
  ];

  return (
    <div className="information-container">
      <div className="roadmap-header">
        <h1>DevOps Engineer Roadmap</h1>
        <p>A comprehensive guide to becoming a DevOps Engineer</p>
      </div>

      <div className="roadmap-container">
        {roadmapSteps.map((step, index) => (
          <div key={index} className="roadmap-step">
            <div className="step-header">
              <div className="step-number">{index + 1}</div>
              <h2>{step.title}</h2>
            </div>
            <ul className="step-items">
              {step.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="roadmap-footer">
        <h3>Additional Skills</h3>
        <ul>
          <li>Problem-solving and troubleshooting</li>
          <li>Communication and collaboration</li>
          <li>Project management</li>
          <li>Continuous learning mindset</li>
        </ul>
      </div>
    </div>
  );
};

export default Information; 