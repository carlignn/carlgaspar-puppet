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

* IP `10.10.255.254`
* Gateway `10.10.0.1` (Router IP)
* DNS `1.1.1.3` and `1.0.0.3` (Cloudflare's DNS for Malware and Adult Content)

## Proxmox Advanced Configuration

* [Helper scripts](https://tteck.github.io/Proxmox/) after installing Proxmox.

```shell
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pve-install.sh)"
```

* Create a Directory for storage ([guide](https://youtu.be/xD9Xyt2mdSI?si=vYLbN19b0KBlsnBC)).

### VLAN Documentation

* Make the main bridge VLAN aware. The main bridge is usually named vmbr0.
* Assign VLAN to VMs - just tag with 10, 20, 30, etc.

### DHCP Documentation

* Create VLANs in the Node > System > Network > Create > Linux VLAN
* Assign VLAN to VMs - just tag with 10, 20, 30, etc.
* Install the dhcp server (isc-dhcp-server)

```shell
apt update
apt install isc-dhcp-server
```

* Configure DHCP Server config file and add the following code

```shell
nano /etc/dhcp/dhcpd.conf

subnet 10.10.10.0 netmask 255.255.255.0 {
    range 10.10.10.2 10.10.10.254;
    option routers 10.10.10.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}

subnet 10.10.20.0 netmask 255.255.255.0 {
    range 10.10.20.2 10.10.20.254;
    option routers 10.10.20.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}
```

* Bind DHCP to VLAN Interfaces, specify which interfaces the DHCP server should listen to. Edit the /etc/default/isc-dhcp-server file

```shell
nano /etc/default/isc-dhcp-server

INTERFACESv4="vmbr0.10 vmbr0.20"
INTERFACESv6=""
```

* Enable and Start the DHCP Server

```shell
systemctl enable isc-dhcp-server
systemctl start isc-dhcp-server
```

* Restart if needed using restart.
* Verify DHCP Configuration

```shell
systemctl status isc-dhcp-server
```

### VM Documentation

* When creating a VM make sure to check discard on the hard disk tab when using SSD for better performance.
* Install SSH to connect to the VM and navigate better

```shell
apt install openssh - server
```

## Roadblocks

### PC can't connect to router and server at the same time.

* Router is at `192.168.254.254/24` and the server is at `10.10.10.1/16` making both of them in a different network.
* I've managed to change the configuration of the router to use `10.10.0.1/16`.

### Proxmox cannot connect to the internet

* Added the DNS server using

```shell
nano / etc / resolv.conf

nameserver 1.1.1.1
nameserver 8.8.8.8
```

* Don't forget to restart networking

```shell
systemctl restart networking
```

* Make sure that the gateway is the same as the router IP.
