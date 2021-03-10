import { ArchiveSource } from '../archive-source';
import { AndroidPackageSource } from './AndroidPackageSource';
import { AndroidSubmissionConfig } from './AndroidSubmissionConfig';
import { ServiceAccountSource } from './ServiceAccountSource';
import { AndroidSubmissionContext } from './types';
export interface AndroidSubmissionOptions extends Pick<AndroidSubmissionConfig, 'track' | 'releaseStatus'> {
    androidPackageSource: AndroidPackageSource;
    archiveSource: ArchiveSource;
    serviceAccountSource: ServiceAccountSource;
}
declare class AndroidSubmitter {
    private ctx;
    private options;
    constructor(ctx: AndroidSubmissionContext, options: AndroidSubmissionOptions);
    submitAsync(): Promise<void>;
    private resolveSourceOptions;
}
export declare type AndroidOnlineSubmissionConfig = AndroidSubmissionConfig & {
    projectId: string;
};
export default AndroidSubmitter;
