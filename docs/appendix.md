---
title: Appendix
sidebar_position: 7
---

## Encryption and key management

_This section follows "Encryption" in the "Overview and Concepts" section._

![](./images/encryption-key-management-8b22cb7fbf3789ca3c903d2dfeb4b257.1281.png)

### Zero-knowledge ratchet

The user's password is used to derive two 192-bit keys (the "L" and "R" keys) via `PBKDF2-SHA512`, with hard-coded parameters for repeatable output.

- The L-key is used to log in to the Authentication Role server in place of the real password; the server stores only a `bcrypt(sha512)` hash of this L-key.
- The R-key never leaves the client, and is used to encrypt secret keys stored within the user's profile on the server.

This means that one password can be used for all client-side account operations, while preventing servers from uncovering client-only secrets.

### Storage Vault encryption keys

When Comet sets up a Storage Vault for the first time, it generates two high-entropy random keys (the 256-bit "A" and 128-bit "E" keys). All user data in the Storage Vault is stored encrypted with the A-key using AES-256 in CTR mode, and authenticated using Poly1305 in AEAD (encrypt-then-MAC) mode.

The permanent A-key is stored inside the Storage Vault, encrypted with the E-key. The E-key is then encrypted with the R-key and stored in the user's profile on the Authentication Role server. When a backup is performed, the client uses its password to derive the private R-key, to decrypt the E-key from the vault, to decrypt the A-key for data storage. This extra level of indirection enables some key rotation scenarios, as a new E-key can be generated without needing to re-encrypt all the data in the Storage Vault.

### Data location access keys

If the Storage Vault is for a Storage Role bucket, a high-entropy random 128-bit PSK is used to gate access to the bucket. The Storage Role server stores only a `bcrypt(sha512)` hash of this PSK. The client encrypts this PSK with the R-key and stores it in the user's profile on the Authentication Role server.

## Compatibility events

_This section follows "Backward Compatibility" in the "Overview and Concepts" section._

The following compatibility events have occurred:

| Version    | Details                                                                                                                            | Upgrade Compatible                                                                                                       | Downgrade Compatible                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.9.12    | The Comet Server job history database format was changed, to improve performance of finding jobs for individual users and Tenants. | Yes                                                                                                                      | Partial. When downgrading, you must either delete the `comet-jobs.db3` file or replace it with an older copy from your Server Self-Backup. The affected job logs will be unavailable, but backup jobs in the Storage Vault are unaffected. |
| 21.3.0     | The Comet Server job history database format was changed, to compress old job entries.                                             | Yes                                                                                                                      | Partial. When downgrading, you must either delete the `comet-jobs.db3` file or replace it with an older copy from your Server Self-Backup. The affected job logs will be unavailable, but backup jobs in the Storage Vault are unaffected. |
| 19.9.3     | The Comet Server job history database format was changed, to improve performance of writing job log data to disk.                  | Yes                                                                                                                      | Partial. When downgrading, you must either delete the `comet-jobs.db3` file or replace it with an older copy from your Server Self-Backup. The affected job logs will be unavailable, but backup jobs in the Storage Vault are unaffected. |
| 18.6.2     | A server-side encryption format changed for bucket access keys.                                                                    | Yes                                                                                                                      | Partial. Accessing the bucket with Comet 18.5.5 (or later 18.5.x) will convert the key format to the backward-compatible format                                                                                                            |
| 17.9.3     | A metadata format was enforced.                                                                                                    | Yes, but pre-existing Storage Vaults will not take advantage of the new features                                         | No. Storage Vaults created with newer versions of Comet cannot be used in old versions of Comet                                                                                                                                            |
| 17.6.1     | A compression format was added.                                                                                                    | Yes                                                                                                                      | Partial. If the new compression format was used, old versions of Comet will not be able to restore data                                                                                                                                    |
| 2.8.2 Beta | The encryption format changed.                                                                                                     | Yes. Accounts are automatically upgraded upon login                                                                      | No. Old versions of Comet will not understand secrets in the new format                                                                                                                                                                    |
| 2.3.0 Beta | The compression format changed.                                                                                                    | Yes. New versions of Comet can still read old backed-up data                                                             | No. Old versions of Comet cannot read newly backed-up data                                                                                                                                                                                 |
| 2.2.0 Beta | The license server address changed.                                                                                                | Yes                                                                                                                      | No. Old versions of Comet Server can no longer be used                                                                                                                                                                                     |
| 2.0.0 Beta | The Storage Vault format changed.                                                                                                  | Partial. Storage Vaults must be recreated                                                                                | No. Old versions of Comet are unable to use new Storage Vaults                                                                                                                                                                             |
| 1.7.0 Beta | The Storage Vault format changed.                                                                                                  | Yes. Comet will automatically upgrade Local Copy and Comet Server types, but S3 and SFTP types must be upgraded manually | No. Old versions of Comet are unable to use new Storage Vaults                                                                                                                                                                             |
| 1.0.0 Beta | Initial compatibility milestone                                                                                                    | Yes                                                                                                                      | No                                                                                                                                                                                                                                         |
| 0.?.? Beta | No compatibility guarantees made in either direction.                                                                              | n/a                                                                                                                      | n/a                                                                                                                                                                                                                                        |

## Importing backup settings from other products

Comet Backup supports importing settings from certain other third-party backup products.

In all cases, only user configuration settings are read from the other product.

- Existing backed-up data is not converted to Comet's format; you must back up the data again using Comet.
- Historical logs are not imported.

### Ahsay OBM/ACB 6.x or compatible

_Ahsay, OBM, and ACB are trademarks of Ahsay Systems Corporation Limited._

Comet can import settings from an installed version of Ahsay OBM/ACB 6.x, subject to the following notices and conditions:

- Ahsay backupsets are imported as Comet Protected Items.
  - Backupset types
    - File
      - Source selection/deselection is supported.
      - Macro selections (desktop, documents etc) are not supported.
      - Inclusion/exclusion filters are not supported.
    - MySQL
    - Microsoft SQL Server - The "All instances" option is not supported. Your Ahsay backupset must have selected specific instances for backup.
      Copy
    - Other backupset types are not supported.
  - Pre/post commands
    - Pre/post commands are imported as applying to the Protected Item, not to the Storage Vault nor the Schedule.
  - Retention policies
    - Basic retention policies (`DAYS`/`JOBS` -type) are supported.
    - Advanced retention policies will be treated as "keep forever".
  - Schedule
    - Daily, Weekly and Custom schedules are supported.
    - Monthly schedules for a specific day of the month are supported.
    - Monthly schedules for a variant day of the month (e.g. Second Tuesday, Last Weekday) are not supported.
  - "Extra Local Copy"
    - "Local Copy" will be imported as a new or existing Local Path Storage Vault in Comet.
    - The "Skip Offsite Backup" option is correctly imported.

### CrashPlan

_CrashPlan and Code42 are trademarks of Code42 Software, Inc._

Comet can import settings from an installed version of Code42 CrashPlan, subject to the following notices and conditions:

- CrashPlan backupsets are imported as Comet Protected Items.
  - Backupset types
    - File
      - Sources selection/deselection is supported.
      - Regular expression exclusions are supported.
  - Retention policies
    - CrashPlan and Comet employ fundamentally different retention systems. Comet makes a best-effort attempt to translate the CrashPlan retention policy into a set of Comet retention rules, with some caveats:
      - Comet uses a minimum retention period based on the schedule window.
      - CrashPlan retention for the last week will be interpreted as multiple daily policies for periods shorter than 24 hours.
      - CrashPlan retention for the last week will be interpreted as single or multiple weekly policies for periods greater than 24 hours, depending on the configured value.
      - Retention for larger time periods will be configured as single or multiple daily, weekly or monthly rules dependent on the configured value, populated out for periods of a week, three months, a year, and indefinitely.
      - Weekly retention policies are treated as one backup per week, on the first day of the week, for the specified number of weeks.
      - Monthly retention policies are treated as one backup per month, on the first day of the month, for the specified number of months.
      - Indefinite retention policies are implemented as one backup per month, on the first day of the month, for over a million years.
  - Schedule
    - CrashPlan and Comet employ fundamentally different scheduling systems. Comet translates a CrashPlan schedule to multiple schedule rules, with some caveats:
      - CrashPlan allows a number of very small schedule windows, down to a minute. For the sake of performance, Comet enforces a minimum schedule window of 30 minutes for imported schedules.
      - Comet will generate a schedule rule for each time that a CrashPlan backup would have run in its specified window(s).
      - The "Skip if already running" option is automatically enabled for imported schedules, to prevent overlapping backup with small schedule windows.
  - Local destinations
    - If any local destinations are configured for CrashPlan, Comet will automatically import these using the same location on disk, backing up to a subdirectory within the specified path.
    - The folder containing Comet's local vault data will be labelled with a unique ID. If it is necessary to identify which folder belongs to Comet, we recommend checking the modify date for the folder. The Comet data folder can also be distinguished by the format of the unique ID - CrashPlan uses a numerical ID for its folder, while Comet uses a hyphenated GUID with a mixture of numbers and letters.

### Other products

Not currently supported

## Migrating user data

It is possible to migrate user data to balance your storage requirements.

### Migrating server-side user data to a different volume

You can migrate user data in different ways.

#### Off-line server migration, without Spanning

1.  Stop Comet Server
2.  Move files to the new volume
3.  Update disk path in Comet Server's configuration file
4.  Start Comet Server

#### Gradual, on-line server migration, without Spanning

1.  Use rsync/robocopy/rclone/... to synchronize the current drive contents to the new drive.
2.  Repeat step #1 until there is very little data change in a single sync run
3.  Stop Comet Server
4.  Perform one more sync pass
5.  Update disk path in Comet Server's configuration file
6.  Start Comet Server
7.  Delete all content from the old disk volume

#### Gradual, on-line server migration with Spanning

If multiple volumes are Spanned together in the same Storage Role Comet Server, then you can move files freely. Comet Server will instantly recognize the changes, because it looks in all attached volumes when looking for a chunk.

1.  Configure Comet Server to Span between both the old and new volumes

- Newly uploaded data will be written in a balanced way to both volumes.

2.  Live migrate data from old volume to the new volume

- You can move data between the two volumes on-the-fly while Comet is running. You can even move data for an in-use Storage Vault. This is a safe operation.

3.  Stop Comet Server; move any remaining data that was written during step #2; disable the Spanning configuration; and then restart Comet Server

### Migrating user data to a different Comet Server

1.  Create a new bucket on a different Comet Server

- You can either manually create the bucket, or Request a bucket on a new target server

2.  Copy the file content to the new server
3.  Edit the user's profile in the Auth Role Comet Server to change the address, bucket, and bucket-key that it points to

- You should first ensure that this user is not running any backup jobs to the original server.
- You must take care to preserve the Encryption Key settings. The key absolutely must not change.

4.  Remove the file content from the original server

- You should first ensure that this user is not running any restore jobs from the original server.

For more information, see the [Seed Load Walkthrough](https://docs.cometbackup.com/latest/guides/guide-seedload-walkthrough).

### Migrating user data between Storage Vault types

All Storage Vault types (e.g. Comet Server, Local Copy, SFTP, Amazon S3 etc) use the same on-disk layout. It is possible to follow the above steps for "Migrating user data to a different Comet Server" even when either the old or new targets are not a Comet Server.

## Migrating Comet Server to a new location

It's possible to migrate your Comet Server to a new location. Migrating between two different operating systems won't cause any issues.

#### Migrate your original Comet Server to a new Comet Server location without the backup data:

1.  Install Comet Server at the new location, enable the Authentication Role and configure your new [storage location](https://docs.cometbackup.com/latest/installation/storage-configuration). It is possible to move the old storage data into the new storage location. This is covered in [Migrating user data](https://docs.cometbackup.com/latest/appendix#migrating-user-data). Ensure that only one server has Constellation enabled. Temporarily disable Constellation 'delete data'. This will help avoid inadvertent errors.
2.  Now, stop both your new Comet Server and your original Comet Server (via Comet Server Service Manager -> Service -> Stop)
3.  On the original Comet Server, open the configuration directory (e.g. "C:\\ProgramData\\Comet") and copy the contents of this directory to the same location in the new Comet Server, overwriting the same-named files. You can use a previously-created [Server Self-Backup](https://docs.cometbackup.com/latest/installation/comet-server-configuration#server-selfbackup) copy of these same files. The Server Self-Backup is interchangeable between Windows and Linux systems, if migrating between two different operating systems.
4.  'Relax' your serial number (located: [https://cometbackup.com/my_servers](https://cometbackup.com/my_servers))
5.  Verify your DNS records are configured correctly

#### If you also require your Storage Role migrated, it is as simple as replicating both your Authentication Role & Storage Role, verify your DNS records and relax the serial number.

1.  On the new Comet Server, enable the Authentication Role and Storage Role (point the Storage Role to the new storage location)
2.  On the original Comet Server, configure the Authentication Role replication / Storage Role Replication settings on the Settings page to point to the new Comet Server
3.  Once replicated, shutdown the original Comet Server
4.  Point the DNS records to your new Comet Server
5.  Relax your serial number (located: [https://cometbackup.com/my_servers](https://cometbackup.com/my_servers))
6.  Re-enable Constellation 'delete data' when satisfied that all roles are working correctly.

#### Things to consider after migration

If the new Comet Server's address is different from previously, you will need to ensure the existing devices are connecting to that new address. Either install the clients again to update the addresses, or edit the address field when logging in to the device.

![](./images/defaultserverURL-14ce2ad8d68be4388437b04aae4d9cbd.310.png)

Also, you will need to change the existing Storage Vaults address/URL. It's possible to change all of the Storage Vault addresses at once by doing the following:

Enable Advanced options.

![](./images/advancedoptions-7c7f23454188f91755f77b9e64041d32.170.png)

Go to the Users page and select "Bulk replace addresses" under the "Advanced" dropdown.

![](./images/bulkreplaceaddresses-170265d77d5067519f74d9abdf983931.338.png)

Enter in the current address the Storage Vaults are using in the first field and then enter the new address in the second field.

![](./images/bulkreplaceaddresseseg-016e292f872a28317373f28bd2610c2c.611.png)

## Updating Comet Server network address/URL considerations

If you are converting your Comet Server from a local environment to a live environment, or just updating the existing network address in general, there are a few considerations to keep in mind before updating the address.

This also includes changing the URL or address at which your client devices connect to your Comet Server.

### Bulk update Storage Vault addresses

If your Comet Server's Storage Role server address is going to be changed, you will need to update the address for where the data is sent to. On the Comet Server:

Enable Advanced options.

![](./images/advancedoptions-7c7f23454188f91755f77b9e64041d32.170.png)

Go to the Users page and select "Bulk replace addresses" under the "Advanced" dropdown.

![](./images/bulkreplaceaddresses-170265d77d5067519f74d9abdf983931.338.png)

Enter in the current address the Storage Vaults are using in the first field and then enter the new address in the second field.

![](./images/bulkreplaceaddresseseg-016e292f872a28317373f28bd2610c2c.611.png)

### Update the client login address

Unless you change the client device connection-address, devices won't know the new address, and will still attempt to connect using the old one. It's possible to perform a remote action to update the connection address, and should be performed _prior_ to updating the Comet Server's address.

![](./images/updateloginurl-9cde33415eff5f4839c0b8ed05395e32.993.png)

If you had already updated the Comet Server's address before doing this, then you can either:

Manually update the login address on the client device.

![](./images/defaultserverURL-14ce2ad8d68be4388437b04aae4d9cbd.310.png)

Or reinstall the backup client on the device. The new installation will set the login address to your current Comet Server's address.

You may want to also check the Settings page if you had set a `Default Server URL` for client login, and update it.

![](./images/defaultserverurlweb-124204bf2cea502e06c2a6d6feb26a6b.1049.png)

### Update Constellation settings

Any affected Constellation targets will need to be updated from the old address to the new.

![](./images/constellationtarget-472ca649648f1ea960e895c493f75359.609.png)

If you had enabled Constellation to automatically delete data, you may want to temporarily disable it first before you make any other changes, to avoid any potential data loss.

### Converting from a local test environment

If you are converting a local test environment to go live, don't forget to revoke any test devices you may no longer need, to avoid unnecessary charges from incurring.

### Also moving Comet Server to new hardware

See the [Migration documentation](https://docs.cometbackup.com/latest/appendix#migrating-comet-server-to-a-new-location)

### Updating the Comet Server address/URL

Now actually going about updating the Comet Server address - you can see the [Network documentation](https://docs.cometbackup.com/latest/installation/comet-server-configuration#network) for more details.

If you just wanted to use the free automatically-renewing SSL certificate, then the server must be listening on port 443, the domain name must be publicly accessible, and the DNS for the domain name must point to your specific Comet Server instance.

![](./images/networkautossl-c84a1ca97448982497e03aa5603e15ef.609.png)

## Reverse Proxy in front of Comet Server

It is possible to run a load balancer or a frontend proxy software in front of Comet Server. All Comet Server communication is performed over HTTP / HTTPS / Websockets, so applications such as `nginx`, `Apache`, `HAProxy`, `Traefik` or `Caddy` are all suitable for this purpose.

Using a load balancer or a frontend proxy software allows you to

- run multiple Comet Server instances on the same machine or IP
- run Comet Server alongside other HTTP websites or applications on the same machine or IP
- deny or allow IP address ranges (although Comet Server has some builtin functionality for this)

If you choose to do this, you should take the following precautions:

- ensure that the frontend proxy does not introduce additional buffering or timeouts that could interrupt the connection between Comet Backup and Comet Server
- ensure that the frontend proxy forwards the client's real IP address using the `X-Forwarded-For` header and that the `TrustXForwardedFor` field is set to `true` in the `cometd.cfg` file (_>= 20.12.0)_
  - This field is set to `false` by default for new and upgraded Comet Server installations
  - If the `TrustXForwardedFor` field is set to `true` while a reverse proxy is not being used, this may allow the customer to spoof any IP address, bypassing allowlist, throttling, and management features
  - If multiple reverse-proxies are chained, Comet Server trusts the left-most (client-origin) IP address in the compound `X-Forwarded-For` header
- ensure that Websocket traffic is proxied through correctly
  - If Websockets are not proxied through correctly, the live-connection functionality may be missing or unavailable, and Comet Backup devices may appear as "Offline" inside the Comet Server web interface
- ensure that no extra limits are placed on the file upload size. Comet may upload large blobs to a Comet Server Storage Role using HTTP POST.

Some actions in the Comet Server web interface, such as large changes made on the Settings page, result in restarting the Comet Server daemon. During this time, the Comet Server would be briefly unreachable. If there is no reverse proxy in place, web browsers such as Google Chrome will automatically retry to load the page and Comet Server will appear again after the restart completes in a few seconds. However if a reverse proxy such as nginx is used, the browser will see a 504 Gateway Error message and fail to automatically reload the page after a daemon restart. This is a cosmetic issue only and you can continue to access the Comet Server web interface by manually refreshing the web browser.

### nginx

The following configuration could be used as an example:

        # Increase timeouts    proxy_connect_timeout 3000;    proxy_send_timeout    3000;    proxy_read_timeout    3000;    client_body_timeout   3000;    proxy_buffering off;    # Allow websockets    proxy_http_version 1.1;    proxy_set_header Upgrade $http_upgrade;    proxy_set_header Connection "upgrade";    # Raise limit on file upload sizes    client_max_body_size 500M;    # Set the X-Forwarded-For header    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

Copy

By default, nginx has a limit of 1MB on file upload sizes. This will prevent backups from working to a Comet Server Storage Role server. You should set `client_max_body_size` to a high value inside a `http`, `server`, or `location` block.

### Apache

Apache requires the `mod_proxy_wstunnel` module to proxy Websocket traffic.

- Linux with `a2enmod` installed
  - Run `a2enmod proxy_wstunnel`
- Manually
  - Add `LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so` to Apache configuration file

The following configuration could be used as an example:

        # Allow websockets    RewriteEngine On    RewriteCond %{HTTP:Connection} Upgrade [NC]    RewriteCond %{HTTP:Upgrade} websocket [NC]    RewriteRule /(.*) ws://127.0.0.1:8060/$1 [P,L]    ProxyRequests off    # Configure the upstream HTTP target    <Location />        ProxyPass http://127.0.0.1:8060/        ProxyPassReverse http://127.0.0.1:8060/    </Location>

Copy

### HAProxy

`HAProxy` introduces additional network timeouts that may prevent live-connection websockets from staying online. Because an HTTPS handshake involves multiple network roundtrips, accidental disconnections may decrease performance. You can adjust HAProxy timeouts to prevent disconnecting long-running connections.

The following configuration could be used as an example:

        # Increase timeouts    timeout connect 30s    timeout client 120s    timeout http-keep-alive 120s    timeout http-request 120s    # Set the X-Forwarded-For header    option forwardfor

Copy

## Using Comet Backup behind a network proxy

Comet Backup can be used behind an HTTP or SOCKS proxy.

Proxy settings are controlled by environment variables named `HTTP_PROXY` and `HTTPS_PROXY` (case insensitive).

Multiple programs use this configuration method, so the environment variable may already be present for other software on the machine.

On Windows, the environment variable should be set systemwide, to ensure that any settings also apply to background services. You can do this either

- with the `setx` command, or
- in the GUI from `SystemPropertiesAdvanced.exe` \> "Environment Variables" button > "System variables" section

On Linux, environment variables can be set system-wide (e.g. in `/etc/environment` or `/etc/profile.d/my-custom-proxy.sh`), or for the `root` user running Comet Backup (e.g. in `/root/.profile`), or in your startup script for Comet Backup (e.g. in `/etc/rc.local`).

The `HTTP_PROXY` environment variable should be set to a string of the form `https://username:password@my.proxy.host.com/` or `http://my.proxy.host.com/` or `socks5://username:password@my.proxy.host.com/`. This matches the normal format on Linux; however some Windows applications write this variable without the protocol. Please ensure that the protocol is present.

Your proxy software must support websockets in order for Comet's live-connection functionality to work correctly.

### Troubleshooting "tls: oversized record received" error

The `tls: oversized record received` error may occur when making an HTTP proxy connection to an HTTPS proxy server (or possibly vice-versa). Please double-check the environment variable and the proxy server URL.

## Windows Event Log

Comet Backup logs all job messages to the Windows Event Log. The log content is identical to the job log content seen in the Comet Server log browser, or the Comet Backup history table, or the Comet Server API. This should allow you to check for errors and/or ensure that jobs are running on time, by monitoring the Windows Event Log.

However, please note that this only covers client-side jobs, that do actually run. e.g. because "Missed Backup" job entries are generated server-side, they won't appear in the client's event log. It is not feasible to use the Windows Event Log as a complete monitoring solution for your customer base.

The Comet Backup installer also logs some events, that can be used as a proxy for detecting software installation or upgrades.

### Event IDs

| Source          | Event ID | Description                                                                                                           | Available since |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------- | --------------- |
| backup-service  | _any_    | Messages about installing and starting the Elevator service, and the Delegate service (18.6.0 and later)              | -               |
| backup-tool.exe | 50       | Backup job started                                                                                                    | 18.3.8 or later |
| backup-tool.exe | 51       | Backup job finished                                                                                                   | 18.3.8 or later |
| backup-tool.exe | 52       | Backup job log message. The Event Log entry severity corresponds to the Comet log entry severity (Info/Warning/Error) | 18.3.8 or later |
| backup-tool.exe | 53       | Comet Backup installer has registered the `backup-tool.exe` Event Log source                                          | 18.3.8 or later |
| backup-tool.exe | 54       | Comet Backup uninstaller has de-registered the `backup-tool.exe` Event Log source                                     | 18.3.8 or later |
| backup-tool.exe | 55       | Message from the Comet Delegate service                                                                               | 18.6.0 or later |

## Suppressing Before / After command failures

When a command-line program displays some output, the output is either sent to `stdout` ("fd 1", for normal messages) or `stderr` ("fd 2", for error messages).

Comet will mark a Before/After command as a warning if there was content on `stderr`, or, if the command had a non-zero exit code.

If you are certain that the command cannot fail, you can

- redirect stderr messages to go to stdout instead, by adding `2>&1` to the end of your command
- override the command exit code, by adding to the end of your command
  - Windows: `&exit 0`
  - Linux and macOS: `; exit 0`

The above information is not Comet-specific; more information about `2>&1` and stdout redirection can be found online, e.g. [https://support.microsoft.com/en-nz/help/110930/redirecting-error-messages-from-command-prompt-stderr-stdout](https://support.microsoft.com/en-nz/help/110930/redirecting-error-messages-from-command-prompt-stderr-stdout) .

## Data validation

There are three types of integrity verification in Comet:

### Referential integrity

Referential integrity means that for each snapshot, all its matching chunks exist; that all the chunks are indexed; and so on. This is verified client-side every time the app runs a retention pass, so you should ensure that retention passes run successfully from time-to-time.

### Data file integrity at rest

Data file integrity ensures that each file in the Storage Vault is readable and has not been corrupted at rest (e.g. `hash mismatch` / `decrypt` errors).

Comet stores files inside the Storage Vault data location as opaque, encrypted, compressed files. The filenames are the SHA256 hash of the file content. Comet automatically verifies file integrity client-side, every time a file is accessed during backup and restore operations (i.e. non-exhaustively) by calculating the SHA256 hash of the content and comparing it to the filename.

Corruption of files at rest is a rare scenario; it's unlikely you need to worry about this, unless you are using local storage and you believe your disk drives are failing. However, for additional peace-of-mind, you can verify the integrity of the files on disk at any time, by comparing the filename to their SHA256 hash.

#### Example data validation commands

The following equivalent commands read all files in the current directory, take the SHA256 hash, and compare it to the filename.

These commands exclude the `config` file, as these are known to be safe for other reasons.

These commands do not exclude any other temporary files (e.g. `/tmp/` subdirectory, or `~`-named files) that may be used by some storage location types for temporary uploaded data. Such temporary files will almost certainly cause a hash mismatch, but do not interfere with normal backup or restore operations.

On Linux, you can use the following command:

    find . ! -name 'config' -type f -exec sha256sum '{}' \; | awk '{ sub("^.*/", "", $2) ; if ($1 == $2) { print $2,"ok" } else { print "[!!!]",$2,"MISMATCH",$1 } }'

Copy

On Windows, you can use the following Powershell (4.0 or later) command:

    Get-ChildItem -Recurse -File | Where-Object { $_.Name -ne "config" } | ForEach-Object {    $h = (Get-FileHash -Path $_.FullName -Algorithm SHA256)    if ($_.Name -eq $h.Hash) { echo "$($_.Name) ok"; } else { echo "[!!!] $($_.Name) MISMATCH $($h.Hash)"; }}

Copy

#### Cloud storage

Taking hash values of files in this way requires fully reading the file from the storage location. If the storage location is on cloud storage, this is equivalent to fully downloading the entire contents of the storage location. This may result in significant network traffic. In this case, we recommend relying on Comet's normal verification that happens automatically during backup- and restore- operations.

### Data file integrity at generation-time

It is possible that a malfunctioning Comet Backup client would generate bad data, and then save it into the Storage Vault with a valid hash and valid encryption. For instance, this could happen in some rare situations where the Comet Backup client is installed on a PC with malfunctioning RAM.

In this situation, Comet would try to run a future backup/restore job, load data from the vault, but fail to parse it with a `couldn't load tree [...] hash mismatch` error message or a `Load(<index/...>): Decode [...] invalid character \x00` error message.

In this situation, it is possible to recover the Storage Vault by removing all the corrupted data. The remaining data is restoreable. However, it's not possible to identify the corrupted data using the data validation commands above.

#### Data validation steps

Different methods are available to identify the corrupted files.

- Use the "Deep verify Vault contents" feature
  - This feature is available in Comet via the Comet Server web interface live connected device actions dialog when the "Advanced options" setting is enabled. It is not exposed to the client in the Comet Backup app.
  - This will cause the client to download parts of the Storage Vault and perform a deeper type of hash checking than is possible via the existing data validation steps. It should alert you to which data files are corrupt, and the Storage Vault can then be repaired following the existing documented steps.
  - The "deep verify" feature downloads only index/tree parts of the Storage Vault, and caches temporary files to reduce total network roundtrips.
- Files mentioned in error message
  - Data files (e.g. `couldn't load tree [...] hash mismatch` error message)
    - The `couldn't load tree` error message will also indicate the exact corrupted pack file, if possible.
    - You can then delete the file from the `/data/` subdirectory, and run a retention pass to validate the remaining content, as described below. This may assist with repairing the Storage Vault.
    - However, this only detects the corrupted directory trees that were immediately referenced by a running backup job; other past and future backup jobs may still be unrestorable.
  - Index files (e.g. `Load(<index/...>): Decode [...] invalid character \x00`)
    - The index files contain only non-essential metadata to accelerate performance. Index files can be safely regenerated via the "Rebuild indexes" option on a Storage Vault. This is a relatively fast operation.
  - Compared to the "Deep verify Vault contents" feature, repairing single files in this way does avoid the immediate bandwidth-intensive step of downloading the entire vault content; however, it is not a guarantee that all data in the Vault is safe. Use of this method should be coupled with a (bandwidth-equivalent) complete test restore.
- Files by modification date
  - New backup jobs only add additional files into the Storage Vault. Another possible way to repair the Storage Vault is to assume files in the Storage Vault are affected after a given point in time.
  - This is only an option if your Storage Vault type exposes file modification timestamps (e.g. local disk or SFTP; and some limited number of cloud storage providers)
  - Specifically
    1.  Ensure that no backup/restore/retention operations are currently running to the Storage Vault
    2.  The corrupted data was created by the job _prior_ to the one in which errors were first reported; Find the start time of this prior job
    3.  Delete all files in the Storage Vault with any modification time greater than when that job started
    4.  If you used the "Rebuild indexes" option or ran a retention pass since the errors began, the contents of the `/index/` directory may have been consolidated into fewer files. If there are no files in the `/index/` subdirectory, you should then initiate a "Rebuild indexes" operation
    5.  Initiate a retention pass afterward, to ensure referential integrity of the remaining files, as described below
- The other alternative is to start a new Storage Vault.

### Recovering from file corruption

If you encounter a `hash mismatch` error, a data file has been corrupted inside the Storage Vault. Data has been lost.

If the issue only occurred recently, it's highly likely that most backed-up data is safe, and that only recent backup jobs are affected.

Because Comet is a deduplicating backup engine, future backups may silently depend on this corrupted data. You should immediately take the following steps to re-establish data integrity of the remaining data in the Storage Vault:

1.  Identify and delete all corrupted files from the Storage Vault's data location
    - You can use the example data validation commands above to find all hash mismatches
2.  Run a retention pass for the Storage Vault
    - This will check referential integrity (as mentioned above)
    - The job will fail, with a number of warnings in the format
      - `<snapshot/ABCDEFGH> depends on missing [...]` or
      - `Packindex 'AAAA' for snapshot 'BBBB' refers to unknown pack 'CCCC', shouldn't happen`
3.  Delete snapshots that are missing content data
    - Delete files from the `/snapshots/` subdirectory in the Storage Vault's data location that match the corruption warnings from the backup job report
4.  Repeat step 2 until no issues occur

Some data has been lost, but by carefully removing the corrupted data and everything that references it, the remaining backup snapshots will all be restorable. Future backup jobs should be safe.

### Missing files from Storage Vault

Please take care to ensure that files do not go missing from the Storage Vault. The loss of any file within the Storage Vault compromises the integrity of your backup data. You are likely to be in a data-loss situation.

More specifically:

If there are missing files from the `snapshots` subdirectory, Comet will not know that there is a backup snapshot available to be restored. There is no solution for this, other than ensuring all the files are present. This is unfortunate, but should only have a limited impact.

If there are missing files from the `packindex` subdirectory, some operations will be slower until Comet runs an optimization pass during the next retention pass. This is not a significant problem.

If there are missing files from the `locks` subdirectory, Comet may perform a dangerous operation, such as deleting in-use data during a retention pass. This is potentially a significant problem.

If there are missing files from the `index` subdirectory, Comet will re-upload some data that it could have otherwise deduplicated. This is unfortunate, but should only have a limited impact. Excess data will be cleaned up by a future retention pass.

If there are missing files from the `keys` subdirectory, Comet will be entirely unable to access the Storage Vault. There is no solution for this, other than ensuring all the files are present. This could be a significant problem. However, because the files in this directory do not change often, it's very likely that their replication is up-to-date.

If there are missing files from the `data` subdirectory, Comet will be unable to restore some data. When a retention pass next runs, Comet should detect this problem, and alert you to which backup snapshots are unrecoverable. You can then delete the corresponding files from the `snapshots` subdirectory and continue on with what is left of the Storage Vault.

For further information about specific error messages, see [Recovering from Unsafe Unlock Operations](https://docs.cometbackup.com/latest/troubleshooting#recovering-from-unsafe-unlock-operations)

## Splitting a Storage Vault

It is possible to "split" a Storage Vault by cloning it, then deleting some jobs from each one.

This would be a preliminary step towards splitting one large Storage Vault into two smaller Storage Vaults. The cloned vault must use the same encryption material in order to access existing encrypted data, so this is not suitable as a protection mechanism.

This is an advanced process. Please take special care to avoid data loss.

1.  Prepare a location for the cloned Storage Vault
    - If the current Storage Vault is "Local Path", then make a new empty directory.
    - If the current Storage Vault is "Comet Server", then in Comet Server > Storage menu > "Storage Buckets" page, click "Add new".
2.  In Comet Backup, create a new "Custom" Storage Vault using these details
3.  Copy all files from the existing data location to the new data location, so that the backup data exists in both places
4.  Copy the encryption key
    - In Comet Server, from your user menu, enable "Advanced Options". Then on the user's detail page, choose Actions > Edit Raw Profile. Scroll to the "Destinations" section.
    - Find the original Storage Vault by name;
      - copy the `EncryptionKeyEncryptionMethod`, `EncryptedEncryptionKey`, and `RepoInitTimestamp` fields
    - Find the new Storage Vault by name;
      - paste the `EncryptionKeyEncryptionMethod`, `EncryptedEncryptionKey`, and `RepoInitTimestamp` fields
    - Save changes.

You should then have two cloned Storage Vaults, but have now become independent copies.

In Comet Backup, you should ensure that you can browse files to restore from both of these Storage Vaults.

Then it's possible to start work on the cleanup process:

- You can change some schedules to back up to one Storage Vault and not the other
- You can also save space by deleting some old backup snapshots in one of the Storage Vaults, either by
  - using the retention features
    - at the Protected Item level, you can set a zero-job retention for one of the Storage Vaults to clear out all jobs
  - or individually
    - in the Comet Backup > click Restore > right-click snapshot > choose "delete" from the menu.

## Command-line control of Comet Backup

In Comet 21.9.10 and later, it is possible to control the installed Comet Backup application from the command-line. This may be helpful for some remote SSH servers and Windows Server Core installations. The available set of commands is currently limited; full control should be achieved via the desktop app interface, or via the web interface, or via the Comet Server API.

The following commands are possible:

    Usage: backup-tool COMMANDCommands:    version        Display the application version    info           Display information about the client (since 22.3.0)    login          Control the service login status    help           Display this message

Copy

The `login` command contains subcommands for manipulating the login state of the background service (`backup.delegate`):

    Usage: backup-tool login COMMANDCommands:    status         Display the login status of the background service    prompt         Interactively prompt for service login credentials    disconnect     Log out of the application    help           Display this message

Copy

The `backup-tool login status` command returns one of the following status texts:

| Message                                                | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Logged out (0)`                                       | No credentials are stored. The application is not logged in.                                                                                                                                                                                                                                                                                                                                                                                                |
| `Logged in, locked (1)`                                | The application is logged in, and background jobs will run on schedule, but a password is required to open the user interface.                                                                                                                                                                                                                                                                                                                              |
| `Logged in, unlocked (2)`                              | The application is logged in and no password is required to open the user interface.                                                                                                                                                                                                                                                                                                                                                                        |
| `Connection error (3)`                                 | The background service has stored credentials, and is running, but has been unable to communicate with the Comet Server since starting. Note that a temporary connection error may not always produce this status.                                                                                                                                                                                                                                          |
| `Unregistered device for the supplied credentials (4)` | The background service has stored credentials, and is running, but this device is no longer registered in the target account. This may be caused by hardware change or if the device was explicitly revoked. You can resolve this issue by re-registering the device via the user interface or via the `backup-tool login prompt` command. Note that a temporary error may not always produce this status if the background service was previously running. |

The `info` command contains subcommands for extracting client information from the background service (`backup.delegate`)

    Usage: backup-tool info COMMANDCommands:    device-id      Display the device id    help           Display this message

Copy

## Applying hotfixes

When you report an issue to Comet staff, every attempt is made to reproduce the issue in-house. Once the issue is reproduced, we can confirm a fix internally.

Sometimes an issue depends on specific environment details that are infeasible to recreate. In these situations, support staff may ask you to run a "hotfix" version of Comet that contains experimental changes to test a potential resolution for your issue.

Hotfixes normally come in the form of a replacement `backup-tool` file.

### Applying backup-tool.exe hotfixes on Windows

1.  Exit the Comet Backup app from the system tray
2.  Stop Comet's background services
    - Use `services.msc` or Task Manager to stop the "Comet Backup (delegate service)" and "Comet Backup (elevator service)" services
3.  Replace files inside `C:\Program Files\Comet Backup\backup-tool.exe` with updated version
4.  Restart all stopped background services
5.  Restart the Comet Backup app

### Applying backup-tool hotfixes on macOS

1.  Exit the Comet Backup app from the system taskbar
2.  Stop Comet's background services
    - `sudo launchctl unload /Library/LaunchDaemons/backup.delegate.plist`
    - `sudo launchctl unload /Library/LaunchDaemons/backup.elevator.plist`
3.  Replace files inside `/Applications/Comet Backup.app/Contents/MacOS/backup-tool` with updated version
4.  Restart all stopped background services
    - `sudo launchctl load /Library/LaunchDaemons/backup.elevator.plist`
    - `sudo launchctl load /Library/LaunchDaemons/backup.delegate.plist`
5.  Restart the Comet Backup app

## Changing Comet's temporary directory

Comet uses the local system's temporary directory for some cache files while the backup job is running. The needed storage size is small; but on some devices (e.g. NAS with fixed-size `/tmp/` mounts) the system's default temporary directory may be insufficient.

On Linux, you can change the temporary directory Comet uses by adding `export TMPDIR=/some/other/path/` in your startup script (e.g. normally `/opt/CometBackup/backup-daemon-start.sh` or any custom rc.local file). However, any changes to the `backup-daemon-start.sh` file will be overwritten by Comet software updates.

On macOS, you can change the temporary directory Comet uses by adding an `EnvironmentVariables` section to the `backup.delegate.plist` LaunchDaemon. However, any changes to the `.plist` file will be overwritten by Comet software updates.

On Windows, you can change the temporary directory Comet uses by

- setting the `%TMP%` or `%TEMP%` environment variables for the `NT SERVICE\backup.delegate` user account; or
- modifying the `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\backup.delegate\Parameters\AppEnvironmentExtra` registry key to add `TEMP=C:\some\path` on a new line, and, restarting the `backup.delegate` service

## Seemingly unrealistically-high backup speed

The speed displayed in the Comet Backup desktop app is not the upload speed; it is the overall backup speed.

The overall backup speed:

- may be bottlenecked by the internet upload speed; or
- may exceed 100MB/s if Comet is reading from the disk that fast, and all data already exists in the Storage Vault and therefore does not need to be reuploaded; or
- may exceed 1 GB/sec if Comet is able to entirely skip backing up GBs of data that is already uploaded (when the `Rescan unchanged files` option is disabled).

## The Experimental Options system

If you have been offered the opportunity to participate in an experimental program, you may have been supplied a code to enable experimental software functionality. These codes can be used via the Experimental Options system in Comet. This system is a way for Comet to pre-release certain functionality before it becomes generally available, while still relying on existing deployment and distribution infrastructure (e.g. the Voyager software release track).

To use a code:

- Comet Server
  - in `cometd.cfg`, add `"ExperimentalOptions": ["YOUR_OPTION_CODE"],` at the top level of the JSON document (e.g. line 2)
- Comet Backup on Windows
  1.  Open Registry Editor (`regedit.exe`)
  2.  Browse to the `HKEY_LOCAL_MACHINE\Software\backup-tool` folder key, creating it if it does not already exist
  3.  Create a "String Value" with name `ExperimentalOptions` value `YOUR_OPTION_CODE`
- Comet Backup on macOS
  1.  Exit the Comet Backup app from the menu bar
  2.  From a terminal, run `cd "/Applications/Comet Backup/Contents/MacOS" ; ./backup-interface --experimental-options YOUR_OPTION_CODE`

## Registry keys on Windows

Comet Backup on Windows uses the registry to store some settings and configuration options.

As of Comet 20.11.0 "Io", the following registry keys are used:

- `HKLM\SYSTEM\CurrentControlSet\Services\backup.delegate`
  - Settings for installed "Comet Backup (delegate service)" service
- `HKLM\SYSTEM\CurrentControlSet\Services\backup.elevator`
  - Settings for installed "Comet Backup (elevator service)" service
- `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\backup-tool`
  - Registering the software uninstall program with Windows
- `HKLM\SOFTWARE\backup-tool`
  - Main application settings
  - `DeviceIdentificationID`
    - This is a copy of Comet's device ID. You may read this key programmatically from an external system to help correlate the current device with Comet's API. Any changes to this key will be overwritten by Comet Backup when the background services start up.
  - `DeviceIdentificationEntropy`
    - This is a diagnostic feature to mix additional data in to the generated device ID, to help separate multiple devices that are being incorrectly detected as the same device. For more information, see ["Multiple devices are detected as being the same device"](https://docs.cometbackup.com/latest/troubleshooting#multiple-devices-are-detected-as-being-the-same-device).
  - `DeviceIdentificationHardwareIDOverride`
    - This is a diagnostic feature to forcibly reassign a device's ID. Misuse of this feature will cause problems with job scheduling and billing.
  - `ExperimentalOptions`
  - `InstallDirectory`
    - This field shows where the Comet Backup software is installed. This can be used to reliably locate the Comet Backup installation directory when custom rebranded installation directories are used.
  - `InstallerLanguage`
    - This field shows what language was selected when Comet Backup was installed, using Windows language codes (e.g. `1033` for `en_US`).
  - `Shortcuts` _(>= 20.9.6)_
    - This field controls whether the installer will create desktop shortcuts. You can disable creating desktop shortcuts by either (A) pre-filling this value with `DWORD(0)` before running the Comet Backup installer, or (B) passing the `/SHORTCUT="disable"` flag to the Comet Backup silent installer. For more information, see [the silent installation documentation](https://docs.cometbackup.com/latest/installation/comet-backup-installation#installation).
  - `TrayIcon` _(>= 20.9.8)_
    - This field controls whether the installer will launch the system tray icon after installation. You can disable launching the system tray icon after installation by either (A) pre-filling this value with `DWORD(0)` before running the Comet Backup installer, or (B) passing the `/TRAYICON="disable"` flag to the Comet Backup silent installer. For more information, see [the silent installation documentation](https://docs.cometbackup.com/latest/installation/comet-backup-installation#installation).
  - `USBRecoveryMediaLastSettings` _(>= 20.12.0)_
    - This field contains the last successful configuration used for the USB Recovery Media, in JSON format. If this field is present, the configuration will be loaded automatically when the user next goes to create a USB Recovery Media from inside the Comet Backup desktop app.
- `{backup.delegate service user account's HKCU}\SOFTWARE\backup-tool`
  - The following registry keys are stored in the registry hive belonging to the user account of the `backup.delegate` service.
    - If this service is running as `LOCAL SYSTEM`, you may find it under `HKEY_USERS\S-1-5-18\SOFTWARE\backup-tool` key.
    - If this service is running as the limited-permission `NT SERVICE\backup.delegate` user account, you may find it under the `HKEY_USERS` subkey corresponding to the SID of this virtual service account.
  - `config` _(>= 21.6.3)_
    - This encrypted field stores Comet's username and password to automatically log in to the software.

## Reducing size of log files

The default retention period for job logs is 90 days, and is configured via: Settings page -> Authentication Role -> Properties. Comet Server allows unlimited retention of job logs, if desired. Over time, this can have an unwanted effect of the storage space in the host machine, and it can affect email report sending, if, for example, the Server tries to attach huge summary reports.

To change the retention period from a large value, eg 'unlimited' to the default 90 days, then you will need to to make a small change to the Comet Server config to force a resizing of the jobs database. Please see here: [https://docs.cometbackup.com/latest/installation/comet-server-configuration#internal-database-integrity-checks](https://docs.cometbackup.com/latest/installation/comet-server-configuration#internal-database-integrity-checks)

Open the Comet Server Service Manager -> Service -> Stop Configuration -> Edit Configuration File Find the section :

        "AuthenticationRole": {        "RoleEnabled": true,        "DatabaseCheckLevel": 0,

Copy

Change it to:

        "AuthenticationRole": {        "RoleEnabled": true,        "DatabaseCheckLevel": 5,

Copy

Save, Restart the Service. Allow an amount of time for the resizing to complete (it has to check 68GB!) Then undo the change to the 'DatabaseCheckLevel' parameter.

## Chunking compared to other algorithms

_This section follows the [Comet Chunking Overview](https://docs.cometbackup.com/latest/comet-chunking-overview) page._

Comet always uses its Chunking algorithm to process the backup data. Comet was developed to use this algorithm because it has the best available properties. You can compare different market backup products by which algorithm they use.

| Feature                       | Chunking         | Always full <br/>(e.g. tape rotation) | File versions     | Full + diff chain <br/>(with periodic reupload) | Full + diff chain <br/>(with server-side synthetic rollup) |
| ----------------------------- | ---------------- | ------------------------------------- | ----------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| Backup                        | ✔                | ✔                                     | ✔                 | ✔                                               | ✔                                                          |
| Incremental                   | ✔                | ❌                                    | ⚠ File-level only | ✔                                               | ✔                                                          |
| Incremental forever           | ✔                | ❌                                    | ✔                 | ❌                                              | ✔ With high IOPS load                                      |
| Supports cloud storage        | ✔                | ✔                                     | ✔                 | ✔                                               | ❌ Requires complete redownload/reupload                   |
| Supports compression          | ✔                | ✔                                     | ✔                 | ✔                                               | ✔                                                          |
| Supports encryption           | ✔                | ✔                                     | ✔                 | ✔                                               | ❌ With server trust                                       |
| Storage efficiency            | ✔ High           | ❌❌ Very low                         | ❌ Low            | ⚠ Must store multiple full archives             | ✔ High                                                     |
| Restore performance           | ✔ Fast, constant | ✔ Fast, constant                      | ✔ Fast, constant  | ❌ Fast head, slow tail                         | ❌ Fast head, slow tail                                    |
| Retention cleanup performance | ✔ Good           | ✔✔ Best (overwrite)                   | ✔ Good            | ⚠ Fast, but requires additional storage         | ❌ Slow, requires rollup                                   |
| Duplicate file consolidation  | ✔ Perfect        | ⚠ With long-range solid compression   | ❌                | ⚠ With extra scan                               | ⚠ With extra scan                                          |
| Block deduplication           | ✔                | ⚠ With long-range solid compression   | ❌                | ❌                                              | ❌                                                         |
| Renamed file detection        | ✔ Perfect        | ❌ N/A                                | ❌                | ⚠ With extra scan                               | ⚠ With extra scan                                          |

One way to think about Chunking is that it always creates a full backup job that is deduplicated against the previous backup job. This approach has all the restore performance characteristics of taking full backup jobs, with all the storage- and processing-efficiency characteristics of incremental backup jobs.
