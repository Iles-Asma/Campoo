import { ExpoConfig, ProjectPrivacy } from '@expo/config';
import { RobotUser, User } from '@expo/xdl';
interface ProjectData {
    accountName: string;
    projectName: string;
    privacy?: ProjectPrivacy;
}
declare function ensureProjectExistsAsync(user: User | RobotUser, { accountName, projectName, privacy }: ProjectData): Promise<string>;
/**
 * Get the account and project name using a user and Expo config.
 * This will validate if the owner field is set when using a robot account.
 */
declare function getProjectOwner(user: User | RobotUser, exp: ExpoConfig): string;
export { ensureProjectExistsAsync, getProjectOwner };
