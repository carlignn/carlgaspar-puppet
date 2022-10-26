+++
aliases = []
author = ""
categories = []
date = 2022-10-24T16:00:00Z
description = "Tools that I use for Reconnaissance and Incident Response."
draft = true
header_img = ""
math = false
series = []
short = false
subtitle = ""
tags = ["security"]
title = "Incident Response Tools"
toc = true

+++
[https://dnsdumpster.com/](https://dnsdumpster.com/ "https://dnsdumpster.com/")

Research the domain

Results

DNS Servers - is a computer server that contains a database of public IP addresses and their associated hostnames. Basically, translating names into IP addresses so that network communications can occur.  
MX Records - "Mail Exchanger" - a type of DNS record. specifies the mail server responsible for accepting email messages on behalf of a domain name.

How to find MX Records using cmd:

    > nslookup
    Default Server: example.com
    Address: 1.1.1.1

Do an nslookup