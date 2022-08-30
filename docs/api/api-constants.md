---
title: API Constants
sidebar_position: 3
---

# API Constants

## APPLICATION

| Name                           | Type   | Value      | Comment |
| ------------------------------ | ------ | ---------- | ------- |
| `APPLICATION_VERSION`          | string | `"22.6.2"` |         |
| `APPLICATION_VERSION_MAJOR`    | int    | `22`       |         |
| `APPLICATION_VERSION_MINOR`    | int    | `6`        |         |
| `APPLICATION_VERSION_REVISION` | int    | `2`        |         |

## BACKUPJOBAUTORETENTION

| Name                                | Type | Value | Comment                                                                                                                                                         |
| ----------------------------------- | ---- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BACKUPJOBAUTORETENTION_AUTOMATIC`  | int  | `0`   | AutoRetentionLevel: The system will automatically choose how often to run an automatic Retention Pass after each backup                                         |
| `BACKUPJOBAUTORETENTION_IMMEDIATE`  | int  | `1`   | AutoRetentionLevel: The system will run a Retention Pass after every single backup This is more system-intensive, but is the most responsive at freeing storage |
| `BACKUPJOBAUTORETENTION_MORE_OFTEN` | int  | `2`   | AutoRetentionLevel: The system will follow the automatic ruleset for a 'High Power'                                                                             |
| `BACKUPJOBAUTORETENTION_LESS_OFTEN` | int  | `3`   | AutoRetentionLevel: The system will follow the automatic ruleset for a 'Low Power'                                                                              |

## CLIENTBRANDINGBUILD

| Name                           | Type | Value | Comment                                                                                                                                               |
| ------------------------------ | ---- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENTBRANDINGBUILD_CUSTOM`   | int  | `0`   | ClientBrandingBuildMode: Public-Doc: The software client will be custom-built by this Comet Server, allowing custom branding, default server URL, and |
| `CLIENTBRANDINGBUILD_PREBUILT` | int  | `1`   | ClientBrandingBuildMode: Public-Doc: A pre-built software client will be served, with Comet-branding, no server URL, and Comet                        |

## COMPRESS

| Name               | Type | Value            | Comment      |
| ------------------ | ---- | ---------------- | ------------ |
| `COMPRESS_INVALID` | int  | `0`              | CompressMode |
| `COMPRESS_LVL_1`   | int  | `1`              | CompressMode |
| `COMPRESS_LVL_2`   | int  | `2`              | CompressMode |
| `COMPRESS_LVL_3`   | int  | `3`              | CompressMode |
| `COMPRESS_LVL_4`   | int  | `4`              | CompressMode |
| `COMPRESS_LVL_5`   | int  | `5`              | CompressMode |
| `COMPRESS_MAX`     | int  | `COMPRESS_LVL_5` | CompressMode |
| `COMPRESS_DEFAULT` | int  | `COMPRESS_LVL_4` | CompressMode |

## DEFAULT

| Name               | Type   | Value     | Comment      |
| ------------------ | ------ | --------- | ------------ |
| `DEFAULT_LANGUAGE` | string | `"en_US"` | LanguageCode |
| `DEFAULT_TIMEZONE` | string | `"UTC"`   |              |

## DESTINATION

| Name                                   | Type | Value | Comment      |
| -------------------------------------- | ---- | ----- | ------------ |
| `DESTINATION_SFTP_AUTHMODE_NATIVE`     | int  | `0`   | SftpAuthMode |
| `DESTINATION_SFTP_AUTHMODE_PASSWORD`   | int  | `1`   | SftpAuthMode |
| `DESTINATION_SFTP_AUTHMODE_PRIVATEKEY` | int  | `2`   | SftpAuthMode |

## DESTINATIONTYPE

| Name                        | Type | Value  | Comment |
| --------------------------- | ---- | ------ | ------- |
| `DESTINATIONTYPE___INVALID` | int  | `0`    |         |
| `DESTINATIONTYPE_S3`        | int  | `1000` |         |
| `DESTINATIONTYPE_SFTP`      | int  | `1001` |         |
| `DESTINATIONTYPE_LOCALCOPY` | int  | `1002` |         |
| `DESTINATIONTYPE_COMET`     | int  | `1003` |         |
| `DESTINATIONTYPE_FTP`       | int  | `1004` |         |
| `DESTINATIONTYPE_AZUREBLOB` | int  | `1005` |         |
| `DESTINATIONTYPE_SPANNED`   | int  | `1006` |         |
| `DESTINATIONTYPE_SWIFT`     | int  | `1007` |         |
| `DESTINATIONTYPE_B2`        | int  | `1008` |         |
| `DESTINATIONTYPE_LATEST`    | int  | `1100` |         |
| `DESTINATIONTYPE_ALL`       | int  | `1101` |         |

## EMAIL

| Name                             | Type   | Value                      | Comment                         |
| -------------------------------- | ------ | -------------------------- | ------------------------------- |
| `EMAIL_WORKER_STATE_NOT_STARTED` | int    | `0`                        |                                 |
| `EMAIL_WORKER_STATE_STARTED`     | int    | `1`                        |                                 |
| `EMAIL_WORKER_STATE_CALCULATING` | int    | `2`                        |                                 |
| `EMAIL_WORKER_STATE_WAITING`     | int    | `3`                        |                                 |
| `EMAIL_WORKER_STATE_SENDING`     | int    | `4`                        |                                 |
| `EMAIL_DELIVERY_NONE`            | string | `""`                       | EmailDeliveryType               |
| `EMAIL_DELIVERY_MX_DIRECT`       | string | `"builtin"`                | EmailDeliveryType               |
| `EMAIL_DELIVERY_SMTP`            | string | `"smtp"`                   | EmailDeliveryType               |
| `EMAIL_DELIVERY_SMTP_SSL`        | string | `"smtp-ssl"`               | EmailDeliveryType               |
| `EMAIL_DELIVERY_BUILTIN`         | string | `EMAIL_DELIVERY_MX_DIRECT` | EmailDeliveryType: Legacy alias |

## EMAILREPORTTYPE

| Name                        | Type | Value | Comment         |
| --------------------------- | ---- | ----- | --------------- |
| `EMAILREPORTTYPE_IMMEDIATE` | int  | `0`   | EmailReportType |
| `EMAILREPORTTYPE_SUMMARY`   | int  | `1`   | EmailReportType |

## ENCRYPTIONMETHOD

| Name                            | Type | Value | Comment |
| ------------------------------- | ---- | ----- | ------- |
| `ENCRYPTIONMETHOD_UNCONFIGURED` | int  | `0`   |         |

## ENGINE

| Name                           | Type   | Value                       | Comment |
| ------------------------------ | ------ | --------------------------- | ------- |
| `ENGINE_BUILTIN_FILE`          | string | `"engine1/file"`            |         |
| `ENGINE_BUILTIN_STDOUT`        | string | `"engine1/stdout"`          |         |
| `ENGINE_BUILTIN_MYSQL`         | string | `"engine1/mysql"`           |         |
| `ENGINE_BUILTIN_SYSTEMSTATE`   | string | `"engine1/systemstate"`     |         |
| `ENGINE_BUILTIN_MSSQL`         | string | `"engine1/mssql"`           |         |
| `ENGINE_BUILTIN_WINDOWSSYSTEM` | string | `"engine1/windowssystem"`   |         |
| `ENGINE_BUILTIN_EXCHANGEEDB`   | string | `"engine1/exchangeedb"`     |         |
| `ENGINE_BUILTIN_VSSWRITER`     | string | `"engine1/vsswriter"`       |         |
| `ENGINE_BUILTIN_HYPERV`        | string | `"engine1/hyperv"`          |         |
| `ENGINE_BUILTIN_WINDISK`       | string | `"engine1/windisk"`         |         |
| `ENGINE_BUILTIN_MONGODB`       | string | `"engine1/mongodb"`         |         |
| `ENGINE_BUILTIN_MSOFFICE`      | string | `"engine1/winmsofficemail"` |         |

## FTPS

| Name                  | Type | Value | Comment      |
| --------------------- | ---- | ----- | ------------ |
| `FTPS_MODE_PLAINTEXT` | int  | `0`   | FtpsModeType |
| `FTPS_MODE_IMPLICIT`  | int  | `1`   | FtpsModeType |
| `FTPS_MODE_EXPLICIT`  | int  | `2`   | FtpsModeType |

## InstallerMetadataFile

| Name                    | Type   | Value              | Comment |
| ----------------------- | ------ | ------------------ | ------- |
| `InstallerMetadataFile` | string | `"installer.json"` |         |

## JOB

| Name                                   | Type | Value  | Comment                                                                                                                         |
| -------------------------------------- | ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `JOB_CLASSIFICATION__MIN`              | int  | `4000` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_UNKNOWN`           | int  | `4000` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_BACKUP`            | int  | `4001` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_RESTORE`           | int  | `4002` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_RETENTION`         | int  | `4003` | JobClassification: Automatic or manual retention cleaning                                                                       |
| `JOB_CLASSIFICATION_UNLOCK`            | int  | `4004` | JobClassification: Another process needed exclusive Vault access ( for retention) but the process This task cleans up exclusive |
| `JOB_CLASSIFICATION_DELETE_CUSTOM`     | int  | `4005` | JobClassification: A specific snapshot has been deleted via the Restore                                                         |
| `JOB_CLASSIFICATION_REMEASURE`         | int  | `4006` | JobClassification: Explicitly re-measuring the size of a Vault (right-click > Advanced menu).                                   |
| `JOB_CLASSIFICATION_UPDATE`            | int  | `4007` | JobClassification: Software update                                                                                              |
| `JOB_CLASSIFICATION_IMPORT`            | int  | `4008` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_REINDEX`           | int  | `4009` | JobClassification: Repair indexes                                                                                               |
| `JOB_CLASSIFICATION_DEEPVERIFY`        | int  | `4010` | JobClassification                                                                                                               |
| `JOB_CLASSIFICATION_UNINSTALL`         | int  | `4011` | JobClassification: Software uninstall                                                                                           |
| `JOB_CLASSIFICATION__MAX`              | int  | `4999` | JobClassification                                                                                                               |
| `JOB_STATUS_STOP_SUCCESS__MIN`         | int  | `5000` | JobStatus                                                                                                                       |
| `JOB_STATUS_STOP_SUCCESS`              | int  | `5000` | JobStatus                                                                                                                       |
| `JOB_STATUS_STOP_SUCCESS__MAX`         | int  | `5999` | JobStatus                                                                                                                       |
| `JOB_STATUS_RUNNING__MIN`              | int  | `6000` | JobStatus                                                                                                                       |
| `JOB_STATUS_RUNNING_INDETERMINATE`     | int  | `6000` | JobStatus: Unused                                                                                                               |
| `JOB_STATUS_RUNNING_ACTIVE`            | int  | `6001` | JobStatus                                                                                                                       |
| `JOB_STATUS_RUNNING_REVIVED`           | int  | `6002` | JobStatus: A backup job that was marked as stopped or abandoned, but has somehow continued to run                               |
| `JOB_STATUS_RUNNING__MAX`              | int  | `6999` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED__MIN`               | int  | `7000` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_TIMEOUT`            | int  | `7000` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_WARNING`            | int  | `7001` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_ERROR`              | int  | `7002` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_QUOTA`              | int  | `7003` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_SCHEDULEMISSED`     | int  | `7004` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_CANCELLED`          | int  | `7005` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_SKIPALREADYRUNNING` | int  | `7006` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED_ABANDONED`          | int  | `7007` | JobStatus                                                                                                                       |
| `JOB_STATUS_FAILED__MAX`               | int  | `7999` | JobStatus                                                                                                                       |

## LDAPSECURITYMETHOD

| Name                          | Type   | Value        | Comment            |
| ----------------------------- | ------ | ------------ | ------------------ |
| `LDAPSECURITYMETHOD_PLAIN`    | string | `"plain"`    | LDAPSecurityMethod |
| `LDAPSECURITYMETHOD_LDAPS`    | string | `"ldaps"`    | LDAPSecurityMethod |
| `LDAPSECURITYMETHOD_STARTTLS` | string | `"starttls"` | LDAPSecurityMethod |

## MACOSCODESIGN

| Name                                       | Type | Value | Comment            |
| ------------------------------------------ | ---- | ----- | ------------------ |
| `MACOSCODESIGN_LEVEL_SIGN`                 | int  | `0`   | MacOSCodesignLevel |
| `MACOSCODESIGN_LEVEL_SIGN_NOTARISE`        | int  | `1`   | MacOSCodesignLevel |
| `MACOSCODESIGN_LEVEL_SIGN_NOTARISE_STAPLE` | int  | `2`   | MacOSCodesignLevel |

## MIXED

| Name                                         | Type | Value | Comment |
| -------------------------------------------- | ---- | ----- | ------- |
| `MIXED_VIRTUAL_ACCOUNT_TYPE_USER`            | int  | `1`   |         |
| `MIXED_VIRTUAL_ACCOUNT_TYPE_GROUP`           | int  | `2`   |         |
| `MIXED_VIRTUAL_ACCOUNT_TYPE_TEAM_GROUP`      | int  | `3`   |         |
| `MIXED_VIRTUAL_ACCOUNT_TYPE_SHAREPOINT_ONLY` | int  | `4`   |         |

## MONGODB

| Name                   | Type | Value   | Comment |
| ---------------------- | ---- | ------- | ------- |
| `MONGODB_DEFAULT_PORT` | int  | `27017` |         |

## MSSQL

| Name                        | Type   | Value            | Comment       |
| --------------------------- | ------ | ---------------- | ------------- |
| `MSSQL_AUTH_WINDOWS`        | string | `"windows"`      | MSSQLAuthMode |
| `MSSQL_AUTH_NATIVE`         | string | `"native"`       | MSSQLAuthMode |
| `MSSQL_METHOD_OLEDB_NATIVE` | string | `"OLEDB_NATIVE"` | MSSQLMethod   |
| `MSSQL_METHOD_OLEDB_32`     | string | `"OLEDB_32"`     | MSSQLMethod   |

## OFFICE365

| Name                       | Type   | Value                 | Comment |
| -------------------------- | ------ | --------------------- | ------- |
| `OFFICE365_REGION_PUBLIC`  | string | `"GlobalPublicCloud"` |         |
| `OFFICE365_REGION_CHINA`   | string | `"ChinaCloud"`        |         |
| `OFFICE365_REGION_GERMANY` | string | `"GermanCloud"`       |         |
| `OFFICE365_REGION_US_GOVT` | string | `"USGovtGccCloud"`    |         |
| `OFFICE365_REGION_US_DOD`  | string | `"USGovtGccDoDCloud"` |         |

## OS

| Name                    | Type | Value | Comment                         |
| ----------------------- | ---- | ----- | ------------------------------- |
| `OS_ANY`                | int  | `0`   | ExtraFileExclusionOSRestriction |
| `OS_ONLY_WINDOWS`       | int  | `1`   | ExtraFileExclusionOSRestriction |
| `OS_ONLY_WINDOWS_X8632` | int  | `2`   | ExtraFileExclusionOSRestriction |
| `OS_ONLY_WINDOWS_X8664` | int  | `3`   | ExtraFileExclusionOSRestriction |
| `OS_ONLY_MACOS`         | int  | `4`   | ExtraFileExclusionOSRestriction |
| `OS_ONLY_LINUX`         | int  | `5`   | ExtraFileExclusionOSRestriction |

## PASSWORD

| Name                        | Type | Value | Comment |
| --------------------------- | ---- | ----- | ------- |
| `PASSWORD_FORMAT_PLAINTEXT` | int  | `0`   |         |

## RELEASE

| Name               | Type   | Value       | Comment |
| ------------------ | ------ | ----------- | ------- |
| `RELEASE_CODENAME` | string | `"Voyager"` |         |

## REMOTESERVER

| Name                      | Type   | Value      | Comment          |
| ------------------------- | ------ | ---------- | ---------------- |
| `REMOTESERVER_COMET`      | string | `"comet"`  | RemoteServerType |
| `REMOTESERVER_LDAP`       | string | `"ldap"`   | RemoteServerType |
| `REMOTESERVER_B2`         | string | `"b2"`     | RemoteServerType |
| `REMOTESERVER_WASABI`     | string | `"wasabi"` | RemoteServerType |
| `REMOTESERVER_CUSTOM`     | string | `"custom"` | RemoteServerType |
| `REMOTESERVER_S3_GENERIC` | string | `"s3"`     | RemoteServerType |
| `REMOTESERVER_AWS`        | string | `"aws"`    | RemoteServerType |

## REPLICATOR

| Name                                        | Type | Value | Comment                |
| ------------------------------------------- | ---- | ----- | ---------------------- |
| `REPLICATOR_STATE_NONE`                     | int  | `0`   | ReplicatorState        |
| `REPLICATOR_STATE_FILE_LIST_WORKER_STARTED` | int  | `1`   | ReplicatorState        |
| `REPLICATOR_STATE_FILE_LIST_SYNC_RUNNING`   | int  | `2`   | ReplicatorState        |
| `REPLICATOR_STATE_FILE_LIST_SYNC_FINISHED`  | int  | `4`   | ReplicatorState        |
| `REPLICATOR_STATE_WORKERS_STARTED`          | int  | `8`   | ReplicatorState        |
| `REPLICATOR_DISPLAYCLASS_STORAGE`           | int  | `100` | ReplicatorDisplayClass |
| `REPLICATOR_DISPLAYCLASS_USER`              | int  | `101` | ReplicatorDisplayClass |

## RESTOREARCHIVEFORMAT

| Name                           | Type | Value | Comment                                  |
| ------------------------------ | ---- | ----- | ---------------------------------------- |
| `RESTOREARCHIVEFORMAT_TAR`     | int  | `0`   | RestoreArchiveFormat                     |
| `RESTOREARCHIVEFORMAT_TARGZ`   | int  | `1`   | RestoreArchiveFormat                     |
| `RESTOREARCHIVEFORMAT_ZIP`     | int  | `2`   | RestoreArchiveFormat                     |
| `RESTOREARCHIVEFORMAT_SQFS`    | int  | `3`   | RestoreArchiveFormat: SquashFS container |
| `RESTOREARCHIVEFORMAT_TARZSTD` | int  | `4`   | RestoreArchiveFormat                     |

## RESTORETYPE

| Name                            | Type | Value | Comment                                  |
| ------------------------------- | ---- | ----- | ---------------------------------------- |
| `RESTORETYPE_INVALID`           | int  | `-1`  | RestoreType                              |
| `RESTORETYPE_FILE`              | int  | `0`   | RestoreType                              |
| `RESTORETYPE_NULL`              | int  | `1`   | RestoreType                              |
| `RESTORETYPE_PROCESS_PERFILE`   | int  | `2`   | RestoreType                              |
| `RESTORETYPE_PROCESS_ARCHIVE`   | int  | `3`   | RestoreType                              |
| `RESTORETYPE_WINDISK`           | int  | `4`   | RestoreType                              |
| `RESTORETYPE_FILE_ARCHIVE`      | int  | `5`   | RestoreType                              |
| `RESTORETYPE_OFFICE365_CLOUD`   | int  | `6`   | RestoreType                              |
| `RESTORETYPE_VMDK_FILE`         | int  | `7`   | RestoreType                              |
| `RESTORETYPE_VMDK_FILE_NULL`    | int  | `8`   | RestoreType                              |
| `RESTORETYPE_VMDK_FILE_ARCHIVE` | int  | `9`   | RestoreType                              |
| `RESTORETYPE_PROCESS_TARBALL`   | int  | `3`   | RestoreType: RESTORETYPE_PROCESS_ARCHIVE |

## RETENTIONMODE

| Name                            | Type | Value | Comment                                                                        |
| ------------------------------- | ---- | ----- | ------------------------------------------------------------------------------ |
| `RETENTIONMODE_KEEP_EVERYTHING` | int  | `801` | RetentionMode: If this mode is set in a RetentionPolicy, then Ranges should be |
| `RETENTIONMODE_DELETE_EXCEPT`   | int  | `802` | RetentionMode: Delete everything except for jobs matching the ranges in        |

## RETENTIONRANGE

| Name                                               | Type | Value              | Comment                                      |
| -------------------------------------------------- | ---- | ------------------ | -------------------------------------------- |
| `RETENTIONRANGE__LOWEST`                           | int  | `900`              | RetentionRangeType                           |
| `RETENTIONRANGE_MOST_RECENT_X_JOBS`                | int  | `900`              | RetentionRangeType: Uses Jobs                |
| `RETENTIONRANGE_NEWER_THAN_X`                      | int  | `901`              | RetentionRangeType: Uses Timestamp           |
| `RETENTIONRANGE_JOBS_SINCE`                        | int  | `902`              | RetentionRangeType: Uses Days, Weeks, Months |
| `RETENTIONRANGE_FIRST_JOB_FOR_EACH_LAST_X_DAYS`    | int  | `903`              | RetentionRangeType: Uses Days                |
| `RETENTIONRANGE__RESERVED904`                      | int  | `904`              | RetentionRangeType: Removed                  |
| `RETENTIONRANGE_FIRST_JOB_FOR_LAST_X_MONTHS`       | int  | `905`              | RetentionRangeType: Uses Months, MonthOffset |
| `RETENTIONRANGE_FIRST_JOB_FOR_LAST_X_WEEKS`        | int  | `906`              | RetentionRangeType: Uses Weeks, WeekOffset   |
| `RETENTIONRANGE_LAST_X_BACKUPS_ONE_FOR_EACH_DAY`   | int  | `907`              | RetentionRangeType: Uses Jobs                |
| `RETENTIONRANGE_LAST_X_BACKUPS_ONE_FOR_EACH_WEEK`  | int  | `908`              | RetentionRangeType: Uses Jobs                |
| `RETENTIONRANGE_LAST_X_BACKUPS_ONE_FOR_EACH_MONTH` | int  | `909`              | RetentionRangeType: Uses Jobs                |
| `RETENTIONRANGE__HIGHEST`                          | int  | `909`              | RetentionRangeType                           |
| `RETENTIONRANGE_MAXINT`                            | int  | `1125899906842624` |                                              |

## SCHEDULE

| Name                             | Type | Value              | Comment                                                                   |
| -------------------------------- | ---- | ------------------ | ------------------------------------------------------------------------- |
| `SCHEDULE_FREQUENCY_LOWEST`      | int  | `8010`             |                                                                           |
| `SCHEDULE_FREQUENCY_ONCEONLY`    | int  | `8010`             | epoch time                                                                |
| `SCHEDULE_FREQUENCY_DAILY`       | int  | `8011`             | seconds past 00:00 local time                                             |
| `SCHEDULE_FREQUENCY_HOURLY`      | int  | `8012`             | seconds past \*:00 local time                                             |
| `SCHEDULE_FREQUENCY_WEEKLY`      | int  | `8013`             | seconds past 00:00 Sunday, local time                                     |
| `SCHEDULE_FREQUENCY_MONTHLY`     | int  | `8014`             | seconds past 00:00 1st, local time                                        |
| `SCHEDULE_FREQUENCY_PERIODIC`    | int  | `8015`             | SecondsPast: number of seconds per Offset: Shunt seconds after unix epoch |
| `SCHEDULE_FREQUENCY_HIGHEST`     | int  | `8015`             |                                                                           |
| `SCHEDULE_MAX_RANDOM_DELAY_SECS` | int  | `18000`            | Maximum random delay (5 hours)                                            |
| `SCHEDULE_MAXINT`                | int  | `1125899906842624` | 2^50 (1 << 50)                                                            |

## SEARCHCLAUSE

| Name                   | Type   | Value       | Comment          |
| ---------------------- | ------ | ----------- | ---------------- |
| `SEARCHCLAUSE_RULE`    | string | `""`        | SearchClauseType |
| `SEARCHCLAUSE_AND`     | string | `"and"`     | SearchClauseType |
| `SEARCHCLAUSE_OR`      | string | `"or"`      | SearchClauseType |
| `SEARCHCLAUSE_NOT_AND` | string | `"not_and"` | SearchClauseType |
| `SEARCHCLAUSE_NOT_OR`  | string | `"not_or"`  | SearchClauseType |

## SEARCHOPERATOR

| Name                                   | Type   | Value                  | Comment |
| -------------------------------------- | ------ | ---------------------- | ------- |
| `SEARCHOPERATOR_STRING_EQ`             | string | `"str_eq"`             |         |
| `SEARCHOPERATOR_STRING_NEQ`            | string | `"str_neq"`            |         |
| `SEARCHOPERATOR_STRING_CONTAINS`       | string | `"str_contains"`       |         |
| `SEARCHOPERATOR_STRING_NCONTAINS`      | string | `"str_ncontains"`      |         |
| `SEARCHOPERATOR_STRING_STARTSWITH`     | string | `"str_startswith"`     |         |
| `SEARCHOPERATOR_STRING_NSTARTSWITH`    | string | `"str_nstartswith"`    |         |
| `SEARCHOPERATOR_STRING_ENDSWITH`       | string | `"str_endswith"`       |         |
| `SEARCHOPERATOR_STRING_NENDSWITH`      | string | `"str_nendswith"`      |         |
| `SEARCHOPERATOR_STRING_EQ_CI`          | string | `"str_eq_ci"`          |         |
| `SEARCHOPERATOR_STRING_NEQ_CI`         | string | `"str_neq_ci"`         |         |
| `SEARCHOPERATOR_STRING_CONTAINS_CI`    | string | `"str_contains_ci"`    |         |
| `SEARCHOPERATOR_STRING_NCONTAINS_CI`   | string | `"str_ncontains_ci"`   |         |
| `SEARCHOPERATOR_STRING_STARTSWITH_CI`  | string | `"str_startswith_ci"`  |         |
| `SEARCHOPERATOR_STRING_NSTARTSWITH_CI` | string | `"str_nstartswith_ci"` |         |
| `SEARCHOPERATOR_STRING_ENDSWITH_CI`    | string | `"str_endswith_ci"`    |         |
| `SEARCHOPERATOR_STRING_NENDSWITH_CI`   | string | `"str_nendswith_ci"`   |         |
| `SEARCHOPERATOR_STRING_REGEXMATCH`     | string | `"str_regexmatch"`     |         |
| `SEARCHOPERATOR_STRING_NREGEXMATCH`    | string | `"str_nregexmatch"`    |         |
| `SEARCHOPERATOR_INT_EQ`                | string | `"int_eq"`             |         |
| `SEARCHOPERATOR_INT_NEQ`               | string | `"int_neq"`            |         |
| `SEARCHOPERATOR_INT_GT`                | string | `"int_gt"`             |         |
| `SEARCHOPERATOR_INT_GTE`               | string | `"int_gte"`            |         |
| `SEARCHOPERATOR_INT_LT`                | string | `"int_lt"`             |         |
| `SEARCHOPERATOR_INT_LTE`               | string | `"int_lte"`            |         |
| `SEARCHOPERATOR_BOOL_IS`               | string | `"bool_is"`            |         |
| `SEARCHOPERATOR_BOOL_NIS`              | string | `"bool_nis"`           |         |

## SERVICE

| Name                 | Type | Value | Comment |
| -------------------- | ---- | ----- | ------- |
| `SERVICE_CALENDAR`   | int  | `1`   |         |
| `SERVICE_CONTACT`    | int  | `2`   |         |
| `SERVICE_MAIL`       | int  | `4`   |         |
| `SERVICE_SHAREPOINT` | int  | `8`   |         |
| `SERVICE_ONEDRIVE`   | int  | `16`  |         |

## SETTING

| Name                           | Type | Value | Comment            |
| ------------------------------ | ---- | ----- | ------------------ |
| `SETTING_SYSTEM_DEFAULT`       | int  | `0`   | DefaultSettingMode |
| `SETTING_OPTIONAL_DEFAULT_ON`  | int  | `1`   | DefaultSettingMode |
| `SETTING_OPTIONAL_DEFAULT_OFF` | int  | `2`   | DefaultSettingMode |
| `SETTING_ENFORCED_ON`          | int  | `3`   | DefaultSettingMode |
| `SETTING_ENFORCED_OFF`         | int  | `4`   | DefaultSettingMode |

## SEVERITY

| Name               | Type   | Value | Comment  |
| ------------------ | ------ | ----- | -------- |
| `SEVERITY_INFO`    | string | `"I"` | Severity |
| `SEVERITY_WARNING` | string | `"W"` | Severity |
| `SEVERITY_ERROR`   | string | `"E"` | Severity |

## SEVT

| Name                   | Type | Value  | Comment                                                                                                                                      |
| ---------------------- | ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `SEVT__MIN`            | int  | `4000` | StreamableEventType                                                                                                                          |
| `SEVT_META_HELLO`      | int  | `4000` | StreamableEventType: Event is emitted when the webhook is registered, or when the server starts The Data associated is ServerMetaVersionInfo |
| `SEVT_ACCOUNT_NEW`     | int  | `4100` | StreamableEventType: Data is the profile object                                                                                              |
| `SEVT_ACCOUNT_REMOVED` | int  | `4101` | StreamableEventType: Data is the username                                                                                                    |
| `SEVT_ACCOUNT_UPDATED` | int  | `4102` | StreamableEventType: Data is the profile object                                                                                              |
| `SEVT_JOB_NEW`         | int  | `4200` | StreamableEventType                                                                                                                          |
| `SEVT_JOB_COMPLETED`   | int  | `4201` | StreamableEventType                                                                                                                          |
| `SEVT_BUCKET_NEW`      | int  | `4300` | StreamableEventType: Data is the string bucket ref                                                                                           |
| `SEVT__MAX`            | int  | `4999` | StreamableEventType                                                                                                                          |

## SSHCONNECTION

| Name                                | Type | Value | Comment                    |
| ----------------------------------- | ---- | ----- | -------------------------- |
| `SSHCONNECTION_AUTHMODE__INVALID`   | int  | `0`   | SSHAuthMode                |
| `SSHCONNECTION_AUTHMODE_PASSWORD`   | int  | `1`   | SSHAuthMode                |
| `SSHCONNECTION_AUTHMODE_PRIVATEKEY` | int  | `2`   | SSHAuthMode: change values |

## STOREDOBJECTTYPE

| Name                                     | Type   | Value                     | Comment                  |
| ---------------------------------------- | ------ | ------------------------- | ------------------------ |
| `STOREDOBJECTTYPE_FILE`                  | string | `"file"`                  | StoredObjectType         |
| `STOREDOBJECTTYPE_DIRECTORY`             | string | `"dir"`                   | StoredObjectType         |
| `STOREDOBJECTTYPE_SYMLINK`               | string | `"symlink"`               | StoredObjectType         |
| `STOREDOBJECTTYPE_UNIXBLOCKDEVICE`       | string | `"dev"`                   | StoredObjectType         |
| `STOREDOBJECTTYPE_UNIXCHARDEVICE`        | string | `"chardev"`               | StoredObjectType         |
| `STOREDOBJECTTYPE_UNIXFIFO`              | string | `"fifo"`                  | StoredObjectType         |
| `STOREDOBJECTTYPE_UNIXSOCKET`            | string | `"socket"`                | StoredObjectType         |
| `STOREDOBJECTTYPE_WINEFS`                | string | `"winefs"`                | StoredObjectType         |
| `STOREDOBJECTTYPE_EMAILMESSAGE`          | string | `"emailmessage"`          | StoredObjectType: "file" |
| `STOREDOBJECTTYPE_EMAILFOLDER`           | string | `"mailfolder"`            | StoredObjectType: "dir"  |
| `STOREDOBJECTTYPE_OFFICECONTACT`         | string | `"contact"`               | StoredObjectType: "file" |
| `STOREDOBJECTTYPE_OFFICECONTACTFOLDER`   | string | `"contactfolder"`         | StoredObjectType: "dir"  |
| `STOREDOBJECTTYPE_OFFICECALENDAREVENT`   | string | `"calendarevent"`         | StoredObjectType: "file" |
| `STOREDOBJECTTYPE_OFFICECALENDAR`        | string | `"calendar"`              | StoredObjectType: "dir"  |
| `STOREDOBJECTTYPE_MSSITE`                | string | `"mssite"`                | StoredObjectType         |
| `STOREDOBJECTTYPE_MSSITE_TEAM`           | string | `"mssiteteam"`            | StoredObjectType         |
| `STOREDOBJECTTYPE_MSSITELISTENTITY`      | string | `"mssitelistentity"`      | StoredObjectType         |
| `STOREDOBJECTTYPE_MSSITEITEMENTITY`      | string | `"mssiteitementity"`      | StoredObjectType         |
| `STOREDOBJECTTYPE_MSSITELISTDRIVEENTITY` | string | `"mssitelistdriveentity"` | StoredObjectType         |
| `STOREDOBJECTTYPE_VMDK_FILE`             | string | `"vmdkfile"`              | StoredObjectType         |
| `STOREDOBJECTTYPE_VMDK_DIRECTORY`        | string | `"vmdkdir"`               | StoredObjectType         |
| `STOREDOBJECTTYPE_VMDK_WINEFS`           | string | `"vmdkwinefs"`            | StoredObjectType         |
| `STOREDOBJECTTYPE_VMDK_SYMLINK`          | string | `"vmdksymlink"`           | StoredObjectType         |

## TOTPRequiredError

| Name                | Type   | Value                 | Comment |
| ------------------- | ------ | --------------------- | ------- |
| `TOTPRequiredError` | string | `"ERR_TOTP_REQUIRED"` |         |

## UPDATESTATUS

| Name                            | Type | Value | Comment                                           |
| ------------------------------- | ---- | ----- | ------------------------------------------------- |
| `UPDATESTATUS_NOT_SEEN`         | int  | `0`   | UpdateStatus                                      |
| `UPDATESTATUS_INELIGIBLE`       | int  | `1`   | UpdateStatus                                      |
| `UPDATESTATUS_PENDING`          | int  | `2`   | UpdateStatus                                      |
| `UPDATESTATUS_REQUEST_MADE`     | int  | `3`   | UpdateStatus                                      |
| `UPDATESTATUS_UPDATE_FAILED`    | int  | `4`   | UpdateStatus: Device reconnected with bad version |
| `UPDATESTATUS_UPDATE_CONFIRMED` | int  | `5`   | UpdateStatus                                      |

## UnknownDeviceError

| Name                 | Type   | Value                  | Comment |
| -------------------- | ------ | ---------------------- | ------- |
| `UnknownDeviceError` | string | `"ERR_UNKNOWN_DEVICE"` |         |

## UnsupportVmdkFileSystem

| Name                      | Type   | Value                              | Comment |
| ------------------------- | ------ | ---------------------------------- | ------- |
| `UnsupportVmdkFileSystem` | string | `"ERR_UNSUPPORT_VMDK_FILE_SYSTEM"` |         |

## WEBAUTHN

| Name                                   | Type | Value | Comment            |
| -------------------------------------- | ---- | ----- | ------------------ |
| `WEBAUTHN_DEVICE_TYPE__UNKNOWN`        | int  | `0`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__HARDWARE_TOKEN` | int  | `1`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__ANDROID`        | int  | `2`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__APPLE`          | int  | `3`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__TPM_GENERIC`    | int  | `4`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__TPM_WINDOWS`    | int  | `5`   | WebAuthnDeviceType |
| `WEBAUTHN_DEVICE_TYPE__TPM_LINUX`      | int  | `6`   | WebAuthnDeviceType |
