/// <reference types="jest" />
export declare function getCtxMock(mockOverride?: {
    [key: string]: any;
}): {
    ios: {
        getDistCert: jest.Mock<import("../../appleApi").DistCert, []>;
        createDistCert: jest.Mock<import("../credentials").IosDistCredentials, []>;
        useDistCert: jest.Mock<any, any>;
        getPushKey: jest.Mock<import("../../appleApi").PushKey, []>;
        createPushKey: jest.Mock<import("../credentials").IosPushCredentials, []>;
        usePushKey: jest.Mock<any, any>;
        updateProvisioningProfile: jest.Mock<any, any>;
        getAppCredentials: jest.Mock<{
            experienceName: string;
            bundleIdentifier: string;
            distCredentialsId: number;
            pushCredentialsId: number;
            credentials: {
                provisioningProfileId?: string | undefined;
                provisioningProfile: string;
                teamId: string;
                teamName?: string | undefined;
            };
        }, []>;
        getProvisioningProfile: jest.Mock<import("../../appleApi").ProvisioningProfile, []>;
        getAllCredentials: jest.Mock<{
            userCredentials: (import("../credentials").IosPushCredentials | import("../credentials").IosDistCredentials)[];
            appCredentials: {
                experienceName: string;
                bundleIdentifier: string;
                distCredentialsId: number;
                pushCredentialsId: number;
                credentials: {
                    provisioningProfileId?: string | undefined;
                    provisioningProfile: string;
                    teamId: string;
                    teamName?: string | undefined;
                };
            }[];
        }, []>;
    } & object;
    android: {
        fetchAll: jest.Mock<{
            [key: string]: import("../credentials").AndroidCredentials;
        }, []>;
        fetchKeystore: jest.Mock<{
            keystore: string;
            keystorePassword: string;
            keyAlias: string;
            keyPassword: string;
        }, []>;
        updateKeystore: jest.Mock<any, any>;
        removeKeystore: jest.Mock<any, any>;
    } & object;
    appleCtx: {
        appleId: string;
        appleIdPassword: string;
        team: {
            id: string;
        };
        fastlaneSession: string;
    };
    ensureAppleCtx: jest.Mock<any, any>;
    user: {
        username: string;
    };
    hasAppleCtx: jest.Mock<boolean, []>;
    hasProjectContext: boolean;
    manifest: {
        name: string;
        version: string;
        slug: string;
        sdkVersion: string;
        ios: {
            bundleIdentifier: string;
        };
    };
    projectDir: string;
} & {
    [key: string]: any;
};
