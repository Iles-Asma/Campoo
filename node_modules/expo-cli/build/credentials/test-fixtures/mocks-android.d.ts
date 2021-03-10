/// <reference types="jest" />
import { AndroidCredentials } from '../credentials';
export declare const testKeystore: {
    keystore: string;
    keystorePassword: string;
    keyAlias: string;
    keyPassword: string;
};
export declare const testKeystore2: {
    keystore: string;
    keystorePassword: string;
    keyAlias: string;
    keyPassword: string;
};
export declare const testPushCredentials: {
    fcmApiKey: string;
};
export declare const testAppCredentials: {
    experienceName: string;
    keystore: {
        keystore: string;
        keystorePassword: string;
        keyAlias: string;
        keyPassword: string;
    };
    pushCredentials: {
        fcmApiKey: string;
    };
};
export declare const testJester2AppCredentials: {
    experienceName: string;
    keystore: {
        keystore: string;
        keystorePassword: string;
        keyAlias: string;
        keyPassword: string;
    };
    pushCredentials: {
        fcmApiKey: string;
    };
};
export declare const testAllCredentials: {
    [key: string]: AndroidCredentials;
};
export declare function getApiV2WrapperMock(override?: object): {
    getAllCredentialsApi: jest.Mock<never, []>;
    getAllCredentialsForAppApi: jest.Mock<never, []>;
    updateKeystoreApi: jest.Mock<never, []>;
    updateFcmKeyApi: jest.Mock<never, []>;
    removeKeystoreApi: jest.Mock<never, []>;
    removeFcmKeyApi: jest.Mock<never, []>;
} & object;
export declare function getAndroidApiMock(override?: object): {
    fetchAll: jest.Mock<{
        [key: string]: AndroidCredentials;
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
