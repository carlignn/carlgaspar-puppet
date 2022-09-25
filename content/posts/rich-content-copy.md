+++
author = ""
date = 2022-09-15T09:25:00Z
description = "Write-up of the Threat Modeling Fundamentals by Peter Mosmans"
header_img = ""
subtitle = "Threat Modeling is a process of systematically listing all potential ways one can attack an application."
tags = ["security", "devsecops", "blueteam", "write-up"]
title = "Threat Modeling Fundamentals"

+++
## Threat Modeling, the What, Why, Who and When

### W﻿hat Is Threat Modeling

Threat Modeling is a process of systematically listing all potential ways one can attack an application.

* Systematic approach - repeatable and consistent process during the whole development lifecycle
* Looking at attacks - actively looking at what can be abused
* Probable threat scenarios - list of threats

#### Definitions

* Weakness - software defect, bug
* Vulnerability - weakness that can be exploited
* Attack/Incident - target, attack vector, threat actor
* A﻿ttack surface - anything that can be obtained, used, or attacked by a threat actor
* Risk = Impact * Likelihood

### W﻿hy Should One Perform Threat Modeling

* P﻿ro-active approach - security upfront
* E﻿fficient - the sooner a bug or a vulnerability is discovered in the SDLC, the cheaper it is
* P﻿rioritize bugs - the outcome is the list of potential threats and/or risks of the application, which is used to determine further mitigation strategies that will allow to prioritize the workload
* B﻿etter understanding - will give the developers a whole overview of the system

The ﻿ultimate objective of threat modeling is risk reduction.

#### O﻿ther methodologies that can perform risk reduction aside from Threat Modeling

* A﻿rchitectural analysis
* S﻿ource code analysis
* V﻿ulnerability scanning
* P﻿enetration testing

\*﻿ Threat modeling is a collaborative and repeatable process.

### Who Should Perform Threat Modeling

* System Architect - somebody who knows how the system ha been designed and how the data flows across
* Developer - somebody who knows the intricate details on how the application was built and the detailed interactions between components
* Tester - somebody who knows the requirements and what the application is expected to do
* Security Professional - somebody who knows specific attack factors and think like an attacked

\* The best way to implement threat modeling is to make as little changes to the process as possible.

### W﻿hen Should One Perform Threat Modeling

* A﻿s early as possible
* R﻿equirements phase
* D﻿esign phase

\*﻿ In general, early on in the process.

## Choosing the Right Approach

### A﻿sset-centric Approach

A﻿lso called **Risk-centric Approach.**

1. C﻿reate lists of assets
2. D﻿raw assets, components and data flows
3. F﻿or each element, check for threats

E﻿xamples:

* P﻿ASTA - Process for Attack Simulation and Threat Analysis
* T﻿RIKE - dated threat modeling technology with accompanying tool

> I﻿f you don't know what to protect, how do you know you're protecting it?

### A﻿ttacker-centric Approach

1. C﻿reate a list of threat actors

   1. M﻿otive
   2. M﻿eans
   3. O﻿pportunity
2. C﻿reate a list of threats

### A﻿pplication-centric Approach

1. D﻿raw a diagram of the application

   * F﻿or example a Data Flow Diagram
2. L﻿ist threats for each elements

   * S﻿TRIDE
   * O﻿WASP Top 10
3. R﻿ank threats using classification model

\* C﻿hoose approach based on skillset.

## C﻿hoosing the Right Methodology

### P﻿ASTA

*Process for Attack Simulation and Threat Analysis*

1. D﻿efine Business Objectives
2. D﻿efine Technical Scope
3. D﻿ecompose Application
4. A﻿nalyze Threats
5. I﻿dentify Vulnerabilities
6. E﻿numerate Attacks
7. P﻿erform Impact Analysis

### M﻿icrosoft Threat Modeling

* T﻿hreat modeling framework
* S﻿ometimes incorrectly named STRIDE

  * S﻿TRIDE is a threat classification system used within the Microsoft threat modeling methodology
* F﻿ocuses on technical risk
* D﻿eveloper-driven
* A﻿pplication-centric approach

**S﻿teps**: I﻿dentify Assets > Create Architecture Overview > Decompose Application > Identify Threats > Document Threats > Rate Threats

### OCTAVE

*O﻿perationally Critical Threat, Asset and Vulnerability Evaluation*

* R﻿isk analysis framework
* E﻿valuates organization (as opposed to an application)
* D﻿ifferent versions

  * O﻿CTAVE (large companies)
  * O﻿CTAVE-S (less than 100 employees)
  * O﻿CTAVE Allegro (asset-centric approach)
* F﻿ocus on security practices

**P﻿rocess**: Establish Drivers > Profile Assets > Identifying Threats > Mitigate Risks

### T﻿RIKE

* M﻿ethodology as well as tool
* H﻿igh levels of automation are possible
* A﻿sset-centric approach
* F﻿ocus on defensive side
* T﻿rageted towards security auditing teams
* T﻿hree models

  * R﻿equirements model
  * I﻿mplementation model
  * R﻿isk model

**P﻿rocess**: Identify Threats > Investigate Threats > Identify Mitigations > Investigate Mitigations

### V﻿AST

*V﻿isual Agile Simple Threat Modeling*

* Two threat model types

  * A﻿pplication Threat Model
  * O﻿perational Threat Model
* U﻿ses process flow diagram
* T﻿argeted towards agile companies
* S﻿calable

## ﻿Notes

* Best methodology depends on team, ﻿organization and goal
* Recommendations: ﻿Asset-centric: PASTA && ﻿Application-centric: Microsoft Threat Modeling

## R﻿eferences

* [﻿Threat Modeling Fundamentals by Peter M﻿osmans on Pluralsight](<* https://app.pluralsight.com/library/courses/threat-modeling-fundamentals/table-of-contents>)