/// <reference types="jest" />
import { DistCert, DistCertInfo, ProvisioningProfile, ProvisioningProfileInfo, PushKey, PushKeyInfo, Team } from '../../appleApi';
import { IosDistCredentials, IosPushCredentials } from '../credentials';
export declare const testAppleTeam: Team;
export declare const testProvisioningProfile: ProvisioningProfile;
export declare const testProvisioningProfiles: ProvisioningProfile[];
export declare const testProvisioningProfileFromApple: ProvisioningProfileInfo;
export declare const testProvisioningProfilesFromApple: ProvisioningProfileInfo[];
export declare const testDistCert: DistCert;
export declare const testIosDistCredential: IosDistCredentials;
export declare const testIosDistCredentials: IosDistCredentials[];
export declare const testDistCertFromApple: DistCertInfo;
export declare const testDistCertsFromApple: DistCertInfo[];
export declare const testPushKey: PushKey;
export declare const testIosPushCredential: IosPushCredentials;
export declare const testIosPushCredentials: IosPushCredentials[];
export declare const testPushKeyFromApple: PushKeyInfo;
export declare const testPushKeysFromApple: PushKeyInfo[];
export declare const testLegacyPushCert: {
    pushId: string;
    pushP12: string;
    pushPassword: string;
};
export declare const testAppCredential: {
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
};
export declare const testAllCredentialsForApp: {
    pushCredentials: PushKey;
    distCredentials: DistCert;
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
};
export declare const testAppCredentials: {
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
export declare const testAllCredentials: {
    userCredentials: (IosPushCredentials | IosDistCredentials)[];
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
};
export declare function getApiV2WrapperMock(override?: object): {
    getAllCredentialsApi: jest.Mock<never, []>;
    getAllCredentialsForAppApi: jest.Mock<never, []>;
    getUserCredentialsByIdApi: jest.Mock<never, []>;
    createDistCertApi: jest.Mock<never, []>;
    updateDistCertApi: jest.Mock<never, []>;
    deleteDistCertApi: jest.Mock<never, []>;
    useDistCertApi: jest.Mock<never, []>;
    createPushKeyApi: jest.Mock<never, []>;
    updatePushKeyApi: jest.Mock<never, []>;
    deletePushKeyApi: jest.Mock<never, []>;
    usePushKeyApi: jest.Mock<never, []>;
    deletePushCertApi: jest.Mock<never, []>;
    updateProvisioningProfileApi: jest.Mock<never, []>;
    deleteProvisioningProfileApi: jest.Mock<never, []>;
} & object;
export declare function getIosApiMock(override?: object): {
    getDistCert: jest.Mock<DistCert, []>;
    createDistCert: jest.Mock<IosDistCredentials, []>;
    useDistCert: jest.Mock<any, any>;
    getPushKey: jest.Mock<PushKey, []>;
    createPushKey: jest.Mock<IosPushCredentials, []>;
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
    getProvisioningProfile: jest.Mock<ProvisioningProfile, []>;
    getAllCredentials: jest.Mock<{
        userCredentials: (IosPushCredentials | IosDistCredentials)[];
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
export declare const appleCtxMock: {
    appleId: string;
    appleIdPassword: string;
    team: {
        id: string;
    };
    fastlaneSession: string;
};
