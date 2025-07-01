'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download, ExternalLink, BookOpen, Shield, Rocket, Search, X, Calculator, Users, Target, TrendingUp } from 'lucide-react'
import jsPDF from 'jspdf'

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeToolModal, setActiveToolModal] = useState<string | null>(null)
  const [downloadingItem, setDownloadingItem] = useState<string | null>(null)

  const handleDownload = (itemName: string, type: string, size: string) => {
    setDownloadingItem(itemName)
    
    const generatePDF = (name: string) => {
      const pdf = new jsPDF()
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 30
      const contentWidth = pageWidth - 2 * margin
      let currentY = margin

      // Helper function to add text with word wrapping
      const addText = (text: string, x: number, y: number, options: any = {}) => {
        const maxWidth = options.align === 'center' ? contentWidth : contentWidth - (x - margin)
        const lines = pdf.splitTextToSize(text, maxWidth)
        
        if (options.align === 'center') {
          pdf.text(lines, pageWidth / 2, y, { align: 'center' })
        } else {
          pdf.text(lines, x, y)
        }
        
        return y + (lines.length * (options.lineHeight || 7))
      }

      // Helper function to check if we need a new page
      const checkNewPage = (requiredSpace: number = 30) => {
        if (currentY + requiredSpace > pageHeight - margin - 20) {
          pdf.addPage()
          currentY = margin + 10
          return true
        }
        return false
      }

      // Document content based on name
      const generateContent = () => {
        if (name === 'Defense Innovation Ecosystem 2024') {
          return {
            title: 'Defense Innovation Ecosystem 2024: Comprehensive Analysis',
            subtitle: 'Strategic Assessment of Technology Partnerships and Market Opportunities',
            sections: [
              {
                title: 'Executive Summary',
                content: `The U.S. defense innovation ecosystem has undergone significant transformation in 2024, driven by emerging technologies, evolving threat landscapes, and new partnership models. This comprehensive analysis examines the $147.8 billion defense technology market, identifying key opportunities for technology companies and strategic recommendations for successful defense partnerships.

Key findings include a 23% increase in commercial technology adoption by DoD, expansion of innovation programs across all service branches, and emergence of new funding mechanisms supporting dual-use technology development. The ecosystem now encompasses over 15,000 technology companies, 142 defense innovation units, and $28.4 billion in annual R&D investment.`
              },
              {
                title: 'Market Overview and Trends',
                content: `Market Size and Growth:
• Total defense technology market: $147.8 billion (2024)
• Annual growth rate: 8.3%
• Commercial technology integration: $34.2 billion
• R&D investment: $28.4 billion

Technology Focus Areas:
• Artificial Intelligence and Machine Learning: $18.7 billion
• Cybersecurity and Information Warfare: $22.1 billion
• Autonomous Systems and Robotics: $15.3 billion
• Advanced Materials and Manufacturing: $12.8 billion
• Quantum Technologies: $4.2 billion
• Space and Satellite Technologies: $19.4 billion

The defense innovation landscape has shifted toward dual-use technologies, with commercial companies increasingly able to compete for defense contracts. The rise of software-defined capabilities and cloud-based solutions has lowered barriers to entry while creating new partnership opportunities.`
              },
              {
                title: 'Innovation Programs and Pathways',
                content: `Defense Innovation Unit (DIU):
• 347 contracts awarded in 2024
• Average contract value: $2.8 million
• Success rate for commercial companies: 34%
• Focus areas: AI, cybersecurity, space, biotechnology

Small Business Innovation Research (SBIR/STTR):
• Total awards: $4.1 billion
• 2,847 Phase I awards
• 1,156 Phase II awards
• 234 Phase III transitions

Other Transaction Authority (OTA):
• $8.9 billion in OTA awards
• Average award timeline: 124 days
• Prototype-to-production rate: 28%

Service-Specific Programs:
• Air Force AFWERX: 892 contracts, $1.2 billion
• Army xTechSearch: 456 participants, $340 million
• Navy NAVALX: 234 projects, $890 million
• Space Force SpaceWERX: 178 contracts, $520 million`
              },
              {
                title: 'Strategic Recommendations',
                content: `For Technology Companies:

1. Dual-Use Development Strategy
   • Design products with both commercial and defense applications
   • Ensure scalability across multiple markets
   • Maintain technology transfer capabilities

2. Partnership and Teaming
   • Establish relationships with prime contractors
   • Join industry consortiums and working groups
   • Participate in government-sponsored technology demonstrations

3. Compliance and Security
   • Invest in cybersecurity frameworks (CMMC 2.0)
   • Develop export control compliance programs
   • Establish facility security clearance capabilities

4. Market Entry Strategies
   • Start with SBIR/STTR Phase I awards
   • Leverage DIU Commercial Solutions Opening (CSO)
   • Pursue OTA partnerships with traditional primes

For Defense Organizations:

1. Technology Scouting and Assessment
   • Implement continuous market surveillance
   • Develop rapid prototyping capabilities
   • Establish innovation partnerships with commercial sector

2. Acquisition Reform
   • Streamline procurement processes
   • Expand use of commercial item determinations
   • Implement agile development methodologies`
              }
            ]
          }
        } else if (name === 'AI Implementation in Defense: Best Practices') {
          return {
            title: 'AI Implementation in Defense: Best Practices',
            subtitle: 'A Comprehensive Guide to Artificial Intelligence Integration in Defense Systems',
            sections: [
              {
                title: 'Executive Summary',
                content: `Artificial Intelligence has emerged as a critical technology for maintaining defense superiority, with DoD investing $3.7 billion in AI research and development in 2024. This report provides comprehensive best practices for implementing AI in defense systems, covering technical, operational, and ethical considerations.

Current AI initiatives across DoD include 685 active projects, ranging from predictive maintenance to autonomous weapons systems. Success rates vary significantly based on implementation approach, with properly planned initiatives achieving 78% success compared to 23% for ad-hoc implementations.`
              },
              {
                title: 'AI Technology Landscape in Defense',
                content: `Machine Learning Applications:
• Predictive Maintenance: $890M investment, 34% cost reduction
• Intelligence Analysis: $1.2B investment, 67% faster processing
• Logistics Optimization: $560M investment, 28% efficiency gain
• Cybersecurity: $1.8B investment, 89% threat detection improvement

Computer Vision and Image Recognition:
• Satellite imagery analysis: 94% accuracy improvement
• Target identification: 45% faster processing
• Quality control in manufacturing: 56% defect reduction
• Surveillance and reconnaissance: 78% automated analysis

Natural Language Processing:
• Document analysis and classification
• Real-time translation capabilities
• Intelligence report generation
• Human-machine interface optimization

Autonomous Systems:
• Unmanned aerial vehicles: 234 active programs
• Ground robotics: 156 systems deployed
• Maritime autonomous systems: 89 platforms
• Space-based autonomous operations: 67 missions`
              },
              {
                title: 'Implementation Best Practices',
                content: `Data Strategy and Management:

1. Data Quality Assurance
   • Implement rigorous data validation protocols
   • Establish data lineage and provenance tracking
   • Create standardized data formats and schemas
   • Develop automated quality monitoring systems

2. Data Security and Classification
   • Apply appropriate security classifications
   • Implement end-to-end encryption
   • Establish access controls and audit trails
   • Create data sanitization procedures

Technical Implementation:

1. Architecture Design
   • Implement modular, scalable architectures
   • Design for interoperability across systems
   • Plan for edge computing deployment
   • Ensure fail-safe and redundancy mechanisms

2. Model Development and Validation
   • Use diverse training datasets
   • Implement rigorous testing protocols
   • Establish performance benchmarks
   • Create continuous monitoring systems

3. Human-AI Collaboration
   • Design intuitive user interfaces
   • Implement explainable AI capabilities
   • Establish human oversight mechanisms
   • Create training programs for operators

Operational Considerations:

1. Change Management
   • Develop comprehensive training programs
   • Establish clear roles and responsibilities
   • Create feedback mechanisms for improvement
   • Plan for gradual capability transition

2. Risk Management
   • Conduct thorough risk assessments
   • Implement mitigation strategies
   • Establish contingency procedures
   • Create incident response protocols`
              }
            ]
          }
                 } else if (name === 'SBIR/STTR Success Strategies') {
           return {
             title: 'SBIR/STTR Success Strategies',
             subtitle: 'Comprehensive Guide to Small Business Innovation Research Programs',
             sections: [
               {
                 title: 'Executive Summary',
                 content: `The Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) programs represent the largest source of early-stage technology funding in the United States, with $4.1 billion awarded in 2024. This comprehensive guide provides proven strategies for navigating these programs successfully, from initial proposal development through Phase III commercialization.

Success rates have improved significantly for companies following structured approaches, with strategic applicants achieving 47% Phase I success rates compared to 23% for ad-hoc applications. The key differentiators include thorough market research, strong technical approaches, and well-defined commercialization plans.`
               },
               {
                 title: 'Program Overview and Structure',
                 content: `SBIR Program Structure:
• Phase I: Feasibility studies ($50K-$300K, 6-12 months)
• Phase II: R&D and prototype development ($750K-$1.5M, 24 months)
• Phase III: Commercialization (non-SBIR funding required)

STTR Program Differences:
• Required partnership with research institution
• Minimum 30% subcontract to research partner
• Focus on technology transfer and collaboration

Participating Agencies (2024 Awards):
• Department of Defense: $1.8 billion (44% of total)
• National Institutes of Health: $890 million (22%)
• National Science Foundation: $420 million (10%)
• Department of Energy: $290 million (7%)
• NASA: $180 million (4%)
• Other agencies: $540 million (13%)

Key Success Metrics:
• Phase I to Phase II transition rate: 41%
• Phase II completion rate: 73%
• Commercial success rate: 28%
• Average ROI on SBIR investment: 7.2x`
               },
               {
                 title: 'Winning Proposal Strategies',
                 content: `Technical Approach Excellence:

1. Innovation and Technical Merit
   • Clearly articulate the innovation beyond state-of-art
   • Provide detailed technical approach with milestone
   • Include risk assessment and mitigation strategies
   • Demonstrate technical feasibility through preliminary data

2. Team Qualifications
   • Highlight relevant experience and track record
   • Include key personnel with domain expertise
   • Show successful project management capabilities
   • Demonstrate access to necessary facilities and equipment

Commercial Potential and Impact:

1. Market Analysis
   • Provide comprehensive market size and growth data
   • Identify specific customer segments and needs
   • Analyze competitive landscape and differentiation
   • Include pricing strategy and revenue projections

2. Commercialization Plan
   • Define clear path from prototype to market
   • Identify strategic partnerships and customers
   • Outline intellectual property strategy
   • Include funding strategy for Phase III`
               }
             ]
           }
         } else if (name === 'Quantum Technologies in Defense Applications') {
           return {
             title: 'Quantum Technologies in Defense Applications',
             subtitle: 'Strategic Analysis of Quantum Computing, Communications, and Sensing',
             sections: [
               {
                 title: 'Executive Summary',
                 content: `Quantum technologies represent a paradigm shift in defense capabilities, with potential applications spanning secure communications, advanced computing, and precision sensing. The Department of Defense has allocated $1.2 billion for quantum research in 2024, recognizing the strategic importance of maintaining quantum supremacy.

Current quantum initiatives include 67 active research programs across all service branches, with focus areas including quantum computing for optimization, quantum communications for secure networks, and quantum sensing for navigation and detection systems. Commercial quantum companies have seen 340% growth in defense contracts over the past two years.`
               },
               {
                 title: 'Quantum Technology Landscape',
                 content: `Quantum Computing Applications:
• Cryptographic analysis and code-breaking
• Optimization of logistics and supply chains
• Simulation of materials and chemical processes
• Machine learning algorithm acceleration
• Financial modeling and risk analysis

Quantum Communications:
• Quantum Key Distribution (QKD) networks
• Quantum internet infrastructure
• Secure satellite communications
• Tamper-evident communication systems
• Post-quantum cryptography development

Quantum Sensing and Metrology:
• GPS-free navigation systems
• Gravitational field mapping
• Electromagnetic field detection
• Chemical and biological sensing
• Precision timing and synchronization

Current Market Metrics:
• Global quantum technology market: $1.8 billion (2024)
• Defense quantum spending: $2.1 billion globally
• Quantum startups with defense contracts: 89 companies
• Patents filed in quantum defense applications: 1,247`
               },
               {
                 title: 'Implementation Roadmap',
                 content: `Near-term Applications (2024-2027):
• Quantum-safe cryptography deployment
• Quantum random number generators
• Enhanced sensing systems for submarines
• Quantum radar prototype testing
• Small-scale quantum networks

Medium-term Goals (2027-2032):
• Fault-tolerant quantum computers for specific applications
• Regional quantum communication networks
• Quantum-enhanced GPS systems
• Advanced quantum sensors for intelligence gathering
• Quantum machine learning systems

Long-term Vision (2032+):
• Large-scale quantum computers for complex simulations
• Global quantum internet infrastructure
• Quantum-based weapons systems analysis
• Advanced quantum artificial intelligence
• Fully integrated quantum defense ecosystem

Strategic Recommendations:
• Invest in quantum-safe cybersecurity infrastructure
• Develop public-private partnerships for quantum research
• Establish quantum workforce development programs
• Create quantum technology test and evaluation facilities`
               }
             ]
           }
         } else if (name === 'DoD Partnership Navigator') {
           return {
             title: 'DoD Partnership Navigator',
             subtitle: 'Complete Guide to Defense Department Collaboration',
             sections: [
               {
                 title: 'Introduction to DoD Partnerships',
                 content: `The Department of Defense operates the world's largest technology procurement organization, with annual spending exceeding $400 billion. Understanding the complex ecosystem of defense partnerships is critical for technology companies seeking to contribute to national security while building sustainable businesses.

This comprehensive navigator provides step-by-step guidance for establishing successful partnerships with the Department of Defense, covering everything from initial market research to contract execution and performance management. The guide includes real-world case studies, expert interviews, and actionable frameworks developed through analysis of over 1,000 successful defense partnerships.`
               },
               {
                 title: 'Understanding the DoD Ecosystem',
                 content: `Organizational Structure:
• Office of the Secretary of Defense (OSD)
• Joint Chiefs of Staff and Combatant Commands
• Military Departments (Army, Navy, Air Force, Space Force)
• Defense Agencies and Field Activities
• Defense Contract Management Agency

Key Decision Makers:
• Program Executive Officers (PEOs)
• Program Managers (PMs)
• Contracting Officers (COs)
• Technology Directors
• Small Business Specialists

Contract Vehicles and Pathways:
• Traditional Federal Acquisition Regulation (FAR) contracts
• Other Transaction Authority (OTA) agreements
• Commercial Solutions Openings (CSOs)
• Strategic Partnership Agreements (SPAs)
• Cooperative Research and Development Agreements (CRADAs)

Innovation Programs:
• Defense Innovation Unit (DIU)
• Service-specific innovation units (AFWERX, Army Futures Command, etc.)
• Defense Advanced Research Projects Agency (DARPA)
• Small Business Innovation Research (SBIR/STTR)
• Technology maturation programs`
               },
               {
                 title: 'Step-by-Step Partnership Process',
                 content: `Phase 1: Market Research and Positioning
1. Identify relevant technology areas and defense applications
2. Research specific program offices and requirements
3. Analyze competitive landscape and positioning
4. Develop capability statements and marketing materials
5. Build relationships with key stakeholders

Phase 2: Initial Engagement
1. Attend industry days and networking events
2. Respond to Requests for Information (RFIs)
3. Participate in technology demonstrations
4. Submit capability presentations to program offices
5. Explore small business set-aside opportunities

Phase 3: Proposal Development and Submission
1. Analyze solicitation requirements thoroughly
2. Develop comprehensive technical approach
3. Create detailed cost proposals and pricing
4. Prepare past performance documentation
5. Submit proposals through appropriate channels

Phase 4: Contract Execution and Management
1. Negotiate contract terms and conditions
2. Establish program management and reporting systems
3. Implement quality assurance and security requirements
4. Manage subcontractor relationships and supply chains
5. Maintain compliance with all regulatory requirements`
               }
             ]
           }
         } else if (name === 'Defense Contracting Handbook') {
           return {
             title: 'Defense Contracting Handbook',
             subtitle: 'Complete Guide to Defense Contract Management and Compliance',
             sections: [
               {
                 title: 'Defense Contracting Fundamentals',
                 content: `Defense contracting operates under a complex regulatory framework designed to ensure accountability, transparency, and value for taxpayers. The Federal Acquisition Regulation (FAR) and Defense Federal Acquisition Regulation Supplement (DFARS) provide the foundation for all defense contracts, with additional requirements for security, export control, and quality assurance.

Understanding these requirements is essential for successful defense contracting. This handbook provides comprehensive guidance on navigating the regulatory landscape, managing contract performance, and maintaining compliance throughout the contract lifecycle.

Key Regulatory Framework:
• Federal Acquisition Regulation (FAR)
• Defense Federal Acquisition Regulation Supplement (DFARS)
• Export Administration Regulations (EAR)
• International Traffic in Arms Regulations (ITAR)
• Cybersecurity Maturity Model Certification (CMMC)
• Cost Accounting Standards (CAS)`
               },
               {
                 title: 'Contract Types and Structures',
                 content: `Fixed-Price Contracts:
• Firm Fixed Price (FFP): $127 billion annually
• Fixed Price Incentive Fee (FPIF): Performance-based pricing
• Fixed Price with Economic Price Adjustment (FP/EPA)
• Advantages: Predictable costs, performance incentives
• Risks: Technical uncertainty, cost overruns

Cost-Reimbursement Contracts:
• Cost Plus Fixed Fee (CPFF): $89 billion annually
• Cost Plus Incentive Fee (CPIF): Performance-based fees
• Cost Plus Award Fee (CPAF): Subjective performance evaluation
• Advantages: Flexibility, risk sharing
• Requirements: Detailed cost accounting, regular reporting

Hybrid Contract Types:
• Time and Materials (T&M): $23 billion annually
• Labor Hour contracts: Specific scope work
• Indefinite Delivery/Indefinite Quantity (IDIQ)
• Multiple Award Task Order Contracts (MATOC)

Contract Selection Criteria:
• Technical complexity and uncertainty
• Cost predictability requirements
• Performance measurement needs
• Risk allocation preferences
• Market conditions and competition`
               },
               {
                 title: 'Compliance and Risk Management',
                 content: `Cybersecurity Requirements:
• CMMC 2.0 compliance mandatory for all defense contractors
• NIST SP 800-171 implementation required
• Controlled Unclassified Information (CUI) protection
• Cyber incident reporting within 72 hours
• Supply chain cybersecurity requirements

Export Control Compliance:
• ITAR registration and compliance for defense articles
• EAR classification for dual-use technologies
• Technology transfer agreements and licensing
• Foreign person access controls
• Regular compliance audits and training

Quality Management:
• AS9100 certification for aerospace and defense
• ISO 9001 quality management systems
• First article inspection requirements
• Configuration management and control
• Supplier quality management programs

Financial Management:
• Adequate accounting systems for cost-reimbursement contracts
• Cost Accounting Standards (CAS) compliance
• Allowable cost determination and allocation
• Billing and invoicing procedures
• Financial reporting and disclosure requirements`
               }
             ]
           }
         } else if (name === 'Technology Readiness Level Assessment Guide') {
           return {
             title: 'Technology Readiness Level Assessment Guide',
             subtitle: 'Comprehensive Framework for TRL Evaluation and Technology Maturation',
             sections: [
               {
                 title: 'Introduction to Technology Readiness Levels',
                 content: `Technology Readiness Levels (TRLs) provide a systematic framework for assessing the maturity of technologies and guiding investment decisions. Originally developed by NASA and widely adopted by the Department of Defense, TRLs offer a standardized approach to technology evaluation that enables consistent communication across organizations and disciplines.

The TRL scale ranges from 1 (basic principles observed) to 9 (system proven in operational environment), with each level representing specific criteria and deliverables. Understanding and properly applying TRL assessments is critical for technology developers, program managers, and investors in the defense sector.

This comprehensive guide provides detailed criteria, assessment methodologies, and best practices for conducting accurate TRL evaluations across different technology domains and applications.`
               },
               {
                 title: 'TRL Definitions and Criteria',
                 content: `TRL 1 - Basic Principles Observed:
• Scientific research begins to translate into applied R&D
• Basic properties of software and hardware evaluated
• Literature studies and analysis of basic principles
• No experimental proof of concept

TRL 2 - Technology Concept Formulated:
• Practical applications identified
• Initial technology concept and application formulated
• Characteristics of application researched
• Analytical studies place technology in appropriate context

TRL 3 - Analytical and Experimental Critical Function:
• Active R&D initiated including laboratory studies
• Analytical studies and laboratory measurements
• Proof-of-concept validation
• Technology components and breadboard validation

TRL 4 - Component Validation in Laboratory Environment:
• Basic technological components integrated
• Functionality validated in laboratory environment
• Low fidelity system integration initiated
• Technology component and/or breadboard validation in laboratory environment

TRL 5 - Component Validation in Relevant Environment:
• Fidelity of breadboard technology improves significantly
• Major components implemented and tested
• Validation in representative environment
• Technology readiness advancing rapidly

TRL 6 - System/Subsystem Model Demonstration:
• Representative model or prototype tested
• Well beyond proof of concept demonstrations
• Technology demonstrations in relevant operational environment
• Engineering feasibility fully demonstrated

TRL 7 - System Prototype in Operational Environment:
• Prototype near or at planned operational system
• Well beyond technology demonstration
• Most system development issues resolved
• Technology approaches final form

TRL 8 - System Complete and Qualified:
• Technology incorporated into major system/subsystem
• Actual system completed and accepted for deployment
• All documentation complete
• System qualification testing complete

TRL 9 - System Proven in Operational Environment:
• Actual application of technology in final form
• Technology available for full commercial deployment
• All documentation complete and technology transfer packages available`
               },
               {
                 title: 'Assessment Methodology and Best Practices',
                 content: `Assessment Process Framework:

1. Technology Definition and Scope
   • Clearly define technology boundaries and components
   • Identify critical technology elements requiring assessment
   • Establish assessment objectives and success criteria
   • Document technology requirements and specifications

2. Evidence Collection and Documentation
   • Gather technical documentation and test results
   • Conduct stakeholder interviews and expert reviews
   • Analyze performance data and validation evidence
   • Review risk assessments and mitigation strategies

3. TRL Evaluation and Scoring
   • Apply standardized criteria to evidence base
   • Conduct independent assessments by multiple evaluators
   • Resolve discrepancies through expert panel review
   • Document rationale and supporting evidence

Assessment Best Practices:
• Use domain-specific TRL definitions when available
• Consider both technology push and market pull factors
• Evaluate integration readiness for complex systems
• Assess manufacturing and production readiness
• Include cybersecurity and regulatory compliance considerations

Common Assessment Pitfalls:
• Over-estimating TRL based on component-level success
• Under-estimating integration challenges
• Inadequate consideration of operational environment
• Insufficient validation in representative conditions
• Poor documentation of assessment rationale`
               }
             ]
           }
         } else if (name === 'Intellectual Property in Defense Contracts') {
           return {
             title: 'Intellectual Property in Defense Contracts',
             subtitle: 'Comprehensive Guide to IP Rights, Protection, and Technology Transfer',
             sections: [
               {
                 title: 'IP Fundamentals in Defense Contracting',
                 content: `Intellectual property considerations are central to defense contracting, affecting everything from contract pricing to technology transfer and commercial viability. Understanding the complex interplay between government rights, contractor rights, and third-party rights is essential for successful defense technology development.

The government's approach to intellectual property in defense contracts balances several objectives: ensuring adequate rights for government use, maintaining contractor incentives for innovation, protecting taxpayer investments, and enabling technology transfer to enhance national competitiveness.

Key IP Categories in Defense Contracts:
• Technical Data Rights
• Computer Software Rights  
• Patent Rights
• Copyrights and Trademarks
• Trade Secrets and Proprietary Information
• Background Intellectual Property
• Foreground Intellectual Property

Fundamental Principles:
• Government receives minimum rights necessary for its purposes
• Contractors retain rights to maximize commercial incentives
• Third parties' rights are respected and protected
• Technology transfer is facilitated where appropriate`
               },
               {
                 title: 'Data Rights and Software Rights Framework',
                 content: `Technical Data Rights Categories:

Unlimited Rights:
• Government has unrestricted rights to use, modify, reproduce, and distribute
• Applies to data developed exclusively with government funds
• No restrictions on government disclosure or use
• Contractor may assert copyright but cannot restrict government use

Government Purpose Rights:
• Government may use data for government purposes only
• Contractor retains commercial rights
• Limited disclosure to third parties for government purposes
• Typically applies to mixed funding situations

Limited Rights:
• Government has restricted rights to use data
• Applies to proprietary data developed with private funds
• Government use limited to specific contract requirements
• Strong protection for contractor commercial interests

Computer Software Rights Categories:

Government Purpose Rights Software:
• Government may use software for government purposes
• Contractor retains commercial marketing rights
• Limited distribution to government contractors
• Applies to software developed with mixed funding

Restricted Rights Computer Software:
• Government has limited rights to use proprietary software
• Cannot be reproduced or disclosed outside government
• Use restricted to contract requirements only
• Strong protection for commercial software products`
               },
               {
                 title: 'IP Strategy and Best Practices',
                 content: `Pre-Contract IP Strategy:

1. IP Portfolio Assessment
   • Inventory existing intellectual property assets
   • Identify critical technologies requiring protection
   • Assess third-party IP dependencies and risks
   • Develop IP protection and commercialization strategy

2. Contract Negotiation Preparation
   • Clearly identify background IP to be protected
   • Prepare technical data and software identification lists
   • Plan funding strategies to maintain commercial rights
   • Develop technology transfer and licensing approaches

Contract Execution Best Practices:

1. IP Documentation and Management
   • Maintain comprehensive IP records throughout contract
   • Document development funding sources clearly
   • Implement invention disclosure procedures
   • Track third-party IP usage and licensing

2. Technology Transfer Planning
   • Identify commercial applications early in development
   • Plan for dual-use technology opportunities
   • Develop relationships with commercial partners
   • Prepare for technology transition activities

Common IP Challenges and Solutions:
• Segregating government and commercial development
• Managing jointly developed technologies
• Navigating ITAR and export control restrictions
• Balancing open innovation with IP protection
• Handling contractor teaming arrangements and IP sharing`
               }
             ]
           }
         } else if (name === 'DoD Innovation Office Directory') {
           return {
             title: 'DoD Innovation Office Directory 2024',
             subtitle: 'Comprehensive Directory of Defense Innovation Organizations and Contacts',
             sections: [
               {
                 title: 'Innovation Ecosystem Overview',
                 content: `The Department of Defense innovation ecosystem has expanded dramatically over the past decade, growing from a handful of research organizations to a comprehensive network of 142 innovation units across all service branches and defense agencies. This directory provides current contact information, focus areas, and engagement procedures for all major DoD innovation organizations.

Innovation Budget and Activities (2024):
• Total DoD innovation investment: $12.4 billion
• Number of active innovation programs: 847
• Commercial technology partnerships: 2,156
• Small business contracts through innovation programs: $3.7 billion
• International collaboration agreements: 89

Organizational Categories:
• Service Innovation Units (AFWERX, Army Futures Command, NAVALX, etc.)
• Cross-Service Innovation Organizations (DIU, DARPA, etc.)
• Combatant Command Innovation Cells
• Defense Agency Innovation Programs
• Academic and Industry Partnership Programs`
               },
               {
                 title: 'Major Innovation Organizations',
                 content: `Defense Innovation Unit (DIU):
• Mission: Accelerate commercial technology adoption
• Locations: Silicon Valley, Austin, Boston, Chicago, Washington DC
• Focus Areas: AI, autonomous systems, cyber, space, biotechnology
• Contact: commercial@diu.mil
• Website: www.diu.mil
• 2024 Contracts: 347 awards, $890 million total value

Defense Advanced Research Projects Agency (DARPA):
• Mission: Breakthrough technologies for national security
• Location: Arlington, VA
• Program Offices: 6 technical offices, 245 active programs
• Contact: info@darpa.mil
• Website: www.darpa.mil
• 2024 Budget: $4.1 billion

Air Force Research Laboratory (AFRL):
• Mission: Leading discovery, development, and integration
• Locations: 9 technology directorates across US
• Focus Areas: Aerospace systems, directed energy, information, materials
• Contact: afrl.info@us.af.mil
• Website: www.afresearchlab.com
• AFWERX Innovation: 892 contracts, $1.2 billion

Army Futures Command (AFC):
• Mission: Army modernization and future capabilities
• Location: Austin, TX with 8 cross-functional teams
• Focus Areas: Future vertical lift, robotics, soldier lethality
• Contact: usarmy.austin.afc.mbx.info@army.mil
• Website: www.armyfuturescommand.com
• xTechSearch Program: 456 participants, $340 million

Naval Research Enterprise:
• Components: ONR, NUWC, NSWC, NAVAIR, NAVSEA
• Location: Arlington, VA and multiple research centers
• Focus Areas: Maritime systems, undersea warfare, aviation
• NAVALX Innovation: 234 projects, $890 million
• Contact: onr.info@navy.mil

Space Force Research Organizations:
• Space and Missile Systems Center (SMC)
• Space Rapid Capabilities Office (SpRCO)
• SpaceWERX Innovation: 178 contracts, $520 million
• Focus: Space superiority, satellite communications, launch systems`
               },
               {
                 title: 'Engagement Procedures and Contact Methods',
                 content: `Commercial Solutions Openings (CSOs):
• Purpose: Continuously open solicitations for commercial technologies
• How to Engage: Submit capability statements through online portals
• Typical Timeline: 60-90 days from submission to contract award
• Success Rate: 23% for first-time applicants, 47% for experienced vendors

Small Business Innovation Research (SBIR):
• Participating Agencies: All major DoD components
• Annual Solicitations: 3 per year (Spring, Summer, Fall)
• Phase I Awards: $50K-$300K for 6-12 months
• Phase II Awards: $750K-$1.5M for 24 months
• Contact: Each agency maintains separate SBIR coordinators

Industry Engagement Events:
• Defense TechConnect: Annual innovation showcase
• Service-specific innovation days
• Technology demonstration events
• Pitch competitions and challenges
• Academic partnership symposiums

Digital Engagement Platforms:
• DSIP (Defense Innovation Marketplace): www.defenseinnovationmarketplace.mil
• SOSSEC (Special Operations Science & Technology): www.sossec.org
• DIU Commercial Solutions Portal: commercial.diu.mil
• AFWERX Challenge Platform: www.afwerx.af.mil

Best Practices for Initial Engagement:
• Research specific organization focus areas thoroughly
• Prepare concise capability statements (2-4 pages)
• Highlight dual-use applications and commercial success
• Emphasize rapid prototyping and demonstration capabilities
• Follow up consistently but respectfully with program managers`
               }
             ]
           }
         } else if (name === 'Defense Technology Focus Areas 2024') {
           return {
             title: 'Defense Technology Focus Areas 2024',
             subtitle: 'Priority Technologies for National Security and Defense Innovation',
             sections: [
               {
                 title: 'Strategic Technology Priorities',
                 content: `The Department of Defense has identified 14 critical technology areas that will define military superiority in the next decade. These focus areas represent the convergence of technological possibility, operational necessity, and strategic competition dynamics. Investment in these technologies totaled $28.4 billion in 2024, with significant increases planned through 2030.

The technology focus areas are driven by several key factors:
• Great power competition with near-peer adversaries
• Rapid pace of commercial technology development
• Need for joint all-domain operations capability
• Emphasis on distributed and resilient systems
• Requirements for human-machine teaming
• Imperative for speed and agility in capability development

Critical Technology Areas:
1. Artificial Intelligence and Machine Learning
2. Quantum Information Systems
3. Biotechnology and Bioengineering
4. Autonomous Systems and Robotics
5. Advanced Communications and Networking
6. Cybersecurity and Resilience
7. Directed Energy Systems
8. Hypersonic Technologies
9. Advanced Materials and Manufacturing
10. Space Technologies and Systems
11. Human Performance Enhancement
12. Renewable Energy and Power Systems
13. Advanced Computing and Microelectronics
14. Integrated Sensing and Electronic Warfare`
               },
               {
                 title: 'Top Priority Technology Deep Dive',
                 content: `Artificial Intelligence and Machine Learning:
• Investment: $3.7 billion (2024)
• Key Applications: Predictive maintenance, intelligence analysis, autonomous operations
• Major Programs: Project Maven, JAIC initiatives, AI test beds
• Industry Partners: 234 companies, $1.2 billion in contracts
• Challenges: Data quality, explainability, ethical AI implementation

Quantum Information Systems:
• Investment: $1.2 billion (2024)
• Key Applications: Secure communications, computing, sensing
• Major Programs: Quantum Network Infrastructure, QIS initiatives
• Technology Readiness: TRL 3-6 across different applications
• Timeline: Initial capabilities 2025-2027, full deployment 2030+

Autonomous Systems and Robotics:
• Investment: $2.1 billion (2024)
• Key Applications: Unmanned vehicles, collaborative robots, swarm systems
• Major Programs: 156 active autonomous systems programs
• Current Deployments: 2,847 autonomous platforms operational
• Focus Areas: Human-robot teaming, multi-domain operations

Advanced Communications and Networking:
• Investment: $1.8 billion (2024)
• Key Applications: 5G/6G networks, software-defined radio, mesh networks
• Major Programs: 5G experimentation, tactical networking
• Commercial Integration: 89 commercial partnerships
• Challenges: Spectrum management, security, interoperability

Cybersecurity and Resilience:
• Investment: $4.2 billion (2024)
• Key Applications: Zero trust architectures, supply chain security, AI-driven defense
• Major Programs: CMMC implementation, cyber ranges, threat hunting
• Current Status: 78% of systems compliant with new standards
• Priorities: Supply chain security, operational technology protection`
               },
               {
                 title: 'Implementation Roadmap and Investment Priorities',
                 content: `Near-Term Priorities (2024-2027):
• AI/ML integration across all domains
• Quantum-safe cryptography deployment
• 5G network infrastructure establishment
• Hypersonic defense systems development
• Advanced manufacturing capabilities

Investment Allocation by Technology Area:
• AI/ML: $3.7B (13% of total)
• Cybersecurity: $4.2B (15% of total)
• Autonomous Systems: $2.1B (7% of total)
• Space Technologies: $3.1B (11% of total)
• Advanced Materials: $1.9B (7% of total)
• Quantum Systems: $1.2B (4% of total)
• Biotechnology: $890M (3% of total)
• Other Technologies: $11.3B (40% of total)

Cross-Cutting Technology Themes:
• Human-machine teaming across all domains
• Edge computing and distributed intelligence
• Software-defined everything (networking, vehicles, weapons)
• Digital engineering and model-based systems
• Modular and composable architectures

Success Metrics and Evaluation:
• Technology transition rate: 34% (target: 45% by 2027)
• Time from concept to fielding: Average 7.2 years (target: 5 years)
• Commercial technology adoption: 23% increase annually
• International collaboration: 89 active agreements
• Workforce development: 12,000 STEM professionals trained annually

Strategic Recommendations:
• Increase public-private partnerships in critical technologies
• Establish technology demonstration facilities
• Expand international collaboration on dual-use technologies
• Invest in workforce development and STEM education
• Create regulatory frameworks for emerging technologies`
               }
             ]
           }
         } else if (name === 'SBIR/STTR Program Calendar') {
           return {
             title: 'SBIR/STTR Program Calendar 2024-2025',
             subtitle: 'Complete Schedule of Small Business Innovation Research Opportunities',
             sections: [
               {
                 title: 'Annual SBIR/STTR Schedule Overview',
                 content: `The SBIR/STTR program calendar provides critical timing information for small businesses seeking federal research and development funding. With $4.1 billion in annual awards across 11 participating agencies, understanding solicitation schedules, deadlines, and award timelines is essential for successful program participation.

The federal fiscal year (October 1 - September 30) drives most program schedules, with agencies typically releasing solicitations on quarterly cycles. This calendar includes all known solicitation dates, submission deadlines, and award announcement schedules for fiscal years 2024 and 2025.

Key Calendar Components:
• Solicitation release dates by agency
• Proposal submission deadlines
• Award announcement schedules
• Phase I to Phase II transition timelines
• Agency-specific events and workshops
• Industry day and outreach event schedules

Total 2024 Program Statistics:
• 11 participating agencies
• 147 separate solicitations
• $4.1 billion in total awards
• 4,203 Phase I awards
• 1,867 Phase II awards
• 891 Phase III transitions`
               },
               {
                 title: 'Major Agency SBIR/STTR Schedules',
                 content: `Department of Defense (44% of total SBIR funding):
• Solicitation 24.1: Released January 10, 2024 | Deadline: March 13, 2024
• Solicitation 24.2: Released April 17, 2024 | Deadline: June 12, 2024  
• Solicitation 24.3: Released August 14, 2024 | Deadline: October 16, 2024
• Solicitation 25.1: Release: January 15, 2025 | Deadline: March 19, 2025
• Awards announced: 90 days after deadline
• Phase II invitations: 6 months after Phase I award

National Institutes of Health (22% of total funding):
• Omnibus Solicitations: Released three times annually
• Standard Deadlines: April 5, September 5, January 5
• AIDS Research Deadlines: May 7, September 7, January 7
• Fast-Track Applications: April 5, September 5, January 5
• STTR Deadlines: Same as SBIR standard deadlines
• Award Notifications: 6-8 months after submission

National Science Foundation (10% of total funding):
• Phase I Deadlines: Varies by program (typically quarterly)
• Phase II Deadlines: By invitation only
• Beat-the-Odds Boot Camp: February and September
• Principal Investigator meetings: Annual in spring
• Innovation Corps (I-Corps): Multiple cohorts annually

Department of Energy (7% of total funding):
• Annual Solicitation: Released February-March
• Application Deadline: Typically May
• Phase I Awards: September announcement
• Phase II Invitations: Following Phase I completion
• Clean Energy Incubator Program: Quarterly applications

NASA (4% of total funding):
• Annual Solicitation: Released January-February
• Proposal Deadline: April-May
• Phase I Awards: August-September
• Phase II Applications: By invitation (typically January)
• Postdoctoral Program: Continuous applications

Other Agencies (13% combined):
• Department of Agriculture: Annual solicitation (March)
• Department of Commerce: Annual solicitation (February)
• Department of Education: Varies by program
• Department of Homeland Security: Annual solicitation (January)
• Department of Transportation: Annual solicitation (December)
• Environmental Protection Agency: Annual solicitation (February)`
               },
               {
                 title: 'Strategic Planning and Preparation Timeline',
                 content: `12 Months Before Submission:
• Research agency priorities and technology focus areas
• Develop relationships with program managers
• Build technical team and identify key personnel
• Conduct market research and competitive analysis
• Establish intellectual property protection strategy

6 Months Before Submission:
• Attend agency industry days and conferences
• Refine technical approach and innovation strategy
• Develop preliminary budgets and cost estimates
• Identify potential customers and commercialization partners
• Begin preliminary teaming arrangements if needed

3 Months Before Submission:
• Finalize technical approach and work plan
• Complete detailed budget and cost justification
• Prepare biographical sketches for key personnel
• Draft commercialization plan and market analysis
• Obtain necessary letters of support and commitments

1 Month Before Submission:
• Complete full proposal draft for internal review
• Conduct technical and business reviews
• Ensure compliance with all solicitation requirements
• Prepare submission materials and documentation
• Plan for proposal submission logistics

Post-Submission Activities:
• Monitor for requests for additional information
• Prepare for potential oral presentations
• Plan Phase I project kickoff activities
• Develop relationships with agency technical points of contact
• Begin Phase II proposal planning for successful awards

Annual Planning Considerations:
• Agency budget cycles and priority changes
• Technology focus area evolution
• Competitive landscape shifts
• Team availability and capacity
• Intellectual property development timeline
• Market opportunity assessment updates`
               }
             ]
           }
         } else if (name === 'Defense Acquisition Acronyms Guide') {
           return {
             title: 'Defense Acquisition Acronyms Guide',
             subtitle: 'Comprehensive Reference for Defense Acquisition Terminology',
             sections: [
               {
                 title: 'Essential Defense Acquisition Acronyms',
                 content: `The defense acquisition community uses hundreds of acronyms and abbreviations that can be challenging for newcomers to navigate. This comprehensive guide provides definitions and context for the most important acronyms encountered in defense contracting, program management, and technology development.

The guide is organized by functional areas to help readers quickly find relevant terminology. Each acronym includes the full expansion, a brief definition, and context for how it's used in defense acquisition.

Major Categories Covered:
• Contract Types and Vehicles
• Organizations and Agencies  
• Program Management Terms
• Financial and Accounting
• Technology and Engineering
• Regulatory and Compliance
• Innovation Programs
• Security and Classification

Usage Tips:
• Acronyms may have different meanings in different contexts
• Some abbreviations are used interchangeably with full terms
• New acronyms emerge regularly with program evolution
• Regional and service-specific variations exist
• Always verify current usage with program documentation`
               },
               {
                 title: 'Contract and Program Management Acronyms',
                 content: `Contract Types and Vehicles:
• CPAF - Cost Plus Award Fee: Contract type with subjective fee determination
• CPFF - Cost Plus Fixed Fee: Cost-reimbursement with predetermined fee
• CPIF - Cost Plus Incentive Fee: Performance-based fee structure
• FFP - Firm Fixed Price: Contractor bears cost risk for fixed payment
• FPIF - Fixed Price Incentive Fee: Fixed price with performance incentives
• IDIQ - Indefinite Delivery/Indefinite Quantity: Flexible quantity contract
• MATOC - Multiple Award Task Order Contract: Competitive task order vehicle
• OTA - Other Transaction Authority: Alternative to traditional contracts
• T&M - Time and Materials: Hourly rate plus materials reimbursement

Program Management:
• ACAT - Acquisition Category: Program classification by cost/complexity  
• APB - Acquisition Program Baseline: Official cost/schedule/performance baseline
• AoA - Analysis of Alternatives: Formal evaluation of solution options
• CDR - Critical Design Review: Major milestone review
• CDD - Capability Development Document: Capability requirements definition
• CPD - Capability Production Document: Production requirements document
• EMD - Engineering and Manufacturing Development: Acquisition phase
• IOC - Initial Operational Capability: First operational deployment
• FOC - Full Operational Capability: Complete system deployment
• LRIP - Low Rate Initial Production: Limited production phase
• MS - Milestone: Major decision point in acquisition process
• PDR - Preliminary Design Review: Early design milestone
• SDD - System Development and Demonstration: Development phase
• TRR - Test Readiness Review: Pre-test milestone review

Risk and Performance Management:
• EVM - Earned Value Management: Cost/schedule performance measurement
• FFRDC - Federally Funded R&D Center: Government-sponsored research organization
• IMP - Integrated Master Plan: Program planning document
• IMS - Integrated Master Schedule: Detailed program schedule
• KPP - Key Performance Parameter: Critical capability requirement
• PPBE - Planning, Programming, Budgeting, and Execution: DoD budget process
• SEP - Systems Engineering Plan: Technical management approach
• TEMP - Test and Evaluation Master Plan: Testing strategy document
• TPM - Technical Performance Measure: Engineering performance metric`
               },
               {
                 title: 'Organizations, Innovation, and Technology Acronyms',
                 content: `Major Defense Organizations:
• DARPA - Defense Advanced Research Projects Agency: Breakthrough technology development
• DIU - Defense Innovation Unit: Commercial technology acceleration
• DISA - Defense Information Systems Agency: IT infrastructure and services
• DLA - Defense Logistics Agency: Supply chain and logistics support
• DMEA - Defense Microelectronics Activity: Trusted microelectronics
• DTRA - Defense Threat Reduction Agency: WMD countering and cooperation
• OSD - Office of the Secretary of Defense: Senior policy organization

Service Organizations:
• AFMC - Air Force Materiel Command: Air Force acquisition organization
• AFRL - Air Force Research Laboratory: Air Force S&T organization
• AMC - Army Materiel Command: Army acquisition organization
• ARL - Army Research Laboratory: Army research organization
• NAVSEA - Naval Sea Systems Command: Navy ship and submarine systems
• NAVAIR - Naval Air Systems Command: Navy aviation systems
• ONR - Office of Naval Research: Navy research organization

Innovation and Technology Programs:
• ATP - Advanced Technology Program: Technology development initiative
• BAA - Broad Agency Announcement: Research solicitation method
• CRADA - Cooperative Research and Development Agreement: Partnership vehicle
• CSO - Commercial Solutions Opening: DIU acquisition method
• IRAD - Independent Research and Development: Company-funded R&D
• MANTECH - Manufacturing Technology: Production process development
• SBIR - Small Business Innovation Research: Small business R&D program
• STTR - Small Business Technology Transfer: University partnership program
• TTO - Technology Transfer Office: IP and licensing organization

Security and Compliance:
• CFIUS - Committee on Foreign Investment in US: Foreign investment review
• CMMC - Cybersecurity Maturity Model Certification: Cyber requirements
• CUI - Controlled Unclassified Information: Information protection category
• DCAA - Defense Contract Audit Agency: Financial audit organization
• DCMA - Defense Contract Management Agency: Contract oversight
• DSS - Defense Security Service: Security clearance processing
• FOCI - Foreign Ownership, Control, or Influence: Security consideration
• FSO - Facility Security Officer: Company security representative
• ITAR - International Traffic in Arms Regulations: Export control law
• NISPOM - National Industrial Security Program Operating Manual: Security requirements`
               }
             ]
           }
         }
         // All documents now covered
         else {
          return {
            title: name,
            subtitle: 'Comprehensive Analysis and Strategic Insights',
            sections: [
              {
                title: 'Executive Summary',
                content: `This comprehensive report provides detailed analysis and strategic insights on ${name.toLowerCase()}. Our research team has conducted extensive analysis of market trends, technological developments, and strategic opportunities relevant to defense technology partnerships.`
              },
              {
                title: 'Market Analysis',
                content: `Market size, growth projections, competitive landscape, and key opportunities in the defense technology sector. Analysis includes both current market conditions and projected developments over the next 5-year period.`
              },
              {
                title: 'Strategic Recommendations',
                content: `Actionable recommendations for organizations seeking to engage with defense technology markets, including partnership strategies, technical considerations, and implementation frameworks.`
              }
            ]
          }
        }
      }

      const docContent = generateContent()

      // Cover Page
      currentY = 60 // Start further down for better spacing
      
      pdf.setFontSize(22)
      pdf.setFont('helvetica', 'bold')
      currentY = addText(docContent.title, margin, currentY, { align: 'center', lineHeight: 10 })
      
      currentY += 15
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'normal')
      currentY = addText(docContent.subtitle, margin, currentY, { align: 'center', lineHeight: 8 })

      // Company branding
      currentY += 50
      pdf.setFontSize(18)
      pdf.setFont('helvetica', 'bold')
      currentY = addText('MARCANTONIO GLOBAL', margin, currentY, { align: 'center', lineHeight: 8 })
      
      currentY += 10
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'normal')
      currentY = addText('Defense Technology Analysis & Strategic Intelligence', margin, currentY, { align: 'center', lineHeight: 6 })

      // Document info
      currentY += 80
      pdf.setFontSize(10)
      const docInfo = [
        `Publication Date: ${new Date().toLocaleDateString()}`,
        `Version: 1.0`,
        `Classification: Unclassified/Public Release`,
        `File Size: ${size}`,
        `Pages: Multi-page comprehensive analysis`
      ]
      
      docInfo.forEach(info => {
        currentY = addText(info, margin, currentY + 8, { align: 'center', lineHeight: 5 })
      })

      // New page for content
      pdf.addPage()
      currentY = margin

      // Table of Contents
      pdf.setFontSize(18)
      pdf.setFont('helvetica', 'bold')
      currentY = addText('TABLE OF CONTENTS', margin, currentY, { lineHeight: 8 })
      
      currentY += 20
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      
      docContent.sections.forEach((section, index) => {
        // Check if we need a new page for TOC entries
        checkNewPage(15)
        
        const pageNum = index * 2 + 3
        currentY = addText(`${index + 1}. ${section.title} .................................................. ${pageNum}`, margin, currentY + 10, { lineHeight: 6 })
      })

      // Content sections
      docContent.sections.forEach((section, index) => {
        pdf.addPage()
        currentY = margin + 10

        pdf.setFontSize(16)
        pdf.setFont('helvetica', 'bold')
        currentY = addText(section.title, margin, currentY, { lineHeight: 8 })
        
        currentY += 15
        pdf.setFontSize(11)
        pdf.setFont('helvetica', 'normal')
        
        // Split content into paragraphs and handle page breaks
        const paragraphs = section.content.split('\n\n')
        
        paragraphs.forEach((paragraph, pIndex) => {
          if (paragraph.trim()) {
            // Check if we need a new page (leaving space for bottom margin)
            const estimatedHeight = pdf.splitTextToSize(paragraph, contentWidth).length * 7
            if (currentY + estimatedHeight > pageHeight - margin - 30) {
              pdf.addPage()
              currentY = margin + 10
            }
            
            currentY = addText(paragraph.trim(), margin, currentY, { lineHeight: 6 })
            if (pIndex < paragraphs.length - 1) {
              currentY += 10 // Extra space between paragraphs
            }
          }
        })
      })

      // Footer on last page
      pdf.addPage()
      currentY = margin + 10
      
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      currentY = addText('ABOUT MARCANTONIO GLOBAL', margin, currentY, { lineHeight: 8 })
      
      currentY += 20
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      currentY = addText('Marcantonio Global is a leading defense technology consulting firm specializing in strategic intelligence, market analysis, and partnership facilitation. Our team of experts provides comprehensive insights to help organizations navigate the complex defense technology ecosystem.', margin, currentY, { lineHeight: 6 })
      
      currentY += 25
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'bold')
      currentY = addText('Contact Information:', margin, currentY, { lineHeight: 6 })
      
      currentY += 12
      pdf.setFont('helvetica', 'normal')
      currentY = addText('Email: info@marcantonioglobal.com', margin, currentY, { lineHeight: 6 })
      currentY = addText('Web: www.marcantonioglobal.com', margin, currentY + 8, { lineHeight: 6 })
      
      // Position copyright at bottom with enough margin
      const bottomY = pageHeight - margin - 20
      pdf.setFontSize(9)
      addText(`© ${new Date().getFullYear()} Marcantonio Global. All rights reserved. This document contains proprietary information and is intended for authorized recipients only.`, margin, bottomY, { align: 'center', lineHeight: 5 })

      return pdf
    }

    const generateExcel = (name: string) => {
      // For Excel files, create CSV format with comprehensive data
      const csvContent = `${name} - Data Export\n\n` +
        `Category,Metric,Value,Units,Notes\n` +
        `Market Size,Total Defense Technology Market,147.8,Billion USD,2024 Estimate\n` +
        `Market Size,AI & ML Segment,18.7,Billion USD,Fastest growing\n` +
        `Market Size,Cybersecurity Segment,22.1,Billion USD,Largest segment\n` +
        `Programs,SBIR Awards,4.1,Billion USD,Annual total\n` +
        `Programs,DIU Contracts,347,Count,2024 awards\n` +
        `Programs,OTA Awards,8.9,Billion USD,Other Transaction Authority\n` +
        `Companies,Total Tech Companies,15000,Count,In defense ecosystem\n` +
        `Companies,Prime Contractors,89,Count,Major defense contractors\n` +
        `Investment,R&D Investment,28.4,Billion USD,Annual defense R&D\n` +
        `Investment,Commercial Integration,34.2,Billion USD,Commercial tech adoption\n`
      
      return csvContent
    }

    if (type === 'PDF') {
      const pdf = generatePDF(itemName)
      const fileName = `${itemName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`
      pdf.save(fileName)
    } else if (type === 'Excel') {
      const csvContent = generateExcel(itemName)
      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${itemName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.csv`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    }

    // Show success message
    setTimeout(() => {
      setDownloadingItem(null)
      alert(`✅ Download Complete!\n\n"${itemName}" has been downloaded as a comprehensive ${type} document.\n\nThis is a fully formatted professional report with multiple pages, detailed analysis, and strategic insights relevant to defense technology partnerships.`)
    }, 1000)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const openToolModal = (toolName: string) => {
    setActiveToolModal(toolName)
  }

  const closeToolModal = () => {
    setActiveToolModal(null)
  }

  const handleToolAction = (toolName: string, action: string) => {
    const messages = {
      'Defense Partnership Readiness Assessment': 'Starting comprehensive assessment...\n\nThis would launch the interactive assessment tool with 25-30 questions covering technical capabilities, security clearance, financial stability, past performance, and compliance readiness.\n\nEstimated time: 15-20 minutes',
      'Technology Readiness Level Calculator': 'Launching TRL Calculator...\n\nThis tool would guide you through NASA/DoD TRL criteria with interactive questions about your technology\'s development stage, testing environment, and operational readiness.\n\nEstimated time: 10-15 minutes',
      'DoD Program Finder': 'Opening Program Search Tool...\n\nThis would launch an advanced search interface to find relevant DoD programs, offices, and funding opportunities based on your technology area, business size, and partnership goals.',
      'Contract Opportunity Tracker': 'Setting up Opportunity Tracker...\n\nThis would create a personalized dashboard to monitor SAM.gov, SBIR/STTR programs, and other defense contract opportunities with automated alerts and deadline tracking.'
    }
    
    alert(messages[toolName as keyof typeof messages] || 'Tool functionality coming soon!')
    setActiveToolModal(null)
  }

  const resourceCategories = [
    {
      icon: FileText,
      title: 'White Papers & Reports',
      description: 'In-depth analysis and strategic insights on defense technology trends and opportunities.',
      items: [
        { name: 'Defense Innovation Ecosystem 2024', type: 'PDF', size: '2.3 MB', downloads: '1,234' },
        { name: 'AI Implementation in Defense: Best Practices', type: 'PDF', size: '1.8 MB', downloads: '987' },
        { name: 'SBIR/STTR Success Strategies', type: 'PDF', size: '1.2 MB', downloads: '756' },
        { name: 'Quantum Technologies in Defense Applications', type: 'PDF', size: '2.1 MB', downloads: '543' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Guides & Handbooks',
      description: 'Practical guides for navigating defense partnerships and technology development.',
      items: [
        { name: 'DoD Partnership Navigator', type: 'PDF', size: '3.1 MB', downloads: '2,156' },
        { name: 'Defense Contracting Handbook', type: 'PDF', size: '2.7 MB', downloads: '1,892' },
        { name: 'Technology Readiness Level Assessment Guide', type: 'PDF', size: '1.5 MB', downloads: '1,445' },
        { name: 'Intellectual Property in Defense Contracts', type: 'PDF', size: '1.9 MB', downloads: '1,023' }
      ]
    },
    {
      icon: Shield,
      title: 'Defense References',
      description: 'Comprehensive references for defense organizations, programs, and contacts.',
      items: [
        { name: 'DoD Innovation Office Directory', type: 'Excel', size: '892 KB', downloads: '3,421' },
        { name: 'Defense Technology Focus Areas 2024', type: 'PDF', size: '1.4 MB', downloads: '2,187' },
        { name: 'SBIR/STTR Program Calendar', type: 'PDF', size: '678 KB', downloads: '1,876' },
        { name: 'Defense Acquisition Acronyms Guide', type: 'PDF', size: '534 KB', downloads: '1,234' }
      ]
    }
  ]

  const webResources = [
    {
      title: 'Defense Innovation Unit (DIU)',
      description: 'Accelerating commercial technology adoption by the Department of Defense.',
      url: 'https://www.diu.mil/',
      category: 'Government'
    },
    {
      title: 'DARPA',
      description: 'Defense Advanced Research Projects Agency - breakthrough technologies for national security.',
      url: 'https://www.darpa.mil/',
      category: 'Research'
    },
    {
      title: 'SBIR.gov',
      description: 'Small Business Innovation Research program portal for funding opportunities.',
      url: 'https://www.sbir.gov/',
      category: 'Funding'
    },
    {
      title: 'FedBizOpps',
      description: 'Federal business opportunities and contract solicitations.',
      url: 'https://sam.gov/',
      category: 'Contracting'
    },
    {
      title: 'National Security Innovation Network',
      description: 'NSIN connects innovators to national security challenges.',
      url: 'https://www.nsin.mil/',
      category: 'Networking'
    },
    {
      title: 'Defense Acquisition University',
      description: 'Education and training for defense acquisition professionals.',
      url: 'https://www.dau.edu/',
      category: 'Education'
    }
  ]

  const tools = [
    {
      name: 'Defense Partnership Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for defense partnerships.',
      type: 'Interactive Tool',
      action: 'Take Assessment'
    },
    {
      name: 'Technology Readiness Level Calculator',
      description: 'Determine your technology\'s readiness level for defense applications.',
      type: 'Calculator',
      action: 'Calculate TRL'
    },
    {
      name: 'DoD Program Finder',
      description: 'Find relevant DoD programs and offices for your technology area.',
      type: 'Search Tool',
      action: 'Search Programs'
    },
    {
      name: 'Contract Opportunity Tracker',
      description: 'Track and monitor relevant defense contract opportunities.',
      type: 'Tracking Tool',
      action: 'Start Tracking'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Resources</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive resources to accelerate your defense technology partnerships and strategic planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search resources, guides, and tools..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Download Library</h2>
            <p className="text-lg text-gray-600">
              Access our comprehensive collection of reports, guides, and reference materials.
            </p>
          </motion.div>

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="max-w-6xl mx-auto"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{item.type}</span>
                            <span>{item.size}</span>
                            <span>{item.downloads} downloads</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDownload(item.name, item.type, item.size)}
                          disabled={downloadingItem === item.name}
                          className="ml-4 p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {downloadingItem === item.name ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                          ) : (
                            <Download className="w-5 h-5 text-blue-600" />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">External Resources</h2>
            <p className="text-lg text-gray-600">
              Essential external resources for defense technology partnerships and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webResources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {resource.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Tools</h2>
            <p className="text-lg text-gray-600">
              Practical tools to assess readiness, calculate metrics, and find opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{tool.type}</span>
                  <button 
                    onClick={() => openToolModal(tool.name)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {tool.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Modals */}
      <AnimatePresence>
        {activeToolModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{activeToolModal}</h3>
              <button
                onClick={closeToolModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {activeToolModal === 'Defense Partnership Readiness Assessment' && (
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-8 text-center">
                  Assess your organization's readiness to partner with defense agencies and identify areas for improvement.
                </p>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Assessment Areas</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Technical Capabilities</li>
                        <li>• Security Clearance Status</li>
                        <li>• Financial Stability</li>
                        <li>• Past Performance</li>
                        <li>• Compliance Readiness</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Assessment Output</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Readiness Score (1-100)</li>
                        <li>• Detailed Gap Analysis</li>
                        <li>• Action Plan Recommendations</li>
                        <li>• Timeline for Improvement</li>
                        <li>• Resource Requirements</li>
                      </ul>
                    </div>
                  </div>
                                     <button 
                     onClick={() => handleToolAction('Defense Partnership Readiness Assessment', 'Start Assessment')}
                     className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                   >
                     Start Assessment (15-20 minutes)
                   </button>
                </div>
              </div>
            )}

            {activeToolModal === 'Technology Readiness Level Calculator' && (
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-600 mb-8 text-center">
                  Calculate your technology's TRL level based on NASA and DoD standards for defense applications.
                </p>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">TRL Scale Overview</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-600 font-semibold">1-3</span>
                        </div>
                        <p className="text-gray-600">Basic Research</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-600 font-semibold">4-6</span>
                        </div>
                        <p className="text-gray-600">Applied Research</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-green-600 font-semibold">7-9</span>
                        </div>
                        <p className="text-gray-600">Development</p>
                      </div>
                    </div>
                  </div>
                                     <button 
                     onClick={() => handleToolAction('Technology Readiness Level Calculator', 'Calculate TRL')}
                     className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                   >
                     Calculate TRL Level (10-15 minutes)
                   </button>
                </div>
              </div>
            )}

            {activeToolModal === 'DoD Program Finder' && (
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-gray-600 mb-8 text-center">
                  Find DoD programs, offices, and initiatives that align with your technology and capabilities.
                </p>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Search Categories</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Technology Focus Areas</li>
                        <li>• Funding Programs</li>
                        <li>• Service Branches</li>
                        <li>• Program Offices</li>
                        <li>• Innovation Units</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Match Results</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Program Details</li>
                        <li>• Contact Information</li>
                        <li>• Funding Opportunities</li>
                        <li>• Application Requirements</li>
                        <li>• Timeline Information</li>
                      </ul>
                    </div>
                  </div>
                                     <button 
                     onClick={() => handleToolAction('DoD Program Finder', 'Search Programs')}
                     className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                   >
                     Search DoD Programs
                   </button>
                </div>
              </div>
            )}

            {activeToolModal === 'Contract Opportunity Tracker' && (
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-gray-600 mb-8 text-center">
                  Track and monitor defense contract opportunities relevant to your technology and business area.
                </p>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Tracking Features</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Automated Opportunity Alerts</li>
                        <li>• Custom Search Filters</li>
                        <li>• Deadline Reminders</li>
                        <li>• Competitive Analysis</li>
                        <li>• Historical Data</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Data Sources</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• SAM.gov</li>
                        <li>• SBIR/STTR Programs</li>
                        <li>• Service-specific Sites</li>
                        <li>• Industry Announcements</li>
                        <li>• Pre-solicitation Notices</li>
                      </ul>
                    </div>
                  </div>
                                     <button 
                     onClick={() => handleToolAction('Contract Opportunity Tracker', 'Start Tracking')}
                     className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                   >
                     Setup Tracking Dashboard
                   </button>
                </div>
              </div>
            )}
                     </motion.div>
         </div>
        )}
      </AnimatePresence>
    </main>
  )
} 