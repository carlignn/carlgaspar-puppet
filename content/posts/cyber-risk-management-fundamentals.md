---
title: Cyber Risk Management Fundamentals
subtitle: Write-up from FedVTE’s Fundamentals of Cyber Risk Management
date: 2023-09-26T16:00:00.000Z
tags:
  - write-up
toc: true
---

## Fundamentals of Cyber Risk Management

### Fundamentals of Cyber Risk Management Course Introduction

#### Course Agenda

* Risk Management Overview
* Risk Management Frameworks
* Critical Assets and Operations
* Threats and Vulnerabilities
* Risk Analysis and Mitigation
* Security Controls
* Mitigation Strategy Maintenance
* Response and Recovery

### Risk Management Overview

* NIST SP 800-30
  * Defines risk as “a measure of the extent to which an entity is threatened by a potential circumstance or event, and typically a function of: (i) the adverse impacts that would arise if the circumstance or event occurs; and (ii) the likelihood of occurrence”
* At a high level, this is accomplished by balancing exposure to risks against cost of mitigation and implementing appropriate countermeasures/controls.

#### Tiers of Risk Management

* Tier 1 – Organization (Governance)
* Tier 2 – Mission (Business Process)
* Tier 3 – Information System (Environment of Operations)

#### Terms to Know

* Response vs. Recovery
* Threat, Vulnerability, and Risk
* Risk Assessment
* Business Continuity Management
  * Risk Assessment
  * Business Impact Analysis (BIA)
  * Business Continuity Planning (BCP)

#### The Risk Equation

* Risk = Threat x (Likelihood x Vulnerability) x Impact

#### Risk Assessment

* A study of vulnerabilities, threats, likelihood, loss or impact, and theoretical effectiveness of security measures

#### Business Continuity

#### Risk and Business Impact Analysis

* Know what is important to you.
  * What are your critical business functions?
* Know what threats you have.
* Know your vulnerabilities and the likelihood they get exploited.
* Know the impact to your business if the threat occurred.
* Analyze your risks.
  * Risk = Threat x (Likelihood x Vulnerability) x Impact
* Decide what to do about the risks.

#### Types of Risk

* Inherent Risk is the risk linked to a particular activity itself.
  * Complex regulations
  * Poor management
* Control Risk comes from a failure of the controls to properly mitigate risk.
  * Failure of firewall to block malicious traffic
* Residual Risk is the combination of the inherent and the control risk; it is what remains after the controls have been applied to mitigate risk.
  * Eliminating risk is not possible IF you have chosen to expose yourself to it.
  * Residual risk must be accepted by management.

#### Operational Resilience

* Resilience: The physical property of a material when it can return to its original shape or position after deformation that does not exceed its elastic limit
* Operational resilience: The emergent property of an organization that can continue to carry out its mission in the presence of operational stress and disruption that does not exceed its limit

#### Operational Resilience and Risk

* Operational resilience emerges from effective operational risk management.
* Operational risk categories
  * Actions of people
  * Systems and technology failures
  * Failed internal processes
  * External events

#### Elements of Resilience …

* You should focus on all three; do not ignore one for the others. (Venn Diagram)
  * Security (Mostly Physical Security, Life & Limb) + Business Continuity
  * Business Continuity (COOP, Redundancy, Back-ups) + IT Operations
  * IT Operations (Information Assurance, Network Security) + Security 
  * \= RESILIENCE

#### Risk Management in a Nutshell

* Identify assets, threats, and vulnerabilities
* Determine “likely” threat scenarios
* Create and implement an appropriate response to reduce exposure
* Continually monitor, review, assess, evaluate, and update

#### Outcomes of Risk Management

* An understanding of
  * The organization’s threat, vulnerability and risk profile
  * Risk exposure
  * Potential consequences of compromise
    * Awareness of risk management priorities based on potential consequences
* A risk mitigation strategy sufficient to achieve an acceptable level of residual risk
* Organizational acceptance/deference based on an understanding of potential consequences of residual risk
* Integration as “business as usual”

## Risk Management Framework

### Standards for Risk Management

#### NIST SP 800-30

* Risk Management Guide for Information Technology Systems
  * Provides a foundation for the development of an effective risk management program
  * Contains the definitions and the practical guidance for assessing and mitigating risks
  * Provides information on the selection of cost-effective security controls

#### NIST SP 800-30: Risk Management

* At a high level, risk management encompasses three processes.
  *  \> Evaluation and Assessment > Risk Assessment > Risk Mitigation >

#### Risk Assessment Steps Abstracted from SP 800-30

* Step 1: System Characterization
* Step 2: Threat Identification
* Step 3: Vulnerability Identification
* Step 4: Control Analysis
* Step 5: Likelihood Determination
* Step 6: Impact Analysis
* Step 7: Risk Determination
* Step 8: Control Recommendations
* Step 9: Results Documentation

##### Step 1: System Characterization

* Input
  * Hardware
  * Software
  * System Interfaces
  * Data and Information (Need to categorize how sensitive are these data)
  * People
  * System Mission
* Output
  * System Boundary
  * System Functions
  * System and Data Criticality
  * System and Data Sensitivity

##### Step 2: Threat Identification

* Input
  * History of system attack
  * Data from intelligence agencies, mass media, or gov CERT
* Output
  * Threat Statement

##### Step 3: Vulnerability Identification

* Input
  * Reports from prior risk assessments
  * Prior audits
  * Security requirements
  * Security test results
* Output
  * List of potential vulnerabilities

##### Step 4: Control Analysis

* Input
  * Current controls
  * Planned controls
* Output
  * List of current and planned controls

##### Step 5: Likelihood Determination

* Input
  * Threat-source motivation
  * Threat capacity
  * Nature of vulnerability
  * Current controls
* Output
  * Likelihood rating

###### Likelihood Rating Qualitative Ratings

* High - The threat-source is highly motivated and sufficiently capable, and controls to prevent the vulnerability from being exercised are ineffective.
* Medium - The threat-source is motivated and capable, but controls are in place that may impede successful exercise of the vulnerability.
* Low - The threat-source lacks motivation or capability, or controls are in place to prevent, or at least significantly impede, the vulnerability from being exercised.

###### Another Way to Think About Likelihood Ratings Quantitative and Functional Risk Appetite Statement

* Executive Attention - Risk is between 75 - 99% likely to occur. Alternatively, this risk has come to fruition within the industry within the past year.
* Management Attention - Risk is between 30 - 74% likely to occur. Alternatively, this risk has come to fruition within the industry within the past two years.
* Front Line Attention - This risk is between 1 - 29% likely to occur. Alternatively, the risk has come to fruition within the industry within the past 5 years.

##### Step 6: Impact Analysis

* Input
  * Mission impact analysis
  * Asset criticality assessment
  * Data criticality
  * Data sensitivity
* Output
  * Impact rating

## References

* [Cyber Risk Management Fundamentals](https://www.reddit.com/r/cybersecurity/comments/15p7lgz/cyber_risk_management_fundamentals/)
* [Fundamentals of Cyber Risk Management](https://fedvte.usalearning.gov/publiccourses/fcrmframe.php)
