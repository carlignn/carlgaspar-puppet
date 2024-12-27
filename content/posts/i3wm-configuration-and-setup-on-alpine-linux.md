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

This would ...

You can now add the apps that you need. For starters:

```shell
apk add i3wm i3status alacritty xrandr feh dbus chromium font-dejavu thunar picom
```

Enable dbus:

```shell
rc-update add dbus
```

Guide I'm following - \
[https://www.youtube.com/watch?v=BRBuH-1dM3g](https://www.youtube.com/watch?v=BRBuH-1dM3g)\
[https://www.youtube.com/watch?v=j1I63wGcvU4\&list=PL0rXAycsylvXxyPDT5kGQ5MiHcqrZWv69\&index=1](https://www.youtube.com/watch?v=j1I63wGcvU4\&list=PL0rXAycsylvXxyPDT5kGQ5MiHcqrZWv69\&index=1)

I added dmenu, i3lock as well.
