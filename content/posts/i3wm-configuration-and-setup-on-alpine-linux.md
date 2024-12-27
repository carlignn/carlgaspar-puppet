---
title: i3wm Configuration and Setup on Alpine Linux
author: ''
subtitle: 'Uhh, why am I here?'
description: ''
date: 2024-12-22T16:00:00.000Z
tags:
  - homelab
---

## Alpine

On Alpine download page, you can choose the **Standard** or the **VM** version. I used the **VM** version in this setup since I will be installing it in Proxmox. Standard will work, too. I am really not sure what is the difference, aside from the slimmed down kernel as stated in their [WEBSITE](https://alpinelinux.org/downloads/).

Once installed login using:

```shell
root
```

To proceed with the setup, type:

```shell
setup-alpine
```

Follow the prompts. When it's time to select a mirror, enable the community mirror, then select the fastest mirror.

## i3wm

For basics, start with:

```shell
setup-xorg-base
```

This is a convenient script that sets up the basic components required to run the X Window System (X11) on Alpine Linux

You can now add the apps that you need. For starters:

```shell
apk add i3wm i3status alacritty xrandr feh dbus firefox font-dejavu thunar picom
```

* **i3wm**: the tiling window manager
* **i3status**: status bar generator for i3wm
* **alacritty**: cross-platform, GPU-accelerated terminal emulator
* **xrandr**: tool for managing screen resolutions, rotation, and multi-monitor setups on X11
* **feh**: tool for managing wallpapers
* **dbus**: message bus system for communication between applications and the system
* **firefox**: browser
* **font-dejavu**: commong font. The configuration will not work without this.
* **thunar**: XFCE based file manager
* **picom**: lightweight compositor for transparency, shadows, and VSync on X11

Enable dbus:

```shell
rc-update add dbus
```

Guide I'm following - \
[https://www.youtube.com/watch?v=BRBuH-1dM3g](https://www.youtube.com/watch?v=BRBuH-1dM3g)\
[https://www.youtube.com/watch?v=j1I63wGcvU4](https://www.youtube.com/watch?v=j1I63wGcvU4\&list=PL0rXAycsylvXxyPDT5kGQ5MiHcqrZWv69\&index=1)

I added dmenu, i3lock, arandr as well.

* arandr: is the GUI version of xrandr
