import { ExpoConfig } from '@expo/config';
import { RobotUser, User } from '@expo/xdl';
export declare type ClientBuildRequestOptions = {
    user: User | RobotUser | null;
    appleTeamId?: string;
    appleContext: any;
    distributionCert: any;
    provisioningProfile: any;
    pushKey: any;
    udids: string[];
    addUdid: any;
    email: any;
    bundleIdentifier: string;
    customAppConfig: Partial<ExpoConfig>;
};
export declare function createClientBuildRequest({ user, appleContext, distributionCert, provisioningProfile, pushKey, udids, addUdid, email, bundleIdentifier, customAppConfig, }: ClientBuildRequestOptions): Promise<any>;
export declare function getExperienceName({ user, appleTeamId, }: Pick<ClientBuildRequestOptions, 'user' | 'appleTeamId'>): Promise<string>;
export declare function isAllowedToBuild({ user, appleTeamId, }: Pick<ClientBuildRequestOptions, 'user' | 'appleTeamId'>): Promise<any>;
