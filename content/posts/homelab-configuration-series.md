---
title: Homelab Configuration Series
subtitle: The beginning of the configuration of my homelab
description: Hard things are only hard because you don't understand them.
date: 2024-12-10T16:00:00.000Z
toc: true
tags:
  - homelab
  - server
  - security
---

## Introduction

I started this homelab journey because I already exhausted my 1 TB external SSD. I looked for options and I found NAS as the best one. I've been trying to justify buying/creating a server for years, it will help with upskilling they (I) said, but that reason is just not enough. Cloud options are always available and some are also free. But now that I have a NAS requirement, I figured that relying in the cloud for storage will really be costly. That's why I'm here writing the documentation so that when I got lost midway, I have something I can get back to.

I'm a software person, but I really enjoyed building the hardware on stream. Thank you all for the support and let's get to the documentation.

## Tech Specs

### Storage

* 2 \* 256 GB Kingston NVME - **Proxmox** setup in RAID 1
* 1 TB Samsung SSD - **VM** and other stuff
* 4 \* 12 TB HGST WD Ultrastar DC HC520 HDD - **NAS**

### More

* **Motherboard** - ASUS TUF B550M Motherboard
* **CPU** - AMD Ryzen 5 3600
* **RAM** - 4 \* 8 GB TEAMGROUP TForce DARK ZA 3600Mhz DDR4
* **GPU** - NVIDIA GTX 1050 TI
* **HBA** - LSI 9208-8I
* **PSU** - Seasonic Focus SGX 500 650 80+ Gold Full Modular
* **CPU FAN** - Noctua NH-L9a-AM4
* **Case** - Sagittarius Chassis NAS 8 Discs
* **Case FANS** - 4 \* Noctua NF-A12x15

## Proxmox Basic Configuration

* **HL1PROXMOX1** (Hostname)
* IP **10.10.0.2 /16**
* Gateway **10.10.0.1 /16** (Router IP)
* DNS **1.1.1.3** and **1.0.0.3** (Cloudflare's DNS for Malware and Adult Content)
* DNS **1.1.1.1** and **8.8.8.8** (Cloudflare and Google DNS if needed)

### IP Naming Convention

* 10.**Location**.**VLAN**.0 /24
* **Location** and **VLAN** starts and increases by 10.

### Server and Machine Naming Convention

#### Servers

Name the servers of their function. Add the OS as a tag afterwards.

* **HL1PROXMOX1** - First Proxmox instance
* **HL1WEBSERVER1** - First homelab web server
* **HL1MEDIASERVER2** - Second media server

#### Machines

Also starts with HL1 since I don't think I'm in an office to be using OF1.

* **HL1PC1** - First PC in the homelab
* **HL1LAPTOP1** - First laptop in the homelab
* **HL1WS1** - First workstation in the homelab
* **HL1VM1** - First virtual machine in the homelab

## Proxmox Advanced Configuration

* [Helper scripts](https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pve-install) after installing Proxmox.

```shell
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/misc/post-pve-install.sh)"
```

* Create a Directory for storage ([guide](https://youtu.be/xD9Xyt2mdSI?si=vYLbN19b0KBlsnBC)).

### OPNSense Documentation

OPNSense was setup to use the router-on-a-stick configuration.

* **IP**: 10.10.10.2/16
* **Hostname**: HL1OPNSENSE1
* **Domain**: carlgaspar.local
* **Primary DNS Server**: 1.1.1.3
* **Secondary DNS Server**: 1.0.0.3
* LAN: 10.10.0.3/16
* WAN: 10.10.0.5/30: WAN is used so that OPNSense can connect to the router

#### Creating VLANs

* Go to Interfaces > Other Types > VLAN
  * Add the **VLAN tag** and the **Description** as the name of the VLAN
* Go to Assignments
  * Assign the VLANs to the Interface
* Tag the VMs in Proxmox with the VLAN ID that was set in OPNSense
* Head to ISC DHCPv4 > VLAN to configure DHCP on the VLAN
* To practice routing, head over to Firewall > Rules

### VLAN Segmentation

* VLAN10 - 10.10.10.0/24 - MGMT
* VLAN20 - 10.10.20.0/24 - DATA
* VLAN30 - 10.10.30.0/24 - MEDIA
* VLAN40 - 10.10.40.0/24 - IOT
* VLAN50 - 10.10.50.0/24 - TEST
* VLAN60 - 10.10.60.0/24 - USER
* VLAN70 - 10.10.70.0/24 - SERVER
* VLAN80 - 10.10.80.0/24 - DMZ

### VLAN Documentation (VLAN and Routing Moved to OPNSense)

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

### Unofficial NAT Documentation

So that the VLANs can access the internet.

* Create the VLANs and tag the VMs with VLAN tag
* Set up IP Forwarding (NAT) - in Proxmox shell, edit the sysctl configuration file

```shell
sudo nano /etc/sysctl.conf
```

* Uncomment or add

```shell
net.ipv4.ip_forward=1
```

* Apply changes

```shell
sudo sysctl -p
```

* Configure NAT - this will allow Proxmox to route traffic from VLAN 20 to the internet via the main network interface. Replace eth0 with the external interface. Use ip link show to show all interfaces. enp7s0

```shell
sudo iptables -t nat -A POSTROUTING -s 10.10.10.0/24 -o enp7s0 -j MASQUERADE
```

To ensure the iptables rules persist after reboot, install iptables-persistent:

sudo apt install iptables-persistent

Get back to chatgpt with this prompt "Any way to do this via web interface?" [https://chatgpt.com/c/6758b4c3-4bb0-800a-bc11-115f2718ca31](https://chatgpt.com/c/6758b4c3-4bb0-800a-bc11-115f2718ca31)

### From Templates, this is How to Change the Hostname

[https://linuxize.com/post/how-to-change-hostname-on-ubuntu-22-04/](https://linuxize.com/post/how-to-change-hostname-on-ubuntu-22-04/)

### Machine Tagging

* Configure in Datacenter > Options > Tag Style Override
  * Tree Shape: Full
  * Ordering: Configuration
* On the machine, add the tags on the top ([guide](https://www.reddit.com/r/homelab/comments/14siou2/how_do_you_manage_your_ubuntu_vms/)).

#### Tagging Convention

* \<PROD/DEV/TEST> \<OS>

### Local DNS

Local DNS is the server that translates IP addresses to domain names. It is also just another client at the network that is being query every time someone requests for it.

### GPU Passthrough

Guide - [https://www.youtube.com/watch?v=TWX3iWcka\_0](https://www.youtube.com/watch?v=TWX3iWcka_0\&list=TLPQMjIxMjIwMjTwDjRhQDA6mg\&index=3)

Go to Datacenter > Resource Mappings > Add the GPU group

On the VM of your choice, go to Hardware > Add PCI Device > Raw Device > Add the GPU group > Tick All Functions > Tick Primary GPU if needed

#### Mouse and Keyboard Passthrough

In the VM, go to Hardware > Add USB Device > Use USB Port > Tick the USB Device you want to add

## Roadblocks

### PC can't connect to router and server at the same time

* Router is at `192.168.254.254/24` and the server is at `10.10.10.1/16` making both of them in a different network.
* I've managed to change the configuration of the router to use `10.10.0.1/16`.

### Get a new IP from the DHCP server without restarting the whole machine

```shell
rc-service networking restart
```

### PCIE and other components sharing the same IOMMU group

```shell
nano /etc/default/grub
Add the following to GRUB_CMDLINE_LINUX_DEFAULT:
pcie_acs_override=downstream,multifunction
Update Grub and reboot
update-grub
reboot

```

### TrueNAS Scale won't boot in Proxmox saying no boot device available

* Disable ROM-bar when passing through the HBA

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
