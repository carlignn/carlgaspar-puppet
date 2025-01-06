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

Drives were disconnecting randomly. Add this on Your host: cat /etc/modprobe.d/mpt3sas.conf

blacklist mpt3sas

Then

Full grub line: GRUB\_CMDLINE\_LINUX\_DEFAULT="vfio-pci.ids=1000:0087 pcie\_acs\_override=downstream,multifunction"

**pcie\_acs\_override=downstream,multifunction**: will make the IOMMU groups separate of each other.

Guide: here [https://www.reddit.com/r/truenas/comments/x0tgub/scale\_drive\_resets\_with\_lsi\_93008i\_looking\_for/](https://www.reddit.com/r/truenas/comments/x0tgub/scale_drive_resets_with_lsi_93008i_looking_for/)

Things to do:

Update the fields in Network > Global Settings

To get internet connection in TrueNAS, go to Network > Global Settings > Fill out the gateway and the DNS Servers.

Best practices for datasets

[https://www.truenas.com/community/threads/path-to-success-for-structuring-datasets-in-your-pool.85460/](https://www.truenas.com/community/threads/path-to-success-for-structuring-datasets-in-your-pool.85460/)

Naming convention

datasets - dataset\_name

folders within datasets - folder\_name?

To give access to TrueNAS NFS share to Proxmox

Datacenter > Storage > Add NFS > Fill the fields

Make sure in TrueNAS:

That there is an NFS share\
Network is set\
Maproot User is set to root\
Maproot Group is set to wheel

## Roadblocks

### LXCs can't be backed up (permission denied)

The LXCs that were created are unprivileged therefore there was a conflict.

[https://blog.doussan.info/posts/container-backup-permission-denied-nfs/](https://blog.doussan.info/posts/container-backup-permission-denied-nfs/)

[https://forum.proxmox.com/threads/tmp-cannot-open-permission-denied.87730/post-492252](https://forum.proxmox.com/threads/tmp-cannot-open-permission-denied.87730/post-492252)

Try this one if still error: [https://forum.proxmox.com/threads/tmp-cannot-open-permission-denied.87730/post-462646](https://forum.proxmox.com/threads/tmp-cannot-open-permission-denied.87730/post-462646)
