---
title: Common Problems and Solutions
sidebar_position: 9
---

## My backup seems to be very slow

- Comet is designed so that the client software installed in the device does all the ‘heavy lifting’ required for backups. Nothing is done server-side, it is all client-side. This means that if the client device is constrained in any way by resources (low-power CPU, minimal RAM, low-quality LAN or switching equipment, slow internet speeds, etc), then this may have a harmful effect on the speed of any backups.
- Solution:
  - Troubleshoot any network or hardware issues as applicable; or
  - Check for other backups or other activity which may be overloading the LAN or the internet around the time of the slow backup.
  - More in-depth discussion here: [https://docs.cometbackup.com/latest/troubleshooting#slow-backup-jobs](https://docs.cometbackup.com/latest/troubleshooting#slow-backup-jobs)

## I can’t backup a network share, but the user account can access and view the files

- Solution:
  - Check the path of the Protected Item. The user may be trying to specify “Z:\ drive” which only exists for that user account. Change to a UNC path instead; or
  - Check the permissions for the client software. The client software is installed with the minimum permissions required to access all files on the device, but no more. You may need to create an account on the share that the client software backup.delegate service can use to ‘logon as’; or
  - Install the client software onto the device which holds the original data
  - More in-depth discussion here: [https://docs.cometbackup.com/latest/troubleshooting#accessing-windows-network-shares-and-unc-paths](https://docs.cometbackup.com/latest/troubleshooting#accessing-windows-network-shares-and-unc-paths)

## Restoring a small file downloads a much larger amount of data

- Currently, the device performing the restore needs an index of the data in the Storage Vault so that it can determine which data chunks are needed to restore the file in question. This index is very small, typically 0.1% of the size of the data stored. With very large stored-data sizes (multiple terabytes), however, the downloaded index can reach 100MB or more, even if the file to restore may be only 100KB.

## Windows Server System State or Windows System Backup won’t work

- These backup types are Microsoft proprietary backups, and can be problematic for a wide variety of reasons. Commonly, users make the mistake of ‘spooling’ to a drive which is one of the drives also selected for backup; or the user attempts to use a non-permanent drive (eg: portable USB). We make better recommendations here: [https://docs.cometbackup.com/latest/installation/protected-items#windows-system-backup-items](https://docs.cometbackup.com/latest/installation/protected-items#windows-system-backup-items).
- Solution:
  - If the above guide does not resolve the problem, consider switching to the Comet Disk Image backup type, which was designed to circumvent these problems: [https://docs.cometbackup.com/latest/guides/guide-disk-image-walkthrough#disk-image-walkthrough](https://docs.cometbackup.com/latest/guides/guide-disk-image-walkthrough#disk-image-walkthrough)

## The Comet Server login page won't load, or, I have changed/moved the primary storage type/location, now the admin web interface won’t open

- One of the first Comet Server start-up routines is a check on whether the storage location is available and accessible. If it is not, the Server will not be able to function, and the login page won’t be available. The Server will repeatedly attempt to restart, as this action will often correct network-connection issues. Where a restart does not fix an underlying issue, the multiple restart action has no untoward effect, except that the Comet Server is not running. The Server log will show the repeated restarts.
- Solution:
  - Make the storage location accessible; or
  - Use a recent Server Self-Backup to restore the Server to a stable recent state and thereby undo any recent changes; or
  - If a Windows-based Comet Server, open the Comet Server Service Manager (CSSM). Use the minimalistic Setup Wizard to manually undo any recent changes; or
    - Use the CSSM to temporarily disable the Storage Role; or
    - Use the CSSM to configure the storage to be a known-good and accessible location.
  - If a Linux-based Comet Server, stop the cometd service, then edit the /etc/cometd.cometd.cfg file “StorageRole” section, pointing the location to a known-good and accessible location. Restart the cometd service.
- The above actions will allow the Server to finish starting up, and the web interface will then become available, at which point, the storage location can be reconfigured.

## My Comet Server logs show that the Server continuously restarts

- The Comet Server process will exit and restart if it fails to validate its Comet license on startup. The Server will repeatedly restart, as this may allow time for network issues to resolve themselves
- Solution:
  - Verify that outgoing communications are allowed to ‘lic.cometbackup.com’.

## I have a VSS problem...

- Volume Shadow Copy Service (VSS) is a Microsoft technology for taking consistent, point-in-time snapshots of a disk volume. A VSS Writer is an extra software plugin that detects when this action is taking place, and ensures that application-specific files are in a safe state on disk. This feature allows you to invoke a single VSS Writer, or a sub-component of a single VSS Writer, and to backup only the files that it was protecting.
- VSS snapshotting does not work over network paths. Instead of trying to snapshot over a network, install the client software onto the device which holds the original data.
- VSS issues can occur if another backup software is also running, and has prevented the Comet VSS writer from working. Stop the other software to see if the issue persists.
- VSS issues are often accompanied by an error code in the form of 0xXXXXXXXX. This is an externally-originating code, which will often signify why the VSS writer failed. Research this error code for solutions to the problem.
- Open an elevated-permissions command line, and run “vssadmin list writers” to see a current list of the writers. This will highlight any which failed, as well as their own error codes. This may help troubleshoot which writer contributed to the failure, or show the failure point.

## Job History shows a running job, and it won’t cancel

- The ‘Cancel’ button shows in the Job History report while a job status is ‘running’.
- Solution:
  - Allow the job time to finish on its own.
  - If you still require it to stop, or it won’t cancel after using the 'Cancel' button,
    - Firstly, send the device an Update Software signal: [https://docs.cometbackup.com/latest/installation/comet-server-usage#bulk-update](https://docs.cometbackup.com/latest/installation/comet-server-usage#bulk-update) (or update an individual device via Connected Devices -> Actions). The device will reinstall the current version, and this action definitely terminates any running backup process.
    - Secondly, when the device has updated, use Connected Devices -> Actions -> ‘Apply Retention Rules Now’ to tidy up the Vault, and update the device status in the logs.
- More in-depth discussion here: [https://docs.cometbackup.com/latest/troubleshooting#jobs-left-in-running-state](https://docs.cometbackup.com/latest/troubleshooting#jobs-left-in-running-state)

## Log shows "... Reindex Needed!"

- Recent updates to Comet will reduce this occurrence and need for troubleshooting this log message.
- Solution:
  - Complete explanation and solution here: [https://docs.cometbackup.com/latest/troubleshooting#error-found-x-packs-in-index-but-not-appearing-on-disk-reindex-needed](https://docs.cometbackup.com/latest/troubleshooting#error-found-x-packs-in-index-but-not-appearing-on-disk-reindex-needed)

## Log shows "&lt;packindex/xxxxxxxx&gt; says &lt;snapshot/yyyyyyyy&gt; depends on missing pack &lt;data/zzzzzzzz&gt;"

- Recent updates to Comet will reduce this occurrence and need for troubleshooting this log message.
- Solution:
  - Complete explanation and solution here: [https://docs.cometbackup.com/latest/troubleshooting#error-packindexpppppppp-says-snapshotssssssss-depends-on-missing-pack-datadddddddd-non-restorable](https://docs.cometbackup.com/latest/troubleshooting#error-packindexpppppppp-says-snapshotssssssss-depends-on-missing-pack-datadddddddd-non-restorable)

## Log shows "Cannot proceed - Locked by device"

- Recent updates to Comet will reduce this occurrence and need for troubleshooting this log message.
- Solution:
  - Complete explanation and solution here: [https://docs.cometbackup.com/latest/troubleshooting#error-cannot-proceed---locked-by-device-xxxxxxxx](https://docs.cometbackup.com/latest/troubleshooting#error-cannot-proceed---locked-by-device-xxxxxxxx)

## The client software won’t install on a Windows device

- Solution:
  - Ensure that the installer zip file is fully extracted first; or
  - Consider code-signing the software via the Settings page -> Branding: Client -> Code-signing; or
  - Consider installation-file anti-virus exclusions
- More in-depth discussion here: [https://docs.cometbackup.com/latest/troubleshooting#antivirus-detects-comet-backup-as-a-virus-or-malware](https://docs.cometbackup.com/latest/troubleshooting#antivirus-detects-comet-backup-as-a-virus-or-malware)

## Backup client has issues with connection, process/services, or UI

- Solution:
  - If connection issues, UI issues, etc, are proving difficult to resolve, then you may want to try a manual reinstallation of the client software as a potential quick solution. A simple reinstallation may resolve many issues by effectively resetting permissions, etc; or
  - Ensure that the client is updated to the latest version. Silently and remotely update all connected devices via: Accounts -> Bulk Updates -> New Campaign.
