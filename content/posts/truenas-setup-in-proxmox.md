---
title: TrueNAS Setup in Proxmox
subtitle: ''
description: It's working!
date: 2024-12-30T16:00:00.000Z
---

From this guide, there's a comment [https://www.youtube.com/watch?v=M3pKprTdNqQ](https://www.youtube.com/watch?v=M3pKprTdNqQ\&t=799s)

This video is really really the top of the iceberg. A few crucial thing is missing from this like:
\- excluding the disks from pve, or else you will wonder why it periodically interrupts disk operations or wakes up sleeping disks
\- disabling the "use tablet for pointer" as that in itself causes 10+% CPU load on the host side for some reason
\- disabling "hardware" acceleration of virtIO as this is known to cause problems
\- doing smart configuration (like APM, idle times) on the host side as the guest won't have access to smart data and alerts
\- optionally moving the system dataset to the boot disk
