const examination_question =[
  {
    "question": "The _____ command is used to load a module along with its dependencies.",
    "option": [
      "modprobe",
      "ldmod",
      "insmod",
      "lsmod"
    ],
    "ans": ["modprobe"]
  },
  {
    "question": "The _____ is a kernel module used by the kernel to manage hardware devices.",
    "option": [
      "Interface",
      "Configuration file",
      "Subsystem",
      "Driver"
    ],
    "ans": ["Subsystem"]
  },
  {
    "question": "Which command is used to view the summary of the RAM and swap space?",
    "option": [
      "iostat",
      "free",
      "lsmem",
      "du"
    ],
    "ans": ["free"]
  },
  {
    "question": "Which of the following commands is used to view the summary of CPUs in the system?",
    "option": [
      "more /proc/cpuinfo",
      "cpustat",
      "lscpu",
      "ls -cpu"
    ],
    "ans": ["lscpu"]
  },
  {
    "question": "The first process that the kernel launches is called the _____ process.",
    "option": [
      "sys",
      "init",
      "startx",
      "kernel"
    ],
    "ans": ["init"]
  },
  {
    "question": "The first stage of the boot process is:",
    "option": [
      "The Bootloader (LILO/GRUB) stage",
      "The init phase",
      "The kernel phase",
      "The firmware (BIOS/UEFI) stage"
    ],
    "ans": ["The firmware (BIOS/UEFI) stage"]
  },
  {
    "question": "The second stage of the boot process is:",
    "option": [
      "The kernel phase",
      "The init phase",
      "The Bootloader stage",
      "The firmware (BIOS/UEFI) stage"
    ],
    "ans": ["The Bootloader stage"]
  },
  {
    "question": "In GRUB Legacy, the _____ directive defines an operating system to boot.",
    "option": [
      "os",
      "system",
      "boot",
      "title"
    ],
    "ans": ["title"]
  },
  {
    "question": "In GRUB Legacy, the _____ directive indicates how long to wait before automatically booting the default operating system.",
    "option": [
      "kernel",
      "timeout=",
      "password=",
      "fallback="
    ],
    "ans": ["timeout="]
  },
  {
    "question": "Instead of using traditional runlevels, systemd uses:",
    "option": [
      "Variables",
      "States",
      "Functions",
      "Targets"
    ],
    "ans": ["Targets"]
  },
  {
    "question": "The same set of services are started or stopped at different runlevels.",
    "option": ["TRUE", "FALSE"],
    "ans": ["FALSE"]
  },
  {
    "question": "Which command will display both the current runlevel and the previous runlevel?",
    "option": ["level", "run", "rl", "runlevel"],
    "ans": ["runlevel"]
  },
  {
    "question": "Which directories exist in the /etc/rc.d directory?",
    "option": [
      "rc0, rc1, rc2, rc3, rc4, rc5 and rc6",
      "rc0.d, rc2.d, rc4.d, and rc6.d",
      "rc0d, rc1d, rc2d, rc3d, rc4d and rc5d",
      "rc0.d, rc1.d, rc2.d, rc3.d, rc4.d, rc5.d and rc6.d"
    ],
    "ans": ["rc0.d, rc1.d, rc2.d, rc3.d, rc4.d, rc5.d and rc6.d"]
  },
  {
    "question": "Which of the following can be used to restart the HTTP service? (choose two)",
    "option": [
      "service https restart",
      "service start httpd",
      "/etc/init.d/httpd restart",
      "service httpd restart"
    ],
    "ans": ["/etc/init.d/httpd restart", "service httpd restart"]
  },
  {
    "question": "A device name of /dev/hda1 indicates this partition is on which type of device?",
    "option": ["IDE", "SATA", "CDROM", "Logical Volume"],
    "ans": ["IDE"]
  },
  {
    "question": "In what directory are you most likely to find user’s home directories?",
    "option": ["home", "/user/third", "/var/lib", "/usr/local"],
    "ans": ["home"]
  },
  {
    "question": "Virtual memory is also referred to as:",
    "option": ["Swap memory", "Soft memory", "Test memory", "Hard memory"],
    "ans": ["Swap memory"]
  },
  {
    "question": "Which directory structure contains the bulk of the operating system’s files:",
    "option": ["/root", "/usr", "/rootfs", "/home"],
    "ans": ["/usr"]
  },
  {
    "question": "After running fdisk -cu /dev/sdb, what fdisk command will allow you to change a partition type?",
    "option": ["t", "d", "f", "g"],
    "ans": ["t"]
  },
  {
    "question": "After running fdisk -cu /dev/sdb, what fdisk command will allow you to create a new partition?",
    "option": ["w", "n", "g", "c"],
    "ans": ["n"]
  },
  {
    "question": "To activate a swap space that has been initialized, you can execute:",
    "option": ["swapctl", "swapcontrol", "swapoff", "swapon"],
    "ans": ["swapon"]
  },
  {
    "question": "A mount point is:",
    "option": [
      "A partition",
      "An empty directory that is used to access a filesystem",
      "A device name that is used for mounting",
      "A way to specify mount options"
    ],
    "ans": ["An empty directory that is used to access a filesystem"]
  },
  {
    "question": "The first field in the /etc/fstab file is used to specify:",
    "option": [
      "The dump field",
      "The fsck order",
      "The mount options",
      "The device to mount",
      "The mount point",
      "The filesystem type"
    ],
    "ans": ["The device to mount"]
  },
  {
    "question": "What commands can display a list of mounted file systems?(choose two)",
    "option": ["lspt", "mount", "df", "fdisk"],
    "ans": ["mount", "df"]
  },
  {
    "question": "By default, the df command displays filesystem use in:",
    "option": ["1-M block size", "1-K block size", "1-T block size", "1-G block size"],
    "ans": ["1-K block size"]
  },
  {
    "question": "Inodes are used to store a file’s:",
    "option": ["Metadata", "Name", "Location", "Contents"],
    "ans": ["Metadata"]
  },
  {
    "question": "The _____ command will display how much space a directory is using.",
    "option": ["init", "df", "dir", "du"],
    "ans": ["du"]
  },
  {
    "question": "Which of the following commands will shut down the system?",
    "option": ["init 2", "init 7", "init 1", "init 0", "init 5"],
    "ans": ["init 0"]
  },
  {
    "question": "Missing files don’t have their original file names, instead they are named with their _____ number?",
    "option": ["inode", "device", "UID", "GID"],
    "ans": ["inode"]
  },
  {
    "question": "Which of the following is true about the fsck command?",
    "option": [
      "It can only be used to fix ext3 filesystems",
      "It is designed to be executed on currently used filesystems",
      "It should only be executed on mounted filesystems",
      "It should only be executed on unmounted filesystems",
      "It can only be used to fix ext2 filesystems"
    ],
    "ans": ["It should only be executed on unmounted filesystems"]
  },
  {
    "question": "All RPM package management commands must be run as the root user. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "How can you remove a package using an rpm command?",
    "option": ["rpm -x", "rpm -r", "rpm -e", "rpm -d"],
    "ans": ["rpm -e"]
  },
  {
    "question": "The rpm2cpio command can be used to: (choose two)",
    "option": [
      "Build a binary .rpm file from a source .src.rpm file",
      "List the content of a .rpm file",
      "Create a new .rpm file",
      "Extract files from a .rpm file"
    ],
    "ans": ["List the content of a .rpm file", "Extract files from a .rpm file"]
  },
  {
    "question": "If a library is not accessible due to an error, the ldd would report which error message?",
    "option": ["error: lib not configured", "not found", "library missing", "lib missing"],
    "ans": ["not found"]
  },
  {
    "question": "Which of the following are benefits of a shared library: (choose two)",
    "option": [
      "Programs run faster",
      "Programs use a more consistent base of code",
      "Programs can be smaller",
      "Programs run slower"
    ],
    "ans": ["Programs use a more consistent base of code", "Programs can be smaller"]
  },
  {
    "question": "Which of the following will find and load shared libraries when a program is executed?",
    "option": ["The kernel", "The dynamic linker", "The init process", "The scheduler"],
    "ans": ["The dynamic linker"]
  },
  {
    "question": "a hypervisor allows: (choose two)",
    "option": [
      "system calls to be directly executed by physical hardware",
      "application software to run without an operating system",
      "an operating system to be installed on virtual hardware",
      "virtual resources to be accessed by operating systems and application software"
    ],
    "ans": [
      "an operating system to be installed on virtual hardware",
      "virtual resources to be accessed by operating systems and application software"
    ]
  },
  {
    "question": "Container technology allows system designers to bypass traditional operating systems. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Virtualization software comes in both paid and open source variants: True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Which of the following is not an advantage of GRUB 2 over GRUB Legacy?",
    "option": [
      "Non-ASCII character support",
      "Ability to work with architectures that don’t have a PC BIOS",
      "Ability to boot from partitions inside of Logical Volume Management (LVM) or RAID devices",
      "Dynamically loaded modules",
      "Command-line interface"
    ],
    "ans": ["Command-line interface"]
  },
  {
    "question": "Integrated peripherals are embedded into the _______ of a system:",
    "option": ["Motherboard", "Bootloader", "RAM", "CPU"],
    "ans": ["Motherboard"]
  },
  {
    "question": "Which of the following are considered replacements for the traditional init process? (choose two)",
    "option": ["Starter", "Upstart", "Systemd", "Sysinit"],
    "ans": ["Upstart", "Systemd"]
  },
  {
    "question": "The systemd equivalent of runlevels are called?",
    "option": ["initstages", "bootlevels", "BIOS", "targets"],
    "ans": ["targets"]
  },
  {
    "question": "What is the real location of the GRUB Legacy configuration file?",
    "option": ["/etc/grub/grub.conf", "/boot/grub/grub.conf", "/boot/grub.conf", "/var/local/grub.conf"],
    "ans": ["/boot/grub/grub.conf"]
  },
  {
    "question": "Which command is useful for booting a corrupted disk drive?",
    "option": ["grub-install", "grub-mkconfig", "update-grub", "grub-set-default"],
    "ans": ["grub-mkconfig"]
  },
  {
    "question": "Which of the following commands can be used to halt the system? (choose two)",
    "option": ["halt", "shutdown", "reboot", "poweroff"],
    "ans": ["halt", "poweroff"]
  },
  {
    "question": "Which of the following commands is used as a traditional replacement for the init process?",
    "option": ["iostat", "systemctl", "sudo", "ioctl"],
    "ans": ["systemctl"]
  },
  {
    "question": "Which of the following commands is used to view the status of all services?",
    "option": ["systemctl -l", "systemctl --Z", "systemctl --l", "systemctl --all"],
    "ans": ["systemctl --all"]
  },
  {
    "question": "Which runlevel number defines halting the system?",
    "option": ["0", "3", "4", "2", "6", "5", "1"],
    "ans": ["0"]
  },
  {
    "question": "What directory contains information about symbolic links that enable services?",
    "option": ["/proc/acpi", "/etc/rc.d", "/usr/lib/systemd", "/etc/init.d/httpd"],
    "ans": ["/usr/lib/systemd"]
  },
  {
    "question": "What option to the mkfs command allows you to specify the type of filesystem to create?",
    "option": ["-f", "-fs", "-fstype", "-t"],
    "ans": ["-t"]
  },
  {
    "question": "Which command is used to create a logical volume?",
    "option": ["create", "lvadd", "lvcreate", "createlv"],
    "ans": ["lvcreate"]
  },
  {
    "question": "Which command is used to create a physical volume?",
    "option": ["createpv", "create", "pvadd", "pvcreate"],
    "ans": ["pvcreate"]
  },
  {
    "question": "Which program will non-destructively resize a partition and its installed filesystem?",
    "option": ["fdisk", "parted", "lvcreate", "sgdisk"],
    "ans": ["parted"]
  },
  {
    "question": "Which command will create disk labels on an ext3 filesystem?",
    "option": ["label", "elabel", "ext3label", "e2label"],
    "ans": ["e2label"]
  },
  {
    "question": "Which command will describe the mount options available for different filesystems?",
    "option": ["mount --list", "mount -a", "mount --options", "man mount"],
    "ans": ["man mount"]
  },
  {
    "question": "Which file provides persistent mapping of block devices to mount points?",
    "option": ["/etc/blk.id", "/etc/fstable", "/etc/blk.map", "/etc/fstab"],
    "ans": ["/etc/fstab"]
  },
  {
    "question": "You wish to see an output of the devices on your system that are block-based. Which of the following will list them out?",
    "option": ["enum-disk", "lsblk", "ls -ld", "block-id"],
    "ans": ["lsblk"]
  },
  {
    "question": "What is the primary configuration file for yum?",
    "option": ["/etc/yum/main.conf", "/etc/yum.d/yum.conf", "/etc/yum.conf", "/etc/yum/yum.conf"],
    "ans": ["/etc/yum.conf"]
  },
  {
    "question": "Which command will show the dependencies of an RPM package?",
    "option": ["rpm -qpR", "yum requires", "yum provides", "rpm -qpd"],
    "ans": ["rpm -qpR"]
  },
  {
    "question": "In which file are repositories stored for Debian package management?",
    "option": ["/etc/apt/source.repo", "/etc/repo.list", "/etc/apt/sources.list", "/etc/apt/repo.list"],
    "ans": ["/etc/apt/sources.list"]
  },
  {
    "question": "Which command may be used to get a list of the installed Debian packages?",
    "option": ["apt-get list", "apt-get show", "dpkg -L", "dpkg -l"],
    "ans": ["dpkg -l"]
  },
  {
    "question": "Which command will remove all files that belong to a Debian package?",
    "option": ["apt-get purge", "apt-get uninstall", "apt-get remove", "apt-get erase"],
    "ans": ["apt-get purge"]
  },
  {
    "question": "Which command will update the list of available packages for APT?",
    "option": ["apt-get upgrade", "apt-get update", "apt-cache update", "apt-cache upgrade"],
    "ans": ["apt-get update"]
  },
  {
    "question": "Which utility can automate changes needed for a base virtual machine image?",
    "option": ["cloud-init", "minions", "lscpu", "KVM"],
    "ans": ["cloud-init"]
  }
]