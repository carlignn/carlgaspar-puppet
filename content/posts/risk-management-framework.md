---
title: Risk Management Framework
subtitle: From My Write-up of FedVTE’s Fundamentals of Cyber Risk Management
date: 2023-09-26T16:00:00.000Z
toc: true
tags:
  - security
  - write-up
---

## Standards for Risk Management

### NIST SP 800-30

* Risk Management Guide for Information Technology Systems
  * Provides a foundation for the development of an effective risk management program
  * Contains the definitions and the practical guidance for assessing and mitigating risks
  * Provides information on the selection of cost-effective security controls

#### NIST SP 800-30: Risk Management

* At a high level, risk management encompasses three processes.
  * \> [Evaluation and Assessment](https://carlgaspar.com/posts/risk-management-framework/#evaluation-and-assessment) > [Risk Assessment](https://carlgaspar.com/posts/risk-management-framework/#step-1-system-characterization) > [Risk Mitigation](https://carlgaspar.com/posts/risk-management-framework/#risk-mitigation--steps-1-and-2) >

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

#### Step 1: System Characterization

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

#### Step 2: Threat Identification

* Input
  * History of system attack
  * Data from intelligence agencies, mass media, or gov CERT
* Output
  * Threat Statement

#### Step 3: Vulnerability Identification

* Input
  * Reports from prior risk assessments
  * Prior audits
  * Security requirements
  * Security test results
* Output
  * List of potential vulnerabilities

#### Step 4: Control Analysis

* Input
  * Current controls
  * Planned controls
* Output
  * List of current and planned controls

#### Step 5: Likelihood Determination

* Input
  * Threat-source motivation
  * Threat capacity
  * Nature of vulnerability
  * Current controls
* Output
  * Likelihood rating

##### Likelihood Rating Qualitative Ratings

* High - The threat-source is highly motivated and sufficiently capable, and controls to prevent the vulnerability from being exercised are ineffective.
* Medium - The threat-source is motivated and capable, but controls are in place that may impede successful exercise of the vulnerability.
* Low - The threat-source lacks motivation or capability, or controls are in place to prevent, or at least significantly impede, the vulnerability from being exercised.

##### Another Way to Think About Likelihood Ratings Quantitative and Functional Risk Appetite Statement

* Executive Attention - Risk is between 75 - 99% likely to occur. Alternatively, this risk has come to fruition within the industry within the past year.
* Management Attention - Risk is between 30 - 74% likely to occur. Alternatively, this risk has come to fruition within the industry within the past two years.
* Front Line Attention - This risk is between 1 - 29% likely to occur. Alternatively, the risk has come to fruition within the industry within the past 5 years.

#### Step 6: Impact Analysis

* Input
  * Mission impact analysis
  * Asset criticality assessment
  * Data criticality
  * Data sensitivity
* Output
  * Impact rating

##### Impact Rating Qualitative Ratings

* High
  * May result in high costly loss of major tangible assets or resources
  * May significantly violate, harm, or impede an organization’s mission, reputation, or interest
  * May result in human death or serious injury
* Medium
  * May result in costly loss of tangible assets or resources
  * May violate, harm, or impede an organization’s mission, reputation, or interest
  * May result in human injury
* Low
  * May result in loss of some tangible assets or resources
  * May noticeably affect an organization’s mission, reputation, or interest

##### Another Way to Think About Impact Ratings Quantitative and Functional Risk Appetite Statement

![](</img/Another Way to Think About Impact Ratings Quantitative and Functional Risk.png>)

#### Step 7: Risk Determination

* Input
  * Likelihood of threat exploitation
  * Magnitude of impact
  * Adequacy of planned or current controls
* Output
  * Risks and risk levels
  * The final determination of risk is derived by multiplying the ratings assigned for threat likelihood (e.g., probability) and threat impact.

#### Step 8: Control Recommendations

* To minimize identified risks, consider the following factors when recommending control solutions
  * Effectiveness of options
  * Legal/regulatory
  * Organizational policy
  * Impact to operations
  * Safety/reliability

#### Step 9: Results Documentation

* Risk assessment reports may include
  * Threat-sources
  * Vulnerabilities identified
  * Risks assessed
  * Recommended controls provided

#### Risk Mitigation – Steps 1 and 2

* Step 1: Prioritize Actions
  *  Based on risk levels presented in the risk assessment report, implementation actions are prioritized.
  * Top priority should be given to highest risk.
* Step 2: Evaluate Recommended Control Options
  * Feasibility (e.g., compatibility, user acceptance) and effectiveness (e.g., degree of protection and level of risk mitigation) of the recommended control options are analyzed.
  * Objective is to select the most appropriate control option for minimizing risk.

#### Risk Mitigation – Steps 3, 4, and 5

* Step 3: Conduct Cost-Benefit Analysis
  * If the cost of controls exceed the benefit, the organization may choose to accept the risk instead.
  * Usually a trade-off between security and business operations.
* Step 4: Select Controls
  * On the basis of the results of the cost-benefit analysis, management determines the most cost-effective control(s) for reducing risk to the organization’s mission.
* Step 5: Assign Responsibility
  * Appropriate persons (in-house personnel or external contracting staff) who have the appropriate expertise and skill-sets to implement the selected controls are identified and responsibility is assigned.

#### Risk Mitigation – Steps 6 and 7

* Step 6: Develop a Safeguard Implementation Plan
  * The plan should, at a minimum, contain the following information.
    * Risks (vulnerability/threat pairs) and associated risk levels (output from risk assessment report)
    * Recommended controls (output from risk assessment report)
    * Prioritized actions (with priority given to Very High and High risk)
    * Selected planned controls (determined on the basis of feasibility, effectiveness, benefits to the organization, and cost)
    * Required resources for implementing the selected planned controls
    * Lists of responsible teams and staff
    * Start date for implementation
    * Target completion date for implementation
    * Maintenance requirements
* Step 7: Implement Selected Control(s)

#### Evaluation and Assessment

* As business operations or technologies change, periodic reviews must be conducted to
  * Analyze changes
  * Account for new threats and vulnerabilities created by changes
  * Determine effectiveness of existing controls
* Continuous evaluation and assessment of risks is an important component of the risk management life cycle.
* The result/status needs to be documented and reported to senior

## References

* [Cyber Risk Management Fundamentals](https://carlgaspar.com/posts/cyber-risk-management-fundamentals/)
