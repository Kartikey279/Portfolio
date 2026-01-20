export const portfolioData = {
    profile: {
        name: "Kartikey Pandey",
        title: "Data Engineering & Financial Systems Architect",
        bio: "I build production-grade data backbones that banks rely on for regulatory reporting and risk management. Specializing in Python, SQL, and Cloud Infrastructure (AWS/GCP) to turn messy data into governed, actionable assets.",
        image: "https://ui-avatars.com/api/?name=Kartikey+Pandey&size=200&background=16439c&color=ffffff&bold=true",
        resumeUrl: "#",
        social: {
            github: "https://github.com/pandey-kartikey",
            linkedin: "https://www.linkedin.com/in/pandey-kartikey/",
            email: "mailto:kartikey.pandey@example.com",
        },
    },

    philosophy: {
        headline: "Building data infrastructure that financial institutions trust.",
        description:
            "Operationalized 60+ automated pipelines handling daily/weekly ingestion from APIs and S3. Reduced critical script runtime by 75% via vectorized Pandas operations and aggressive modularization. Delivered a zero-latency 'High Velocity' Risk Tool for European Bank in <1 week.",
    },

    stats: [
        { value: "4+", label: "Years Exp" },
        { value: "60+", label: "Pipelines" },
        { value: "75%", label: "Faster Runtimes" },
    ],

    navigation: [
        { id: "philosophy", label: "Overview", icon: "grid_view" },
        { id: "experience", label: "Experience", icon: "work" },
        { id: "education", label: "Education", icon: "school" },
        { id: "skills", label: "Tech Stack", icon: "memory" },
        { id: "projects", label: "Projects", icon: "folder_open" },
        { id: "awards", label: "Awards", icon: "emoji_events" },
    ],

    awards: [
        {
            title: "Stellar Standards Nomination",
            period: "Q1 FY2026",
            context: "For delivery of high voltage work for front office team using VBA/Python for Risk Team.",
            citation: "Recognized for resolving challenges and blockers without hampering delivery dates.",
            icon: "star",
        },
        {
            title: "Emerging Team Award",
            period: "Q4 FY2025",
            date: "May 30, 2025",
            from: "India Recognition Team",
            icon: "groups",
        },
    ],

    experience: [
        {
            period: "Feb 2025 - Present",
            role: "Consultant | Python Dev | Data Migration Engineer",
            company: "Capco",
            description:
                "Handling end-to-end lifecycle for mission-critical financial datasets. Developing robust Python scripts and SQL queries for efficient data migration from legacy IBM DB2 systems to modern PostgreSQL environments.",
            achievements: [
                "Implemented automation for data validation processes, reducing manual effort by 40%.",
                "Delivered a zero-latency 'High Velocity' Risk Tool for European Bank in <1 week.",
                "Generated structured Python models with 100% accuracy and 75% runtime savings.",
                "Published work in Capco's Newsletter and earned Client Director's praises.",
            ],
            technologies: ["Python", "PostgreSQL", "IBM DB2", "SQL", "Data Migration"],
            icon: "engineering",
        },
        {
            period: "Jun 2024 - Jan 2025",
            role: "Consultant | Integration & Data Engineering",
            company: "Capco",
            description:
                "Developed a suite of reusable Python libraries and custom modules, creating a standardized code foundation that accelerated delivery speed for cross-functional teams.",
            achievements: [
                "Operationalized 60+ automated pipelines handling daily/weekly ingestion from APIs and S3.",
                "Enhanced database performance by 50% by introducing a Reporting Layer.",
                "Built modular engineering solutions with reusable Python libraries.",
                "Implemented CI/CD pipelines for automated deployments.",
            ],
            technologies: ["Python", "Pandas", "NumPy", "PostgreSQL", "GCP", "Airflow", "Docker", "Git"],
            icon: "analytics",
        },
        {
            period: "Mar 2023 - Jun 2024",
            role: "Associate Integration Analyst",
            company: "Capco",
            location: "Bengaluru, Karnataka (Hybrid)",
            description:
                "Supporting data integration and ETL pipeline development. Working with containerized environments and cloud infrastructure for enterprise clients.",
            achievements: [
                "Developed ETL pipelines using Dagster and Python for data workflows.",
                "Managed databases including IBM Db2, PostgreSQL, and worked with TDV.",
                "Implemented infrastructure as code using Terraform on AWS.",
                "Utilized Docker for containerization and PagerDuty for monitoring.",
            ],
            technologies: ["Python", "ETL", "Dagster", "Docker", "AWS", "Terraform", "IBM Db2"],
            icon: "database",
        },
        {
            period: "Mar 2022 - Feb 2023",
            role: "Python Developer",
            company: "Capco",
            location: "Bengaluru, Karnataka",
            description:
                "Started career focusing on building foundational programming skills, database management, and documentation practices.",
            achievements: [
                "Developed Python applications and automation scripts.",
                "Worked with SQL databases for data storage and retrieval.",
                "Maintained comprehensive documentation for codebase and processes.",
            ],
            technologies: ["Python", "SQL", "Databases", "Git"],
            icon: "code",
        },
    ],

    education: [
        {
            degree: "Master's Degree",
            field: "Data Science",
            institution: "Liverpool John Moores University",
            period: "2021 - 2022",
            focus: ["Data Science", "Data Visualization", "Data Engineering", "Pipelines", "ETL", "Data Modelling"],
        },
        {
            degree: "PGDDS",
            field: "Data Science",
            institution: "IIIT Bangalore",
            period: "Aug 2020 - Sep 2022",
            focus: ["Data Manipulation", "Data Mining", "Visualization", "ETL", "EDA", "AWS"],
        },
        {
            degree: "Bachelor of Technology",
            field: "Mechanical Engineering",
            institution: "Amity University",
            period: "2015 - 2019",
            focus: [],
        },
    ],

    skills: {
        frontend: {
            title: "Programming & Data",
            icon: "data_object",
            items: [
                { name: "Python", proficiency: "expert" },
                { name: "SQL", proficiency: "expert" },
                { name: "Pandas", proficiency: "expert" },
                { name: "NumPy", proficiency: "expert" },
            ],
        },
        backend: {
            title: "Databases & ETL",
            icon: "database",
            items: [
                { name: "PostgreSQL", proficiency: "expert" },
                { name: "IBM DB2", proficiency: "expert" },
                { name: "TDV", proficiency: "expert" },
                { name: "Airflow", proficiency: "expert" },
            ],
        },
        devops: {
            title: "Cloud & DevOps",
            icon: "cloud",
            items: ["AWS", "GCP", "Docker", "Terraform", "CI/CD", "Airflow", "PagerDuty"],
        },
    },

    projects: [
        {
            title: "Cellular-Level Data Governance Tool",
            subtitle: "The Climate Risk Governance Engine",
            description:
                "A European Bank needed to manage worldwide Climate Risk data with row-level locking capabilities without breaking the global dataset. Engineered a custom Power App with a Python backend to handle user attestations, audit trails, and automated locking.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDi1GTUUN2o748a-q1B-xIYRtIxio11-y3csK5oo3cDhOXi101ma5S3giagYt2pseNoyOqQ0RpggYVSxtN5J3NH2eph9TjjENAtGdeK2SAJdL2SMq5gAUtmRNIF_aVgI19YoeergrpbRGASEY33OGllcASB3gUYp52OWik-BmPt3fx9CYm2gpANk_gnB4oYkRlYQ1SKtCxiSrNhmhEl2IS7yqyJBLFZ9SxMHV5MjqabRq4cbcfgVI5yM-rkvu4tehwWEL834ts5_6x_",
            link: "#",
            metadata: [
                { label: "Stack", value: "Power Apps, Python ETL, SharePoint" },
            ],
            keyMetric: "Zero Jenkins Dependency",
            keyMetricNote: "Deployed via custom Python pipeline",
        },
        {
            title: "High-Performance ESG Emissions Engine",
            subtitle: "The PCAF Emissions Calculator",
            description:
                "Processing critical emissions data across Aerospace and Oil & Gas sectors was too slow for reporting deadlines. Rewrote the legacy codebase, integrating a scalable Python solution for Loan Exposure and Carbon Emissions calculations.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB-csUZomuuSOkoKwDyXZWUsN8FzF_CJCK8pIkynyi55BQgpC3zw0L22vEdOet9NGLwzIFkCzRjrZXiHlXEQ4vifK0Jd0KrOVAaI1Mv7EBIFBNcAt28EFAv6DfPm-BaPC-WlxIHumUr4WzNPZ_z6AmDb0wAqJYwTvGLSrBT1O0mlySFad0bt6G3XuzTndOLHWtNq7nB2KKFZGHOX48KhUS6qc38zX4FrZkvQ-uNc1TAYwUx8rADm7i8eidQHCvjqUxFy9xgad-UfpUD",
            link: "#",
            metadata: [
                { label: "Stack", value: "Python, Pandas, SQL" },
            ],
            keyMetric: "75% Runtime Reduction",
            keyMetricNote: "Deployed to Production in 1 Week",
        },
    ],

};

export type PortfolioData = typeof portfolioData;
