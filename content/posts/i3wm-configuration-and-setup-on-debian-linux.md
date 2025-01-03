---
title: i3wm Configuration and Setup on Debian Linux
date: 2025-01-02T16:00:00.000Z
---

I was looking for a lightweight operating system to host my dashboard and a few static movies/videos that I can play in the background and I landed on Alpine Linux. But apparently, NVIDIA drivers are hard to install in Alpine so I moved to Debian.

This VM will passthrough my 1050TI so that I can watch movies, use the browser, and use software that requires hardware transcoding with ease. The other software will be in this VM because once you passthrough a GPU, it's hard to create a vGPU out of it.

Install a headless Debian by following the instructions in the installer.

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

You need to install the graphics card as it might cause issues later on (e.g. brave not launching)

Update the repository to add nvidia repository. NVIDIA drivers are included in contrib and non-free repositories.

Edit the /etc/apt/sources.list file:

Add contrib and non-free sections to your repositories. For example:

deb http\://deb.debian.org/debian/ stable main contrib non-free

deb-src http\://deb.debian.org/debian/ stable main contrib non-free

apt update

apt install nvidia-driver

reboot

Verify installation

```shell
nvidia-smi
```

(Optional) I received an error about conflicting nouveau kernel module. Even though the NVIDIA driver installation went smoothly, blacklist the nouveau driver to avoid conflicts in the future. Upon checking the file, NVIDIA already blacklisted the nouveau driver for me.

```shell
nano /etc/modprobe.d/blacklist-nouveau.conf
```

ss

```shell
blacklist nouveau
options nouveau modeset=0
```

Update the intramfs (initial RAM filesystem) so that changes take effect:

```shell
sudo update-initramfs -u
```

reboot
