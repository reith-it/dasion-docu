---
title: Comet Server Configuration
sidebar_position: 2
---

# Comet Server configuration

## Overview

Comet Server can be configured either via the Settings page, or by editing the configuration file directly.

This guide will include screenshots of the Settings page where appropriate, and also include references to the configuration file.

### Settings page

You can configure Comet Server via the **Settings page**.

You can access the Settings page by logging in to the Comet Server web interface, then clicking the **Settings** landing page button or menu item in the **Server** menu.

### Configuration file

As an alternative to the Settings page, it is possible to edit the Comet Server's configuration via the `cometd.cfg` file. You can edit this file if you are experiencing any issues accessing the Comet Server web interface.

#### File validation and access

The configuration file is in JSON format. Any changes made to this file must be valid JSON syntax. This mostly boils down to escaping backslash characters in text strings - wherever you intend for a backslash (`\` ) character to appear, please use two backslashes (`\\`) instead.

The Comet Server application may overwrite any changes to the `cometd.cfg` file, unless it is stopped first. After making changes, you should then restart the server software following the instructions in the previous "Install the server application" section.

On Windows, if the application has been installed in the Program Files directory, then it may be necessary to run the editor as Administrator in order to save changes to the file. On Linux, the file may be owned by the `root` or `cometd` users, and it may be necessary to run the editor as a different user in order to save changes to the file.

#### Windows

On Windows, Comet Server Service Manager includes a built-in configuration file editor that

- automatically checks for valid JSON syntax, and
- ensures that all Administrator user operations are handled correctly.

We would recommend using the Comet Server Service Manager feature to edit the `cometd.cfg` file on Windows.

## Serial number

Enter your serial number.

![img2](./images/img2.png)

In `cometd.cfg`, this field can be set in the `License` section > `SerialNumber` property.

- See also [Licensing](https://docs.cometbackup.com/latest/application-architecture#licensing)

## Server branding

You can configure the appearance of the Comet Server web interface.

![img3](./images/img3.png)

The top-left section of the Comet Server can be configured to display either a Comet brand logo, custom text, or a custom image.

In `cometd.cfg`,

- the `Branding` section contains properties which can be used to modify the appearance of the Comet Server's built-in web interface.
- the `BrandName` property sets the text displayed in the top-left corner.
- if the `LogoImage` property is set to the path to an image on the local filesystem, this logo image will be displayed replacing the logo text

Additionally you can change the [**Comet Client Branding**](https://docs.cometbackup.com/latest/installation/comet-server-configuration#comet-client-branding).

## Email

Comet Server can be configured to send email reports. To use this functionality, you should configure how email is sent.

![img4](./images/img4.png)

You should set the "Send as" properties to configure how email appears to the recipient.

In `cometd.cfg`, these properties can be set in the `Email` section > `FromEmail` and `FromName` properties.

### Delivery method

You can choose to send email via one of four options:

#### None (Do not send email)

Select this option to disable sending email from the Comet Server.

The Comet Server will be unable to send email. You can use this option if you want to disable all outbound email from a Comet Server.

In `cometd.cfg`, this option can be set in the `Email` section > set the `Mode` property to `""` (empty string).

#### MX Direct

MX Direct allows you to send email from this Comet Server without needing to configure a custom SMTP server. However, there is a greater chance of the email being discarded as spam. For more information, please see the "Failed email delivery with MX Direct" section in the Troubleshooting document.

In `cometd.cfg`, this option can be set in the `Email` section > set the `Mode` property to `"builtin"`.

#### SMTP Server

If this option is enabled, Comet will send email via an SMTP server.

The following options should be configured:

- Deliver via: SMTP Server
- Send as (display name):
- Send as (email):
- SMTP server address:
- SMTP server port:
- Username:
- Password:
- Security: one of "SSL/TLS" (default port 465), or "STARTTLS" (default port 587), or "Plain" (default port 25)
- Option to accept invalid SSL certificate from the remote SMTP server
  - You should leave this option unchecked. However, if you encounter errors, you may choose to enable it.
  - In comparison to how SSL certificates are used for HTTPS, it is surprisingly common for SMTP servers to use an invalid SSL certificate.

#### Gmail account

If this option is enabled, Comet will send email via a Gmail account. Internally, this uses known configuration information for Gmail's SMTP server.

The following options should be configured:

- Deliver via: Gmail account
- Send as (display name):
- Email address: [example@gmail.com](mailto:example@gmail.com)
- Password: Enter your Gmail password

##### Gmail accounts with two factor authentication

If you are using two factor authentication for your email account then you will need to create a Gmail Application-Specific password or the email will not work.

Log into your Google account and visit your [App passwords](https://security.google.com/settings/security/apppasswords) page. You may be asked to sign in to your Google account.

Click **Select app** and select **Mail**. Click **Select device** and select **Other**.

![](./images/img5.png)

Type in the name of the device (Comet Server) and click **Generate**.

![](./images/img6.png)

You will be given a password which you will use when setting up the Gmail account with Comet.

##### Allow less secure apps

If your Gmail is not working with Comet then you will have to enable the "Allow less secure apps" setting.

Log into your Google account and open the [security settings](https://myaccount.google.com/security).

![](./images/img7.png)

Scroll down until you see **Allow less secure apps** and turn it **ON**.

![](./images/img8.png)

## Network

Configure which network interfaces and URLs the Comet Server will be accessible on.

![](./images/img9.png)

The Comet Server can listen on multiple addresses, ports, and interfaces.

If you are updating an existing Comet Server's network address, also see [Updating Comet Server Network Address/URL Considerations](https://docs.cometbackup.com/latest/appendix#updating-comet-server-network-addressurl-considerations) documentation.

### Change host/port, or use multiple ports

By default, the Comet Server listens for connections on 127.0.0.1 port 8060. It is expected that this would be changed to e.g. port 80 or 443. Once the hostname and port are configured for the first time, they should be kept the same so that any installed client software will still be able to log in.

In `cometd.cfg`, each listener is configured with an object under the `ListenAddresses` section. Each object entry in the `ListenAddresses` section has (at minimum) a `ListenAddress` property, which should be a text string in the format `ip:port`.

Comet Server supports binding to an IPv6 address. You may need to enter IPv6 bind addresses using square-bracket syntax (e.g. `[0000:1111::2222]`).

### Configure SSL Certificate

Configuring an SSL certificate is very strongly recommended to improve security, as malicious network operators are no longer able to intercept passwords.

Using an SSL certificate with Comet Server also increases performance. The server will only negotiate an HTTP/2 pipelined connection if an SSL certificate is configured. This significantly improves TCP utilization.

In addition to this, some web browsers will show a warning

- if the login page is not protected by SSL (e.g. Chrome 56, released January 2017), or
- if the website is not protected by SSL (e.g. Chrome 68, released in July 2018).

![](./images/img10.png)
![](./images/img11.png)

#### Use an existing SSL certificate

Comet Server supports using an existing SSL certificate in either X.509 (PEM) or PKCS12 file format.

Self-signed certificates are supported, however, you should consider using a free certificate from Let's Encrypt as described below.

In `cometd.cfg`, in one object within the `ListenAddresses` section, change the `ListenAddress` property to use the port 443.

Comet takes SSL certificates in

- X.509 (PEM) file format
  - usually has a `*.crt`, `*.cer`, `*.pem`, or `*.key` file extension
  - The X.509 format is a plain-text format. You can inspect the files with a plain-text editor, like Notepad or Nano. The certificate file should start with the text `-----BEGIN CERTIFICATE-----`. The key file should start with the text `-----BEGIN PRIVATE KEY-----`.
- PKCS12 file format
  - usually has a `*.pfx`, `*.p12` file extension

Comet Server does not support other file formats for SSL certificates. If your SSL certificate is in another file format (e.g. if it has a `*.der`, `*.pks`, `*.jks`, `*.p7b`, or `*.p7c` extension), it should be converted to X.509 or PKCS12 format first before using it with Comet Server.

##### Existing X.509 (PEM) certificate

- Set the new `SSLCertPath` property, to be a path to a local certificate file (or certificate with chain). The certificate should be in X.509 (PEM) format.
  - If you have a single combined .crt file containing both certificate and intermediate certificates, use it with this `SSLCertPath` option and do not use the `SSLIntermediate` option.
- Set the new `SSLIntermediate` property, to be a path to a local file containing the intermediate certificate (or chain thereof) in X.509 (PEM) format.
  - This automatically produces a chain containing your main certificate and the intermediate certificate.
- Set the new `SSLCertKey` property, to be a path to a local certificate key file. The key file should be in X.509 (PEM) format and should not be encrypted.

##### Existing PKCS12 certificate

- `SSLPfxPath`: The path to the PKCS12 file
- `SSLPfxPassword`: The password to decrypt the PKCS12 file

##### Troubleshooting

Please check the Comet Server logs for more information.

Once your Comet Server is functional on the HTTPS address, we recommend using the third-party website [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/) to validate your SSL configuration for any hidden issues.

_"tls: failed to parse private key" or "tls: failed to find any PEM data in key input" errors_

This error message can mean that the key file is either encrypted, or, in the wrong format.

Open the file with a plain-text editor, like Notepad or Nano:

- If the file contains unreadable characters, it is in the wrong file format. You should convert it to X.509 (PEM) format before using it with Comet.
- If the file contains readable characters, but it starts with `-----BEGIN ENCRYPTED PRIVATE KEY-----`, then the encryption must be removed before using it with Comet.

#### Use a free, automatically-renewing SSL certificate

Comet Server integrates [Let's Encrypt](https://letsencrypt.org/) support, allowing you to receive a free valid SSL certificate for the Comet Server. The certificate is trusted by all major web browsers, it will be renewed automatically, and requires no intervention from the server administrator. The only requirements for this feature are

- The server must be listening on port 443; and
- _(prior to Comet 19.3.8)_ the server must be able to listen to port 80 if necessary; and
- the domain name must be publicly accessible, and the DNS for the domain name must point to this specific Comet Server instance.

In order to enable this feature, in the configuration file, make the following changes to your object entry under the `ListenAddresses` key;

- Set the `ListenAddress` property to `:443`
  - You may specify a specific IP address (`ip:443`) if necessary. If your server is behind NAT, you should specify the LAN address.
- Set the new `AutoSSLDomains` property to a comma-separated list of domain names for which the SSL certificate should be valid.

```txt
For example:
"ListenAddresses": [
    {
        "ListenAddress": ":443",

        "AutoSSLDomains": "example.com"
    }
]
```

##### Troubleshooting[​]

Please check the Comet Server logs for more information.

The Comet Server must be able to access `letsencrypt.org` in order to issue the SSL certificate.

_Provider downtime_

You can check the status of the Let's Encrypt service at [https://letsencrypt.status.io/](https://letsencrypt.status.io/) .

_Rate limits_

The SSL certificate provider has rate limits on certificate issuances.

- To avoid reissuing the same certificate every time the Comet Server is restarted, Comet will automatically cache the generated SSL certificate.
- If you modify your SSL configuration very frequently, you may encounter a rate limit from the SSL certificate provider, preventing the SSL certificates from being generated.
- Current rate limits can be seen on [https://letsencrypt.org/docs/rate-limits/](https://letsencrypt.org/docs/rate-limits/) .

_Error "Can't supply TLS certificate for domain XYZ: acme/autocert: host not configured"_

Or

_Error "Request on XYZ cannot be satisfied by any configured SSL certificate: acme/autocert: host "XYZ" not configured in HostWhitelist_

When Let's Encrypt is used, the Comet Server associates your domain name with the valid SSL certificate.

However, if someone tries to connect to the server using `https:// {direct IP}` or `https:// {wrong domain name}` there is a problem as Comet does not have a valid certificate for the request. Comet Server prefers to drop the connection rather than serve a mismatched certificate.

If you see this error message including a wrong domain name:

- There is a misconfiguration. Either a client is unintentionally connecting using the wrong domain name, or, you have misconfigured Let's Encrypt to not mention a domain name that should be included.
- A researcher may be scanning the entire IPv4 internet using the Reverse DNS (RDNS) name of your server. It's possible that the RDNS name is out of date compared to the expected domain name for accessing this server.

If you see this error message including an IP address:

- It's possible that someone tried to connect to your server on `https:// {direct IP}`. At the time of writing, it is not possible to receive a Let's Encrypt certificate for a bare IPv4 address.
- A researcher may be scanning the entire IPv4 internet, and connecting to the open `:443` port using the IP address of your server.

#### Enabling HTTP to HTTPS redirection

Comet Server allows you to add a Listener on multiple IP/port pairs. Each IP/port pair that you enter will allow you to access the Comet Server web interface on that interface.

Currently (July 2021 and earlier), if you enter a plain domain name (i.e. `example.com` without HTTP/HTTPS or port) into a web browser, the domain will be resolved using HTTP on port 80. [This may change in the future](https://blog.chromium.org/2021/03/a-safer-default-for-navigation-https.html), but the practical reality of the internet today is that it is a general requirement to listen for HTTP requests on port 80 and automatically redirect them to HTTPS on port 443.

Comet has a built-in, automatic feature for redirecting HTTP to HTTPS. If you have a listener configured for port 443 and _no_ listener on port 80 for the same IP address, Comet Server will automatically listen on port 80 and redirect traffic to port 443.

You can see this behaviour in Comet Server's log file around when Comet Server starts up: `Listening on interface '0.0.0.0:80' (redirecting)...`. This text suffix is displayed as `secure` (HTTPS serving the Comet Server web interface), `insecure` (HTTP serving the Comet Server web interface) or `redirecting` (HTTP serving a HTTPS redirect).

#### Customizing the HTTPS security levels

Comet automatically chooses an HTTPS security level. In current (21.6.x) versions of Comet, this is TLS 1.2 or TLS 1.3, with a certain set of ciphers, and no HSTS (HTTP Strict Transport Security). This configuration is sufficient to get an "A" grade on the Qualys SSLLabs test and retains a high level of browser compatibility. Future versions of Comet may choose different HTTPS security settings as the threat landscape evolves. Past versions of Comet may use weaker HTTPS settings.

No customization is available for the HTTPS security level. If you want to customize the HTTPS security level, to use a different version of TLS, to configure the ciphersuites, or to enable HSTS (HTTP Strict Transport Security) headers, you should configure a reverse proxy in front of Comet Server to terminate TLS and forward to Comet Server over plain HTTP. For more information about this, please see the [Reverse Proxy](https://docs.cometbackup.com/latest/appendix#reverse-proxy-in-front-of-comet-server) section,

### IP rate limiting

Comet Server supports IP-based rate limiting. This reduces the bandwidth for the entire Comet Server.

To use this feature, follow these example changes to the `cometd.cfg` file:

```txt
"IPRateLimit": {
    "Rules": [
        {
            "MatchRegex": ".*",

            "BytesPerSecond":1048576
        }
    ]
},
```

You can configure multiple rules. Each rule creates a rate-limiting domain. Incoming requests are matched against a domain, and the domain is limited as a whole. Incoming requests will be assigned to the first rate-limiting domain that matches.

Rate limits apply separately to ingress and egress traffic (e.g. a 10 MB/s limit will allow simultaneous 10 MB/s upload and 10 MB/s download).

## Session Options

![](./images/img12.png)

Choose how long to stay logged into the Comet Server. The default session timeout is 30 minutes and the maximum time is 48 hours (2880 minutes).

## Admin accounts

![](./images/img13.png)

![](./images/img14.png)

In `cometd.cfg`, each object entry in the `AdminUsers` section represents a user who can log in to the Comet Server interface.

### Username

There are no character nor length restrictions on administrator usernames.

Usernames are case-sensitive.

### Password

There are no character nor length restrictions on administrator passwords.

#### Change or reset administrator password

You can reset the administrator password by clicking the 'Reset' button.

In `cometd.cfg`,

1.  Find the object entry for the user in question under the `AdminUsers` section.
2.  Change the `PasswordFormat` value to 0 (zero).
3.  Change the `Password` field to the desired password.
4.  The password will be hashed and encrypted after first login.

### Allow login via

Comet Server supports two-factor authentication for administrators. For more information, please see the [Configure two-factor authentication](https://docs.cometbackup.com/latest/installation/comet-server-usage#configure-twofactor-authentication) section in the [Comet Server usage](https://docs.cometbackup.com/latest/installation/comet-server-usage#comet-server-usage) document.

You can configure which sets of information are sufficient in order to log in to the Comet Server:

- **Password alone**: if this option is checked, the password alone is sufficient to log in to the Comet Server. If you are enabling two-factor support, this option should normally be disabled.
- **Password and TOTP together**: if this option is checked, the combination of password + TOTP code will allow the administrator to log in to the Comet Server.
- **Password and FIDO2 WebAuthn together**: if this option is checked, the combination of password + FIDO2 WebAuthn authenticator will allow the administrator to log in to the Comet Server.

In `cometd.cfg`,

- the `AllowPasswordLogin` property sets whether a valid password alone is sufficient to log in.
- the `AllowPasswordTOTPLogin` property sets whether both the Password and TOTP together are sufficient to log in.
- the `AllowPasswordWebAuthnLogin` property sets whether both the Password and FIDO2 WebAuthn authenticator together are sufficient to log in.

### IP Allowlist

It is possible to restrict the IP address of an Administrator logging in to Comet Server.

This feature is not currently configurable from the web-based Settings page owing to the significant potential for locking yourself out. You must make this change in the server's configuration file: that ensures you have a way to remove it, if necessary.

In the configuration file `cometd.cfg`,

1.  Find the object entry for the user in question under the `AdminUsers` section.
2.  Add a `IPWhitelist` field, with the value, a regular expression to match against IP addresses.

```txt
For example:

    "AdminUsers": [
        {
            "Username":"my-user-account",

            "IPWhitelist": "127\\.0\\.0\\.1",
```

You should use `\\.` to represent a literal `.` character - one slash is required at the regex-level, and the second slash is required because the configuration file is a JSON document.

An example of how to use a regular expression to allow for dynamic IP:

```txt
    "AdminUsers": [
        {
            "Username":"my-user-account",

            "IPWhitelist": "127\\.0\\.0\\.[0-9]{1,3}",
```

To whitelist multiple addresses you must use a vertical line "|" between each IP.

An example of how to whitelist multiple addresses:

```txt
"AdminUsers": [
      {
          "Username": "my-user-account",
          "IPWhitelist": "127\\.0\\.0\\.1|172\\.0\\.0\\.1",
```

To whitelist all private IP ranges:

```txt
"AdminUsers": [
      {
          "Username": "my-user-account",
          "IPWhitelist": "^(127\.)|(192\.168\.)|(10\.)|(172\.1[6-9]\.)|(172\.2[0-9]\.)|(172\.3[0-1]\.)|(::1$)|([fF][cCdD])",
```

### Policies (Administrator account)

It is possible to restrict the actions of administrator accounts in Comet Server.

The following restrictions are available:

- Prevent viewing and editing server settings
- Prevent shutting down and restarting server

### External authentication sources

_This section applies to Comet 19.3.2 and later._

Comet Server supports using external authentication sources to verify administrator credentials during login. If an external authentication source is configured, then any administrator usernames that do not match a normal internal account are checked against the external authentication source.

If the external authentication source does successfully validate the administrator credentials, a new Comet administrator account will be created for the user. You can choose the default permissions for the created administrator account.

The account will be permanently associated with this authentication source; Comet Server does not store its password and always defers to the specific external authentication source for checking its password during login. This means that any password changes or account suspensions are immediately reflected in Comet.

The following types of external authentication source are available:

#### LDAP

Comet Server supports using an LDAP server (e.g. [Microsoft Active Directory](https://en.wikipedia.org/wiki/Active_Directory), [389ds](https://directory.fedoraproject.org/), or [OpenLDAP](https://www.openldap.org/)) as an external authentication source.

You must specify the LDAP address, port, and protocol security (plain, `STARTTLS`, or `LDAPS`). The default port for plain and `STARTTLS` is 389. The default port for `LDAPS` port is 636.

There are several possible ways to verify account credentials against your LDAP server. In the Comet Server configuration, the `%{USER}` and `%{PASS}` macro substitutions are supported to refer to the supplied logon credentials.

<iframe width="100%" height="440" src="https://www.youtube.com/embed/Oj5L286z0C8" title="Comet Backup - Configuring LDAP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### Method 1. Bind as own-user only

An example configuration for a domain `MYDOMAIN.example.com`:

| Field              | Value                          |
| ------------------ | ------------------------------ |
| LDAP Bind User     | `%{USER}@MYDOMAIN.example.com` |
| LDAP Bind Password | `%{PASS}`                      |
| LDAP Search DN     | (blank)                        |
| LDAP Search Filter | (blank)                        |

This will allow users to log in to Comet Server with their domain credentials.

The account's supplied credentials from the logon form (i.e. `%{USER}` / `%{PASS}`) will be validated if Comet is able to bind to the LDAP server as this account (only).

This approach performs no validation of the user's groups, nor if these credentials are for a user account or some other type of LDAP object (e.g. a Computer) i.e. there is no distinction between authenticating the account and authorising it for use.

##### Method 2. Bind as own-user, search, and rebind

Example configuration:

| Field              | Value                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| LDAP Bind User     | `%{USER}@MYDOMAIN.example.com`                                                                                       |
| LDAP Bind Password | `%{PASS}`                                                                                                            |
| LDAP Search DN     | `CN=Users,DC=mydomain,DC=example,DC=com`                                                                             |
| LDAP Search Filter | `(&(objectClass=user)(sAMAccountName=%{USER})(memberof=CN=Administrators,CN=Builtin,DC=mydomain,DC=example,DC=com))` |

The account's supplied credentials from the logon form will be validated if

1.  Comet is able to bind to the LDAP server as this account, and
2.  search for user accounts with this name that are a member of the `Administrators` group, and
3.  there is exactly one unambiguous user result for this search, and
4.  Comet is able to re-bind to the LDAP server using the DN of the user from the search with the original supplied password

This requires that the bind user has sufficient permissions to perform the search above.

Compared to "Method 1" above, this approach allows you to verify properties of the user account, distinguishing between two steps of authenticating the credentials and authorising the login.

The above Search Filter is a sample only. Active Directory supports the `memberof` and `sAMAccountName` filters by default. Other directory servers should modify the search filter as appropriate to check usernames and group memberships.

- `MemberOf` plugin for 389ds: [https://directory.fedoraproject.org/docs/389ds/design/memberof-plugin.html](https://directory.fedoraproject.org/docs/389ds/design/memberof-plugin.html)
- `MemberOf` overlay for OpenLDAP: [http://www.openldap.org/doc/admin24/overlays.html#Reverse%20Group%20Membership%20Maintenance](http://www.openldap.org/doc/admin24/overlays.html#Reverse%20Group%20Membership%20Maintenance)

##### Method 3. Bind as read-only user, search, and rebind as own-user

Example configuration:

| Field              | Value                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| LDAP Bind User     | `CometCredentialValidationUser@MYDOMAIN.example.com`                                                                 |
| LDAP Bind Password | `CometCredentialValidationPassword`                                                                                  |
| LDAP Search DN     | `CN=Users,DC=mydomain,DC=example,DC=com`                                                                             |
| LDAP Search Filter | `(&(objectClass=user)(sAMAccountName=%{USER})(memberof=CN=Administrators,CN=Builtin,DC=mydomain,DC=example,DC=com))` |

The account's supplied credentials from the logon form will be validated if

1.  Comet is able to bind to the LDAP server as this hardcoded account, and
2.  search for user accounts with this name that are a member of the `Administrators` group, and
3.  there is exactly one unambiguous user result for this search, and
4.  Comet is able to re-bind to the LDAP server using the DN of the user from the search with the original supplied password

Compared to "Method 2" above, this allows you to restrict the search process to a dedicated account, and restrict search permissions from other user accounts.

#### Two-factor authentication for externally-authenticated administrator accounts

If you are using external authentication (e.g. LDAP) for admin accounts, logging in to Comet Server with LDAP credentials causes a stub/passwordless administrator account to be created. The only way to log in to this account is via a successful LDAP handshake.

After the stub account is created (marked as "External" in the Comet Server Settings page > "Admin accounts" area) you can set up 2FA for this account in the same way as for any Comet admin account. Then, both a successful LDAP handshake and the 2FA credentials will be required to log in to the Comet Server web interface.

An alternative approach is if your LDAP server has built-in 2FA. For example, if you are using (e.g.)...

- DUO Authentication Proxy (DUO LDAP Proxy)
- Azure Multi-Factor Authentication Server
- Any LDAP server (e.g. Active Directory) using RADIUS authentication, with a 2FA RADIUS solution such as e.g.
  - GreenRADIUS
  - YubiX / YubiRADIUS (discontinued)
  - multiOTP + FreeRADIUS

...as your LDAP server inside Comet, the LDAP handshake will hang until the administrator completes an out-of-band 2FA handshake using the provider's own system (e.g. a push notification gateway). This provides two-factor authentication outside of Comet itself.

##### "Primary bind exempted from 2FA" when using DUO Authentication Proxy

By default, DUO Authentication Proxy does not prompt for 2FA for any LDAP bind. You need to configure the DUO Authentication Proxy software to choose which accounts are subject to 2FA prompts. For instance, an interactive user account should be subject to this, but service accounts (e.g. for Method 2 / 3 above) should not be subject to a 2FA prompt as they would be unable to complete it.

Please see [https://help.duo.com/s/article/4989?language=en_US](https://help.duo.com/s/article/4989?language=en_US) for more information,

## Authentication Role

![](./images/img15.png)

The Comet Server software is split into separate roles, as described in the "Application Architecture" section. If this server is expected to only play a storage role or an authentication role in your infrastructure, the other roles should be disabled.

In `cometd.cfg`, the `AuthenticationRole` > `RoleEnabled` option configures whether the Authentication Role is enabled.

The Authentication Role is the part of Comet Server responsible for managing users and job history logs. When this role is enabled, the following data files are used:

- `cometd-users.db` - This file contains user profile information for all users. The expected file-size is small.
- `cometd-jobs.db` - This file contains textual job information for all job history. The file-size may grow to some tens of MB, or larger, depending on the retention and volume of job entries.

It is not safe to copy these `.db` files while Comet Server is running. You can backup these files and more using the [Server Self-Backup](https://docs.cometbackup.com/latest/installation/comet-server-configuration#server-selfbackup) option.

### Authentication Role Request Storage Vault

![](./images/img16.png)

The **Request Storage Vault** section is used to manage default storage options which are available when requesting a new Storage Vault for a user. When adding a Storage Vault for a new or existing account, you can simply assign a Requestable Storage Vault instead of manually creating a storage location per account. Comet will automatically separate user data and therefore there is no need to create separate bucket locations manually.

The Requestable Storage Vault will automatically assign a bucket location within the storage location. It is possible to configure it with your Storage Role location/s and to a cloud storage provider directly.

#### Configure a Requestable Storage Vault using your server's Storage Role

You can configure your Requestable Storage Vaults to use the Storage Role location of your Comet Servers (no limit). An end user will see the Storage Vault as your server’s storage and not the actual destination (such as, not seeing cloud storage credentials).

For a single Comet Server with Authentication Role and Storage Role enabled. Create a new Requestable Storage Vault, leave the _Address_ dropdown on _Local_ and it will use the current server's Storage Role location.

![](./images/gif1.gif)

To add an additional Storage Role server as a Requestable Storage Vault option, create a new Requestable Storage Vault, change the _Address_ dropdown to _Remote_ and input the Storage Role server's credentials.

![](./images/gif2.gif)

#### Configure a Requestable Storage Vault to backup directly to a cloud provider

You can configure a Requestable Storage Vault with one of the supported cloud storage providers. When using this Storage Vault, the data will backup directly to the storage location and not pass through your Comet Server (unlike using your cloud storage as the Storage Role). When assigning this Storage Vault to an account, the access keys granted will only have permissions for its own subdirectory and won't be able to access other accounts data.

Create a new Requestable Storage Vault, change the _Type_ dropdown to one of the supported cloud providers, and input your cloud storage details (Master key is required).

##### Current supported cloud storage providers for direct Requestable Storage Vaults

- [Backblaze B2 Cloud Storage](https://docs.cometbackup.com/latest/installation/storage-configuration#backblaze-b2-cloud-storage)
- [Wasabi Hot Cloud Storage](https://docs.cometbackup.com/latest/installation/storage-configuration#wasabi)
- [IDrive e2](https://docs.cometbackup.com/latest/installation/storage-configuration#idrive-e2)

##### Video Tutorial

See our video explaining and showing you how to configure this:

<iframe width="100%" height="440" src="https://www.youtube.com/embed/OF8oZp76Unk" title="Configuring direct-to-cloud storage using Backblaze" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="440" src="https://www.youtube.com/embed/RDiihFwFiig" title="Configuring direct-to-cloud storage using Wasabi Cloud Storage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Authentication Role Replication

![](./images/img17.png)

**Authentication Role Replication** replicates this server's authentication role data (i.e. user profiles and policy group configurations) to the other Comet Server in one direction (the replica doesn't replicate data back to the main).

You can have your Replication server store the data using a cloud service provider or using your own storage.

Server logs and job logs are not replicated (currently).

For **Storage Role Replication** (i.e. storage buckets and their content) [refer to the Storage Role Replication documentation](https://docs.cometbackup.com/latest/installation/comet-server-configuration#storage-role-replication).

#### Summary for setting up the Replication server:

- Install a new Comet Server meeting the [system requirements](https://docs.cometbackup.com/latest/installation/comet-server-installation#system-requirements) (can be installed on a virtual machine or VPS)
- On the Replication server, enable the Authentication Role
- On the main server, configure the Authentication Role replication settings on the Settings page to point to the replica

### Authentication Role Properties

![](./images/img18.png)

**Keep job logs for: XX day(s)** is how long to keep job logs in the job history before it automatically deletes after the specified time. Job history is located under _Accounts > Job History_.

Please note that if you have legal requirements to keep customer logs for an extended period of time, you should ensure this setting is configured appropriately. This setting affects the customer backup job reports; the Comet Server's server-side log entries; it does not affect the retention period for actual backed-up data within each customer's Storage Vault.

#### Missed Backups

The Authentication Role is responsible for maintaining historical logs of each job. Comet Server can generate a virtual "missed" job corresponding to when a backup job was expected to run on schedule but no backup job was found. You can control generation of Missed Backup jobs via the `AuthenticationRole` > `GenerateMissedBackupEvents` property. This property defaults to true, but has no effect if the Authentication Role is disabled.

In general, we would suggest leaving this property enabled for primary servers, and disabling it for replica servers.

Missed backups are detected the following basis:

- A background task performs calculations every half-hour.
- If a scheduled backup job was expected to run at time `T`, and no backup job for the same username, Protected Item, and Storage Vault occurred within the time range `T - 5m` ... `T + 15m`, then a missed backup job will be injected with the start and stop time set to `T`.

Comet Server does not generate missed backup jobs for a time period older than the "Keep job logs for: XX day(s)" setting, as these would be automatically removed.

When extending the time period of the "Keep job logs for: XX day(s)" to a longer period, there is a blank period in the past for which Missed backup jobs may be eligible to be generated. To avoid this issue, or for any other reason, you can set a cut-off date before which no missed backup jobs will be generated, via the `AuthenticationRole` > `NoMissedBackupEventsBefore` configuration property (as a unix timestamp).

#### Internal database integrity checks

Comet Server supports running integrity checks on its internal database files (`*.db3` files). It may take an extended amount of time to run these integrity checks.

In Comet 20.2.x, a quick check runs at startup. This may delay server startup by an amount of time proportional to the size of the `comet-jobs.db3` file. As of Comet 20.3.0, the checks are disabled by default.

As of Comet 20.3.0, the integrity check level for the Authentication Role's job log database (`comet-jobs.db3`) can be configured from the `cometd.cfg` file, by setting the `AuthenticationRole` > `DatabaseCheckLevel` property to a value from the below table.

Note that you do not need to enable this feature, unless, you have specific indicators that signal it will be useful.

| Value | Behaviour                                                                 |
| ----- | ------------------------------------------------------------------------- |
| `0`   | Default - same as `2`                                                     |
| `1`   | No checks (fastest)                                                       |
| `2`   | `wal` rollup                                                              |
| `3`   | `wal` rollup, and quick `db3` check                                       |
| `4`   | `wal` rollup, and extended `db3` check                                    |
| `5`   | `wal` rollup, extended `db3` check, and compact `db3` file size (slowest) |

## Storage Role

![](./images/img19.png)

The Storage Role is the part of Comet Server responsible for receiving and replicating any data uploaded by a Comet Backup account. When this role is enabled, the following data files are used:

- `cometd-buckets.db` - This file contains metadata and authentication information for all Storage Vaults. The expected file-size is small.

It is not safe to copy these `.db` files while Comet Server is running.

In `cometd.cfg`, the `StorageRole` > `RoleEnabled` option configures whether the Storage Role is enabled.

When the Storage Role is enabled, data is sent to the Comet server for storage in whichever destinations are selected, be it local path, or sending the data into a cloud-storage account you may have with a supported third party. This is discussed in better detail in the **Storage Configuration** section Note: when the storage destination is a cloud service, data will necessarily pass through your Comet server to the cloud. This ensures that your storage choices are not visible to the end-user. If you are likely to encounter bandwidth issues, then you may wish to consider sending user data directly from the end-user to the cloud service. This will potentially expose your data storage choices to the end-user, as the credentials for access must be stored in the desktop client. You can control access to the desktop client via **Policies**

### Locations

![](./images/img20.png)

You must configure a location where this Comet Server can store data. The path might be a local disk path, or a network account, or a cloud storage provider. For more information about the supported storage types, please see the [**Storage Configuration**](https://docs.cometbackup.com/latest/installation/storage-configuration#storage-configuration) documentation.

### Storage Role Replication

![](./images/img21.png)

**Storage Role Replication** replicates this server's storage role data (i.e. storage buckets & its content) to the other Comet Server in one direction (the replica doesn't replicate data back to the main).

You can have your Replication server store the data using a cloud service provider or using your own storage.

For **Authentication Role Replication** (i.e. user profiles and policy group configurations) [refer to the Authentication Role Replication documentation](https://docs.cometbackup.com/latest/installation/comet-server-configuration#authentication-role-replication).

#### Summary for setting up the Replication server:

- Install a new Comet Server meeting the [system requirements](https://docs.cometbackup.com/latest/installation/comet-server-installation#system-requirements) (can be installed on a virtual machine or VPS)
- On the Replication server, configure the Storage Role (can store data using a cloud service provider or your own storage)
- On the main server, configure the Storage Role replication settings on the Settings page, to point to the replica

## Software Build Role

![](./images/img22.png)

The **Software Build Role** is the part of Comet Server responsible for generating branded client software installers and making them available for download. When this role is enabled, the _Download client software_ page appears in the Comet Server web interface.

<iframe width="100%" height="440" src="https://www.youtube.com/embed/EmUndzvBfpI" title="Comet Backup - Re-branding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Comet Client Branding

![](./images/img23.png)

The **Software Build Role** section is for rebranding the Comet desktop client. This can also be configured within `cometd.cfg`. When you make changes to your branding, it is required to update the desktop clients for the changes to apply. It is possible to update the branding for multiple devices at once using the _[Bulk Update](https://docs.cometbackup.com/latest/installation/comet-server-usage#bulk-update)_ feature). [Click here for Server branding](https://docs.cometbackup.com/latest/installation/comet-server-configuration#server-branding).

#### Product name

The **Product name** is what the Comet client will be named (the shortcut will automatically change to this name). The software will also install in Windows to "C:\\Program Files\\Product Name"

Note: If you change the Product Name field, any existing, and, possibly incorrectly-named, installation directories will be re-used if the client software is reinstalled.

The desktop client will need to be uninstalled completely. The incorrectly-named "C:\\Program Files\\Product Name" directory will be removed. A new installation of the branding-updated client software will create a new brandnamed-directory in C:\\Program Files.

#### Company name

The Comet client will refer to the **Company name** when making changes within the Comet client.

#### Help URL

Setting the **Help URL** will add a _Help_ tab on the client with your URL of choice (not required).

This feature aids in personalising the backup client and in providing additional assistance to the end customer. You can choose whether the help content is shown with an embedded frame, or with a popup browser.

If you choose the popup browser option, the device's default web browser will be opened.

If you choose the embedded frame, Comet will render the content directly within the Comet Backup application window. You can take advantage of this fact to design your help website in a way that matches Comet's design theme. The webpage content may be a simple email address, phone number, or plain text content; but because any web features are available, it may also include rich experiences such as contact forms, videos, and live chat features.

Comet will try to render the embedded content with the operating system's platform rendering engine (Edge 79+ with Comet 20.6.3 or later; otherwise the latest installed IE / MSHTML engine). If no suitable platform rendering engine is available, Comet will fallback to opening the device's default web browser in a popup.

![](./images/img24.png)

#### Default server URL

The **Default server URL** will prefill the _Server_ field when logging into the Comet client.

![](./images/img25.png)

#### Registration URL

Comet supports new account registration from within the client software. If this property is non-empty, then any generated software will contain a 'Register' button on the login screen that opens the property as a URL in the device's default web browser.

![](./images/img26.png)

This allows you to create a custom signup workflow that calls into the Comet Server API to actually create the account. This offers an MSP the chance to capture other information such as email address, contact details, and billing / payment details.

By deferring to an external URL for new account registration, this system is deliberately flexible. For instance, it would be possible for MSPs using this system to

- offer the choice of multiple plans, or
- create the account on a specific Comet Server, or
- automatically request a first storage vault, or
- create a "free trial" system.

#### Icon (Windows / macOS)

You can set a custom icon used for the software on Windows and macOS.

On Windows, the file must be in `*.ico` format. On macOS, the file must be in `*.icns` format.

All executables that display an icon to the user, on the desktop, in the Start Menu, or in Windows Explorer/Finder, must carry the icon in ICO/ICNS format as this format can contain one or more small images at multiple sizes and color depths, such that they may be scaled appropriately.

In Comet 20.9.11 and later, png and JPEG files are also supported, by automatically converting them to the required ICO/ICNS format. The supplied image should have a square shape. We recommend using a 512x512 image as this will preserve the most information when the image is scaled down to smaller sizes.

In Comet 20.9.10 and earlier, other file formats (e.g. png and JPEG) are not supported. Use of an unsupported format may result in a `invalid icon file` error message on Windows, or a blank icon display on macOS. However, you can convert a png or JPEG image into this format using a dedicated program. At the time of writing, we suggest the following programs:

| Software                                                                 | Interface    | Runs on               | Price                         | Produces          |
| ------------------------------------------------------------------------ | ------------ | --------------------- | ----------------------------- | ----------------- |
| [Greenfish Icon Editor Pro](http://greenfishsoftware.org/gfie.php)       | GUI          | Windows, Linux        | Free and open-source          | `*.ico`, `*.icns` |
| [Icon Composer 2x](https://github.com/lemonmojo/IconComposer2x/releases) | GUI          | macOS                 | Free and open-source          | `*.icns`          |
| [IcoFX](http://icofx.ro/)                                                | GUI          | Windows               | Commercial, with a free-trial | `*.ico`, `*.icns` |
| [Axialis IconWorkshop](https://www.axialis.com/iconworkshop/)            | GUI          | Windows               | Commercial, with a free-trial | `*.ico`, `*.icns` |
| [ImageMagick](https://www.imagemagick.org/)                              | Command-line | Windows, Linux, macOS | Free and open-source          | `*.ico`, `*.icns` |
| `sips`                                                                   | Command-line | macOS                 | Included with OS              | `*.icns`          |

#### EULA

Add an End User License Agreement during the installation process (not required).

#### Logo image (100x32)

This image will be displayed in the lower-left corner of the software.

![](./images/img27.png)

#### Tile image (150x150)

This image will be displayed in the Windows 10 start menu. The tile background can also be changed using hex format (e.g. #FFFFFF).

![](./images/img28.png)

#### Background logo

Choose to hide the Comet branding from the background

![](./images/img29.png)

![](./images/img30.png)

#### App icon image (256x256)

This image will be displayed as the icon in package managers, such as in Synology DSM's Package Center. This image will be resized as appropriate based on the package manager relevant to each installer.

![](./images/img31.png)

### Codesigning

Windows and macOS have introduced measures to encourage distributing code-signed installers. We recommend configuring a codesigning in order to streamline the process of installing the Comet Backup desktop app.

![](./images/img32.png)

#### Codesigning for Windows

Comet Server is able to automatically sign the generated Comet Backup Windows installer using your Authenticode certificate or EV hardware token.

Signing the installer is recommended to reduce "SmartScreen" / "unknown publisher" prompts when installing the software, and to improve compatibility with some antivirus (AV) software.

When you do NOT have a codesigning certificate enabled, the Windows software download is in the form of a zip file, containing a small loader `.exe` (Authenticode-signed by a partner company of Comet Software Ltd) and a data file. When you DO have a codesigning certificate enabled, the Windows software download is in the form of a zip file containing a single signed `.exe`.

Codesigning the generated Windows client is supported regardless of what operating system Comet Server is running on. It is possible to cross-sign a Windows client from a Linux Comet Server.

The signing process can be performed either

- within the Comet Server, by uploading your Authenticode certificate files (recommended); or
- by attaching an EV hardware token to the Comet Server PC; or
- by manually signing the default unsigned package and distributing it separately.

##### Authenticode

Authenticode signing requires obtaining a certificate from a commercial certificate provider. At the time of writing, the following providers offered Authenticode certificates compatible with current versions of Windows:

- [https://www.ksoftware.net/code-signing-certificates/](https://www.ksoftware.net/code-signing-certificates/)
- [https://www.digicert.com/signing/code-signing-certificates](https://www.digicert.com/signing/code-signing-certificates)

Once you have purchased a certificate, you can upload the PKCS12 (`*.pfx` / `*.p12`) file in the settings dialog.

##### Authenticode EV

EV ("Extended Validation") codesigning certificates require a physical hardware token (e.g. a USB dongle) to store sensitive key material. Using EV codesigning is suitable only if you are running Comet Server on a physical machine that can support an attached hardware token - it is not suitable for use on a VPS.

Comet Server uses `osslsigncode` as the underlying cross-platform Authenticode EV signing technology, that supports PKCS#11 to communicate with physical hardware tokens for Authenticode EV signing.

The following additional options are available for codesigning using a physical hardware token over PKCS#11:

- `WindowsCodeSignPKCS11Engine`
  - The local disk path to the OpenSSL `engine-pkcs11` bridge `*.dll` (Windows) or `*.so` (Linux) file.
  - Corresponds to the `-pkcs11engine` option in `osslsigncode`
- `WindowsCodeSignPKCS11Module`
  - The local disk path to the PKCS#11 module `*.dll` (Windows) or `*.so` (Linux) file for your specific hardware.
  - Corresponds to the `-pkcs11module` option in `osslsigncode`
- `WindowsCodeSignPKCS11Certfile`
  - Local disk path to the certificate file
  - Corresponds to the `-certs` option in `osslsigncode`
- `WindowsCodeSignPKCS11KeyID`
  - Select the key on your hardware device (e.g. `slotID:keyID`)
  - Corresponds to the `-key` option in `osslsigncode`
- `WindowsCodeSignPKCS11Password`
  - Plain text PKCS11 key password: will be encrypted for obfuscation at first server boot.
  - Corresponds to the `-pass` option in `osslsigncode`
- `WindowsCodeSignPKCS11PasswordFormat`
  - The encryption format for the password. Set this to 0 (zero) when entering a plaintext password; it will be automatically changed when the password security is upgraded

The engine/module DLLs provided by the OpenSC project are coincidentally compatible with many hardware tokens: [https://github.com/OpenSC/OpenSC/wiki/Windows-Quick-Start](https://github.com/OpenSC/OpenSC/wiki/Windows-Quick-Start) however any DLLs supplied by your hardware vendor should be preferred.

#### Codesigning for macOS

Comet Server is able to automatically sign and notarize the Comet Backup macOS installer using your supplied Apple Developer codesigning certificates.

Signing the installer is recommended to avoid "Gatekeeper" security prompts when installing the Comet Backup client app.

The signing process itself can be performed either

- within the Comet Server, by uploading your codesigning certificate files (recommended); or
- by connecting by SSH into a macOS machine on demand; or
- by manually signing the default unsigned package and distributing it separately.

Codesigning for macOS requires a certificate signed by Apple. To get one, you must first register for Apple's developer program. This requires a DUNS number (for organisations) and payment of a 99USD fee. You may be required to accept any Apple Developer license agreements in App Store Connect. Once you have enrolled in the Apple Developer program, visit [https://developer.apple.com/account/](https://developer.apple.com/account/) and click "Certificates, IDs & Profiles" in the left-hand menu to generate and download certificates. You should create both a "Developer ID Installer" and a "Developer ID Application" certificate.

![](./images/img33.png)

Once you have successfully acquired the certificate, the following options must be configured in the Comet Server settings:

![](./images/img34.png)

##### Level

The Level can be one of the following options:

| Level                      | Description                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sign only                  | Fastest, lowest compatibility. Does not work with macOS 10.15+ after February 2020. Only the "Developer ID Installer" certificate is required. The Apple ID or App Store Connect keys are not required.                                                                                                                                                           |
| Sign and notarise          | Fast, good compatibility. The customer's Mac will make one network request to Apple servers when first installed                                                                                                                                                                                                                                                  |
| Sign, notarise, and staple | Slowest (perhaps 10 minutes or longer on first download), best compatibility. The codesigning will work offline without any prompting. Comet Server will wait until notarisation has completed before serving the generated client installer; this has the additional benefit that any notarisation validation issues will appear in the Comet Server server log. |

##### Upload method (recommended)

_This option is available with Comet Server 22.3.3 or later._

To sign the package, upload your "Developer ID Application" and "Developer ID Installer" certificates in PKCS12 (`*.pfx` / `*.p12`) file format to the Comet Server. If you created the Apple developer certificates on macOS, use the "Keychain Access" app to export your certificates including the private key.

To notarize the package, there is an additional requirement:

- Create an App Store Connect API key from [https://appstoreconnect.apple.com/access/api](https://appstoreconnect.apple.com/access/api) and get its Issuer, Key ID, and Key file.

![](./images/img35.png)

Between Comet 22.3.3 and 22.6.8, you must also install Apple iTMS Transporter from [https://help.apple.com/itc/transporteruserguide/#/apdAbeb95d60](https://help.apple.com/itc/transporteruserguide/#/apdAbeb95d60) . This program is freely available for Windows and Linux.

```txt
    - On Linux, the program requires x86_64 and glibc. It is not currently available for ARM64, nor for musl libc. In these cases you must use the SSH method instead.
```

The requirement to install Apple iTMS Transporter was removed in Comet 22.6.9.

##### SSH method

This codesigning method works by connecting to a macOS machine over SSH, and running the official macOS codesigning toolchain that Apple distribute with XCode. On your Mac, you must install the XCode developer tools from the Mac App Store. You must either run XCode once, or run `sudo xcodebuild -license` from Terminal.app, in order to accept the XCode license agreement.

Comet Server then requires you to adjust some of the certificate permissions in order for it to be accessible to remote SSH processes. In the Keychain Access app on your Mac, make the following changes:

- First, move or copy the certificate into the "System" keychain
- Secondly, grant the codesigning tools permission to access this certificate
  1.  Unfold the certificate row, to see the "private key" row
  2.  Double-click the "private key" row to open the Info panel
  3.  On the "Access Control" tab, click the "+" button
  4.  In the file picker, browse to `/usr/bin/codesign`
      - You can press Apple+Shift+Period to temporarily show hidden files, such as the `/usr/` folder in the root drive
  5.  Repeat for `/usr/bin/productsign`
  6.  Save and close this dialog

![](./images/img36.png)

You should configure the full certificate name in the Comet Server settings.

Your macOS machine must be connected to the internet in a way that is reachable from the Comet Server. You must enable SSH access to your Mac by running: `sudo systemsetup -setremotelogin on`. If the Mac is on a different network, you may need to enable port-forwarding to allow the Comet Server to reach out to your Mac.

WARNING: Enabling SSH will open your Mac up to internet attacks, including but not limited to brute-force password guessing attempts, and credential-stuffing attacks. Please ensure that your Mac is receiving current security updates, and that all user accounts on the Mac have very strong passwords.

Comet Server requires your Apple ID email address to perform Notary submission. Comet Server requires an App-Specific Password for your Apple ID, to perform Notary submission. Your primary Apple ID password is not sufficient. You can create an App-Specific Password from [https://appleid.apple.com/account/manage](https://appleid.apple.com/account/manage) by clicking the "App-Specific Passwords" link. The password will be auto-generated by the Apple ID website. If you have set the "Level" parameter to "Sign only", these two fields are not required.

#### Codesigning for Android

You must configure a codesigning certificate for Android before the resulting `.apk` file can be installed.

#### Codesigning for Linux

Linux applications do not contain embedded codesigning. You can achieve codesigning support for Linux by GPG-signing the hash of the binary and making this information available on your website independently.

### Options

![](./images/img37.png)

Enable/disable the ability to download the Comet client for anyone visiting the Comet Servers web interface.

## Constellation Role

![](./images/img38.png)

The **Constellation Role** is the part of Comet Server responsible for providing global insight across multiple Comet Servers.

Recall that Comet is designed to separate the Authentication and Storage roles to allow independent scaling.

- A small MSP using Comet software might have only a single Comet Server,
- A large MSP might have one Authentication Role server and a dozen Storage Role servers,
- A white-label MSP might have a dozen different Authentication Role servers all backed by a single Storage Role server.

These latter cases are perfectly valid scenarios, but present some complexity when answering questions like "which user accounts are using this bucket" and "is this bucket safe to delete". The Constellation role communicates with all your Comet Servers to produce a global overview of your entire cluster to help answer these questions.

The **Constellation role** is optional. However, it is necessary if you want to automatically remove unused storage buckets from your Storage Role servers.

The **Constellation role** was formerly known as the "Overseer" role.

Choose one (and only one) of your servers to have the Constellation role. You can then use the Report features inside Comet Server > Cluster menu > "About this Cluster" to find which buckets are in-use by which accounts.

In `cometd.cfg`, you can enable the Constellation Role by setting the property `ConstellationRole` > `RoleEnabled` to `true`.

### Targets

![](./images/img39.png)

When setting up the **Constellation role** you must add the other Authentication role/Storage role servers to manage.

In `cometd.cfg`, fill the `Servers` array with all your servers (including the Constellation), in the same format as for replication targets and remote storage buckets.

If you add a new Comet Server, you should add it to the Constellation Role Targets list.

If you add a tenant, you should add it to the Constellation Role Targets list.

### Properties

![](./images/img40.png)

The **Constellation role** will automatically produce a bucket usage report every hour, listing for each bucket (A) which servers the bucket exists on, and (B) which users have a Storage Vault configured pointing to this bucket. This information is sufficient to identify unused buckets in order to reclaim storage space on your Comet Server.

In the default configuration, no data will be deleted as a result of running this report. Once you are happy with the result of this report, you can enable the deletion feature to allow the Constellation role to delete unused buckets automatically.

Please keep an eye on the server logs in order to draw attention to any correctness issues with the report.

In `cometd.cfg`, you can configure this option via the `ConstellationRole` section > `DeleteUnusedData` property.

#### Risks

It is _essential_ that the Constellation has access to every single one of your Comet Servers. If a new Authentication Role server is added to your infrastructure, but not added to the list of servers managed by the Constellation Role, then Constellation will see that the buckets are unused and remove them.

Such an issue should be obvious when the customer's next backup job fails to run. If the issue is noticed early, then recovery should be possible by reverting to an earlier filesystem snapshot (if available) or by re-uploading the data. However, if backup jobs are performed infrequently, or if the issue occurs at the same time as another outage, it may be more difficult to recover from the issue.

If an Authentication Role server is found to reference a Storage Role server outside the Constellation's vision, then a warning message will be added to the log file.

## Tenants

_This feature is available in Comet Server 20.9.0 and later. Configuration via the Setup Wizard is available in Comet Server 20.12.0 - 21.9.12, and via the Settings page from 21.12.0+._

_Prior to Comet Server 21.12.0, this feature was named 'Organizations'._

![](./images/img41.png)

The tenants feature provides a way to divide your Comet Server into isolated zones. This can be used for any multi-tenancy purpose such as supporting resellers, client grouping, etc.

You can configure this feature either by the `cometd.cfg` file, or via the API without requiring a service restart, via the Setup Wizard _(20.12.0 - 21.9.12)_, or via the Settings page _(>=21.12.0)_.

To set up your Comet Server for multiple tenants:

- The tenant hostname(s) must resolve to the existing Comet Server
- The tenant hostname(s) must be unique (different from the existing Comet Server hostname, and different from other tenant hostnames).

Example: Your Comet Server will already be 'listening' for communications on a URL, eg: `example.com`, which, in turn, resolves to `123.123.123.123`.

When adding a tenant, in the 'Hostname' section, add a new, unique URL for the tenant, eg: `tenant.com`. This URL should _also_ resolve to `123.123.123.123` (or to wherever the Comet Server is located). We would recommend that the tenant URL, and its resolution, should be something that you have configured and verified _prior_ to adding the new tenant.

The tenant hostname should also be entered as a hostname on the top-level network settings. In an automatic certificate (i.e. Let's Encrypt) configuration, these can be entered as a comma-delimited list in the existing network interface (e.g. `backup.companyname.com,backup.tenant1.com`). If custom SSL certificates are being used, you will need to ensure that the certificates cover all tenant addresses, either by:

- creating a separate network interface for each domain's certificates,
- using a wildcard certificate and assigning tenants as subdomains of this domain.

When the Comet Server web interface is accessed from the configured hostname, the tenant's own branding will be used.

- In the tenant configuration, the hostname should be specified as a plain domain name only, such as `tenant.com`, and _excluding_ any port (e.g. `:443`) or protocol (e.g. `https://`). It is only possible to separate tenants based on the domain name, not the port or protocol.

Tenants are isolated from each other, but the usual top-level administrator does have hierarchal visibility into seeing a tenant's users, policies and so on. When logged in as a top-level administrator, any items belonging to a tenant (such as users, jobs, policies, and Storage Role buckets) are all specially marked with an `Other Tenant` badge.

![](./images/img42.png)

Each tenant has its own isolated set of:

- **Admin user accounts.** You can create admin accounts that will have limited visibility only to this tenant's set of customers.
  - It is possible to reuse an Admin username between multiple tenants _(>=21.3.0)_
- **Branding.** When accessed on the configured hostname, the web interface and the Comet Backup software download would have your tenant's custom branding applied to it.
- **Email return address**
- **User accounts and devices**
- **Policies**
- **Requestable Storage Vault settings.** You can assign each reseller a different set of Requestable Storage Vault providers, from a cloud provider or otherwise.
  - It is possible to select the Local Comet Server Storage Role. In this case, the resulting Bucket will belong to the isolated tenant.
  - It is possible to configure a remote Comet Server Storage Role. In this case, the resulting Bucket on the remote Comet Server will belong to the same tenant as the credentials used.

Some features are still system-wide for the Comet Server:

- **Bulk Upgrade Campaign** A tenant administrator does not have access to the bulk upgrade campaign page.
- **Storage Role configuration.** The tenants feature does not allow tenant administrators to configure the Storage Role to have Comet Server store data in different locations other than what the top-level administrator has configured. If Storage Role is used, then buckets will be appropriately isolated for each tenant.
- **Email deliverability configuration.** Any email reports sent on behalf of the tenant can be delivered with the tenant's own configured 'From' name and return address. However, the actual deliverability configuration and/or SMTP details would be the same as for the top-level administrator.
- **Constellation.** Constellation uses the top-level administrator credentials to see all tenant accounts.
  - If you add a tenant, you should add it to the Constellation Role Targets list.
- **Replication.** The replica Comet Server should be manually configured to have the same tenant IDs by copying the `Organizations` section in the `cometd.cfg` file.

A tenant admin can only log in to the Comet Server web interface from their configured hostname with the matching branding. The top-level administrator account can only log in to the Comet Server web interface from a hostname that is not used for a tenant.

During API calls, tenant visibility restrictions are automatically applied based on your supplied credentials. A tenant admin user account can use the API to access their isolated zone without any API code changes.

- Prior to Comet 21.3.0, the top-level administrator could log in from any hostname, even with mismatched branding. Prior to Comet 21.3.0, administrator usernames were required to be unique across all tenants.

## Server Self-Backup

![](./images/img43.png)

Server Self-Backup makes periodic copies of Comet Server's own database and configuration files, for safe-keeping.

Server Self-Backup is a feature which is available only on self-hosted Comet Servers. Comet-Hosted Comet Servers are a managed service which has a separate, regular backup.

We **_strongly_** recommend that you enable Server Self-Backup for your Self-Hosted Comet Server. An hourly or daily backup to some off-site location would be ideal. On Windows, this will save a zipped copy of the contents of: `C:\ProgramData\Comet`, and, on Linux/Unix, this will save a zipped copy of the contents of `/var/lib/cometd/`. We recommend that you use the built-in Server Self-backup function, rather than accessing these files directly, as they may be in-use. The Server Self-Backup function can take a safe copy of in-use files.

For recovery, you will need to obtain the last zipped Server Self-Backup file from just before the incident happened.

Because Comet Backup's normal operation requires access to a running Comet Server, if the Comet Server itself is unavailable, it is not possible to use Comet Backup to back up the Comet Server itself. To avoid problems when restoring, the Comet Server Self-Backup feature stores all files in a simple zip file, allowing easy copy-and-paste recovery of the configuration and database files.

The backed-up data includes:

- User profiles
- Policies
- Job History
  - The Recent Activity page is based on Job History data, and therefore will be preserved during recovery
- Client News
- Server configuration
- Branding
  - Files uploaded on the Settings page in the Comet Server web interface are included. Any branding images that were configured using custom on-disk paths may not be included.
- Serial License lease

### Target

![](./images/img44.png)

You can set up multiple targets for Self-Backup.

- Specify a location for where you want to backup your server data. All of Comet's normal locations are supported.
- Set a schedule for when this backup runs, using the timezone selected. All of Comet's normal schedule options are supported.
- Choose a retention range. Retention can be set up for Server Self-Backup to restore from any version within your retention range. All of Comet's normal retention options are supported.
- _(optional)_ Add an encryption key. This will be the password to access the data (zip file)

### Video

<iframe width="100%" height="440" src="https://www.youtube.com/embed/3srsEWFacws" title="Comet Backup Webinar Highlight: Server Self-Backup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Saving changes

If you are applying changes via the Comet Server web interface, the Comet Server will restart to save your changes. The Comet Server will be automatically restarted by the service system. Any running backup jobs will resume automatically.
