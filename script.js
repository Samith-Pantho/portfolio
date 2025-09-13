// Project data
const projects = {
    enterprise: [
        {
            id: 'cloudnet',
            title: 'CloudNet - Digital Banking Platform',
            imageurl:'https://i.postimg.cc/yxcVcZYd/CloudNet.png',
            description: 'A comprehensive, API-driven digital banking platform enabling seamless omnichannel experiences.',
            role: 'Senior Software Developer (Backend)',
            timeline: 'Jan 2023 - Jul 2024',
            platform: 'ASP.NET Core, Oracle',
            client: 'Bank, Non-Banking Financial Institute, MFS, Fintech',
            objective: 'To build a single, powerful digital brain for the bank—a unified platform that lets customers securely access every banking service from their phone or computer. This includes checking accounts, managing cards, transferring funds via all methods (NPSB, RTGS, EFT), paying bills, submitting requests, and more, all from home. Simultaneously, it provides bank staff with a powerful dashboard to monitor activity, process requests, and generate reports efficiently.',
            problem: 'Customers were frustrated because they needed multiple apps or branch visits for different services. Checking a balance was easy, but blocking a lost card, applying for a statement, or paying a utility bill often required downloading a separate app, filling out paper forms, or calling customer service. For the bank, these fragmented systems created operational chaos. Customer service had no unified view of a user activity (requests, payments, transfers), leading to slow resolution times and a poor customer experience. Managing these disconnected systems was inefficient, also time-comsuming for a user.',
            solution: 'We built a comprehensive, all-in-one digital banking platform that works alongside with CBS system. We consolidated every online banking functions into a single, intuitive application for customers. For the bank, we provided an admin and operations panel where staff can monitor each customer activity if needed, process their service requests (like card blocks or account closures), monitor transactions in real-time, and generate detailed reports for compliance and analysis, all from one place.',
            technologies: ['ASP.NET Core', 'Oracle PL/SQL', 'Docker', 'RESTful APIs', 'JWT Authentication', 'Microservices', 'Entity Framework'],
            features: {
                "For Bank Customers": {
                    icon: "fas fa-users",
                    features: [
                        {
                            title: "Account Management",
                            icon: "fas fa-wallet",
                            items: ["View balances", "View account info", "Access transaction statements/activity logs"]
                        },
                        {
                            title: "Fund Transfers & Payments",
                            icon: "fas fa-exchange-alt",
                            items: [
                                "Transfer to own accounts and other bank accounts (NPSB)",
                                "High-value transfers (RTGS, EFT)",
                                "Send money to Mobile Financial Services (MFS) like bKash, Nagad",
                                "Pay all utility bills (electricity, water, gas)",
                                "Pay credit card bills"
                            ]
                        },
                        {
                            title: "Credit Card Services",
                            icon: "fas fa-credit-card",
                            items: ["View card details", "Check statements", "Track spending"]
                        },
                        {
                            title: "Service Requests & Support",
                            icon: "fas fa-headset",
                            items: [
                                "Digitally submit requests to block/unblock cards, close accounts, or file complaints",
                                "Submit tax return information directly through the portal",
                                "Track the status of any submitted request"
                            ]
                        },
                        {
                            title: "Security & Control",
                            icon: "fas fa-shield-alt",
                            items: [
                                "Strong authentication",
                                "Clear log of all user activity for peace of mind"
                            ]
                        }
                    ]
                },
                "For Bank Staff & Management": {
                    icon: "fas fa-user-tie",
                    features: [
                        {
                            title: "Centralized Operations Dashboard",
                            icon: "fas fa-tachometer-alt",
                            items: [
                                "Single screen to monitor system health",
                                "Track transaction volumes",
                                "Monitor user activity"
                            ]
                        },
                        {
                            title: "Customer 360 View",
                            icon: "fas fa-user-circle",
                            items: [
                                "See every customer's profile, accounts, recent transactions",
                                "View all past service requests in one place"
                            ]
                        },
                        {
                            title: "Request Processing Workflow",
                            icon: "fas fa-tasks",
                            items: [
                                "Efficiently receive, manage, and resolve customer requests",
                                "Handle card blocks, account closures without switching systems"
                            ]
                        },
                        {
                            title: "Comprehensive Reporting",
                            icon: "fas fa-chart-line",
                            items: [
                                "Generate real-time reports on transactions",
                                "Track user growth and service request status",
                                "Monitor financial performance for better decision-making"
                            ]
                        },
                        {
                            title: "Admin Management",
                            icon: "fas fa-cogs",
                            items: [
                                "Manage user roles and permissions",
                                "Configure system settings securely"
                            ]
                        }
                    ]
                }
            },
            impact: {
                '10+ financial institutions': {
                    icon: 'fas fa-chart-network',
                    color: '#3498db',
                    value: '10+'
                },
                '40% faster': {
                    icon: 'fas fa-bolt',
                    color: '#f39c12',
                    value: '40%'
                },
                'Reduced operational costs': {
                    icon: 'fas fa-money-bill-wave',
                    color: '#27ae60',
                    value: 'Costs ↓'
                },
                'Enhanced security and risk management': {
                    icon: 'fas fa-shield-alt',
                    color: '#e74c3c',
                    value: 'Security ↑'
                }
            }
        },
        {
            id: "verifid",
            title: "VerifID - E-KYC & Digital Onboarding Solution",
            imageurl: "https://i.postimg.cc/7LRDRV5h/VerifID.png",
            description: "A comprehensive digital onboarding platform enabling customers to open bank accounts remotely or at branches with full identity verification, automated data extraction, and integrated account funding.",
            role: "Software Developer (Full-Stack)",
            timeline: "Mar 2021 - Dec 2022",
            platform: "ASP.NET Core, Oracle",
            client: "Bank, Non-Banking Financial Institute, Security Market, Insurance, MFS, Fintech",
            objective: "Enable users to open bank accounts either remotely from home or through assisted branch onboarding with secure identity verification, automated data capture, and seamless integration with CBS and payment gateways.",
            problem: "Traditional onboarding is time-consuming, requires branch visits, manual verification, and paperwork, leading to slow account opening, customer friction, and high dropout rates.",
            solution: "Developed a dual-mode onboarding system: self-onboarding for remote account opening using NID, facial verification, and liveness detection; and assisted onboarding at branches using NID and fingerprint verification. Integrated OCR for automated data extraction, d-dup checks, Porichoy and EC API verification, and automatic account creation in CBS with balance transfer via SSLCOMMERZ.",
            technologies: ["ASP.NET Core", "Oracle", "Biometric APIs", "Fingerprint Devices", "OCR", "Facial Recognition", "Web Services", "Porichoy API", "SSLCOMMERZ Integration"],
            features: {
                "For Bank Customers": {
                    "icon": "fas fa-users",
                    "features": [
                        {
                            "title": "Self-Onboarding",
                            "icon": "fas fa-mobile-alt",
                            "items": [
                                "Select product and branch",
                                "Enter CAPTCHA and verify mobile via OTP",
                                "Upload NID front and back; OCR extracts Name, DOB, NID No",
                                "D-duplication account check",
                                "Capture photo with liveness verification",
                                "Identity verification via Porichoy API",
                                "Update personal info: address, salary, profession",
                                "Add services: online banking, SMS, email",
                                "Automatic account creation in CBS",
                                "Balance transfer from credit card via SSLCOMMERZ"
                            ]
                        },
                        {
                            "title": "Assisted Onboarding",
                            "icon": "fas fa-building",
                            "items": [
                                "Branch staff assists with account opening",
                                "Select product and branch",
                                "Enter CAPTCHA and verify mobile via OTP",
                                "Upload NID front and back; OCR extracts Name, DOB, NID No",
                                "D-duplication account check",
                                "Capture fingerprint using fingerprint devices",
                                "Fingerprint verification via EC API",
                                "Update personal info: address, salary, profession",
                                "Add services: online banking, SMS, email",
                                "Automatic account creation in CBS",
                                "Balance transfer from credit card via SSLCOMMERZ"
                            ]
                        }
                    ]
                },
                "For Bank Staff & Management": {
                    "icon": "fas fa-user-tie",
                    "features": [
                        {
                            "title": "Admin Panel",
                            "icon": "fas fa-tachometer-alt",
                            "items": [
                                "View today, weekly, monthly, and total users onboarded (self and assisted)",
                                "View total pending onboarding requests (self and assisted)",
                                "Process or decline pending requests",
                                "View total declined onboardings (self and assisted)",
                                "Generate comprehensive reports for management"
                            ]
                        }
                    ]
                }
            },
            impact: {
                "Reduced account opening time to under 15 minutes": {
                    "icon": "fas fa-stopwatch",
                    "color": "#9b59b6",
                    "value": "15 min"
                },
                "Increased remote and assisted onboarding completion rates by 70%": {
                    "icon": "fas fa-chart-line",
                    "color": "#1abc9c",
                    "value": "70%"
                },
                "Achieved full compliance with Bangladesh Bank KYC & e-KYC guidelines": {
                    "icon": "fas fa-file-contract",
                    "color": "#34495e",
                    "value": "100%"
                },
                "Enabled straight-through processing (STP) for 85% of applications": {
                    "icon": "fas fa-cogs",
                    "color": "#d35400",
                    "value": "85%"
                }
            }
        }
    ],
    self: [
        {
            id: "clickkyc",
            title: "ClickKYC",
            description: "Microservice-based KYC solution using Docker and asynchronous flows via Kafka with mobile/email verification and DIDIT-based customer verification.",
            role: "Full Stack Developer",
            timeline: "Jun 2025 - Jul 2025",
            platform: "FastAPI, React, MySQL, Kafka",
            client: "Personal Project",
            objective: "Design a modern, scalable KYC solution with event-driven architecture that supports DIDIT verification, real-time callbacks, and automated account creation.",
            problem: "Traditional KYC systems are often monolithic, difficult to scale, and cannot handle real-time identity verification with automated account creation.",
            solution: "Built a containerized microservices architecture using Kafka for asynchronous communication. Implemented DIDIT verification for customer identity, mobile/email validation, automated account creation, and PDF generation of account details on successful verification.",
            technologies: ["FastAPI", "React", "MySQL", "Kafka", "Docker", "Microservices", "JSON Web Tokens", "DIDIT Integration"],
            features: {
                "Customer ID and Account Creation with DIDIT verification": {
                    "icon": "fas fa-users",
                    "features": [
                        {
                            "title": "Self-Onboarding Workflow",
                            "icon": "fas fa-mobile-alt",
                            "items": [
                                "Select product",
                                "Select branch",
                                "Verify mobile number",
                                "Verify email address",
                                "Initiate DIDIT verification",
                                "Handle callback after verification",
                                "Open account and generate PDF on success, show error on failure"
                            ]
                        }
                    ]
                }
            },
            github: "https://github.com/Samith-Pantho/ClickKYC"
        },
        {
            id: "clicknet",
            title: "ClickNet",
            description: "Containerized microservices banking platform with Kafka-based event processing, AI chatbot integration, and full-featured online banking operations.",
            role: "Full Stack Developer",
            timeline: "Jun 2025 - Jul 2025",
            platform: "React, FastAPI, MySQL",
            client: "Personal Project",
            objective: "Build a modern online banking platform demonstrating scalable microservices, event-driven design, AI integration, and comprehensive banking operations.",
            problem: "Many banking platforms rely on legacy systems that are hard to maintain, slow, and provide limited real-time user experiences.",
            solution: "Developed a complete online banking simulation with user authentication, Captcha verification, CBS integration, fund transfers, account management, AI-powered customer support, Stripe-based payments, and SMS/email notifications.",
            technologies: ["React", "FastAPI", "MySQL", "Kafka", "Docker", "AI Integration", "RESTful APIs", "Stripe Payments"],
            features: {
                "For Bank Customers": {
                    "icon": "fas fa-users",
                    "features": [
                        {
                            "title": "Account Management",
                            "icon": "fas fa-wallet",
                            "items": [
                                "Sign Up with Captcha and CBS verification",
                                "Forget Password with Captcha and CBS verification",
                                "Forget User ID with Captcha and CBS verification",
                                "Check account information",
                                "Profile management and update profile picture",
                                "SMS and Email notifications"
                            ]
                        },
                        {
                            "title": "Banking Operations",
                            "icon": "fas fa-exchange-alt",
                            "items": [
                                "Find branches and get waypoints from user's location",
                                "Fund transfers",
                                "Add money from Stripe",
                                "Transaction history",
                                "Generate account statements",
                                "File complaints"
                            ]
                        },
                        {
                            "title": "AI & Support",
                            "icon": "fas fa-robot",
                            "items": [
                                "Chat with AI for banking assistance"
                            ]
                        }
                    ]
                }
            },
            github: "https://github.com/Samith-Pantho/ClickNet"
        }
    ]
};

// Function to open project detail page
function openProject(type, id) {
    const project = projects[type].find(p => p.id === id);
    if (project) {
        toggleSection("projectList","hide");
        loadProjectDetail(project);
        toggleSection("project-detail","show");
    }
}

// Function to load project detail page
function loadProjectDetail(projectData) {
    if (!projectData) {
        window.location.href = 'projects.html';
        return;
    }

    const detailContainer = document.getElementById('project-detail');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="container">
                <div class="project-header">
                    <h1>${projectData.title}</h1>
                    <p>${projectData.description}</p>
                    
                    <div class="project-meta-grid">
                        <div class="meta-item">
                            <h4>My Role</h4>
                            <p>${projectData.role}</p>
                        </div>
                        <div class="meta-item">
                            <h4>Timeline</h4>
                            <p>${projectData.timeline}</p>
                        </div>
                        <div class="meta-item">
                            <h4>Platform</h4>
                            <p>${projectData.platform}</p>
                        </div>
                        <div class="meta-item">
                            <h4>Client</h4>
                            <p>${projectData.client}</p>
                        </div>
                    </div>
                </div>
                
                <div class="project-section">
                    <h2>Objective</h2>
                    <p>${projectData.objective}</p>
                </div>
                
                <div class="project-section">
                    <h2>The Problem</h2>
                    <p>${projectData.problem}</p>
                </div>
                
                <div class="project-section">
                    <h2>Solution</h2>
                    <p>${projectData.solution}</p>
                </div>
                
                <div class="project-section">
                    <h2>Technologies Used</h2>
                    <div class="tech-list">
                        ${projectData.technologies.map(tech => `<div class="tech-item">${tech}</div>`).join('')}
                    </div>
                </div>
                
                ${projectData.features ? renderFeatures(projectData.features) : ''}
                
                ${projectData.impact ? renderImpact(projectData.impact) : ''}
                
                ${projectData.github ? `
                <div class="project-section">
                    <h2>Source Code</h2>
                    <p><a href="${projectData.github}" target="_blank" class="back-button"><i class="fab fa-github"></i> View on GitHub</a></p>
                </div>
                ` : ''}
                
                <a href="javascript:void(0)" onclick="toggleSection('project-detail', 'hide'); toggleSection('projectList', 'show');" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Projects
                </a>
            </div>
        `;
    }
}

function renderFeatures(features) {

    // Generate HTML for the features section
    let featuresHTML = `
        <div class="project-section">
            <h2>Key Features</h2>
            <div class="modern-features-container">
    `;

    // Add each feature category
    for (const [category, categoryData] of Object.entries(features)) {
        featuresHTML += `
            <div class="feature-category">
                <div class="category-header">
                    <i class="${categoryData.icon}"></i>
                    <h3>${category}</h3>
                </div>
                <div class="features-grid">
        `;

        // Add each feature group
        categoryData.features.forEach(featureGroup => {
            featuresHTML += `
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="${featureGroup.icon}"></i>
                    </div>
                    <h4 class="feature-title">${featureGroup.title}</h4>
                    <ul class="feature-items">
                        ${featureGroup.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        featuresHTML += `
                </div>
            </div>
        `;
    }

    featuresHTML += `
            </div>
        </div>
    `;

    return featuresHTML;
}

function renderImpact(impactItems) {
    return `
        <div class="project-section">
            <h2>Impact & Results</h2>
            <div class="impact-container">
                ${Object.entries(impactItems).map(([impact, config], index) => {
                    return `
                        <div class="impact-card" style="animation-delay: ${index * 0.1}s">
                            <div class="impact-icon" style="background: ${config.color}20; color: ${config.color}">
                                <i class="${config.icon}"></i>
                            </div>
                            <div class="impact-value" style="color: ${config.color}">
                                ${config.value}
                            </div>
                            <div class="impact-text">
                                ${impact}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Function to initialize the projects page
function initProjectsPage() {
    toggleSection("project-detail", "hide");
    toggleSection("projectList","show");
    const allprojects = document.getElementById('projects');
    
    allprojects.innerHTML = projects.enterprise.map(project => `
        <div class="project-card" onclick="openProject('enterprise', '${project.id}')">
            <div class="project-image">
                <img src=${project.imageurl} alt='${project.title}' style="height: 100%; width: 100%;">
                <span class="project-badge enterprise-badge">Enterprise</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''
                    }
                </div>
                
                <div class="project-meta">
                    <span class="project-role">${project.role}</span>
                    <span class="project-type">Enterprise Project</span>
                </div>
            </div>
        </div>
    `).join('');


    allprojects.innerHTML += projects.self.map(project => `
        <div class="project-card" onclick="openProject('self', '${project.id}')">
            <div class="project-image">
                <i class="fas fa-laptop-code"></i>
                <span class="project-badge self-badge">Self Project</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''
                    }
                </div>
                
                <div class="project-meta">
                    <span class="project-role">${project.role}</span>
                    <span class="project-type">Personal Project</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Initialize filter functionality
    initProjectFilters();
}

// Initialize project filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const projectType = card.querySelector('.project-badge').classList.contains('enterprise-badge') ? 'enterprise' : 'self';
                    if (projectType === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    // Set active link based on current page
    document.addEventListener('DOMContentLoaded', function() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    });

    if (path.includes('projects.html')) {
        initProjectsPage();
    }
});

function toggleSection(id, toggleType) {
      const section = document.getElementById(id);

      if (toggleType === "show") {
        section.style.display = "block"; 
      } else {
        section.style.display = "none";
      }
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const backdrop = document.querySelector('.mobile-menu-backdrop');

function toggleMenu() {
    mobileMenuBtn.classList.toggle('close');
    navLinks.classList.toggle('active');
    backdrop.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);

// Close menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});
    

