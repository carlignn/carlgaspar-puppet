---
title: i3wm Configuration and Setup on Debian Linux
date: 2025-01-02T16:00:00.000Z
---

apt install xorg (equivalent to setup-xorg-base in Alpine Linux)

apt install i3 i3status

To install Brave browser

```shell
apt install apt-transport-https curl gnupg
```

These are the required dependencies to install the browser.

Download Brave's GPG key

```shell
curl -fsS https://brave-browser-apt-release.s3.brave.com/brave-core.asc | gpg --dearmor -o /usr/share/keyrings/brave-archive-keyring.gpg
```

Add the Brave's repository

```shell
echo "deb [signed-by=/usr/share/keyrings/brave-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main" | tee /etc/apt/sources.list.d/brave-browser-release.list
```

apt update

apt install brave-browser

Note that you can't run Brave browser using the root account. Change to regular user account using

su - yourusername
