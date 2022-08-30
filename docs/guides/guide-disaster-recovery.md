---
title: Disaster Recovery
sidebar_position: 7
---

## Overview

Backup data is encypted by default and encryption cannot be turned off. The key to accessing data in a Storage Vault is the user-profile that backed it up. Comet Server supports replication for the [Authentication Role](https://docs.cometbackup.com/latest/installation/comet-server-configuration#authentication-role) (the Comet Server itself), and [Storage Role](https://docs.cometbackup.com/latest/installation/comet-server-configuration#storage-role) (customers data).

To ensure redundancy for your backup environment, use:

- [Server Self-Backup](https://docs.cometbackup.com/latest/installation/comet-server-configuration#server-selfbackup) to backup your Comet Server (Auth Role), and then choose any other external method to have a redundant copy of the storage data. It is strongly recommendeded to enable Server Self-Backup.
- [Replication](https://docs.cometbackup.com/latest/installation/comet-server-usage#replication) to replicate your Comet Server (Auth Role) and the storage data (Storage Role) to another Comet Server (replication will only happen in one-direction). Note: Replication will keep a duplicate of the current data. Mistakes will also be copied-over to the redundant copy.

## Comet Server Loss

If you experience the loss of a Comet Server (fire, theft, disaster, ransomware), then you need to do the following:-

1.  Install a copy of Comet server on the new machine (download the software from here: [https://account.cometbackup.com/downloads](https://account.cometbackup.com/downloads))
2.  Stop the service, and unzip the Server Self-Backup file, overwrite the contents of Windows C:\\ProgramData\\Comet or Linux/Unix /var/lib/cometd/.
3.  If on Linux/Unix, run the following command to make sure the file permissions are correct. `sudo chown -R cometd:cometd /var/lib/cometd`
4.  Login and 'relax' the serial to allow the new Comet Server to operate on your account: [https://cometbackup.com/my_servers](https://cometbackup.com/my_servers)
5.  Once done, the new Comet server will be at the same state as was the previous one at the time of the Server Self-Backup, including all of the client configuration data. You may need to alter DNS records, IP addresses, etc to match the new machine.

Notes for Step 1:

- You will need your Comet account email and password to install Comet Server.
- A video tutorial on setting up the server is here: [https://www.youtube.com/watch?v=jen7TdenIrM](https://www.youtube.com/watch?v=jen7TdenIrM)

## Backup Client Device Loss

If the user loses a device, then all that is needed to recover backed-up data, is the following:-

1.  Install a fresh copy of the Comet client software on the replacement device, using the user-profile username and password.
2.  Verify that the new device shows as 'Online' in the admin web interface: Accounts -> Users -> name -> Devices.
3.  Perform a 'Restore' function as needed.
4.  Add the old device's Protected Items to the new device: [https://docs.cometbackup.com/latest/installation/comet-server-usage#copy-and-paste](https://docs.cometbackup.com/latest/installation/comet-server-usage#copy-and-paste) and [https://docs.cometbackup.com/latest/troubleshooting#handling-a-changed-device-id](https://docs.cometbackup.com/latest/troubleshooting#handling-a-changed-device-id)
5.  When complete, 'Revoke' the old device-listing in the admin web interface -> Accounts -> Users -> name -> Devices.

Notes:

- If the user password is unknown, then it can be reset via admin web interface: Accounts -> Users -> name -> Actions -> Reset Password.
- If the user has disabled admin password reset, then the user must supply the current password for the installation step. The password can be changed by the user at a later stage.
- If the old device is brought back online at some future time, Comet may make a catch-up billing for the uncharged intervening period.

## Other Scenarios

If you have a recovery requirement which is different from the above basic scenarios, please contact support via [https://cometbackup.com/support](https://cometbackup.com/support)

Please include:

- A brief description of the nature of the recovery situation
- Details of your Comet system: number of servers, what role(s) each server has, what type of data storage is used, whether data storage is local or remote.
- Further details may be requested by the support team.
