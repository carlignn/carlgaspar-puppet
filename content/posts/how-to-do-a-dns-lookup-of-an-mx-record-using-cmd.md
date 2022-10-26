+++
aliases = []
author = ""
categories = []
date = 2022-10-25T16:00:00Z
description = ""
header_img = ""
math = false
series = []
short = false
subtitle = ""
tags = []
title = "How To Do a DNS Lookup Of An MX Record Using CMD"
toc = false

+++
Related: [What is an MX Record](/ "What is an MX Record")

`nslookup` is a command-line tool used for testing and troubleshooting DNS servers. Basically, just as its name says, it will lookup for the name server of any domain.

`nslookup` can be used in two modes: interactive and non-interactive. to initiate interactive mode, type the command name only: `nslookup`

    C:\>nslookup
    Default Server:  UnKnown
    Address:  10.0.1.9

Set the type to `mx`

    > set type=mx

Put your target, in this case it is `google.com`

    > google.com
    Server:  UnKnown
    Address:  10.0.1.9
    
    Non-authoritative answer:
    google.com      MX preference = 30, mail exchanger = alt2.aspmx.l.google.com
    google.com      MX preference = 50, mail exchanger = alt4.aspmx.l.google.com
    google.com      MX preference = 40, mail exchanger = alt3.aspmx.l.google.com
    google.com      MX preference = 20, mail exchanger = alt1.aspmx.l.google.com
    google.com      MX preference = 10, mail exchanger = aspmx.l.google.com
    
    alt2.aspmx.l.google.com internet address = 74.125.115.27
    alt1.aspmx.l.google.com internet address = 74.125.91.27
    aspmx.l.google.com      internet address = 74.125.157.27

Notice that there are multiple MX records each with a different **preference value**. The preference is basically a way of setting the priority of each MX record. The lowest preference is the MX with the highest priority, is the one that a sending mail server should try first.

The purpose of multiple MX records is to either:

* Provide some load balancing by using multiple MX records with the same preference set
* Provide a backup MX that can be used if the primary one is unavailable