---
title: API Data Structures
sidebar_position: 4
---

# API Data Structures

## AddBucketResponseMessage

    class AddBucketResponseMessage extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage), [NewBucketDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-NewBucketDetail) {
    }

## AdminAccountPropertiesResponse

    class AdminAccountPropertiesResponse {
    string OrganizationID
    [AdminUserPermissions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminUserPermissions) Permissions
    [AdminSecurityOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminSecurityOptions) Security
    }

## AdminEmailOptions

    class AdminEmailOptions {
    string FromEmail
    string FromName
    }

## AdminResourceResponse

    class AdminResourceResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    string ResourceHash
    }

## AdminSecurityOptions

    class AdminSecurityOptions {
    int PasswordFormat
    string Password
    bool AllowPasswordLogin
    bool AllowPasswordAndTOTPLogin
    bool AllowPasswordAndU2FLogin // // AllowPasswordAndU2FLogin has been deprecated since Comet version 21.12.0
    bool AllowPasswordAndWebAuthnLogin

        // // U2FRegistrations has been deprecated since Comet version 21.12.0
        // Omission from JSON document implies an empty array
        List<[AdminU2FRegistration](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminU2FRegistration)\>      U2FRegistrations
        List<[AdminWebAuthnRegistration](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminWebAuthnRegistration)\> WebAuthnRegistrations // Omission from JSON document implies an empty array
        int                             TOTPKeyEncryptionFormat // Omission from JSON document implies 0
        string                          TOTPKey // Omission from JSON document implies empty string
        string                          IPWhitelist // Omission from JSON document implies empty string

    }

## AdminU2FRegistration

_This type has been deprecated since Comet version 21.12.0_

```java
class AdminU2FRegistration {
string Description
int RegisterTime
List <byte> Registration
}
```

## AdminUserPermissions

    class AdminUserPermissions {
    bool PreventEditServerSettings // Omission from JSON document implies false
    bool PreventServerShutdown // Omission from JSON document implies false
    bool PreventChangePassword // Omission from JSON document implies false
    bool AllowEditBranding // Omission from JSON document implies false
    bool AllowEditRemoteStorage // Omission from JSON document implies false
    }

## AdminWebAuthnRegistration

```java
class AdminWebAuthnRegistration {
string Description
int RegisterTime
int Type
bool IsLegacyU2F // Omission from JSON document implies false
List <byte> ID // Omission from JSON document implies an empty array
[WebAuthnCredential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredential) Credential // Omission from JSON document implies zero-initialised WebAuthnCredential class instance
}
```

## AllowedAdminUser

    class AllowedAdminUser extends [AdminSecurityOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminSecurityOptions) {
    string Username
    string OrganizationID
    string ExternalAuthenticationSource // Omission from JSON document implies empty string
    [AdminUserPermissions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminUserPermissions) Permissions
    }

## AmazonAWSVirtualStorageRoleSettings

    class AmazonAWSVirtualStorageRoleSettings {
    string MasterBucket
    string AccessKey
    string SecretKey
    }

## AuthenticationRoleOptions

    class AuthenticationRoleOptions {
    bool RoleEnabled
    int DatabaseCheckLevel
    bool GenerateMissedBackupEvents
    int NoMissedBackupEventsBefore
    bool GenerateScheduledEmails
    int PruneLogsAfterDays
    List<[RemoteStorageOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteStorageOption)\> RemoteStorage
    List<[ReplicaServer](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ReplicaServer)\> ReplicateTo
    }

## AvailableDownload

    class AvailableDownload {
    string Category
    string Description
    bool Recommended
    }

## AzureDestinationLocation

    class AzureDestinationLocation {
    string AZBAccountName
    string AZBAccountKey
    string AZBContainer
    string AZBRealm
    string AZBPrefix
    }

## B2DestinationLocation

    class B2DestinationLocation {
    string AccountID // Omission from JSON document implies empty string
    string Key // Omission from JSON document implies empty string
    string Bucket // Omission from JSON document implies empty string
    string Prefix // Omission from JSON document implies empty string

        // // MaxConnections has been deprecated since Comet version 21.9.7
        // Omission from JSON document implies 0
        int    MaxConnections
        bool   HideDeletedFiles // Omission from JSON document implies false

    }

## B2StorageExtraInfo

    class B2StorageExtraInfo {
    Dictionary<int, [B2TransactionTotals](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-B2TransactionTotals)\> TotalTransactionsInTimeInterval
    }

## B2TransactionTotals

    class B2TransactionTotals {
    int ClassA
    int ClassB
    int ClassC
    }

## B2VirtualStorageRoleSettings

    class B2VirtualStorageRoleSettings {
    string MasterBucket
    string KeyID
    string AppKey
    bool HideDeletedFiles
    }

## BackupJobAdvancedOptions

    class BackupJobAdvancedOptions {
    bool SkipAlreadyRunning
    int StopAfter
    int LimitVaultSpeedBps
    bool ReduceDiskConcurrency
    bool UseOnDiskIndexes
    bool AllowZeroFilesSuccess
    int AutoRetentionLevel
    }

## BackupJobDetail

    class BackupJobDetail {
    string GUID
    string Username
    int Classification
    int Status
    int StartTime
    int EndTime
    string SourceGUID
    string DestinationGUID
    string DeviceID
    string SnapshotID // Omission from JSON document implies empty string
    string ClientVersion
    int TotalDirectories
    int TotalFiles
    int TotalSize
    int TotalChunks
    int UploadSize
    int DownloadSize
    int TotalVmCount // Omission from JSON document implies 0
    int TotalMailsCount // Omission from JSON document implies 0
    int TotalSitesCount // Omission from JSON document implies 0
    int TotalAccountsCount // Omission from JSON document implies 0
    int TotalLicensedMailsCount // Omission from JSON document implies 0
    int TotalUnlicensedMailsCount // Omission from JSON document implies 0
    string CancellationID // Omission from JSON document implies empty string
    [BackupJobProgress](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobProgress) Progress // Omission from JSON document implies zero-initialised BackupJobProgress class instance
    [SizeMeasurement](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SizeMeasurement) DestinationSizeStart // Omission from JSON document implies zero-initialised SizeMeasurement class instance
    [SizeMeasurement](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SizeMeasurement) DestinationSizeEnd // Omission from JSON document implies zero-initialised SizeMeasurement class instance
    }

## BackupJobProgress

    class BackupJobProgress {
    int Counter
    int SentTime
    int RecievedTime
    int BytesDone
    int ItemsDone
    }

## BackupRuleConfig

```java
class BackupRuleConfig extends [BackupJobAdvancedOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobAdvancedOptions) {
string Description
int CreateTime
int ModifyTime
List <string> PreExec
List <string> ThawExec
List <string> PostExec
string Source
string Destination
List<[ScheduleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ScheduleConfig)\> Schedules
[BackupRuleEventTriggers](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupRuleEventTriggers) EventTriggers
}
```

## BackupRuleEventTriggers

    class BackupRuleEventTriggers {
    bool OnPCBoot // Omission from JSON document implies false
    bool OnPCBootIfLastJobMissed // Omission from JSON document implies false
    }

## BrandingOptions

    class BrandingOptions extends [WebInterfaceBrandingProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebInterfaceBrandingProperties), [BrandingProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrandingProperties) {
    }

## BrandingProperties

    class BrandingProperties extends [PublicBrandingProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-PublicBrandingProperties), [PrivateBrandingProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-PrivateBrandingProperties) {
    }

## BrowseDiskDrivesResponse

    class BrowseDiskDrivesResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    List<[DiskDrive](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DiskDrive)\> Disks
    }

## BrowseEDBResponse

    class BrowseEDBResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    List<[EDBFileInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EDBFileInfo)\> Databases
    }

## BrowseHVResponse

    class BrowseHVResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    List<[HyperVMachineInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-HyperVMachineInfo)\> VirtualMachines
    }

## BrowseOffice365ListVirtualAccountsResponse

    class BrowseOffice365ListVirtualAccountsResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    List<[Office365MixedVirtualAccount](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365MixedVirtualAccount)\> Objects
    }

## BrowseOffice365ObjectsResponse

    class BrowseOffice365ObjectsResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    List<[Office365ObjectInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365ObjectInfo)\> Objects
    }

## BrowseSQLServerResponse

```java
class BrowseSQLServerResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
Dictionary<string, string> Objects
}
```

## BrowseVSSResponse

```java
class BrowseVSSResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
Dictionary<string, [VSSWriterInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-VSSWriterInfo)\> VSSWriters
}
```

## BucketProperties

    class BucketProperties {
    string OrganizationID
    int CreateTime
    int ReadWriteKeyFormat
    string ReadWriteKey
    [SizeMeasurement](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SizeMeasurement) Size
    }

## BucketUsageInfo

```java
class BucketUsageInfo {
List<int> ExistsOnServers
List<[UserOnServer](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserOnServer)\> InUseBy
}
```

## CometAPIResponseMessage

    class CometAPIResponseMessage {
    int Status
    string Message
    }

## CometDestinationLocation

    class CometDestinationLocation {
    string CometServer
    string CometBucket
    string CometBucketKey
    }

## ConstellationCheckReport

```java
class ConstellationCheckReport {
int CheckStarted
int CheckCompleted
Dictionary<string, [BucketUsageInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BucketUsageInfo)\> Usage
}
```

## ConstellationRoleOptions

    class ConstellationRoleOptions {
    bool RoleEnabled
    bool DeleteUnusedData
    List<[RemoteServerAddress](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteServerAddress)\> Servers
    }

## ConstellationStats

    class ConstellationStats {
    int LastCheckStart
    int TotalChecksStarted
    int TotalBucketsDeleted
    int ChecksCurrentlyActive
    }

## ConstellationStatusAPIResponse

```java
class ConstellationStatusAPIResponse {
bool DeletionEnabled
List <string> Targets
List <string> TargetNames // Omission from JSON document implies an empty array
[ConstellationStats](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationStats) Stats
}
```

## ContentMeasurement

    class ContentMeasurement {
    int MeasureStarted
    int MeasureCompleted
    List<[ContentMeasurementComponent](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ContentMeasurementComponent)\> Components
    }

## ContentMeasurementComponent

```java
class ContentMeasurementComponent {
int Bytes
List <string> UsedBy
}
```

## CreateGroupPolicyResponse

    class CreateGroupPolicyResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
    string PolicyHash
    }

## CustomRemoteBucketSettings

class CustomRemoteBucketSettings {
string URL
}

## DaysOfWeekConfig

class DaysOfWeekConfig {
bool Sunday
bool Monday
bool Tuesday
bool Wednesday
bool Thursday
bool Friday
bool Saturday
}

## DefaultEmailReportPolicy

class DefaultEmailReportPolicy extends [UserCustomEmailSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserCustomEmailSettings) {
bool ShouldOverrideDefaultReports
}

## DefaultSourceWithOSRestriction

class DefaultSourceWithOSRestriction {
[SourceConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SourceConfig) SourceConfig
int RestrictOS
}

## DestinationConfig

```java
class DestinationConfig extends [DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) {
string Description
int CreateTime
int ModifyTime
List <string> PreExec
List <string> ThawExec
List <string> PostExec
int EncryptionKeyEncryptionMethod
string EncryptedEncryptionKey
int RepoInitTimestamp
bool StorageLimitEnabled
int StorageLimitBytes
[DestinationStatistics](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationStatistics) Statistics // Omission from JSON document implies zero-initialised DestinationStatistics class instance
[RetentionPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionPolicy) DefaultRetention
bool RebrandStorage
}
```

## DestinationLocation

class DestinationLocation extends [CometDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometDestinationLocation), [S3DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-S3DestinationLocation), [SFTPDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SFTPDestinationLocation), [FTPDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-FTPDestinationLocation), [AzureDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AzureDestinationLocation), [LocalDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-LocalDestinationLocation), [SpannedDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SpannedDestinationLocation) {
int DestinationType
[SwiftDestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SwiftDestinationLocation) Swift
[B2DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-B2DestinationLocation) B2
}

## DestinationStatistics

class DestinationStatistics {
[SizeMeasurement](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SizeMeasurement) ClientProvidedSize
[ContentMeasurement](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ContentMeasurement) ClientProvidedContent
string LastSuccessfulDeepVerify_GUID // Omission from JSON document implies empty string
int LastSuccessfulDeepVerify_StartTime // Omission from JSON document implies 0
int LastSuccessfulDeepVerify_EndTime // Omission from JSON document implies 0
}

## DeviceConfig

```java
class DeviceConfig {
string FriendlyName
int RegistrationTime // Omission from JSON document implies 0
[OSInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-OSInfo) PlatformVersion // Omission from JSON document implies zero-initialised OSInfo class instance
Dictionary<string, [SourceBasicInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SourceBasicInfo)\> Sources // Omission from JSON document implies an empty Dictionary
string DeviceTimezone // Omission from JSON document implies empty string
}
```

## DiskDrive

class DiskDrive {
string ID
string DeviceName
string Caption
string Model
string SerialNumber
int Size
List<[Partition](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Partition)\> Partitions
int Flags
int Cylinders
int Heads
int Sectors
int SectorSize
}

## DispatcherAdminSourcesResponse

```java
class DispatcherAdminSourcesResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
Dictionary<string, string> ImportSources
}
```

## DispatcherStoredObjectsResponse

class DispatcherStoredObjectsResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
List<[StoredObject](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StoredObject)\> StoredObjects
}

## DispatcherVaultSnapshotsResponse

class DispatcherVaultSnapshotsResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
List<[VaultSnapshot](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-VaultSnapshot)\> Snapshots
}

## DispatcherWindiskSnapshotResponse

class DispatcherWindiskSnapshotResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
List<[DiskDrive](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DiskDrive)\> WindiskSnapshot
}

## EDBFileInfo

class EDBFileInfo {
string Name
string Guid
string ServerName
bool CircularLoggingEnabled
}

## EmailOptions

class EmailOptions extends [AdminEmailOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminEmailOptions) {
string Mode
string SMTPHost // Omission from JSON document implies empty string
int SMTPPort // Omission from JSON document implies 0
string SMTPUsername // Omission from JSON document implies empty string
string SMTPPassword // Omission from JSON document implies empty string
bool SMTPAllowInvalidCertificate // Omission from JSON document implies false
bool SMTPAllowUnencrypted // Omission from JSON document implies false
}

## EmailReportConfig

class EmailReportConfig {
int ReportType
List<[ScheduleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ScheduleConfig)\> SummaryFrequency
[SearchClause](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SearchClause) Filter
}

## EmailReportGeneratedPreview

```java
class EmailReportGeneratedPreview extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string From
List <string> To
string EmailSubject
string EmailBodyHTML
string EmailBodyPlaintext
}
```

## ExternalAuthenticationSource

class ExternalAuthenticationSource extends [RemoteServerAddress](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteServerAddress) {
[AdminUserPermissions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminUserPermissions) NewUserPermissions
}

## ExternalLDAPAuthenticationSourceServer

class ExternalLDAPAuthenticationSourceServer {
string Hostname
int Port
string SecurityMethod
bool AcceptInvalidSSL
}

## ExternalLDAPAuthenticationSourceSettings

class ExternalLDAPAuthenticationSourceSettings extends [ExternalLDAPAuthenticationSourceServer](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ExternalLDAPAuthenticationSourceServer) {
List<[ExternalLDAPAuthenticationSourceServer](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ExternalLDAPAuthenticationSourceServer)\> FallbackServers
string BindUser
string BindPassword
string SearchDN
string SearchFilter
}

## ExtraFileExclusion

class ExtraFileExclusion {
string Exclude
bool Regex
int RestrictOS
}

## FTPDestinationLocation

class FTPDestinationLocation {
string FTPServer
string FTPUsername
string FTPPassword
bool FTPBaseUseHomeDirectory
string FTPCustomBaseDirectory
int FTPSMode
int FTPPort
int FTPMaxConnections
bool FTPAcceptInvalidSSL
}

## GetGroupPolicyResponse

class GetGroupPolicyResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
[GroupPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GroupPolicy) Policy
string PolicyHash
}

## GetProfileAndHashResponseMessage

class GetProfileAndHashResponseMessage extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string ProfileHash
[UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) Profile
}

## GetProfileHashResponseMessage

class GetProfileHashResponseMessage extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string ProfileHash
}

## GroupPolicy

class GroupPolicy {
string Description
string OrganizationID
[UserPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserPolicy) Policy
bool DefaultUserPolicy
}

## HTTPConnectorOptions

class HTTPConnectorOptions {
string ListenAddress
string SSLCertPath // Omission from JSON document implies empty string
string SSLIntermediate // Omission from JSON document implies empty string
string SSLCertKey // Omission from JSON document implies empty string
string AutoSSLDomains // Omission from JSON document implies empty string
string SSLPfxPath // Omission from JSON document implies empty string
string SSLPfxPassword // Omission from JSON document implies empty string
}

## HourSchedConfig

class HourSchedConfig {
int Hour
int Minutes
}

## HyperVMachineInfo

class HyperVMachineInfo {
string ID
string Name
}

## InstallCreds

class InstallCreds {
string Username
string Password
string Server
bool AutoLogin
}

## InstallToken

class InstallToken {
string Username
string Server
string Token
int CreateTime
bool Used
int ExpireTime
}

## InstallTokenResponse

class InstallTokenResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
[InstallToken](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-InstallToken) InstallToken
}

## JobEntry

JobEntry is a single entry within a job report.

class JobEntry {
int Time
string Severity
string Message
}

## LicenseOptions

class LicenseOptions {
string Email // Omission from JSON document implies empty string
string SerialNumber
}

## LiveUserConnection

class LiveUserConnection {
string Username
string DeviceID
string ReportedVersion
string ReportedPlatform
[OSInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-OSInfo) ReportedPlatformVersion // Omission from JSON document implies zero-initialised OSInfo class instance
string DeviceTimeZone // Omission from JSON document implies empty string
string IPAddress // Omission from JSON document implies empty string
int ConnectionTime
bool AllowsFilenames
}

## LocalDestinationLocation

class LocalDestinationLocation {
string LocalcopyPath
string LocalcopyWinSMBUsername
string LocalcopyWinSMBPassword
int LocalcopyWinSMBPasswordFormat
}

## LocalStorageDirectory

class LocalStorageDirectory {
string Path
}

## MSSQLConnection

class MSSQLConnection {
string Type
string Username
string Password
string Hostname
string InstanceName
string Method
}

## MacOSCodeSignProperties

class MacOSCodeSignProperties {
int Level
bool SignLocally
[SSHConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SSHConnection) SSHServer
string CertificateName
string AppCertificateName
string AppleID
string AppleIDPass
int AppleIDPassFormat
string CertificateFile
string AppCertificateFile
string PfxFilePassword
int PfxFilePasswordFormat
string NotaryAPIIssuerID
string NotaryAPIKeyID
string NotaryAPIKeyFile
}

## MongoDBConnection

```java
class MongoDBConnection {
string Server
int Port
string Username
string Password
string AuthenticationDB
string MongoShellPath
string MongodumpPath
string ReadPreference
bool UseReplica
string ReplicaName
List <string> ReplicaMembers
bool UseSSL
string ClientSSLPEMPath
string ServerSSLPEMPath
string SSLClientKeyPassword
bool AllowInvalidCertificate
bool AllowInvalidHostname
bool UseSSH
[SSHConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SSHConnection) SSHConnection // Omission from JSON document implies zero-initialised SSHConnection class instance
}
```

## MySQLConnection

class MySQLConnection {
string Host
string Port
string Username
string Password
bool UseTLS
bool TLSSkipVerify
string TLSCustomServerCAPath
string TLSCustomClientCrtPath
string TLSCustomClientKeyPath
}

## NewBucketDetail

class NewBucketDetail {
string NewBucketID
string NewBucketKey
}

## NewsEntry

class NewsEntry {
string OrganizationID
int DateTime
string TextContent
}

## OSInfo

class OSInfo {
string version // Omission from JSON document implies empty string
string distribution // Omission from JSON document implies empty string
string build // Omission from JSON document implies empty string
}

## Office365Connection

```java
class Office365Connection {
string FeatureFlag
[Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) Credential
[Office365CustomSetting](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365CustomSetting) CustomSetting
List <string> MailboxUniqueMembers
List <string> SiteUniqueMembers
[Office365CustomSettingV2](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365CustomSettingV2) CustomSettingV2
}
```

## Office365Credential

class Office365Credential {
string AppID
string TenantID
string Secret
string AppCert
string Region
}

## Office365CustomSetting

_This type has been deprecated since Comet version 21.9.xx_

```java
class Office365CustomSetting {
string MailboxStrategy
string SiteStrategy
List <string> MailboxUserIDs
List <string> MailboxGroupIDs
List <string> SiteIDs
}
```

## Office365CustomSettingV2

```java
class Office365CustomSettingV2 {
bool Organization
Dictionary<string, int> BackupOptions // Omission from JSON document implies an empty Dictionary
Dictionary<string, int> MemberBackupOptions // Omission from JSON document implies an empty Dictionary
}
```

## Office365MixedVirtualAccount

```java
class Office365MixedVirtualAccount {
string id
int Type // Omission from JSON document implies 0
string DisplayName // Omission from JSON document implies empty string
string Mail // Omission from JSON document implies empty string
string JobTitle // Omission from JSON document implies empty string
string SiteID // Omission from JSON document implies empty string
string WebID // Omission from JSON document implies empty string
string WebURL // Omission from JSON document implies empty string
int EnabledServiceOption // Omission from JSON document implies 0
List <string> Members // Omission from JSON document implies an empty array
int ServiceOptions // Omission from JSON document implies 0
int MemberServiceOptions // Omission from JSON document implies 0
bool hasLicense // Omission from JSON document implies false
}
```

## Office365ObjectInfo

```java
class Office365ObjectInfo {
string GUID
string Name
string Type
string Value
List <string> Members
}
```

## Organization

```java
class Organization {
string Name
List <string> Hosts
[SoftwareBuildRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SoftwareBuildRoleOptions) SoftwareBuildRole
[BrandingOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrandingOptions) Branding
List<[RemoteStorageOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteStorageOption)\> RemoteStorage
Dictionary<string, [WebhookOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebhookOption)\> WebhookOptions
[EmailOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailOptions) Email
bool IsSuspended
}
```

## OrganizationResponse

class OrganizationResponse {
int Status
string Message
string ID
[Organization](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Organization) Organization
}

## Partition

```java
class Partition {
string DeviceName
string Filesystem
string VolumeName
string VolumeGuid
string VolumeSerial
List <string> MountPoints
int ReadOffset
int Size
int UsedSize
int Flags
int BytesPerFilesystemCluster
}
```

## PrivateBrandingProperties

class PrivateBrandingProperties extends [WindowsCodeSignProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WindowsCodeSignProperties) {
int BuildMode
string PathIcoFile
string PathIcnsFile
string PathMenuBarIcnsFile
string PathEulaRtf
string PathTilePng
string PathHeaderImage
string PathAppIconImage
string PackageIdentifier
[MacOSCodeSignProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MacOSCodeSignProperties) MacOSCodeSign
}

## ProtectedItemEngineTypePolicy

```java
class ProtectedItemEngineTypePolicy {
bool ShouldRestrictEngineTypeList
List <string> AllowedEngineTypeWhenRestricted
}
```

## PublicBrandingProperties

class PublicBrandingProperties {
string ProductName
string CompanyName
string HelpURL
bool HelpIsPopup
string DefaultLoginServerURL
string TileBackgroundColor
string AccountRegisterURL
bool HideBackgroundLogo
}

## RatelimitOptions

class RatelimitOptions {
List<[RatelimitRule](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RatelimitRule)\> Rules // Omission from JSON document implies an empty array
}

## RatelimitRule

class RatelimitRule {
string MatchRegex
int BytesPerSecond
}

## RegisterOfficeApplicationBeginResponse

class RegisterOfficeApplicationBeginResponse {
string Continuation
string VerificationURL
string UserCode
}

## RegisterOfficeApplicationCheckResponse

class RegisterOfficeApplicationCheckResponse {
string Continuation
bool Completed
string Error
[Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) Result // Omission from JSON document implies zero-initialised Office365Credential class instance
}

## RemoteServerAddress

class RemoteServerAddress {
string Type
string Description
string RemoteAddress // Omission from JSON document implies empty string
string Username // Omission from JSON document implies empty string
string Password // Omission from JSON document implies empty string
[ExternalLDAPAuthenticationSourceSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ExternalLDAPAuthenticationSourceSettings) LDAP // Omission from JSON document implies zero-initialised ExternalLDAPAuthenticationSourceSettings class instance
[B2VirtualStorageRoleSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-B2VirtualStorageRoleSettings) B2 // Omission from JSON document implies zero-initialised B2VirtualStorageRoleSettings class instance
[WasabiVirtualStorageRoleSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WasabiVirtualStorageRoleSettings) Wasabi // Omission from JSON document implies zero-initialised WasabiVirtualStorageRoleSettings class instance
[CustomRemoteBucketSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CustomRemoteBucketSettings) Custom // Omission from JSON document implies zero-initialised CustomRemoteBucketSettings class instance
[S3GenericVirtualStorageRole](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-S3GenericVirtualStorageRole) S3 // Omission from JSON document implies zero-initialised S3GenericVirtualStorageRole class instance

    // Amazon AWS - Virtual Storage Role
    // Omission from JSON document implies zero-initialised AmazonAWSVirtualStorageRoleSettings class instance
    [AmazonAWSVirtualStorageRoleSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AmazonAWSVirtualStorageRoleSettings)      AWS

}

## RemoteStorageOption

class RemoteStorageOption extends [RemoteServerAddress](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteServerAddress) {
bool StorageLimitEnabled
int StorageLimitBytes
bool RebrandStorage
}

## ReplicaServer

class ReplicaServer extends [RemoteServerAddress](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteServerAddress) {
string ReplicaDeletionStrategy // Omission from JSON document implies empty string
}

## ReplicatorStateAPIResponse

class ReplicatorStateAPIResponse {
string Description
string RemoteServerID
int DisplayClass
int ActiveWorkers
int TotalWorkers
int State
int ItemsQueued
int BytesQueued
int LastWorkerSubmitTime
int CurrentTime
int ItemsReplicated
int BytesReplicated
}

## RequestStorageVaultResponseMessage

class RequestStorageVaultResponseMessage extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string DestinationID
}

## RestoreJobAdvancedOptions

```java
class RestoreJobAdvancedOptions {
int Type
bool OverwriteExistingFiles
bool DestIsOriginalLocation
string DestPath
List <string> ExactDestPaths
int ArchiveFormat
[Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) Office365Credential // Omission from JSON document implies zero-initialised Office365Credential class instance
}
```

## RetentionPolicy

class RetentionPolicy {
int Mode
List<[RetentionRange](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionRange)\> Ranges
}

## RetentionRange

class RetentionRange {
int Type
int Timestamp
int Jobs
int Days
int Weeks
int Months
int WeekOffset
int MonthOffset
}

## S3DestinationLocation

class S3DestinationLocation {
string S3Server
bool S3UsesTLS
string S3AccessKey
string S3SecretKey
string S3BucketName
string S3Subdir
bool S3UsesV2Signing
}

## S3GenericVirtualStorageRole

class S3GenericVirtualStorageRole {
string S3Endpoint
string IAMEndpoint
string MasterBucket
string AccessKey
string SecretKey
}

## SFTPDestinationLocation

class SFTPDestinationLocation {
string SFTPServer
string SFTPUsername
string SFTPRemotePath
int SFTPAuthMode
string SFTPPassword
string SFTPPrivateKey
bool SFTPCustomAuth_UseKnownHostsFile
string SFTPCustomAuth_KnownHostsFile
}

## SSHConnection

class SSHConnection {
string SSHServer
string SSHUsername
int SSHAuthMode
string SSHPassword
string SSHPrivateKey
bool SSHCustomAuth_UseKnownHostsFile
string SSHCustomAuth_KnownHostsFile
}

## ScheduleConfig

class ScheduleConfig {
int FrequencyType
int SecondsPast
int Offset // Omission from JSON document implies 0
bool RestrictRuntime
[HourSchedConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-HourSchedConfig) FromTime
[HourSchedConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-HourSchedConfig) ToTime
bool RestrictDays
[DaysOfWeekConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DaysOfWeekConfig) DaysSelect
int RandomDelaySecs // Omission from JSON document implies 0
}

## SearchClause

class SearchClause {
string ClauseType
string RuleField
string RuleOperator
string RuleValue
List<[SearchClause](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SearchClause)\> ClauseChildren // Omission from JSON document implies an empty array
}

## SelfBackupOptions

class SelfBackupOptions {
List<[SelfBackupTarget](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SelfBackupTarget)\> Targets
}

## SelfBackupStatistics

class SelfBackupStatistics {
int CurrentRunStart
int LastRunStart
int LastRunEnd
bool LastRunSuccess
int LastRunSize
}

## SelfBackupTarget

class SelfBackupTarget {
[DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) Location
List<[ScheduleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ScheduleConfig)\> Schedule
string ScheduleTimezone
[RetentionPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionPolicy) RetentionPolicy
string EncryptionKey
int EncryptionKeyFormat
int Compression
bool ExcludeJobsDB
}

## ServerConfigOptions

```java
class ServerConfigOptions {
List <string> ExperimentalOptions // Omission from JSON document implies an empty array
Dictionary<string, [WebhookOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebhookOption)\> WebhookOptions
[LicenseOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-LicenseOptions) License
[BrandingOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrandingOptions) Branding
List<[AllowedAdminUser](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AllowedAdminUser)\> AdminUsers
Dictionary<string, [Organization](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Organization)\> Organizations
Dictionary<string, [ExternalAuthenticationSource](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ExternalAuthenticationSource)\> ExternalAdminUserSources
List<[HTTPConnectorOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-HTTPConnectorOptions)\> ListenAddresses
bool TrustXForwardedFor
[RatelimitOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RatelimitOptions) IPRateLimit
[EmailOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailOptions) Email
[AuthenticationRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AuthenticationRoleOptions) AuthenticationRole
[StorageRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StorageRoleOptions) StorageRole
[SoftwareBuildRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SoftwareBuildRoleOptions) SoftwareBuildRole
[ConstellationRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationRoleOptions) ConstellationRole
[ConstellationRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationRoleOptions) OverseerRole // Omission from JSON document implies zero-initialised ConstellationRoleOptions class instance
[SelfBackupOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SelfBackupOptions) SelfBackup
[SessionOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SessionOptions) SessionSettings
}
```

## ServerConfigOptionsBrandingFragment

class ServerConfigOptionsBrandingFragment {
[BrandingOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrandingOptions) Branding
}

## ServerConfigOptionsSoftwareBuildRoleFragment

class ServerConfigOptionsSoftwareBuildRoleFragment {
[SoftwareBuildRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SoftwareBuildRoleOptions) SoftwareBuildRole
}

## ServerMetaBrandingProperties

class ServerMetaBrandingProperties {
string BrandName
string ProductName
bool HasImage
string ImageEtag
string TopColor
bool HideNewsArea
bool AllowUnauthenticatedDownloads
bool AllowAuthenticatedDownloads
int PruneLogsAfterDays
int ExpiredInSeconds
}

## ServerMetaVersionInfo

```java
class ServerMetaVersionInfo {
string Version
string VersionCodename
bool StorageRole
bool AuthenticationRole
bool SoftwareBuildRole
bool OverseerRole
bool ConstellationRole
List <string> ExperimentalOptions // Omission from JSON document implies an empty array
int ServerStartTime
string ServerStartHash
int CurrentTime
string ServerLicenseHash
int LicenseValidUntil
int EmailsSentSuccessfully
int EmailsSentErrors
int EmailsWaitingInQueue
int ScheduledEmailThreadCurrentState
int ScheduledEmailThreadLastCalculateDurationNanos
int ScheduledEmailThreadWaitingUntil
int ScheduledEmailThreadLastWakeTime
bool ScheduledEmailThreadLastWakeSentEmails
List<[SelfBackupStatistics](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SelfBackupStatistics)\> SelfBackup
}
```

## SessionKeyRegeneratedResponse

class SessionKeyRegeneratedResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string SessionKey
string SessionType
}

## SessionOptions

class SessionOptions {
int ExpiredInSeconds
}

## SizeMeasurement

class SizeMeasurement {
int Size
int MeasureStarted
int MeasureCompleted
}

## SoftwareBuildRoleOptions

class SoftwareBuildRoleOptions {
bool RoleEnabled
bool AllowUnauthenticatedDownloads
}

## SoftwareUpdateNewsResponse

```java
class SoftwareUpdateNewsResponse {
string latest_stable
string latest_prerelease
string downloads_url
List <string> updates_info
}
```

## SourceBasicInfo

```java
class SourceBasicInfo {
string Description
int Size
Dictionary<string, [RetentionPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionPolicy)\> OverrideDestinationRetention // Omission from JSON document implies an empty Dictionary
}
```

## SourceConfig

```java
class SourceConfig {
string Engine
string Description
string OwnerDevice
int CreateTime
int ModifyTime
List <string> PreExec
List <string> ThawExec
List <string> PostExec
Dictionary<string, string> EngineProps
Dictionary<string, [RetentionPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionPolicy)\> OverrideDestinationRetention // Omission from JSON document implies an empty Dictionary
[SourceStatistics](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SourceStatistics) Statistics // Omission from JSON document implies zero-initialised SourceStatistics class instance
}
```

## SourceIncludePattern

class SourceIncludePattern {
string TopDirectory
string Value
}

## SourceStatistics

class SourceStatistics {
[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail) LastBackupJob
[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail) LastSuccessfulBackupJob
}

## SpannedDestinationLocation

class SpannedDestinationLocation {
List<[DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation)\> SpanTargets
bool SpanUseStaticSlots
}

## SpannedStorageExtraInfo

class SpannedStorageExtraInfo {
List<[StorageFreeSpaceInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StorageFreeSpaceInfo)\> Targets
}

## StatResult

class StatResult {
int Buckets
int Users
int Devices
int Boosters
int NetworkDevices
}

## StorageFreeSpaceInfo

class StorageFreeSpaceInfo {
bool Unlimited
float32 UsedPercent
int AvailableBytes
[SpannedStorageExtraInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SpannedStorageExtraInfo) Spanned // Omission from JSON document implies zero-initialised SpannedStorageExtraInfo class instance
[B2StorageExtraInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-B2StorageExtraInfo) B2 // Omission from JSON document implies zero-initialised B2StorageExtraInfo class instance
}

## StorageRoleOptions

class StorageRoleOptions {
bool RoleEnabled
[DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) Storage
List<[LocalStorageDirectory](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-LocalStorageDirectory)\> LocalStorage // Omission from JSON document implies an empty array
List<[ReplicaServer](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ReplicaServer)\> ReplicateTo
}

## StorageVaultProviderPolicy

```java
class StorageVaultProviderPolicy {
bool ShouldRestrictProviderList
List<int> AllowedProvidersWhenRestricted
}
```

## StoredObject

class StoredObject {
string name
int mtime
string type // One of the STOREDOBJECTTYPE\_... constant values
string subtree
int size
string dname // Omission from JSON document implies empty string
string itemClass // Omission from JSON document implies empty string
string from // Omission from JSON document implies empty string
string to // Omission from JSON document implies empty string
int rtime // Omission from JSON document implies 0
bool has_attachments // Omission from JSON document implies false
int stime // Omission from JSON document implies 0
int etime // Omission from JSON document implies 0
bool r // Omission from JSON document implies false
int f // Omission from JSON document implies 0
int b // Omission from JSON document implies 0
int d // Omission from JSON document implies 0
}

## StreamableEvent

class StreamableEvent {
string OwnerOrganizationID
int Type
any Data // Omission from JSON document implies any value
}

## SwiftDestinationLocation

class SwiftDestinationLocation {
string Username // Omission from JSON document implies empty string
string APIKey // Omission from JSON document implies empty string
string Region // Omission from JSON document implies empty string
string AuthURL // Omission from JSON document implies empty string
string Domain // Omission from JSON document implies empty string
string Tenant // Omission from JSON document implies empty string
string TenantDomain // Omission from JSON document implies empty string
string TenantID // Omission from JSON document implies empty string
string TrustID // Omission from JSON document implies empty string
string AuthToken // Omission from JSON document implies empty string
string Prefix // Omission from JSON document implies empty string
string Container // Omission from JSON document implies empty string
string DefaultContainerPolicy // Omission from JSON document implies empty string
}

## TestResponse

class TestResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
bool Exists
}

## TotpRegeneratedResponse

class TotpRegeneratedResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string Image
string URL
string ProfileHash
}

## U2FRegisterRequest

_This type has been deprecated since Comet version 21.12.0_

class U2FRegisterRequest {
string Challenge
string Version
}

## U2FRegisteredKey

_This type has been deprecated since Comet version 21.12.0_

class U2FRegisteredKey {
string AppID
string KeyHandle
string Version
}

## U2FRegistrationChallengeResponse

_This type has been deprecated since Comet version 21.12.0_

class U2FRegistrationChallengeResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string ChallengeID
string AppID
List<[U2FRegisteredKey](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-U2FRegisteredKey)\> RegisteredKeys
List<[U2FRegisterRequest](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-U2FRegisterRequest)\> RegisterRequests
}

## U2FSignRequest

_This type has been deprecated since Comet version 21.12.0_

class U2FSignRequest {
string ChallengeID
string ChallengeData
string AppID
List<[U2FRegisteredKey](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-U2FRegisteredKey)\> RegisteredKeys
}

## U2FSignResponse

_This type has been deprecated since Comet version 21.12.0_

class U2FSignResponse {
string ChallengeID
string KeyHandle
string Signature
string ClientData
}

## UninstallConfig

class UninstallConfig {
bool UninstallFlag
bool RemoveConfigFile
}

## UpdateCampaignDeviceStatus

class UpdateCampaignDeviceStatus {
int Status
}

## UpdateCampaignOptions

This data structure describes which devices should receive a remote software upgrade. Both the target version criteria (UpgradeOlder/ReinstallCurrentVer/DowngradeNewer) and the target device criteria (ApplyDeviceFilter/DeviceFilter) must be met in order for the remote upgrade to be applied.

class UpdateCampaignOptions {
bool Active
bool UpgradeOlder
bool ReinstallCurrentVer
bool DowngradeNewer
bool ForceUpgradeRunning
bool ApplyDeviceFilter
[SearchClause](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SearchClause) DeviceFilter
}

## UpdateCampaignProperties

class UpdateCampaignProperties extends [UpdateCampaignOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignOptions) {
int StartTime
string TargetVersion
}

## UpdateCampaignStatus

class UpdateCampaignStatus extends [UpdateCampaignProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignProperties) {
List<[UpdateCampaignStatusDeviceEntry](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignStatusDeviceEntry)\> Devices
}

## UpdateCampaignStatusDeviceEntry

class UpdateCampaignStatusDeviceEntry extends [UpdateCampaignDeviceStatus](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignDeviceStatus) {
string Username
string DeviceID
}

## UserCustomEmailSettings

class UserCustomEmailSettings {
List<[EmailReportConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailReportConfig)\> Reports
}

## UserOnServer

class UserOnServer {
int ServerID
string Username
}

## UserPolicy

```java
class UserPolicy {
bool PreventRequestStorageVault
bool PreventAddCustomStorageVault
bool PreventEditStorageVault
bool HideCloudStorageBranding
bool PreventDeleteStorageVault
[StorageVaultProviderPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StorageVaultProviderPolicy) StorageVaultProviders
bool PreventNewProtectedItem
bool PreventEditProtectedItem
bool PreventDeleteProtectedItem
[ProtectedItemEngineTypePolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ProtectedItemEngineTypePolicy) ProtectedItemEngineTypes
List<[ExtraFileExclusion](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ExtraFileExclusion)\> FileAndFolderMandatoryExclusions // Omission from JSON document implies an empty array
int ModeScheduleSkipAlreadyRunning // Omission from JSON document implies 0
int ModeAdminResetPassword // Omission from JSON document implies 0
int ModeAdminViewFilenames // Omission from JSON document implies 0
int ModeRequireUserResetPassword // Omission from JSON document implies 0
bool PreventDeleteSingleSnapshots
bool PreventChangeAccountPassword
bool PreventChangeEmailSettings
bool PreventChangeAccountName
bool PreventOpenAppUI
bool RequirePasswordOpenAppUI
bool HideAppImport
bool HideAppVersion
bool PreventOpenWebUI
bool PreventViewDeviceNames
[DefaultEmailReportPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DefaultEmailReportPolicy) DefaultEmailReports
[RetentionPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RetentionPolicy) DefaultStorageVaultRetention
bool EnforceStorageVaultRetention
bool PreventProtectedItemRetention
Dictionary<string, [SourceConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SourceConfig)\> DefaultSources
Dictionary<string, [BackupRuleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupRuleConfig)\> DefaultSourcesBackupRules
Dictionary<string, [DefaultSourceWithOSRestriction](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DefaultSourceWithOSRestriction)\> DefaultSourcesWithOSRestriction
Dictionary<string, [BackupRuleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupRuleConfig)\> DefaultBackupRules
}
```

## UserProfileConfig

This is the main data structure for a user's profile.

```java
class UserProfileConfig {
string Username
string AccountName
string LocalTimezone
string LanguageCode

    // Tenant
    // Omission from JSON document implies empty string
    string                                      OrganizationID
    List <string>                                Emails
    Dictionary<string, [UserCustomEmailSettings](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserCustomEmailSettings)\> OverrideEmailSettings
    bool                                        SendEmailReports
    Dictionary<string, [DestinationConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationConfig)\>       Destinations // Storage Vaults
    Dictionary<string, [SourceConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SourceConfig)\>            Sources // Protected Items
    Dictionary<string, [BackupRuleConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupRuleConfig)\>        BackupRules
    Dictionary<string, [DeviceConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DeviceConfig)\>            Devices
    bool                                        IsSuspended
    bool                                        AllProtectedItemsQuotaEnabled
    int                                         AllProtectedItemsQuotaBytes
    int                                         MaximumDevices
    string                                      PolicyID // If the PolicyID field is set to a non-empty string, the Comet Server will enforce the contents of the Policy field based on the matching server's policy. Otherwise if the PolicyID field is set to an empty string, the administrator may configure any custom values in the Policy field.
    [UserPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserPolicy)                                  Policy
    int                                         PasswordFormat // To change the user's password, use the AdminResetUserPassword API instead of accessing these fields directly. Otherwise, other encrypted fields in the user profile may become corrupted.
    string                                      PasswordHash
    string                                      PasswordRecovery // Omission from JSON document implies empty string
    bool                                        AllowPasswordLogin
    bool                                        AllowPasswordAndTOTPLogin
    int                                         TOTPKeyEncryptionFormat
    string                                      TOTPKey
    bool                                        RequirePasswordChange
    int                                         CreateTime
    string                                      CreationGUID

}
```

## UserProfileFragment

class UserProfileFragment {
string Username
}

## VMDKSnapshotViewOptions

class VMDKSnapshotViewOptions {
bool Enabled
string PartitionGUID
string ListPath
}

## VSSComponent

class VSSComponent {
string Path
string Name
string CType
bool Selectable
}

## VSSWriterInfo

class VSSWriterInfo {
string DisplayName
List<[VSSComponent](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-VSSComponent)\> Components
}

## VaultSnapshot

class VaultSnapshot {
string Snapshot
string Source
int CreateTime
bool HasOriginalPathInfo
}

## WasabiVirtualStorageRoleSettings

class WasabiVirtualStorageRoleSettings {
string MasterBucket
string AccessKey
string SecretKey
}

## WebAuthnAuthenticatorSelection

class WebAuthnAuthenticatorSelection {
string authenticatorAttachment // Omission from JSON document implies empty string
bool requireResidentKey // Omission from JSON document implies false
string userVerification // Omission from JSON document implies empty string
}

## WebAuthnCredential

```java
class WebAuthnCredential {
List <byte> PublicKey
string AttestationType
List <byte> AAGUID
int SignCount
bool CloneWarning
}
```

## WebAuthnCredentialAssertion

class WebAuthnCredentialAssertion {
[WebAuthnPublicKeyCredentialRequestOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnPublicKeyCredentialRequestOptions) publicKey
}

## WebAuthnCredentialDescriptor

```java
class WebAuthnCredentialDescriptor {
string type
List <byte> id
List <string> transports // Omission from JSON document implies an empty array
}
```

## WebAuthnCredentialEntity

class WebAuthnCredentialEntity {
string name
string icon // Omission from JSON document implies empty string
}

## WebAuthnCredentialParameter

class WebAuthnCredentialParameter {
string type
int alg
}

## WebAuthnPublicKeyCredentialCreationOptions

```java
class WebAuthnPublicKeyCredentialCreationOptions {
List <byte> challenge
[WebAuthnRelyingPartyEntity](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnRelyingPartyEntity) rp
[WebAuthnUserEntity](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnUserEntity) user
List<[WebAuthnCredentialParameter](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialParameter)\> pubKeyCredParams // Omission from JSON document implies an empty array
[WebAuthnAuthenticatorSelection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnAuthenticatorSelection) authenticatorSelection // Omission from JSON document implies zero-initialised WebAuthnAuthenticatorSelection class instance
int timeout // Omission from JSON document implies 0
List<[WebAuthnCredentialDescriptor](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialDescriptor)\> excludeCredentials // Omission from JSON document implies an empty array
Dictionary<string, any> extensions // Omission from JSON document implies an empty Dictionary
string attestation // Omission from JSON document implies empty string
}
```

## WebAuthnPublicKeyCredentialRequestOptions

```java
class WebAuthnPublicKeyCredentialRequestOptions {
List <byte> challenge
int timeout // Omission from JSON document implies 0
string rpId // Omission from JSON document implies empty string
List<[WebAuthnCredentialDescriptor](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialDescriptor)\> allowCredentials // Omission from JSON document implies an empty array
string userVerification // Omission from JSON document implies empty string
Dictionary<string, any> extensions // Omission from JSON document implies an empty Dictionary
}
```

## WebAuthnRegistrationChallengeResponse

class WebAuthnRegistrationChallengeResponse extends [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) {
string ChallengeID
[WebAuthnPublicKeyCredentialCreationOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnPublicKeyCredentialCreationOptions) CredentialCreationOptions
}

## WebAuthnRelyingPartyEntity

class WebAuthnRelyingPartyEntity extends [WebAuthnCredentialEntity](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialEntity) {
string id
}

## WebAuthnSignRequest

class WebAuthnSignRequest {
string ChallengeID
[WebAuthnCredentialAssertion](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialAssertion) Assertion
}

## WebAuthnSignResponse

class WebAuthnSignResponse {
string ChallengeID
string CredentialJSON
}

## WebAuthnUserEntity

```java
class WebAuthnUserEntity extends [WebAuthnCredentialEntity](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnCredentialEntity) {
string displayName // Omission from JSON document implies empty string
List <byte> id
}
```

## WebInterfaceBrandingProperties

class WebInterfaceBrandingProperties {
string BrandName
string LogoImage
string TopColor
string Favicon
bool HideNewsArea
}

## WebhookOption

```java
class WebhookOption {
string URL
List<int> WhiteListedEventTypes
Dictionary<string, string> CustomHeaders
}
```

## WinSMBAuth

class WinSMBAuth {
string SharePath
string Username
string Password
int PasswordFormat
}

## WindowsCodeSignProperties

class WindowsCodeSignProperties {
string WindowsCodeSignPKCS12FilePath
int WindowsCodeSignPKCS12PasswordFormat
string WindowsCodeSignPKCS12Password
string WindowsCodeSignPKCS11Engine
string WindowsCodeSignPKCS11Module
string WindowsCodeSignPKCS11Certfile
string WindowsCodeSignPKCS11KeyID
int WindowsCodeSignPKCS11PasswordFormat
string WindowsCodeSignPKCS11Password
}
