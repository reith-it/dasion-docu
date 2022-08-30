---
title: API Methods
sidebar_position: 2
---

## AdminAccountProperties: Retrieve properties about the current admin account

Some key parameters are obscured, but the obscured values are safely recognised by the corresponding AdminAccountSetProperties API.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/properties`
- Return type: [AdminAccountPropertiesResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminAccountPropertiesResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminAccountRegenerateTotp: Generate a new TOTP secret

The secret is returned as a `data-uri` image of a QR code. The new secret is immediately applied to the current admin account.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/regenerate-totp`
- Return type: [TotpRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-TotpRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminAccountSessionRevoke: Revoke a session key (log out)

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/session-revoke`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminAccountSessionStart: Generate a session key (log in)

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/session-start`
- Return type: [SessionKeyRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SessionKeyRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `SelfAddress`  | string                                                                                                                     | External URL of this server _(Optional)_                                       |

## AdminAccountSessionStartAsUser: Generate a session key for an end-user (log in as end-user)

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/session-start-as-user` _(>= 19.6.8)_
- Return type: [SessionKeyRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SessionKeyRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Target account username                                                        |

## AdminAccountSetProperties: Update settings for your own admin account

Updating your account password requires you to supply your current password. To set a new plaintext password, use a password format of 0 (PASSWORD_FORMAT_PLAINTEXT). This API does not currently allow you to modify your TOTP secret or IP whitelist.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/set-properties` _(>= 18.9.9)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Security`     | [AdminSecurityOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminSecurityOptions) (JSON) | Updated account properties                                                     |

## AdminAccountU2fRequestRegistrationChallenge: Register a new FIDO U2F token

Browser support for U2F is ending in February 2022. WebAuthn is backwards compatible with U2F keys, and Comet will automatically migrate existing U2F keys to allow their use with the WebAuthn endpoints.

You must supply administrator authentication credentials to use this API.

This API has no maintained endpoints.

- Return type: [U2FRegistrationChallengeResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-U2FRegistrationChallengeResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `SelfAddress`  | string                                                                                                                     | External URL of this server, used as U2F AppID and Facet                       |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/account/u2f/request-registration-challenge` _(>= 21.12.0)_ _("AdminAccountU2fRequestRegistrationChallenge")_

## AdminAccountU2fSubmitChallengeResponse: Register a new FIDO U2F token

Browser support for U2F is ending in February 2022. WebAuthn is backwards compatible with U2F keys, and Comet will automatically migrate existing U2F keys to allow their use with the WebAuthn endpoints.

You must supply administrator authentication credentials to use this API.

This API has no maintained endpoints.

- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter             | Type                                                                                                                       | Description                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`            | string                                                                                                                     | Admin account name                                                             |
| `AuthType`            | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`            | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`          | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`                | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`        | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `U2FChallengeID`      | string                                                                                                                     | Associated value from AdminAccountU2fRequestRegistrationChallenge API          |
| `U2FClientData`       | string                                                                                                                     | U2F response data supplied by hardware token                                   |
| `U2FRegistrationData` | string                                                                                                                     | U2F response data supplied by hardware token                                   |
| `U2FVersion`          | string                                                                                                                     | U2F response data supplied by hardware token                                   |
| `Description`         | string                                                                                                                     | Optional description of the token                                              |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/account/u2f/submit-challenge-response` _(>= 21.12.0)_ _("AdminAccountU2fSubmitChallengeResponse")_

## AdminAccountValidateTotp: Validate the TOTP code before turning 2fa(TOTP) on

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/validate-totp`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TOTPCode`     | string                                                                                                                     | Six-digit code after scanning barcode image                                    |

## AdminAccountWebauthnRequestRegistrationChallenge: Register a new FIDO2 WebAuthn token

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/webauthn/request-registration-challenge`
- Return type: [WebAuthnRegistrationChallengeResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnRegistrationChallengeResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `SelfAddress`  | string                                                                                                                     | External URL of this server, used as WebAuthn ID                               |

## AdminAccountWebauthnSubmitChallengeResponse: Register a new FIDO2 WebAuthn token

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/account/webauthn/submit-challenge-response`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `SelfAddress`  | string                                                                                                                     | External URL of this server, used as WebAuthn ID                               |
| `ChallengeID`  | string                                                                                                                     | Associated value from AdminAccountWebAuthnRequestRegistrationChallenge API     |
| `Credential`   | string                                                                                                                     | JSON-encoded credential                                                        |

## AdminAddUser: Add a new user account

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/add-user`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter               | Type                                                                                                                       | Description                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`              | string                                                                                                                     | Admin account name                                                                                                                                                     |
| `AuthType`              | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                         |
| `Password`              | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                                    |
| `SessionKey`            | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                         |
| `TOTP`                  | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                                   |
| `WebAuthnSign`          | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                        |
| `TargetUser`            | string                                                                                                                     | New account username                                                                                                                                                   |
| `TargetPassword`        | string                                                                                                                     | New account password                                                                                                                                                   |
| `StoreRecoveryCode`     | int                                                                                                                        | If set to 1, store and keep a password recovery code for the generated user (>= 18.3.9) _(Optional)_                                                                   |
| `RequirePasswordChange` | int                                                                                                                        | If set to 1, require to reset password at the first login for the generated user (>= 20.3.4) _(Optional)_                                                              |
| `TargetOrganization`    | string                                                                                                                     | If present, create the user account on behalf of another organization. Only allowed for administrator accounts in the top-level organization. (>= 22.3.7) _(Optional)_ |

## AdminAddUserFromProfile: Add a new user account (with all information)

This allows you to create a new account and set all its properties at once (e.g. during account replication). Developers creating a signup form may find it simpler to use the AdminAddUser and AdminGetUserProfile / AdminSetUserProfile APIs separately.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/add-user-from-profile`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter            | Type                                                                                                                       | Description                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`           | string                                                                                                                     | Admin account name                                                                                                                                                     |
| `AuthType`           | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                         |
| `Password`           | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                                    |
| `SessionKey`         | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                         |
| `TOTP`               | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                                   |
| `WebAuthnSign`       | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                        |
| `TargetUser`         | string                                                                                                                     | New account username                                                                                                                                                   |
| `ProfileData`        | [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) (JSON)       | New account profile                                                                                                                                                    |
| `TargetOrganization` | string                                                                                                                     | If present, create the user account on behalf of another organization. Only allowed for administrator accounts in the top-level organization. (>= 22.3.7) _(Optional)_ |

## AdminAdminUserDelete: Delete an administrator

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/admin-user/delete` _(>= 20.9.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | the username of the admin to be deleted                                        |

## AdminAdminUserList: List administrators

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/admin-user/list` _(>= 20.9.0)_
- Return type: List<[AllowedAdminUser](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AllowedAdminUser)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminAdminUserNew: Add a new administrator

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/admin-user/new` _(>= 20.9.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter        | Type                                                                                                                       | Description                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `Username`       | string                                                                                                                     | Admin account name                                                                                                      |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                          |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                                                                     |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                                                          |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                    |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                         |
| `TargetUser`     | string                                                                                                                     | the username for this new admin                                                                                         |
| `TargetPassword` | string                                                                                                                     | the password for this new admin user                                                                                    |
| `TargetOrgID`    | string                                                                                                                     | provide the organization ID for this user, it will default to the org of the authenticating user otherwise _(Optional)_ |

## AdminBrandingAvailablePlatforms: List available software download platforms

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/available-platforms` _(>= 18.12.2)_
- Return type: Dictionary<int, [AvailableDownload](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AvailableDownload)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

## AdminBrandingGenerateClientByPlatform: Download software

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/by-platform` _(>= 18.12.2)_
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                                  |
| ------------- | ------ | ---------------------------------------------------------------------------- |
| `Platform`    | int    | The selected download platform, from the AdminBrandingAvailablePlatforms API |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_      |

## AdminBrandingGenerateClientLinuxgeneric: Download software (Linux Server .run)

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/linuxgeneric`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/linuxgeneric` _("UpdateSoftwareLinuxgeneric")_

## AdminBrandingGenerateClientMacosX8664: Download software (macOS x86_64 pkg)

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/macos-x86_64`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/macos-x86_64` _("UpdateSoftwareMacosX8664")_

## AdminBrandingGenerateClientSpkDsm6: Download software (Synology SPK for DSM 6)

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/spk-dsm6`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/spk-dsm6` _("UpdateSoftwareSpkDsm6")_

## AdminBrandingGenerateClientSpkDsm7: Download software (Synology SPK for DSM 7)

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/spk-dsm7`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/spk-dsm7` _("UpdateSoftwareSpkDsm7")_

## AdminBrandingGenerateClientTest: Check if a software download is available

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/test` _(>= 19.12.2)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type   | Description                                                                  |
| ------------- | ------ | ---------------------------------------------------------------------------- |
| `Platform`    | int    | The selected download platform, from the AdminBrandingAvailablePlatforms API |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_      |

## AdminBrandingGenerateClientWindowsAnycpuExe: Download software update (Windows AnyCPU exe)

The exe endpoints are not recommended for end-users, as they may not be able to provide a codesigned installer if no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-anycpu-exe`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 2 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/windows` _("UpdateSoftwareWindows")_
- `POST /api/v1/update-software` _("UpdateSoftware")_

## AdminBrandingGenerateClientWindowsAnycpuZip: Download software (Windows AnyCPU zip)

The zip endpoints are recommended for end-users, as they may be able to provide a codesigned installer even when no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-anycpu-zip`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 2 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/branding/generate-client/windows` _("AdminBrandingGenerateClientWindows")_
- `POST /api/v1/admin/branding/generate-client` _("AdminBrandingGenerateClient")_

## AdminBrandingGenerateClientWindowsX8632Exe: Download software update (Windows x86_32 exe)

The exe endpoints are not recommended for end-users, as they may not be able to provide a codesigned installer if no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-x86_32-exe`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/windows-x86_32` _("UpdateSoftwareWindowsX8632")_

## AdminBrandingGenerateClientWindowsX8632Zip: Download software (Windows x86_32 zip)

The zip endpoints are recommended for end-users, as they may be able to provide a codesigned installer even when no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-x86_32-zip`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/branding/generate-client/windows-x86_32` _("AdminBrandingGenerateClientWindowsX8632")_

## AdminBrandingGenerateClientWindowsX8664Exe: Download software update (Windows x86_64 exe)

The exe endpoints are not recommended for end-users, as they may not be able to provide a codesigned installer if no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-x86_64-exe`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/update-software/windows-x86_64` _("UpdateSoftwareWindowsX8664")_

## AdminBrandingGenerateClientWindowsX8664Zip: Download software (Windows x86_64 zip)

The zip endpoints are recommended for end-users, as they may be able to provide a codesigned installer even when no custom codesigning certificate is present.

This API requires administrator authentication credentials, unless the server is configured to allow unauthenticated software downloads. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/branding/generate-client/windows-x86_64-zip`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                                             |
| ------------- | ------ | ----------------------------------------------------------------------- |
| `SelfAddress` | string | The external URL of this server, used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/branding/generate-client/windows-x86_64` _("AdminBrandingGenerateClientWindowsX8664")_

## AdminBulletinSubmit: Send an email bulletin to all users

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/bulletin/submit`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Subject`      | string                                                                                                                     | Bulletin subject line                                                          |
| `Content`      | string                                                                                                                     | Bulletin message content                                                       |

## AdminConstellationLastReport: Get Constellation bucket usage report (cached)

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Constellation Role to be enabled.

- Endpoint: `POST /api/v1/admin/constellation/last-report`
- Return type: [ConstellationCheckReport](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationCheckReport) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/overseer/last-report` _("AdminOverseerLastReport")_

## AdminConstellationNewReport: Get Constellation bucket usage report (regenerate)

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Constellation Role to be enabled.

- Endpoint: `POST /api/v1/admin/constellation/new-report`
- Return type: [ConstellationCheckReport](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationCheckReport) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/overseer/new-report` _("AdminOverseerNewReport")_

## AdminConstellationPruneNow: Prune unused buckets

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Constellation Role to be enabled.

- Endpoint: `POST /api/v1/admin/constellation/prune-now`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/overseer/prune-now` _("AdminOverseerPruneNow")_

## AdminConstellationStatus: Get Constellation status

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Constellation Role to be enabled.

- Endpoint: `POST /api/v1/admin/constellation/status`
- Return type: [ConstellationStatusAPIResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ConstellationStatusAPIResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/overseer/status` _("AdminOverseerStatus")_

## AdminCreateInstallToken: Create token for silent installation

Currently only supported for Windows & macOS only Provide the installation token to silently install the client on windows `install.exe /TOKEN=<installtoken>` Provide the installation token to silently install the client on Mac OS `sudo launchctl setenv BACKUP_APP_TOKEN "installtoken" && sudo /usr/sbin/installer -allowUntrusted -pkg "Comet Backup.pkg" -target /`

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/create-install-token` _(>= 20.9.0)_
- Return type: [InstallTokenResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-InstallTokenResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter        | Type                                                                                                                       | Description                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Username`       | string                                                                                                                     | Admin account name                                                                               |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                   |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                                              |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                                   |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                             |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                  |
| `TargetUser`     | string                                                                                                                     | Selected account username                                                                        |
| `TargetPassword` | string                                                                                                                     | Selected account password                                                                        |
| `Server`         | string                                                                                                                     | External URL of the authentication server that is different from the current server _(Optional)_ |

## AdminDeleteUser: Delete user account

This does not remove any storage buckets. Unused storage buckets will be cleaned up by the Constellation Role. Any stored data can not be decrypted without the user profile. Misuse can cause data loss! This also allows to uninstall software from active devices under the user account This also removes all job history for the user account.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/delete-user`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter         | Type                                                                                                                       | Description                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`        | string                                                                                                                     | Admin account name                                                             |
| `AuthType`        | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`        | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`      | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`            | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`    | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`      | string                                                                                                                     | Selected account username                                                      |
| `UninstallConfig` | [UninstallConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UninstallConfig) (JSON)           | Uninstall software configuration (>= 20.3.5) _(Optional)_                      |

## AdminDisableUserTotp: Disable user account 2FA(TOTP) authentication

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/disable-user-totp` _(>= 20.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |

## AdminDispatcherApplyRetentionRules: Instruct a live connected device to apply retention rules now

This command is understood by Comet Backup 17.6.9 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/apply-retention-rules` _(>= 17.6.9)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault GUID                                                         |

## AdminDispatcherDeepverifyStorageVault: Instruct a live connected device to deeply verify Storage Vault content

This command is understood by Comet Backup 18.8.2 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/deepverify-storage-vault` _(>= 18.8.2)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault GUID                                                         |

## AdminDispatcherDeleteSnapshot: Instruct a live connected device to delete a stored snapshot

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/delete-snapshot` _(>= 19.12.2)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter       | Type                                                                                                                       | Description                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`      | string                                                                                                                     | Admin account name                                                             |
| `AuthType`      | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`      | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`    | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`          | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`  | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`      | string                                                                                                                     | The live connection GUID                                                       |
| `DestinationID` | string                                                                                                                     | The Storage Vault GUID                                                         |
| `SnapshotID`    | string                                                                                                                     | The backup job snapshot ID to delete                                           |

## AdminDispatcherDeleteSnapshots: Instruct a live connected device to delete multiple stored snapshots

The target device must be running Comet 20.9.10 or later.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/delete-snapshots` _(>= 20.9.10)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter       | Type                                                                                                                       | Description                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`      | string                                                                                                                     | Admin account name                                                             |
| `AuthType`      | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`      | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`    | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`          | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`  | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`      | string                                                                                                                     | The live connection GUID                                                       |
| `DestinationID` | string                                                                                                                     | The Storage Vault GUID                                                         |
| `SnapshotIDs`   | List&lt;string&gt; (JSON)                                                                                                  | The backup job snapshot IDs to delete                                          |

## AdminDispatcherDropConnection: Disconnect a live connected device

The device will almost certainly attempt to reconnect.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/drop-connection`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherEmailPreview: Request HTML content of an email

The remote device must have given consent for an MSP to browse their mail

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/email-preview` _(>= 21.9.5)_
- Return type: [EmailReportGeneratedPreview](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailReportGeneratedPreview) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Snapshot`     | string                                                                                                                     | where the email belongs to                                                     |
| `Destination`  | string                                                                                                                     | The Storage Vault ID                                                           |
| `Path`         | string                                                                                                                     | of the email to view                                                           |

## AdminDispatcherImportApply: Instruct a live connected device to import settings from an installed product

This command is understood by Comet Backup 17.12.0 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/import-apply` _(>= 17.12.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter        | Type                                                                                                                       | Description                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Username`       | string                                                                                                                     | Admin account name                                                                  |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'      |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                                 |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                      |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                     |
| `TargetID`       | string                                                                                                                     | The live connection GUID                                                            |
| `ImportSourceID` | string                                                                                                                     | The selected import source, as found by the AdminDispatcherRequestImportSources API |

## AdminDispatcherKillProcess: Instruct a live connected device to disconnect

The device will terminate its live-connection process and will not reconnect.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/kill-process`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherListActive: List live connected devices

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/list-active`
- Return type: Dictionary<string, [LiveUserConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-LiveUserConnection)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminDispatcherOffice365ListVirtualAccounts: Request a list of Office365 Resources (groups, sites, teams groups and users)

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/office365-list-virtual-accounts` _(>=21.9.12)_
- Return type: [BrowseOffice365ListVirtualAccountsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ListVirtualAccountsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON)   | The Office365 account credential                                               |

## AdminDispatcherPingDestination: Test the connection to the storage bucket

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/ping-destination` _(>= 21.6.11)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `ExtraData`    | [DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) (JSON)   | The destination location settings                                              |

## AdminDispatcherRefetchProfile: Instruct a live connected device to refresh their profile

This command is understood by Comet Backup 17.12.0 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/refetch-profile` _(>= 17.12.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRegisterOfficeApplicationBegin: Begin the process of registering a new Azure AD application that can access Office 365 for backup

After calling this API, you should supply the login details to the end-user, and then begin polling the AdminDispatcherRegisterOfficeApplicationCheck with the supplied "Continuation" parameter to check on the registration process.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/register-office-application/begin` _(>= 21.3.8)_
- Return type: [RegisterOfficeApplicationBeginResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RegisterOfficeApplicationBeginResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `EmailAddress` | string                                                                                                                     | The email address of the Azure AD administrator                                |

## AdminDispatcherRegisterOfficeApplicationCheck: Check the process of registering a new Azure AD application that can access Office 365 for backup

You should begin the process by calling AdminDispatcherRegisterOfficeApplicationBegin and asking the end-user to complete the Azure authentication steps.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/register-office-application/check` _(>= 21.3.8)_
- Return type: [RegisterOfficeApplicationCheckResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RegisterOfficeApplicationCheckResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                     |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `Username`     | string                                                                                                                     | Admin account name                                                              |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'  |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                             |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                  |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                            |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                 |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                        |
| `Continuation` | string                                                                                                                     | The ID returned from the AdminDispatcherRegisterOfficeApplicationBegin endpoint |

## AdminDispatcherReindexStorageVault: Instruct a live connected device to rebuild Storage Vault indexes now

This command is understood by Comet Backup 18.6.9 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/reindex-storage-vault` _(>= 18.6.9)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault GUID                                                         |

## AdminDispatcherRequestBrowseDiskDrives: Request a list of physical disk drive information from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-disk-drives` _(>= 20.6.1)_
- Return type: [BrowseDiskDrivesResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseDiskDrivesResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRequestBrowseExchangeEdb: Request a list of Exchange EDB databases from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-exchange-edb` _(>= 20.6.1)_
- Return type: [BrowseEDBResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseEDBResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRequestBrowseHyperv: Request a list of Hyper-V virtual machines from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-hyperv` _(>= 20.6.1)_
- Return type: [BrowseHVResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseHVResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRequestBrowseMongodb: Request a list of tables in MongoDB database

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-mongodb` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [MongoDBConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MongoDBConnection) (JSON)       | The Mongo database authentication settings                                     |

## AdminDispatcherRequestBrowseMssql: Request a list of tables in MSSQL database

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-mssql` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [MSSQLConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MSSQLConnection) (JSON)           | The MSSQL database authentication settings                                     |

## AdminDispatcherRequestBrowseMysql: Request a list of tables in MySQL database

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-mysql` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [MySQLConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MySQLConnection) (JSON)           | The MySQL database authentication settings                                     |

## AdminDispatcherRequestBrowseVssAaw: Request a list of installed VSS Writers (Application-Aware Writers) from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-browse-vss-aaw` _(>= 20.6.1)_
- Return type: [BrowseVSSResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseVSSResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRequestFilesystemObjects: Request a list of filesystem objects from a live connected device

The device must have granted the administrator permission to view its filenames.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-filesystem-objects` _(>= 20.3.2)_
- Return type: [DispatcherStoredObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherStoredObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Username`     | string                                                                                                                     | Admin account name                                                                                        |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                            |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                                                       |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                                            |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                      |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                           |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                                                  |
| `Path`         | string                                                                                                                     | Browse objects inside this path. If empty or not present, returns the top-level device paths _(Optional)_ |

## AdminDispatcherRequestImportSources: Request a list of import sources from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-import-sources`
- Return type: [DispatcherAdminSourcesResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherAdminSourcesResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |

## AdminDispatcherRequestOffice365Accounts: Request a list of Office365 mailbox accounts

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-office365-accounts` _(>= 21.3.5)_
- Return type: [BrowseOffice365ObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON)   | The Office365 account credential                                               |

## AdminDispatcherRequestOffice365Sites: Request a list of Office365 sites

The remote device must have given consent for an MSP to browse their files.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-office365-sites` _(>= 21.3.5)_
- Return type: [BrowseOffice365ObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Credentials`  | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON)   | The Office365 account credential                                               |

## AdminDispatcherRequestStoredObjects: Request a list of stored objects inside an existing backup job

The remote device must have given consent for an MSP to browse their files. To service this request, the remote device must connect to the Storage Vault and load index data. There may be a small delay. If the remote device is running Comet 20.12.0 or later, the necessary index data is cached when this API is first called, for 15 minutes after the last repeated call. This can improve performance for interactively browsing an entire tree of stored objects.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-stored-objects` _(>= 19.3.0)_
- Return type: [DispatcherStoredObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherStoredObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                             | Description                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`     | string                                                                                                                           | Admin account name                                                                                                                                   |
| `AuthType`     | string                                                                                                                           | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                       |
| `Password`     | string                                                                                                                           | Admin account password _(Optional)_                                                                                                                  |
| `SessionKey`   | string                                                                                                                           | Admin session key _(Optional)_                                                                                                                       |
| `TOTP`         | string                                                                                                                           | Admin current TOTP code _(Optional)_                                                                                                                 |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)       | Admin WebAuthn challenge signature _(Optional)_                                                                                                      |
| `TargetID`     | string                                                                                                                           | The live connection GUID                                                                                                                             |
| `Destination`  | string                                                                                                                           | The Storage Vault ID                                                                                                                                 |
| `SnapshotID`   | string                                                                                                                           | The selected backup job snapshot                                                                                                                     |
| `TreeID`       | string                                                                                                                           | Browse objects inside subdirectory of backup snapshot. If it is for VMDK single file restore, it should be the disk image's subtree ID. _(Optional)_ |
| `Options`      | [VMDKSnapshotViewOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-VMDKSnapshotViewOptions) (JSON) | Request a list of stored objects in vmdk file _(Optional)_                                                                                           |

## AdminDispatcherRequestVaultSnapshots: Request a list of Storage Vault snapshots from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-vault-snapshots`
- Return type: [DispatcherVaultSnapshotsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherVaultSnapshotsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault ID                                                           |

## AdminDispatcherRequestWindiskSnapshot: Request a Disk Image snapshot with the windiskbrowse-style from a live connected device

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/request-windisk-snapshot` _(>= 21.9.3)_
- Return type: [DispatcherWindiskSnapshotResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherWindiskSnapshotResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault ID                                                           |
| `SnapshotID`   | string                                                                                                                     | The Snapshot ID                                                                |

## AdminDispatcherRunBackup: Instruct a live connected device to run a scheduled backup

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/run-backup`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `BackupRule`   | string                                                                                                                     | The schedule GUID                                                              |

## AdminDispatcherRunBackupCustom: Instruct a live connected device to run a backup

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/run-backup-custom`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                               | Description                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                             | Admin account name                                                             |
| `AuthType`     | string                                                                                                                             | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                             | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                             | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                             | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)         | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                             | The live connection GUID                                                       |
| `Source`       | string                                                                                                                             | The Protected Item GUID                                                        |
| `Destination`  | string                                                                                                                             | The Storage Vault GUID                                                         |
| `Options`      | [BackupJobAdvancedOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobAdvancedOptions) (JSON) | Extra job parameters (>= 19.3.6) _(Optional)_                                  |

## AdminDispatcherRunRestore: Instruct a live connected device to perform a local restore

This command is understood by Comet Backup 17.9.3 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/run-restore` _(>= 17.9.3)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`     | string                                                                                                                     | Admin account name                                                                                                                                |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                    |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                                                                                               |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                    |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                              |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                   |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                                                                                          |
| `Path`         | string                                                                                                                     | The local path to restore to                                                                                                                      |
| `Source`       | string                                                                                                                     | The Protected Item ID                                                                                                                             |
| `Destination`  | string                                                                                                                     | The Storage Vault ID                                                                                                                              |
| `Snapshot`     | string                                                                                                                     | If present, restore a specific snapshot. Otherwise, restore the latest snapshot for the selected Protected Item + Storage Vault pair _(Optional)_ |
| `Paths`        | List&lt;string&gt; (JSON)                                                                                                  | If present, restore these paths only. Otherwise, restore all data (>= 19.3.0) _(Optional)_                                                        |

## AdminDispatcherRunRestoreCustom: Instruct a live connected device to perform a local restore

This command is understood by Comet Backup 18.6.0 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/run-restore-custom` _(>= 18.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                                 | Description                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`     | string                                                                                                                               | Admin account name                                                                                                                                |
| `AuthType`     | string                                                                                                                               | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                    |
| `Password`     | string                                                                                                                               | Admin account password _(Optional)_                                                                                                               |
| `SessionKey`   | string                                                                                                                               | Admin session key _(Optional)_                                                                                                                    |
| `TOTP`         | string                                                                                                                               | Admin current TOTP code _(Optional)_                                                                                                              |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)           | Admin WebAuthn challenge signature _(Optional)_                                                                                                   |
| `TargetID`     | string                                                                                                                               | The live connection GUID                                                                                                                          |
| `Source`       | string                                                                                                                               | The Protected Item ID                                                                                                                             |
| `Destination`  | string                                                                                                                               | The Storage Vault ID                                                                                                                              |
| `Options`      | [RestoreJobAdvancedOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RestoreJobAdvancedOptions) (JSON) | Restore targets                                                                                                                                   |
| `Snapshot`     | string                                                                                                                               | If present, restore a specific snapshot. Otherwise, restore the latest snapshot for the selected Protected Item + Storage Vault pair _(Optional)_ |
| `Paths`        | List&lt;string&gt; (JSON)                                                                                                            | If present, restore these paths only. Otherwise, restore all data _(Optional)_                                                                    |

## AdminDispatcherUninstallSoftware: Instruct a live connected device to self-uninstall the software

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/uninstall-software` _(>= 20.3.5)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter          | Type                                                                                                                       | Description                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`         | string                                                                                                                     | Admin account name                                                             |
| `AuthType`         | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`         | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`       | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`             | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`     | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`         | string                                                                                                                     | The live connection GUID                                                       |
| `RemoveConfigFile` | bool (JSON)                                                                                                                | Determine if the config.dat file will be deleted at the same time              |

## AdminDispatcherUnlock: Instruct a live connected device to remove lock files from a Storage Vault

Misuse can cause data loss! This command is understood by Comet Backup 17.9.4 and newer.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/unlock` _(>= 17.9.4)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `Destination`  | string                                                                                                                     | The Storage Vault GUID                                                         |

## AdminDispatcherUpdateLoginUrl: Instruct a live connected device to update its login server URL

The device will attempt to connect to the new Auth Role Comet Server using its current username and password. If the test connection succeeds, the device migrates its saved connection settings and live connections to the new server. If the device is not registered on the new URL, or if the credentials are incorrect, the device remains on the current Auth Role server.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/update-login-url` _(>= 20.3.8)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                       |
| `NewURL`       | string                                                                                                                     | The new external URL of this server                                            |

## AdminDispatcherUpdateSoftware: Instruct a live connected device to download a software update

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled. This API requires the Software Build Role to be enabled.

- Endpoint: `POST /api/v1/admin/dispatcher/update-software`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                                   |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'       |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                                  |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                       |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                 |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                      |
| `TargetID`     | string                                                                                                                     | The live connection GUID                                                             |
| `SelfAddress`  | string                                                                                                                     | The external URL of this server, used to resolve conflicts (>= 19.3.11) _(Optional)_ |

## AdminGetJobLog: Get the report log entries for a single job, in plaintext format

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-job-log`
- Return type: Body in `text/plain` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `JobID`        | string                                                                                                                     | Selected job ID                                                                |

## AdminGetJobLogEntries: Get the report log entries for a single job

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-job-log-entries` _(>= 20.6.8)_
- Return type: List<[JobEntry](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-JobEntry)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `JobID`        | string                                                                                                                     | Selected job ID                                                                |

## AdminGetJobProperties: Get properties of a single job

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-job-properties`
- Return type: [BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `JobID`        | string                                                                                                                     | Selected job ID                                                                |

## AdminGetJobsAll: Get jobs (All)

The jobs are returned in an unspecified order.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-jobs-all`
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminGetJobsForCustomSearch: Get jobs (for custom search)

The jobs are returned in an unspecified order.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-jobs-for-custom-search` _(>= 18.9.2)_
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Query`        | [SearchClause](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SearchClause) (JSON)                 | (No description available)                                                     |

## AdminGetJobsForDateRange: Get jobs (for date range)

The jobs are returned in an unspecified order.

If the `Start` parameter is later than `End`, they will be swapped.

This API will return all jobs that either started or ended within the supplied range.

Incomplete jobs have an end time of `0`. You can use this API to find only incomplete jobs by setting both `Start` and `End` to `0`.

Prior to Comet Server 22.6.0, additional Incomplete jobs may have been returned if you specified non-zero arguments for both `Start` and `End`.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-jobs-for-date-range`
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Start`        | int                                                                                                                        | Timestamp (Unix)                                                               |
| `End`          | int                                                                                                                        | Timestamp (Unix)                                                               |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/get-jobs-for-daterange` _("AdminGetJobsForDaterange")_

## AdminGetJobsForUser: Get jobs (for user)

The jobs are returned in an unspecified order.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-jobs-for-user`
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected username                                                              |

## AdminGetJobsRecent: Get jobs (Recent and incomplete)

The jobs are returned in an unspecified order.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-jobs-recent`
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminGetUserProfile: Get user account profile

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-user-profile`
- Return type: [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |

## AdminGetUserProfileAndHash: Get user account profile (atomic)

The resulting hash parameter can be passed to the corresponding update API, to atomically ensure that no changes occur between get/set operations. The hash format is not publicly documented and may change in a future server version. Use server APIs to retrieve current hash values.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-user-profile-and-hash`
- Return type: [GetProfileAndHashResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GetProfileAndHashResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |

## AdminGetUserProfileHash: Get user account profile (hash)

The profile hash can be used to determine if a user account profile has changed. The hash format is not publicly documented and may change in a future server version. Use server APIs to retrieve current hash values.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/get-user-profile-hash`
- Return type: [GetProfileHashResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GetProfileHashResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |

## AdminJobCancel: Cancel a running job

A request is sent to the live-connected device, asking it to cancel the operation. This may fail if there is no live-connection. Only jobs from Comet 18.3.5 or newer can be cancelled. A job can only be cancelled if it has a non-empty CancellationID field in its properties. If the device is running Comet 21.9.5 or later, this API will wait up to ten seconds for a confirmation from the client.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/job/cancel` _(>= 18.3.5)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Username                                                                       |
| `JobID`        | string                                                                                                                     | Job ID                                                                         |

## AdminListUsers: List all user accounts

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/list-users`
- Return type: List&lt;string&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminListUsersFull: List all user account profiles

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/list-users-full`
- Return type: Dictionary<string, [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaBrandingConfigGet: Get Branding configuration

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/branding-config/get` _(>= 20.6.0)_
- Return type: [ServerConfigOptionsBrandingFragment](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerConfigOptionsBrandingFragment) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaBrandingConfigSet: Set Branding configuration

Note that file resources must be provided using a resource URI I.E `"resource://05ba0b90ee66bda433169581188aba8d29faa938f9464cccd651a02fdf2e5b57"`. See AdminMetaResourceNew for the API documentation to create new file resources.

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/branding-config/set` _(>= 20.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter        | Type                                                                                                                       | Description                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`       | string                                                                                                                     | Admin account name                                                             |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `BrandingConfig` | [BrandingOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrandingOptions) (JSON)           | Updated configuration content                                                  |

## AdminMetaBuildConfigGet: Get Software Build Role configuration

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/build-config/get` _(>= 20.6.0)_
- Return type: [ServerConfigOptionsSoftwareBuildRoleFragment](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerConfigOptionsSoftwareBuildRoleFragment) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaBuildConfigSet: Set Build Role configuration

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/build-config/set` _(>= 20.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter                 | Type                                                                                                                               | Description                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`                | string                                                                                                                             | Admin account name                                                             |
| `AuthType`                | string                                                                                                                             | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`                | string                                                                                                                             | Admin account password _(Optional)_                                            |
| `SessionKey`              | string                                                                                                                             | Admin session key _(Optional)_                                                 |
| `TOTP`                    | string                                                                                                                             | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`            | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)         | Admin WebAuthn challenge signature _(Optional)_                                |
| `SoftwareBuildRoleConfig` | [SoftwareBuildRoleOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SoftwareBuildRoleOptions) (JSON) | Updated configuration content                                                  |

## AdminMetaListAvailableLogDays: Get log files

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/list-available-log-days`
- Return type: List&lt;int&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaReadAllLogs: Get a ZIP file of all of the server's log files

On non-Windows platforms, log content uses LF line endings. On Windows, Comet changed from LF to CRLF line endings in 18.3.2. This API does not automatically convert line endings; around the 18.3.2 timeframe, log content may even contain mixed line-endings.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/read-all-logs` _(>= 21.9.7)_
- Return type: Body in `application/zip` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaReadLogs: Get log file content

On non-Windows platforms, log content uses LF line endings. On Windows, Comet changed from LF to CRLF line endings in 18.3.2. This API does not automatically convert line endings; around the 18.3.2 timeframe, log content may even contain mixed line-endings.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/read-logs`
- Return type: Body in `text/plain` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Log`          | int                                                                                                                        | A log day, selected from the options returned by the Get Log Files API         |

## AdminMetaRemoteStorageVaultGet: Get Requesting Remote Storage Vault Config

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/remote-storage-vault/get` _(>= 20.6.0)_
- Return type: List<[RemoteStorageOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteStorageOption)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaRemoteStorageVaultSet: Set Storage template vault options

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/remote-storage-vault/set` _(>= 20.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter              | Type                                                                                                                            | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`             | string                                                                                                                          | Admin account name                                                             |
| `AuthType`             | string                                                                                                                          | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`             | string                                                                                                                          | Admin account password _(Optional)_                                            |
| `SessionKey`           | string                                                                                                                          | Admin session key _(Optional)_                                                 |
| `TOTP`                 | string                                                                                                                          | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`         | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)      | Admin WebAuthn challenge signature _(Optional)_                                |
| `RemoteStorageOptions` | List<[RemoteStorageOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RemoteStorageOption)\> (JSON) | Updated configuration content                                                  |

## AdminMetaResourceGet: Get a resource file

Resources are used to upload files within the server configuration.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/resource/get`
- Return type: Body in `application/octet-stream` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Hash`         | string                                                                                                                     | The resource identifier                                                        |

## AdminMetaResourceNew: Upload a resource file

Resources are used to upload files within the server configuration. The resulting resource ID is autogenerated. The lifespan of an uploaded resource is undefined. Resources may be deleted automatically, but it should remain available until the next call to AdminMetaServerConfigSet, and will remain available for as long as it is referenced by the server configuration.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/resource/new`
- Encoding: `multipart/form-data`
- Return type: [AdminResourceResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AdminResourceResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter                           | Type                                                                                                                       | Description                                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Header `X-Comet-Admin-Username`     | string                                                                                                                     | Admin account name                                                                          |
| Header `X-Comet-Admin-AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' _(Optional)_ |
| Header `X-Comet-Admin-Password`     | string                                                                                                                     | Admin account password _(Optional)_                                                         |
| Header `X-Comet-Admin-SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                              |
| Header `X-Comet-Admin-TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                        |
| Header `X-Comet-Admin-WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                             |
| `upload`                            | string                                                                                                                     | The uploaded file contents, as a multipart/form-data part.                                  |

## AdminMetaRestartService: Restart server

The Comet Server process will exit. The service manager should restart the server automatically.

Prior to 18.9.2, this API terminated the server immediately without returning a response. In 18.9.2 and later, it returns a successful response before shutting down.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/restart-service`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaSendTestEmail: Send a test email message

This allows the Comet Server web interface to support testing different email credentials during setup.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/send-test-email`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `EmailOptions` | [EmailOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailOptions) (JSON)                 | Updated configuration content                                                  |
| `Recipient`    | string                                                                                                                     | Target email address to send test email                                        |

## AdminMetaServerConfigGet: Get server configuration

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/server-config/get`
- Return type: [ServerConfigOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerConfigOptions) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaServerConfigNetworkInterfaces: List the available network interfaces on the PC running Comet Server

Any IPv6 addresses are listed in compressed form without square-brackets.

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/server-config/network-interfaces` _(>= 19.6.0)_
- Return type: List&lt;string&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaServerConfigSet: Set server configuration

The Comet Server process will exit. The service manager should restart the server automatically.

Prior to 18.9.2, this API terminated the server immediately without returning a response. In 18.9.2 and later, it returns a successful response before shutting down.

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/meta/server-config/set`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Config`       | [ServerConfigOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerConfigOptions) (JSON)   | Updated configuration content                                                  |

## AdminMetaShutdownService: Shut down server

The Comet Server process will exit.

Prior to 18.9.2, this API terminated the server immediately without returning a response. In 18.9.2 and later, it returns a successful response before shutting down.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. Access to this API may be prevented on a per-administrator basis.

- Endpoint: `POST /api/v1/admin/meta/shutdown-service`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaSoftwareUpdateNews: Get software update news from the software provider

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/software-update-news`
- Return type: [SoftwareUpdateNewsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SoftwareUpdateNewsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaStats: Get Comet Server historical statistics

The returned key-value map is not necessarily ordered. Client-side code should sort the result before display.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/stats`
- Return type: Dictionary<int, [StatResult](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StatResult)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Simple`       | bool (JSON)                                                                                                                | Remove redundant statistics                                                    |

## AdminMetaVersion: Get server properties

Retrieve the version number and basic properties about the server.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/version`
- Return type: [ServerMetaVersionInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerMetaVersionInfo) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaWebhookOptionsGet: Get the server webhook configuration

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/webhook-options/get` _(>= 20.6.1)_
- Return type: Dictionary<string, [WebhookOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebhookOption)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminMetaWebhookOptionsSet: Update the server webhook configuration

Calling this endpoint will interrupt any messages currently queued for existing webhook destinations.

You must supply administrator authentication credentials to use this API.

- Endpoint: `POST /api/v1/admin/meta/webhook-options/set` _(>= 20.6.1)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter        | Type                                                                                                                              | Description                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`       | string                                                                                                                            | Admin account name                                                             |
| `AuthType`       | string                                                                                                                            | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`       | string                                                                                                                            | Admin account password _(Optional)_                                            |
| `SessionKey`     | string                                                                                                                            | Admin session key _(Optional)_                                                 |
| `TOTP`           | string                                                                                                                            | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)        | Admin WebAuthn challenge signature _(Optional)_                                |
| `WebhookOptions` | Dictionary<string, [WebhookOption](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebhookOption)\> (JSON) | The replacement webhook target options.                                        |

## AdminNewsGetAll: Get News entries (Admin)

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/news/get-all`
- Return type: Dictionary<string, [NewsEntry](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-NewsEntry)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminNewsRemove: Remove news item

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/news/remove`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `NewsItem`     | string                                                                                                                     | Selected news item GUID                                                        |

## AdminNewsSubmit: Submit news item

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/news/submit`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `NewsContent`  | string                                                                                                                     | Content of news item                                                           |

## AdminOrganizationDelete: Delete an organization and all related users

Prior to Comet 22.6.0, this API was documented as returning the OrganizationResponse type. However, it always has returned only a CometAPIResponseMessage.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/organization/delete` _(>= 20.9.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter         | Type                                                                                                                       | Description                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`        | string                                                                                                                     | Admin account name                                                             |
| `AuthType`        | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`        | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`      | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`            | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`    | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `OrganizationID`  | string                                                                                                                     | (No description available) _(Optional)_                                        |
| `UninstallConfig` | [UninstallConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UninstallConfig) (JSON)           | Uninstall software configuration _(Optional)_                                  |

## AdminOrganizationList: List Organizations

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/organization/list` _(>= 20.9.0)_
- Return type: Dictionary<string, [Organization](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Organization)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminOrganizationSet: Create or Update an Organization

Prior to Comet 22.6.0, the 'ID' and 'Organization' fields were not present in the response.

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/organization/set` _(>= 20.9.0)_
- Return type: [OrganizationResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-OrganizationResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter        | Type                                                                                                                       | Description                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`       | string                                                                                                                     | Admin account name                                                             |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `OrganizationID` | string                                                                                                                     | (No description available) _(Optional)_                                        |
| `Organization`   | [Organization](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Organization) (JSON)                 | (No description available) _(Optional)_                                        |

## AdminPoliciesDelete: Delete an existing policy object

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/delete` _(>= 18.3.11)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `PolicyID`     | string                                                                                                                     | The policy ID to update or create                                              |

## AdminPoliciesGet: Retrieve a single policy object

A hash is also returned, to allow atomic modification operations.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/get` _(>= 18.3.11)_
- Return type: [GetGroupPolicyResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GetGroupPolicyResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `PolicyID`     | string                                                                                                                     | The policy ID to retrieve                                                      |

## AdminPoliciesList: List all policy object names

For the top-level organization, the API result includes all policies for all organizations, unless the TargetOrganization parameter is present.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/list` _(>= 18.3.11)_
- Return type: Dictionary&lt;string, string&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter            | Type                                                                                                                       | Description                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`           | string                                                                                                                     | Admin account name                                                                                                                                               |
| `AuthType`           | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                   |
| `Password`           | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                              |
| `SessionKey`         | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                   |
| `TOTP`               | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                             |
| `WebAuthnSign`       | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                  |
| `TargetOrganization` | string                                                                                                                     | If present, list the policies belonging to another organization. Only allowed for administrator accounts in the top-level organization. (>= 22.3.7) _(Optional)_ |

## AdminPoliciesListFull: Get all policy objects

For the top-level organization, the API result includes all policies for all organizations, unless the TargetOrganization parameter is present.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/list-full` _(>= 18.3.11)_
- Return type: Dictionary<string, [GroupPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GroupPolicy)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter            | Type                                                                                                                       | Description                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`           | string                                                                                                                     | Admin account name                                                                                                                                               |
| `AuthType`           | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                   |
| `Password`           | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                              |
| `SessionKey`         | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                   |
| `TOTP`               | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                             |
| `WebAuthnSign`       | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                  |
| `TargetOrganization` | string                                                                                                                     | If present, list the policies belonging to another organization. Only allowed for administrator accounts in the top-level organization. (>= 22.3.7) _(Optional)_ |

## AdminPoliciesNew: Create a new policy object

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/new` _(>= 18.3.11)_
- Return type: [CreateGroupPolicyResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CreateGroupPolicyResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `Policy`       | [GroupPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GroupPolicy) (JSON)                   | The policy data                                                                |

## AdminPoliciesSet: Update an existing policy object

An optional hash may be used, to ensure the modification was atomic. This API can also be used to create a new policy object with a specific hash.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/policies/set` _(>= 18.3.11)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter         | Type                                                                                                                       | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Username`        | string                                                                                                                     | Admin account name                                                               |
| `AuthType`        | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'   |
| `Password`        | string                                                                                                                     | Admin account password _(Optional)_                                              |
| `SessionKey`      | string                                                                                                                     | Admin session key _(Optional)_                                                   |
| `TOTP`            | string                                                                                                                     | Admin current TOTP code _(Optional)_                                             |
| `WebAuthnSign`    | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                  |
| `PolicyID`        | string                                                                                                                     | The policy ID to update or create                                                |
| `Policy`          | [GroupPolicy](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GroupPolicy) (JSON)                   | The policy data                                                                  |
| `CheckPolicyHash` | string                                                                                                                     | An atomic verification hash as supplied by the AdminPoliciesGet API _(Optional)_ |

## AdminPreviewUserEmailReport: Preview an email report for a customer

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/preview-user-email-report`
- Return type: [EmailReportGeneratedPreview](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailReportGeneratedPreview) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter           | Type                                                                                                                       | Description                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`          | string                                                                                                                     | Admin account name                                                             |
| `AuthType`          | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`          | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`        | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`              | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`      | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`        | string                                                                                                                     | Selected account username                                                      |
| `EmailReportConfig` | [EmailReportConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailReportConfig) (JSON)       | Email report configuration to preview                                          |
| `EmailAddress`      | string                                                                                                                     | Email address that may be included in the report body (>= 20.3.3) _(Optional)_ |

## AdminReplicationState: Get Replication status

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/replication/state`
- Return type: List<[ReplicatorStateAPIResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ReplicatorStateAPIResponse)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/storage/replication/state` _("AdminStorageReplicationState")_

## AdminRequestStorageVault: Request a new Storage Vault on behalf of a user

This action does not respect the "Prevent creating new Storage Vaults (via Request)" policy setting. New Storage Vaults can be requested regardless of the policy setting. Prior to Comet 19.8.0, the response type was CometAPIResponseMessage (i.e. no DestinationID field in response). The StorageProvider must exist for the target user account's organization.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/request-storage-vault` _(>= 18.6.2)_
- Return type: [RequestStorageVaultResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RequestStorageVaultResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter         | Type                                                                                                                       | Description                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`        | string                                                                                                                     | Admin account name                                                             |
| `AuthType`        | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`        | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`      | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`            | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`    | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`      | string                                                                                                                     | The user to receive the new Storage Vault                                      |
| `StorageProvider` | string                                                                                                                     | ID for the storage template destination                                        |
| `SelfAddress`     | string                                                                                                                     | The external URL for this server. Used to resolve conflicts _(Optional)_       |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/request-bucket` _(>= 1.0.0)_ _("AdminRequestBucket")_

## AdminRequestStorageVaultProviders: Get the available options for Requesting a Storage Vault

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/request-storage-vault-providers` _(>= 18.6.2)_
- Return type: Dictionary&lt;string, string&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter            | Type                                                                                                                       | Description                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`           | string                                                                                                                     | Admin account name                                                                                                                                                               |
| `AuthType`           | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                                   |
| `Password`           | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                                              |
| `SessionKey`         | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                                   |
| `TOTP`               | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                                             |
| `WebAuthnSign`       | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                                  |
| `TargetOrganization` | string                                                                                                                     | If present, list the storage template options belonging to another organization. Only allowed for administrator accounts in the top-level organization. (>= 22.3.7) _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/admin/request-bucket-options` _(>= 1.0.0)_ _("AdminRequestBucketOptions")_

## AdminResetUserPassword: Reset user account password

The user account must have a recovery code present. A new replacement recovery code will be generated automatically.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/reset-user-password`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |
| `NewPassword`  | string                                                                                                                     | New account password                                                           |
| `OldPassword`  | string                                                                                                                     | Old account password (optional)                                                |

## AdminRevokeDevice: Revoke device from user account

It's possible to simply remove the Device section from the user's profile, however, using this dedicated API will also gracefully handle live connections.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/revoke-device`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |
| `TargetDevice` | string                                                                                                                     | Selected Device ID                                                             |

## AdminSetUserProfile: Modify user account profile

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/set-user-profile`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |
| `ProfileData`  | [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) (JSON)       | Modified user profile                                                          |

## AdminSetUserProfileHash: Modify user account profile (atomic)

The hash parameter can be determined from the corresponding API, to atomically ensure that no changes occur between get/set operations. The hash format is not publicly documented and may change in a future server version. Use server APIs to retrieve current hash values.

You must supply administrator authentication credentials to use this API. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/set-user-profile-hash`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `TargetUser`   | string                                                                                                                     | Selected account username                                                      |
| `ProfileData`  | [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) (JSON)       | Modified user profile                                                          |
| `RequireHash`  | string                                                                                                                     | Previous hash parameter                                                        |

## AdminStorageBucketProperties: Retrieve properties for a single bucket

This API can also be used to refresh the size measurement for a single bucket by passing a valid AfterTimestamp parameter.

You must supply administrator authentication credentials to use this API. This API requires the Storage Role to be enabled.

- Endpoint: `POST /api/v1/admin/storage/bucket-properties` _(>= 20.9.4)_
- Return type: [BucketProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BucketProperties) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter        | Type                                                                                                                       | Description                                                                                                                                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Username`       | string                                                                                                                     | Admin account name                                                                                                                                                                                                                                                 |
| `AuthType`       | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey'                                                                                                                                                                                     |
| `Password`       | string                                                                                                                     | Admin account password _(Optional)_                                                                                                                                                                                                                                |
| `SessionKey`     | string                                                                                                                     | Admin session key _(Optional)_                                                                                                                                                                                                                                     |
| `TOTP`           | string                                                                                                                     | Admin current TOTP code _(Optional)_                                                                                                                                                                                                                               |
| `WebAuthnSign`   | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                                                                                                                                                                                                    |
| `BucketID`       | string                                                                                                                     | Bucket ID                                                                                                                                                                                                                                                          |
| `AfterTimestamp` | int                                                                                                                        | Allow a stale size measurement if it is at least as new as the supplied Unix timestamp. Timestamps in the future may produce a result clamped down to the Comet Server's current time. If not present, the size measurement may be arbitrarily stale. _(Optional)_ |

## AdminStorageDeleteBucket: Delete a bucket

All data will be removed from the server. Misuse can cause data loss!

You must supply administrator authentication credentials to use this API. This API requires the Storage Role to be enabled.

- Endpoint: `POST /api/v1/admin/storage/delete-bucket`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `BucketID`     | string                                                                                                                     | Selected bucket name                                                           |

## AdminStorageFreeSpace: Retrieve available space metrics

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API requires the Storage Role to be enabled. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/storage/free-space` _(>= 19.12.4)_
- Return type: [StorageFreeSpaceInfo](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-StorageFreeSpaceInfo) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `BucketID`     | string                                                                                                                     | (This parameter is not used) _(Optional)_                                      |

## AdminStorageListBuckets: List all buckets

You must supply administrator authentication credentials to use this API. This API requires the Storage Role to be enabled.

- Endpoint: `POST /api/v1/admin/storage/list-buckets`
- Return type: Dictionary<string, [BucketProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BucketProperties)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## AdminStoragePingDestination: Ping a storage destination

You must supply administrator authentication credentials to use this API. Access to this API may be prevented on a per-administrator basis. This API requires the Storage Role to be enabled. This API is only available for administrator accounts in the top-level Organization, not in any other Organization.

- Endpoint: `POST /api/v1/admin/storage/ping-destination`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `ExtraData`    | [DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) (JSON)   | The destination location settings                                              |

## AdminStorageRegisterBucket: Create a new bucket

Leave the Set\* parameters blank to generate a bucket with random credentials, or, supply a pre-hashed password for zero-knowledge operations. Any auto-generated credentials are returned in the response message.

You must supply administrator authentication credentials to use this API. This API requires the Storage Role to be enabled.

- Endpoint: `POST /api/v1/admin/storage/register-bucket`
- Return type: [AddBucketResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-AddBucketResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter           | Type                                                                                                                       | Description                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`          | string                                                                                                                     | Admin account name                                                             |
| `AuthType`          | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`          | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`        | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`              | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign`      | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |
| `SetBucketValue`    | string                                                                                                                     | Bucket ID _(Optional)_                                                         |
| `SetKeyHashFormat`  | string                                                                                                                     | Bucket key hashing format _(Optional)_                                         |
| `SetKeyHashValue`   | string                                                                                                                     | Bucket key hash _(Optional)_                                                   |
| `SetOrganizationID` | string                                                                                                                     | Target organization ID (>= 20.9.0) _(Optional)_                                |

## AdminUpdateCampaignStart: Start a new software update campaign

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/update-campaign/start` _(>= 17.9.6)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter      | Type                                                                                                                         | Description                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                       | Admin account name                                                             |
| `AuthType`     | string                                                                                                                       | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                       | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                       | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                       | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON)   | Admin WebAuthn challenge signature _(Optional)_                                |
| `Options`      | [UpdateCampaignOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignOptions) (JSON) | Configure targets for the software update campaign                             |

## AdminUpdateCampaignStatus: Get current campaign status

You must supply administrator authentication credentials to use this API. This API is only available for administrator accounts in the top-level Organization, not in any other Organization. This API requires the Software Build Role to be enabled. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/admin/update-campaign/status` _(>= 17.9.6)_
- Return type: [UpdateCampaignStatus](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UpdateCampaignStatus) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type                                                                                                                       | Description                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Username`     | string                                                                                                                     | Admin account name                                                             |
| `AuthType`     | string                                                                                                                     | Either 'Password', 'PasswordTOTP', 'PasswordWebAuthn', 'TOTP', or 'SessionKey' |
| `Password`     | string                                                                                                                     | Admin account password _(Optional)_                                            |
| `SessionKey`   | string                                                                                                                     | Admin session key _(Optional)_                                                 |
| `TOTP`         | string                                                                                                                     | Admin current TOTP code _(Optional)_                                           |
| `WebAuthnSign` | [WebAuthnSignResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-WebAuthnSignResponse) (JSON) | Admin WebAuthn challenge signature _(Optional)_                                |

## BrandingProps: Retreve basic information about this Comet Server

- Endpoint: `GET /gen/branding.props`
- Return type: [ServerMetaBrandingProperties](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-ServerMetaBrandingProperties) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

## HybridSessionStart: Generate a session key (log in)

This hybrid API allows you to log in to the Comet Server as either an administrator or end-user account. This API behaves like either AdminAccountSessionStart or UserWebSessionStart, depending on what the supplied credentials were valid for.

- Endpoint: `POST /api/v1/hybrid/session/start` _(>= 18.12.3)_
- Return type: [SessionKeyRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SessionKeyRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

## UserDispatcherEmailPreview: Request HTML content of an email

The remote device must have given consent for an MSP to browse their mail

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/dispatcher/email-preview` _(>= 21.9.5)_
- Return type: [EmailReportGeneratedPreview](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-EmailReportGeneratedPreview) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `Username`    | string | User account name                          |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string | User account password _(Optional)_         |
| `LKey`        | string | User account L-key _(Optional)_            |
| `SessionKey`  | string | User session key _(Optional)_              |
| `TargetID`    | string | The live connection GUID                   |
| `Snapshot`    | string | where the email belongs to                 |
| `Destination` | string | The Storage Vault ID                       |
| `Path`        | string | of the email to view                       |

## UserWebAccountRegenerateTotp: Generate a new TOTP secret for user (web)

The secret is returned as a `data-uri` image of a QR code. The new secret is immediately applied to the current admin account.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/account/regenerate-totp`
- Return type: [TotpRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-TotpRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `Username`    | string | User account name                          |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string | User account password _(Optional)_         |
| `LKey`        | string | User account L-key _(Optional)_            |
| `SessionKey`  | string | User session key _(Optional)_              |
| `ProfileHash` | string | Previous account profile hash              |

## UserWebAccountResetPassword: Reset the password for your own user account (web)

A new replacement recovery code will be generated if the present recovery code is not empty

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/account/reset-password`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `Username`    | string | User account name                          |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string | User account password _(Optional)_         |
| `LKey`        | string | User account L-key _(Optional)_            |
| `SessionKey`  | string | User session key _(Optional)_              |
| `ProfileHash` | string | Previous account profile hash              |
| `OldPassword` | string | Current account password                   |
| `NewPassword` | string | New account password                       |

## UserWebAccountValidateTotp: Validate the TOTP code before turning 2fa(TOTP) on

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/account/validate-totp`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type   | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| `Username`    | string | User account name                           |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey'  |
| `Password`    | string | User account password _(Optional)_          |
| `LKey`        | string | User account L-key _(Optional)_             |
| `SessionKey`  | string | User session key _(Optional)_               |
| `ProfileHash` | string | Previous account profile hash               |
| `TOTPCode`    | string | Six-digit code after scanning barcode image |

## UserWebDispatcherDeleteSnapshot: Instruct a live connected device to delete a stored snapshot

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/delete-snapshot` _(>= 19.12.2)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter       | Type   | Description                                |
| --------------- | ------ | ------------------------------------------ |
| `Username`      | string | User account name                          |
| `AuthType`      | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`      | string | User account password _(Optional)_         |
| `LKey`          | string | User account L-key _(Optional)_            |
| `SessionKey`    | string | User session key _(Optional)_              |
| `TargetID`      | string | The live connection GUID                   |
| `DestinationID` | string | The Storage Vault GUID                     |
| `SnapshotID`    | string | The backup job snapshot ID to delete       |

## UserWebDispatcherDeleteSnapshots: Instruct a live connected device to delete multiple stored snapshots

The target device must be running Comet 20.9.10 or later.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/delete-snapshots` _(>= 20.9.10)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter       | Type                      | Description                                |
| --------------- | ------------------------- | ------------------------------------------ |
| `Username`      | string                    | User account name                          |
| `AuthType`      | string                    | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`      | string                    | User account password _(Optional)_         |
| `LKey`          | string                    | User account L-key _(Optional)_            |
| `SessionKey`    | string                    | User session key _(Optional)_              |
| `TargetID`      | string                    | The live connection GUID                   |
| `DestinationID` | string                    | The Storage Vault GUID                     |
| `SnapshotIDs`   | List&lt;string&gt; (JSON) | The backup job snapshot IDs to delete      |

## UserWebDispatcherListActive: List live connected devices in my account

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/list-active`
- Return type: Dictionary<string, [LiveUserConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-LiveUserConnection)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

## UserWebDispatcherOffice365ListVirtualAccounts: Request a list of Office365 Resources (groups, sites, teams groups and users)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/office365-list-virtual-accounts` _(>=21.9.12)_
- Return type: [BrowseOffice365ListVirtualAccountsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ListVirtualAccountsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                                     | Description                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `Username`    | string                                                                                                                   | User account name                          |
| `AuthType`    | string                                                                                                                   | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                                   | User account password _(Optional)_         |
| `LKey`        | string                                                                                                                   | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                                   | User session key _(Optional)_              |
| `TargetID`    | string                                                                                                                   | The live connection GUID                   |
| `Credentials` | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON) | The Office365 account credential           |

## UserWebDispatcherPingDestination: Test the connection to the storage bucket

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/ping-destination` _(>= 21.6.11)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter    | Type                                                                                                                     | Description                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `Username`   | string                                                                                                                   | User account name                          |
| `AuthType`   | string                                                                                                                   | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string                                                                                                                   | User account password _(Optional)_         |
| `LKey`       | string                                                                                                                   | User account L-key _(Optional)_            |
| `SessionKey` | string                                                                                                                   | User session key _(Optional)_              |
| `TargetID`   | string                                                                                                                   | The live connection GUID                   |
| `ExtraData`  | [DestinationLocation](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DestinationLocation) (JSON) | The destination location settings          |

## UserWebDispatcherRegisterOfficeApplicationBegin: Begin the process of registering a new Azure AD application that can access Office 365 for backup

After calling this API, you should supply the login details to the end-user, and then begin polling the AdminDispatcherRegisterOfficeApplicationCheck with the supplied "Continuation" parameter to check on the registration process.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/register-office-application/begin` _(>= 21.3.8)_
- Return type: [RegisterOfficeApplicationBeginResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RegisterOfficeApplicationBeginResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type   | Description                                     |
| -------------- | ------ | ----------------------------------------------- |
| `Username`     | string | User account name                               |
| `AuthType`     | string | Either 'Password', 'LKey', or 'SessionKey'      |
| `Password`     | string | User account password _(Optional)_              |
| `LKey`         | string | User account L-key _(Optional)_                 |
| `SessionKey`   | string | User session key _(Optional)_                   |
| `TargetID`     | string | The live connection GUID                        |
| `EmailAddress` | string | The email address of the Azure AD administrator |

## UserWebDispatcherRegisterOfficeApplicationCheck: Check the process of registering a new Azure AD application that can access Office 365 for backup

You should begin the process by calling AdminDispatcherRegisterOfficeApplicationBegin and asking the end-user to complete the Azure authentication steps.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/register-office-application/check` _(>= 21.3.8)_
- Return type: [RegisterOfficeApplicationCheckResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RegisterOfficeApplicationCheckResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter      | Type   | Description                                                                     |
| -------------- | ------ | ------------------------------------------------------------------------------- |
| `Username`     | string | User account name                                                               |
| `AuthType`     | string | Either 'Password', 'LKey', or 'SessionKey'                                      |
| `Password`     | string | User account password _(Optional)_                                              |
| `LKey`         | string | User account L-key _(Optional)_                                                 |
| `SessionKey`   | string | User session key _(Optional)_                                                   |
| `TargetID`     | string | The live connection GUID                                                        |
| `Continuation` | string | The ID returned from the AdminDispatcherRegisterOfficeApplicationBegin endpoint |

## UserWebDispatcherRequestBrowseDiskDrives: Request a list of physical disk drive information from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-disk-drives` _(>= 20.6.1)_
- Return type: [BrowseDiskDrivesResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseDiskDrivesResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `TargetID`   | string | The live connection GUID                   |

## UserWebDispatcherRequestBrowseExchangeEdb: Request a list of Exchange EDB databases from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-exchange-edb` _(>= 20.6.1)_
- Return type: [BrowseEDBResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseEDBResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `TargetID`   | string | The live connection GUID                   |

## UserWebDispatcherRequestBrowseHyperv: Request a list of Hyper-V virtual machines from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-hyperv` _(>= 20.6.1)_
- Return type: [BrowseHVResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseHVResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `TargetID`   | string | The live connection GUID                   |

## UserWebDispatcherRequestBrowseMongodb: Request a list of tables in MongoDB database

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-mongodb` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                                 | Description                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `Username`    | string                                                                                                               | User account name                            |
| `AuthType`    | string                                                                                                               | Either 'Password', 'LKey', or 'SessionKey'   |
| `Password`    | string                                                                                                               | User account password _(Optional)_           |
| `LKey`        | string                                                                                                               | User account L-key _(Optional)_              |
| `SessionKey`  | string                                                                                                               | User session key _(Optional)_                |
| `TargetID`    | string                                                                                                               | The live connection GUID                     |
| `Credentials` | [MongoDBConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MongoDBConnection) (JSON) | The MongoDB database authentication settings |

## UserWebDispatcherRequestBrowseMssql: Request a list of tables in MSSQL database

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-mssql` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                             | Description                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `Username`    | string                                                                                                           | User account name                          |
| `AuthType`    | string                                                                                                           | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                           | User account password _(Optional)_         |
| `LKey`        | string                                                                                                           | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                           | User session key _(Optional)_              |
| `TargetID`    | string                                                                                                           | The live connection GUID                   |
| `Credentials` | [MSSQLConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MSSQLConnection) (JSON) | The MSSQL database authentication settings |

## UserWebDispatcherRequestBrowseMysql: Request a list of tables in MySQL database

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-mysql` _(>= 21.3.5)_
- Return type: [BrowseSQLServerResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseSQLServerResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                             | Description                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `Username`    | string                                                                                                           | User account name                          |
| `AuthType`    | string                                                                                                           | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                           | User account password _(Optional)_         |
| `LKey`        | string                                                                                                           | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                           | User session key _(Optional)_              |
| `TargetID`    | string                                                                                                           | The live connection GUID                   |
| `Credentials` | [MySQLConnection](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-MySQLConnection) (JSON) | The MySQL database authentication settings |

## UserWebDispatcherRequestBrowseVssAaw: Request a list of installed VSS Writers (Application-Aware Writers) from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-browse-vss-aaw` _(>= 20.6.1)_
- Return type: [BrowseVSSResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseVSSResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `TargetID`   | string | The live connection GUID                   |

## UserWebDispatcherRequestOffice365Accounts: Request a list of Office365 mailbox accounts

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-office365-accounts` _(>= 21.3.5)_
- Return type: [BrowseOffice365ObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                                     | Description                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `Username`    | string                                                                                                                   | User account name                          |
| `AuthType`    | string                                                                                                                   | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                                   | User account password _(Optional)_         |
| `LKey`        | string                                                                                                                   | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                                   | User session key _(Optional)_              |
| `TargetID`    | string                                                                                                                   | The live connection GUID                   |
| `Credentials` | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON) | The Office365 account credential           |

## UserWebDispatcherRequestOffice365Sites: Request a list of Office365 sites

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-office365-sites` _(>= 21.3.5)_
- Return type: [BrowseOffice365ObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BrowseOffice365ObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                                     | Description                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `Username`    | string                                                                                                                   | User account name                          |
| `AuthType`    | string                                                                                                                   | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                                   | User account password _(Optional)_         |
| `LKey`        | string                                                                                                                   | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                                   | User session key _(Optional)_              |
| `TargetID`    | string                                                                                                                   | The live connection GUID                   |
| `Credentials` | [Office365Credential](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-Office365Credential) (JSON) | The Office365 account credential           |

## UserWebDispatcherRequestStoredObjects: Request a list of stored objects inside an existing backup job

The remote device must have given consent for an MSP to browse their files.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-stored-objects` _(>= 19.3.0)_
- Return type: [DispatcherStoredObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherStoredObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type                                                                                                                             | Description                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`    | string                                                                                                                           | User account name                                                                                                                                    |
| `AuthType`    | string                                                                                                                           | Either 'Password', 'LKey', or 'SessionKey'                                                                                                           |
| `Password`    | string                                                                                                                           | User account password _(Optional)_                                                                                                                   |
| `LKey`        | string                                                                                                                           | User account L-key _(Optional)_                                                                                                                      |
| `SessionKey`  | string                                                                                                                           | User session key _(Optional)_                                                                                                                        |
| `TargetID`    | string                                                                                                                           | The live connection GUID                                                                                                                             |
| `Destination` | string                                                                                                                           | The Storage Vault ID                                                                                                                                 |
| `SnapshotID`  | string                                                                                                                           | The selected backup job snapshot                                                                                                                     |
| `TreeID`      | string                                                                                                                           | Browse objects inside subdirectory of backup snapshot. If it is for VMDK single file restore, it should be the disk image's subtree ID. _(Optional)_ |
| `Options`     | [VMDKSnapshotViewOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-VMDKSnapshotViewOptions) (JSON) | Request a list of stored objects in vmdk file _(Optional)_                                                                                           |

## UserWebDispatcherRequestVaultSnapshots: Request a list of Storage Vault snapshots from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-vault-snapshots`
- Return type: [DispatcherVaultSnapshotsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherVaultSnapshotsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `Username`    | string | User account name                          |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string | User account password _(Optional)_         |
| `LKey`        | string | User account L-key _(Optional)_            |
| `SessionKey`  | string | User session key _(Optional)_              |
| `TargetID`    | string | The live connection GUID                   |
| `Destination` | string | The Storage Vault ID                       |

## UserWebDispatcherRequestWindiskSnapshot: Request a Disk Image snapshot with the windiskbrowse-style from a live connected device

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/request-windisk-snapshot` _(>= 21.9.3)_
- Return type: [DispatcherWindiskSnapshotResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherWindiskSnapshotResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `Username`    | string | User account name                          |
| `AuthType`    | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string | User account password _(Optional)_         |
| `LKey`        | string | User account L-key _(Optional)_            |
| `SessionKey`  | string | User session key _(Optional)_              |
| `TargetID`    | string | The live connection GUID                   |
| `Destination` | string | The Storage Vault ID                       |
| `SnapshotID`  | string | The Snapshot ID                            |

## UserWebDispatcherRunBackup: Instruct a live connected device in my account to run a scheduled backup

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/run-backup` _(>= 18.3.13)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `TargetID`   | string | The live connection GUID                   |
| `BackupRule` | string | The schedule GUID                          |

## UserWebDispatcherRunBackupCustom: Instruct a live connected device to run a backup

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/run-backup-custom` _(>= 18.3.13)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type                                                                                                                               | Description                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `Username`    | string                                                                                                                             | User account name                             |
| `AuthType`    | string                                                                                                                             | Either 'Password', 'LKey', or 'SessionKey'    |
| `Password`    | string                                                                                                                             | User account password _(Optional)_            |
| `LKey`        | string                                                                                                                             | User account L-key _(Optional)_               |
| `SessionKey`  | string                                                                                                                             | User session key _(Optional)_                 |
| `TargetID`    | string                                                                                                                             | The live connection GUID                      |
| `Source`      | string                                                                                                                             | The Protected Item GUID                       |
| `Destination` | string                                                                                                                             | The Storage Vault GUID                        |
| `Options`     | [BackupJobAdvancedOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobAdvancedOptions) (JSON) | Extra job parameters (>= 19.3.6) _(Optional)_ |

## UserWebDispatcherRunRestore: Instruct a live connected device in my account to perform a local restore

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/run-restore` _(>= 18.3.13)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type                      | Description                                                                                                                                       |
| ------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`    | string                    | User account name                                                                                                                                 |
| `AuthType`    | string                    | Either 'Password', 'LKey', or 'SessionKey'                                                                                                        |
| `Password`    | string                    | User account password _(Optional)_                                                                                                                |
| `LKey`        | string                    | User account L-key _(Optional)_                                                                                                                   |
| `SessionKey`  | string                    | User session key _(Optional)_                                                                                                                     |
| `TargetID`    | string                    | The live connection GUID                                                                                                                          |
| `Path`        | string                    | The local path to restore to                                                                                                                      |
| `Source`      | string                    | The Protected Item ID                                                                                                                             |
| `Destination` | string                    | The Storage Vault ID                                                                                                                              |
| `Snapshot`    | string                    | If present, restore a specific snapshot. Otherwise, restore the latest snapshot for the selected Protected Item + Storage Vault pair _(Optional)_ |
| `Paths`       | List&lt;string&gt; (JSON) | If present, restore these paths only. Otherwise, restore all data (>= 19.3.0) _(Optional)_                                                        |

## UserWebDispatcherRunRestoreCustom: Instruct a live connected device in my account to perform a local restore

This command is understood by Comet Backup 18.6.0 and newer.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/dispatcher/run-restore-custom` _(>= 18.6.0)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type                                                                                                                                 | Description                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Username`    | string                                                                                                                               | User account name                                                                                                                                 |
| `AuthType`    | string                                                                                                                               | Either 'Password', 'LKey', or 'SessionKey'                                                                                                        |
| `Password`    | string                                                                                                                               | User account password _(Optional)_                                                                                                                |
| `LKey`        | string                                                                                                                               | User account L-key _(Optional)_                                                                                                                   |
| `SessionKey`  | string                                                                                                                               | User session key _(Optional)_                                                                                                                     |
| `TargetID`    | string                                                                                                                               | The live connection GUID                                                                                                                          |
| `Source`      | string                                                                                                                               | The Protected Item ID                                                                                                                             |
| `Destination` | string                                                                                                                               | The Storage Vault ID                                                                                                                              |
| `Options`     | [RestoreJobAdvancedOptions](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RestoreJobAdvancedOptions) (JSON) | Restore targets                                                                                                                                   |
| `Snapshot`    | string                                                                                                                               | If present, restore a specific snapshot. Otherwise, restore the latest snapshot for the selected Protected Item + Storage Vault pair _(Optional)_ |
| `Paths`       | List&lt;string&gt; (JSON)                                                                                                            | If present, restore these paths only. Otherwise, restore all data (>= 19.3.0) _(Optional)_                                                        |

## UserWebGetJobLog: Get backup job report log, in plaintext format (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-job-log`
- Return type: Body in `text/plain` encoding, or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `JobID`      | string | Selected job GUID                          |

## UserWebGetJobLogEntries: Get backup job report log (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-job-log-entries` _(>= 20.6.8)_
- Return type: List<[JobEntry](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-JobEntry)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `JobID`      | string | Selected job GUID                          |

## UserWebGetJobProperties: Get backup job properties (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-job-properties`
- Return type: [BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `JobID`      | string | Selected job GUID                          |

## UserWebGetJobs: List all backup jobs (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-jobs`
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

## UserWebGetJobsForCustomSearch: List all backup jobs (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-jobs-for-custom-search` _(>= 18.12.2)_
- Return type: List<[BackupJobDetail](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-BackupJobDetail)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

## UserWebGetUserProfileAndHash: Get user account profile (atomic)

(Web interface version)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/get-user-profile-and-hash`
- Return type: [GetProfileAndHashResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-GetProfileAndHashResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

## UserWebJobCancel: Cancel a running job

A request is sent to the live-connected device, asking it to cancel the operation. This may fail if there is no live-connection. Only jobs from Comet 18.3.5 or newer can be cancelled. A job can only be cancelled if it has a non-empty CancellationID field in its properties. If the device is running Comet 21.9.5 or later, this API will wait up to ten seconds for a confirmation from the client.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/job/cancel` _(>= 19.6.3)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |
| `JobID`      | string | Job ID                                     |

## UserWebNewsGetAll: Get News entries (Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/news/get-all`
- Return type: Dictionary<string, [NewsEntry](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-NewsEntry)\> (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

## UserWebRequestFilesystemObjects: Request a list of filesystem objects from the device

The device must have granted the administrator permission to view its filenames.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/request-filesystem-objects` _(>= 20.6.1)_
- Return type: [DispatcherStoredObjectsResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-DispatcherStoredObjectsResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                                                                               |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------- |
| `Username`   | string | User account name                                                                                         |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey'                                                                |
| `Password`   | string | User account password _(Optional)_                                                                        |
| `LKey`       | string | User account L-key _(Optional)_                                                                           |
| `SessionKey` | string | User session key _(Optional)_                                                                             |
| `TargetID`   | string | The live connection GUID                                                                                  |
| `Path`       | string | Browse objects inside this path. If empty or not present, returns the top-level device paths _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/user/request-filesystem-objects` _(>= 20.3.2)_ _("UserRequestFilesystemObjects")_

## UserWebRequestStorageVault: Request a new Storage Vault (Web)

This action can be prevented via policy. Prior to Comet 19.8.0, the response type was CometAPIResponseMessage (i.e. no DestinationID field in response). The StorageProvider must exist for the target user account's organization.

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/request-storage-vault` _(>= 18.6.2)_
- Return type: [RequestStorageVaultResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-RequestStorageVaultResponseMessage) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter         | Type   | Description                                                              |
| ----------------- | ------ | ------------------------------------------------------------------------ |
| `Username`        | string | User account name                                                        |
| `AuthType`        | string | Either 'Password', 'LKey', or 'SessionKey'                               |
| `Password`        | string | User account password _(Optional)_                                       |
| `LKey`            | string | User account L-key _(Optional)_                                          |
| `SessionKey`      | string | User session key _(Optional)_                                            |
| `StorageProvider` | string | ID for the storage template destination                                  |
| `SelfAddress`     | string | The external URL for this server. Used to resolve conflicts _(Optional)_ |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/user/web/request-bucket` _("UserWebRequestBucket")_

## UserWebRequestStorageVaultProviders: Get the available options for Requesting a Storage Vault (User Web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/request-storage-vault-providers` _(>= 18.6.2)_
- Return type: Dictionary&lt;string, string&gt; (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/user/web/request-bucket-options` _("UserWebRequestBucketOptions")_

## UserWebSessionRevoke: Revoke a session key (log out)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/session/revoke` _(>= 19.6.3)_
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/user/session/revoke` _("UserSessionRevoke")_

## UserWebSessionStart: Generate a session key (log in)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/session/start` _(>= 19.6.3)_
- Return type: [SessionKeyRegeneratedResponse](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-SessionKeyRegeneratedResponse) (JSON), or [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON) on failure

| Parameter    | Type   | Description                                |
| ------------ | ------ | ------------------------------------------ |
| `Username`   | string | User account name                          |
| `AuthType`   | string | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`   | string | User account password _(Optional)_         |
| `LKey`       | string | User account L-key _(Optional)_            |
| `SessionKey` | string | User session key _(Optional)_              |

This API can be accessed via an additional 1 endpoint(s) for backward compatibility. These aliases will be maintained indefinitely, but new applications should not use them.

- `POST /api/v1/user/session/start` _("UserSessionStart")_

## UserWebSetProfileHash: Set account profile (atomic, web)

You must supply user authentication credentials to use this API, and the user account must be authorized for web access. This API requires the Auth Role to be enabled.

- Endpoint: `POST /api/v1/user/web/set-profile-hash`
- Return type: [CometAPIResponseMessage](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-CometAPIResponseMessage) (JSON)

| Parameter     | Type                                                                                                                 | Description                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `Username`    | string                                                                                                               | User account name                          |
| `AuthType`    | string                                                                                                               | Either 'Password', 'LKey', or 'SessionKey' |
| `Password`    | string                                                                                                               | User account password _(Optional)_         |
| `LKey`        | string                                                                                                               | User account L-key _(Optional)_            |
| `SessionKey`  | string                                                                                                               | User session key _(Optional)_              |
| `ProfileData` | [UserProfileConfig](https://docs.cometbackup.com/latest/api/api-data-structures#api-struct-UserProfileConfig) (JSON) | Updated account profile                    |
| `ProfileHash` | string                                                                                                               | Previous account profile hash              |
