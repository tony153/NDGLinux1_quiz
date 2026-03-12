const examination_question =[
  {
    "question": "The two login types are:",
    "option": ["CLI and GUI", "URI and CLI", "URI and CLU", "GUX and CLI"],
    "ans": ["CLI and GUI"]
  },
  {
    "question": "The location of users’ default shells is stored in the ______ file.",
    "option": ["/etc/group", "/etc/passwd", "/etc/gshadow", "/etc/shadow"],
    "ans": ["/etc/passwd"]
  },
  {
    "question": "Applications make requests to the kernel and receive resources, such as memory, CPU, and disk in return. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Commands are interpreted by the shell and transformed into actions by the kernel. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Which of the following are valid command lines? (choose two)",
    "option": ["-l ls /etc", "ls -/etc", "ls /etc -l", "ls -l /etc"],
    "ans": ["ls /etc -l", "ls -l /etc"]
  },
  {
    "question": "The _____ option to the uname command will display the kernel name.",
    "option": ["-s", "-k", "-x", "-n"],
    "ans": ["-s"]
  },
  {
    "question": "The ______ command will display your current working directory.",
    "option": ["uname", "pwd", "exit", "exec"],
    "ans": ["pwd"]
  },
  {
    "question": "Shell command man pages are typically located in section ___.",
    "option": ["4", "2", "1", "3"],
    "ans": ["1"]
  },
  {
    "question": "A pair of single quotes ‘ will prevent the shell from interpreting any special character. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Environment variables can be viewed by running: (choose two)",
    "option": ["vars", "export -p", "env", "export -e"],
    "ans": ["export -p", "env"]
  },
  {
    "question": "Environment variables cannot be created by which command?",
    "option": ["declare", "typeset", "export", "set"],
    "ans": ["set"]
  },
  {
    "question": "The path testdir/file.txt is:",
    "option": ["A relative path", "An absolute path", "A circular path", "An invalid path"],
    "ans": ["A relative path"]
  },
  {
    "question": "The /bin directory contains:",
    "option": [
      "Commands that have been compiled from local sources",
      "Nothing; it is not a valid directory",
      "The most fundamental commands that are essential for the operating system to function",
      "Essential administrative commands"
    ],
    "ans": ["The most fundamental commands that are essential for the operating system to function"]
  },
  {
    "question": "When specifying a path, the __ character symbolizes the current directory.",
    "option": ["/", ".", "~", ".."],
    "ans": ["."]
  },
  {
    "question": "Which of the following files is for all bash shell users and executed only at login?",
    "option": ["~/.bashrc", "/etc/profile", "~/.bash_profile", "/etc/bashrc"],
    "ans": ["/etc/profile"]
  },
  {
    "question": "Assuming at least one file matching the pattern is in the current directory, the command echo ???a will display:",
    "option": [
      "All of the files in the current directory that have four characters in the file name with the first character being an “a” character.",
      "Only a file named ???a",
      "All of the files in the current directory that have four characters in the file name with the last character being an “a” character.",
      "All of the files in the current directory that end with an “a” character."
    ],
    "ans": ["All of the files in the current directory that have four characters in the file name with the last character being an “a” character."]
  },
  {
    "question": "You can combine glob characters in a single pattern, for example: a??*[0-9]. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Which glob character matches zero or more characters?",
    "option": ["?", "*", ".", "["],
    "ans": ["*"]
  },
  {
    "question": "Which two characters represent the empty string?",
    "option": ["“”", "..", "&&", "**"],
    "ans": ["“”"]
  },
  {
    "question": "Using the touch command and specifying a nonexistent file…",
    "option": [
      "does nothing.",
      "generates an error.",
      "creates a blank file with that name.",
      "prompts the user to create a file."
    ],
    "ans": ["creates a blank file with that name."]
  },
  {
    "question": "To maintain timestamps when using the cp command, use:",
    "option": ["-T", "-a", "-A", "-t"],
    "ans": ["-a"]
  },
  {
    "question": "Which option for the rm command will cause it to prompt before deleting files?",
    "option": ["-l", "-p", "-a", "-i"],
    "ans": ["-i"]
  },
  {
    "question": "The mkdir command cannot be used to:",
    "option": [
      "Create multiple directories at once",
      "Create new directories",
      "Create sub-directories in different parent directories",
      "Delete a directory"
    ],
    "ans": ["Delete a directory"]
  },
  {
    "question": "The names of hidden files begin with the ___ character.",
    "option": [">", "+", ".", "*"],
    "ans": ["."]
  },
  {
    "question": "Which directory is used to store files representing attached devices?",
    "option": ["/dev", "/tmp", "/mnt", "/"],
    "ans": ["/dev"]
  },
  {
    "question": "The _____ command will search for files using a database of all files, which is generated on demand or scheduled.",
    "option": ["find", "updatedb", "search", "locate"],
    "ans": ["locate"]
  },
  {
    "question": "Which option to the find command will search by file type?",
    "option": ["-ftype", "-file", "-type", "-fstype"],
    "ans": ["-type"]
  },
  {
    "question": "Which directory is used to store temporary files?",
    "option": ["/", "/tmp", "/etc", "/sysfs"],
    "ans": ["/tmp"]
  },
  {
    "question": "Which directory is used to store essential libraries?",
    "option": ["/lib", "/var", "/bin", "/usr"],
    "ans": ["/lib"]
  },
  {
    "question": "Which command will remove consecutive duplicate lines from a file?",
    "option": ["uniq", "tr", "dedup", "sed"],
    "ans": ["uniq"]
  },
  {
    "question": "Which of the following commands can be used to scroll through a text file?",
    "option": ["sed", "cat", "less", "head"],
    "ans": ["less"]
  },
  {
    "question": "Which option of the head command will display only the first six lines of a file? (choose two)",
    "option": ["-n -6", "-n", "-n 6", "-6"],
    "ans": ["-n 6", "-6"]
  },
  {
    "question": "The regular expression a+ is equivalent to:",
    "option": ["a{0,}", "a{0,1}", "a{1}", "a{1,}"],
    "ans": ["a{1,}"]
  },
  {
    "question": "To use regular expression characters to match themselves, you cannot:",
    "option": [
      "Put the character in the square brackets",
      "Use the backslash in front of the character",
      "Use the fgrep command",
      "Use the slash in front of the character"
    ],
    "ans": ["Use the slash in front of the character"]
  },
  {
    "question": "Which regular expression character matches one or more of the previous character?",
    "option": ["+", "$", "–", "*"],
    "ans": ["+"]
  },
  {
    "question": "If you are in vi command mode and want to begin inserting text at the end of the line, you can type:",
    "option": ["I", "A", "o", "O"],
    "ans": ["A"]
  },
  {
    "question": "If you want to move up a line in vi command mode, you can press the Up Arrow Key ↑ or:",
    "option": ["l", "k", "j", "h"],
    "ans": ["k"]
  },
  {
    "question": "To search forward from your cursor in your vi document in command mode, you can type __ followed by the pattern to search for.",
    "option": ["/", "|", "?", "\\"],
    "ans": ["/"]
  },
  {
    "question": "Many commands that read text files will also read from this stream:",
    "option": ["stdcon", "stdout", "stdin", "stderr"],
    "ans": ["stdin"]
  },
  {
    "question": "Which of the following commands will take the standard output of the echo command and put it into the /tmp/output.txt file:",
    "option": [
      "echo 2> /tmp/output.txt",
      "echo | /tmp/output.txt",
      "echo 2 | /tmp/output",
      "echo > /tmp/output.txt"
    ],
    "ans": ["echo > /tmp/output.txt"]
  },
  {
    "question": "In a command pipeline, the output of one command is sent to another command as output. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["FALSE"]
  },
  {
    "question": "A signal is:",
    "option": [
      "A command argument",
      "A command option",
      "A technique to send data to a process",
      "A technique to tell a process to take some sort of action"
    ],
    "ans": ["A technique to tell a process to take some sort of action"]
  },
  {
    "question": "In order to run a command called cmd1 in the background, you would type:",
    "option": ["bg cmd1", "start -b cmd1", "cmd1&", "cmd1@"],
    "ans": ["cmd1&"]
  },
  {
    "question": "Placing a ___ character at the end of the command line will put the command in the background.",
    "option": ["B", "!", "&", "?"],
    "ans": ["&"]
  },
  {
    "question": "The key press combination that will request a running process terminate:",
    "option": ["CTRL+C", "CTRL+D", "CTRL+Z", "CTRL+P"],
    "ans": ["CTRL+C"]
  },
  {
    "question": "To change the niceness value of an existing process, you can use the _____ command.",
    "option": ["reset", "nice", "renice", "set"],
    "ans": ["renice"]
  },
  {
    "question": "To execute a command called cmd1 as a foreground process, you would type:",
    "option": ["cmd1", "fg cmd1", "cmd1 &", "foreground cmd1"],
    "ans": ["cmd1"]
  },
  {
    "question": "To execute a command with the default priority, which value do you pass to the nice command?",
    "option": ["20", "0", "-20", "19"],
    "ans": ["0"]
  },
  {
    "question": "To execute a command with the highest possible priority, which value do you pass to the nice command?",
    "option": ["-20", "20", "19", "0"],
    "ans": ["-20"]
  },
  {
    "question": "To see how long the system has been running, you can use the _____ command.",
    "option": ["free", "nice", "uptime", "ps"],
    "ans": ["uptime"]
  },
  {
    "question": "To see the list of background processes that you have started in your shell, you can run:",
    "option": ["work", "process", "jobs", "list"],
    "ans": ["jobs"]
  },
  {
    "question": "Which command will find all processes owned by user fred?",
    "option": ["pgrep -u fred -l", "ps -a | user fred", "ps fred | grep -1 process", "pgrep -i | fred"],
    "ans": ["pgrep -u fred -l"]
  },
  {
    "question": "The screen command can detach and re-attach terminal sessions. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "bzip2 archives are typically indicated with which file extension?",
    "option": [".gz", ".bz2", ".bz", ".b2"],
    "ans": [".bz2"]
  },
  {
    "question": "gzip and bzip are aliases for the same utility. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["FALSE"]
  },
  {
    "question": "The dd command can be used to copy entire partitions.",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "The tar command supports:",
    "option": [
      "gzip compression only",
      "only uncompressed archives",
      "bzip compression only",
      "Both gzip and bzip2 compression"
    ],
    "ans": ["Both gzip and bzip2 compression"]
  },
  {
    "question": "The tar command supports which of the following styles of option(s)? (choose three)",
    "option": ["GNU", "DOS", "BSD", "Unix"],
    "ans": ["GNU", "BSD", "Unix"]
  },
  {
    "question": "By default the gzip command replaces uncompressed files with compressed files. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Which archiving method is compatible across Linux, Microsoft Windows and Mac operating systems?",
    "option": ["tar", "zip", "cpio", "dd"],
    "ans": ["zip"]
  },{
    "question": "Which of the following commands could be used to extract the archive, example.tar?",
    "option": ["tar -xz example.tar", "tar -uz example.tar", "tar -xf example.tar", "tar -uf example.tar"],
    "ans": ["tar -xf example.tar"]
  },
  {
    "question": "Which of the following is not a valid argument for the dd command?",
    "option": ["bs", "of", "if", "in"],
    "ans": ["in"]
  },
  {
    "question": "Which of the following options puts the cpio command into copy-in mode?",
    "option": ["-v", "-u", "-o", "-i"],
    "ans": ["-i"]
  },
  {
    "question": "Which option to the bzip2 command can be used for recursive compression?",
    "option": ["-v", "-c", "-R", "bzip2 doesn’t support recursive compression"],
    "ans": ["bzip2 doesn’t support recursive compression"]
  },
  {
    "question": "Which option to the bzip2 command can be used to report the compression ratio of an archive?",
    "option": ["-R", "-l", "-v", "-c"],
    "ans": ["-v"]
  },
  {
    "question": "To view the contents of foo.gz without uncompressing it, use:",
    "option": ["zcat foo.gz", "gzip -i foo.gz", "untar -u foo.gz", "gunzip foo.gz"],
    "ans": ["zcat foo.gz"]
  },
  {
    "question": "Which command will uncompress the file letters.txt.xz?",
    "option": ["unxz letters.txt.xz", "untar letters.txt.xz", "letters.txt.xz > letters.txt", "xz -b letters.txt.xz"],
    "ans": ["unxz letters.txt.xz"]
  },
  {
    "question": "Assuming everyone has access to the directory the file is in, who can view the contents of a file with permissions of rw-r----x?",
    "option": ["Everyone", "Only the group owners", "Others", "Both the user owner and group owners", "Only the user owner"],
    "ans": ["Both the user owner and group owners"]
  },
  {
    "question": "For rwxr-x--x permission set, the highlighted permissions belong to:",
    "option": ["The user owner and group owner of the file", "The group owner of the file", "All users besides the user owner and group owner", "The user owner of the file"],
    "ans": ["All users besides the user owner and group owner"]
  },
  {
    "question": "For the rwxr-x--x permission set, the highlighted permissions belong to:",
    "option": ["The user owner and group owner of the file", "The user owner of the file", "All users besides the user owner and group owner", "The group owner of the file"],
    "ans": ["The group owner of the file"]
  },
  {
    "question": "For the rwxr-x--x permission set, the highlighted permissions belong to:",
    "option": ["The group owner of the file", "All users besides the user owner and group owner", "The user owner of the file", "The user owner and group owner of the file"],
    "ans": ["The user owner of the file"]
  },
  {
    "question": "The command,chmod 0777 /data will:",
    "option": ["Remove all special permissions", "Make the /data directory a sticky bit directory", "Make the /data directory a setuid directory", "Make the /data directory a setgid directory"],
    "ans": ["Remove all special permissions"]
  },
  {
    "question": "The command, chmod a+x will:",
    "option": ["Add execute permission for all users", "Add execute permissions for the user owner", "Remove execute permissions for the user owner", "Remove execute permission for all users"],
    "ans": ["Add execute permission for all users"]
  },
  {
    "question": "The group ownership of a file may only be changed by:",
    "option": ["Both the root user and the owner of the file", "The owner of the file", "The root user", "Any user can change the group ownership of any file"],
    "ans": ["Both the root user and the owner of the file"]
  },
  {
    "question": "The setuid permission on a file:",
    "option": ["Causes the file to never run as root", "Causes the file to run under the user’s identity", "Causes the file to run under the owner’s identity", "Causes the file to always run as root"],
    "ans": ["Causes the file to run under the owner’s identity"]
  },
  {
    "question": "Using the setgid permission on a directory:",
    "option": ["Causes files existing in the directory to be owned by the group that owns the directory", "Causes new files created in the directory to be owned by the group that owns the directory", "Causes files existing in the directory to be made executable by the group", "Causes the directory to be writable to members of the group that owns the directory"],
    "ans": ["Causes new files created in the directory to be owned by the group that owns the directory"]
  },
  {
    "question": "Which command can change the user owner of a file?",
    "option": ["own", "chpawn", "chown", "pawn"],
    "ans": ["chown"]
  },
  {
    "question": "Which command is used to change permissions on a file?",
    "option": ["chmod", "chgmode", "chgperm", "chperm"],
    "ans": ["chmod"]
  },
  {
    "question": "A soft link is also called a _____ link.",
    "option": ["indirect", "TRUE", "symbolic", "FALSE"],
    "ans": ["symbolic"]
  },
  {
    "question": "If you have a file named /tmp/hosts pointing to a file named /etc/hosts and the /etc/hosts file is deleted, then which of the following statements is true?",
    "option": ["You can still access the data by using /tmp/hosts", "The data from /etc/hosts is automatically copied into /tmp/hosts before /etc/hosts is deleted", "It is not possible to delete the /etc/hosts file while a soft link is pointing to it", "The /tmp/hosts file now points to nothing"],
    "ans": ["The /tmp/hosts file now points to nothing"]
  },
  {
    "question": "When viewing a file with the ls -l command, which character represents a file type of soft link?",
    "option": ["–", "d", "f", "l"],
    "ans": ["l"]
  },
  {
    "question": "When you create a hard link, it increases the hard link count by one. True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },
  {
    "question": "Which type of link can be made to a file on another filesystem, hard or soft?",
    "option": ["hard", "soft"],
    "ans": ["soft"]
  },
  {
    "question": "Which type of link can be made to directories, hard or soft?",
    "option": ["hard", "soft"],
    "ans": ["hard"]
  },
  {
    "question": "Which type of link is indistinguishable by programs from regular files, hard or soft?",
    "option": ["hard", "soft"],
    "ans": ["hard"]
  },
  {
    "question": "Which value represents the inode number in the following output of thels -li command: 87589 -rw-r--r--. 2 root root 83 Mar 4 22:45 myhosts",
    "option": ["2", "83", "22:45", "87589"],
    "ans": ["87589"]
  },
  {
    "question": "What is the notification mechanism used to inform programs about a change in state of hardware devices?",
    "option": ["Programs query HALD directly", "DBUS sends notifications to HALD", "DBUS forwards queries from programs to HALD", "HALD uses dbus to send notifications"],
    "ans": ["HALD uses dbus to send notifications"]
  },
  {
    "question": "Which of the following commands is used to view the network interface controller connected on the PCI bus?",
    "option": ["lsusb", "lsmod", "lsnet", "lspci"],
    "ans": ["lspci"]
  },
  {
    "question": "The first stage of the boot process is:",
    "option": ["The firmware (BIOS/UEFI) stage", "The Bootloader (LILO/GRUB) stage", "The init phase", "The kernel phase"],
    "ans": ["The firmware (BIOS/UEFI) stage"]
  },
  {
    "question": "The fourth stage of the boot process is:",
    "option": ["The kernel", "The Bootloader stage", "The init phase", "The firmware (BIOS/UEFI) stage"],
    "ans": ["The init phase"]
  },{
    "question": "The third stage of the boot process is:",
    "option": ["The kernel phase", "The firmware (BIOS/UEFI) stage", "The Bootloader stage", "The init phase"],
    "ans": ["The kernel phase"]
  },
  {
    "question": "Which directory is used primarily for storing log messages?",
    "option": ["/var/tmp", "/var/spool", "/var/logging", "/var/log"],
    "ans": ["/var/log"]
  },
  {
    "question": "Which of the following is not a daemon used for logging?",
    "option": ["rsyslogd", "klogd", "syslogd", "logd"],
    "ans": ["logd"]
  },
  {
    "question": "In GRUB Legacy, the _____ directive indicates an operating system to boot if the default operating system fails to boot.",
    "option": ["fallback=", "redo", "root", "timeout="],
    "ans": ["fallback="]
  },
  {
    "question": "In GRUB Legacy, the password directive in the title directive setting means:",
    "option": [
      "You can’t place a password directive in the title directive setting",
      "To edit any GRUB values, a password must first be entered",
      "To boot a specific operating system, a password must be entered",
      "The password must be entered to display a menu of operating systems that are bootable"
    ],
    "ans": ["To boot a specific operating system, a password must be entered"]
  },
  {
    "question": "For traditional init, the _____ file is where the initial default runlevel is defined.",
    "option": ["/etc/inittab", "/etc/sysinit", "/etc/init", "/etc/initdefault"],
    "ans": ["/etc/inittab"]
  },
  {
    "question": "What option to the who command will display the current runlevel?",
    "option": ["-s", "-a", "-t", "-r"],
    "ans": ["-r"]
  },
  {
    "question": "Which command is used to view the services that are set to start or stop automatically?",
    "option": ["config", "lsconfig", "initconfig", "chkconfig"],
    "ans": ["chkconfig"]
  },
  {
    "question": "A device name of /dev/sda1 indicates this partition is on which type of device?",
    "option": ["SATA", "Logical Volume", "IDE", "CDROM"],
    "ans": ["SATA"]
  },
  {
    "question": "Which directories are typically writable to all users? (choose two)",
    "option": ["/var/tmp", "/home", "/", "/tmp"],
    "ans": ["/var/tmp", "/tmp"]
  },
  {
    "question": "Which directory structure has directories which may have heavy activity for services like mail, ftp, httpd and printing?",
    "option": ["/home", "/rootfs", "/var", "/root"],
    "ans": ["/var"]
  },
  {
    "question": "After running fdisk -cu /dev/sdb, what fdisk command will allow you to delete a partition?",
    "option": ["s", "d", "g", "r"],
    "ans": ["d"]
  },
  {
    "question": "After running fdisk -cu /dev/sdb, what fdisk command will allow you to list the current partition table?",
    "option": ["p", "s", "w", "l"],
    "ans": ["p"]
  },
  {
    "question": "If you want to initialize swap space that you’ve just created, which command would you run?",
    "option": ["mkswap", "initswap", "swapinit", "swapon"],
    "ans": ["mkswap"]
  },
  {
    "question": "If you want to unmount a partition, which command should you use?",
    "option": ["dismount", "umount", "mount", "unmount"],
    "ans": ["umount"]
  },
  {
    "question": "The second field in the /etc/fstab file is used to specify:",
    "option": ["The mount point", "The fsck order", "The device to mount", "The dump field", "The mount options", "The file system type"],
    "ans": ["The mount point"]
  },
  {
    "question": "The sixth field in the /etc/fstab file is used to specify:",
    "option": ["The dump field", "The device to mount", "The mount options", "The mount point", "The fsck order", "The filesystem type"],
    "ans": ["The fsck order"]
  },
  {
    "question": "What commands can display a list of mounted file systems? (choose two)",
    "option": ["mount", "fdisk", "lspt", "df"],
    "ans": ["mount", "df"]
  },
  {
    "question": "The _____ command will display how much space a filesystem has free?",
    "option": ["df", "free", "du", "init"],
    "ans": ["df"]
  },
  {
    "question": "What determines how many files can be stored in a filesystem?",
    "option": ["The number of inodes", "The number of bytes", "The Superblock size", "The number of data blocks"],
    "ans": ["The number of inodes"]
  },
  {
    "question": "Which option to the df command shows how many inodes are free in a filesystem?",
    "option": ["-f", "-i", "-free", "-inode"],
    "ans": ["-i"]
  },
  {
    "question": "Which option to the fsck command forces a system check?",
    "option": ["-FF", "-f", "-F", "-ff"],
    "ans": ["-f"]
  },
  {
    "question": "Which option to the fsck command will allow you to specify the filesystem type?",
    "option": ["-F", "-t", "-T", "-f"],
    "ans": ["-t"]
  },
  {
    "question": "How can you determine the RPM package that owns a file?",
    "option": ["yum provides", "yum info", "yum owns", "yum find"],
    "ans": ["yum provides"]
  },
  {
    "question": "In what directory are yum repository configuration files stored?",
    "option": ["/etc/yum", "/usr/share/yum", "/etc/yum.repos.d", "/var/lib/yum"],
    "ans": ["/etc/yum.repos.d"]
  },
  {
    "question": "What are the correct options for the rpm command to display a list of all installed packages?",
    "option": ["-qall", "-b", "-a", "-qa"],
    "ans": ["-qa"]
  },
  {
    "question": "Which command can an administrator run to rebuild the cache of shared libraries?",
    "option": ["ldd", "ld.so", "ldlist", "ldconfig"],
    "ans": ["ldconfig"]
  },
  {
    "question": "Which of the following contents is in the ldconfig configuration file by default?",
    "option": ["include all", "include ldconfig", "include /etc/ldconfig", "include ld.so.conf.d/*.conf"],
    "ans": ["include ld.so.conf.d/*.conf"]
  },
  {
    "question": "Which two directories are automatically searched for shared libraries? (choose two)",
    "option": ["/usr/library", "/library", "/usr/lib", "/lib"],
    "ans": ["/usr/lib", "/lib"]
  },
  {
    "question": "A bare-metal hypervisor runs directly on top of physical hardware True or False?",
    "option": ["TRUE", "FALSE"],
    "ans": ["TRUE"]
  },{
    "question": "Container systems do not require:",
    "option": [
      "communication with other parts of the system",
      "security and updating",
      "a hypervisor",
      "dependencies needed for their specific applications"
    ],
    "ans": ["a hypervisor"]
  },
  {
    "question": "Which of the following can be used to view details about USB devices? (choose two)",
    "option": ["lsusb", "usbprobe", "lsmod", "usb-devices", "ls -usb"],
    "ans": ["lsusb", "usb-devices"]
  },
  {
    "question": "Which programs have emerged to compete with and replace the traditional init process: (choose two)",
    "option": ["Upstart", "SysVinit", "Systemd", "initramfs"],
    "ans": ["Upstart", "Systemd"]
  },
  {
    "question": "What version of GRUB is the most modern version?",
    "option": ["GRUB 3", "GRUB Original", "GRUB Legacy", "GRUB 2"],
    "ans": ["GRUB 2"]
  },
  {
    "question": "Which of the following are valid Linux bootloaders? (choose two)",
    "option": ["GRUB/GRUB2", "UEFI", "LILO", "BIOS"],
    "ans": ["GRUB/GRUB2", "LILO"]
  },
  {
    "question": "Which runlevel number defines multi-user with GUI?",
    "option": ["1", "4", "6", "5", "3", "0", "2"],
    "ans": ["5"]
  },
  {
    "question": "Which runlevel number defines rebooting the system?",
    "option": ["3", "4", "2", "1", "6", "0", "5"],
    "ans": ["6"]
  },
  {
    "question": "Which runlevel number is defined as user-definable?",
    "option": ["4", "5", "0", "2", "3", "1", "6"],
    "ans": ["4"]
  },
  {
    "question": "What option to the fdisk command is used to display current partitions?",
    "option": ["-f", "-p", "-l", "-a"],
    "ans": ["-l"]
  },
  {
    "question": "Which command is used from the command line, to edit your disk’s partition table?",
    "option": ["gedit", "parttool", "dedit", "fdisk"],
    "ans": ["fdisk"]
  },
  {
    "question": "Which command is used to create a volume group?",
    "option": ["createvg", "create", "vgcreate", "vgadd"],
    "ans": ["vgcreate"]
  },
  {
    "question": "Which command will display UUIDs?",
    "option": ["blkid", "displayid", "setid", "id"],
    "ans": ["blkid"]
  },
  {
    "question": "Which two commands will show detailed information about a Debian package? (choose two)",
    "option": ["dpkg -s", "apt-cache show", "apt-cache info", "dpkg -i"],
    "ans": ["dpkg -s", "apt-cache show"]
  },
  {
    "question": "A _________ is a location that contains packages and metadata that can be used for queries, installation and updates of software on a system.",
    "option": ["Repository", "Depot", "Store"],
    "ans": ["Repository"]
  }
]