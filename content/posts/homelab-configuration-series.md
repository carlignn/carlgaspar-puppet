---
title: Homelab Configuration Series
subtitle: The beginning of the configuration of my homelab
description: Hard things are only hard because you don't understand them.
date: 2024-12-10T16:00:00.000Z
tags:
  - homelab
  - server
  - security
---

## Proxmox Basic Configuration

IP `10.10.255.254`

Gateway `10.10.0.1` (Router IP)

DNS `1.1.1.3` and `1.0.0.3` (Cloudflare's DNS for Malware and Adult Content)

## Proxmox Advanced Configuration

## Roadblocks

### PC can't connect to router and server at the same time.

Router is at `192.168.254.254/24` and the server is at `10.10.10.1/16` making both of them in a different network.\
I've managed to change the configuration of the router to use `10.10.0.1/16`.

### Proxmox cannot connect to the internet

Added the DNS server using

```shell
nano / etc / resolv.conf
```

and adding the DNS servers

```shell
nameserver 1.1.1.1
nameserver 8.8.8.8
```

Don't forget to restart networking

```shell
systemctl restart networking
```

Make sure that the gateway is the same as the router IP.
