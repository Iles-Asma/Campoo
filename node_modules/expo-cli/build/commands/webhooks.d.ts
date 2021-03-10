import { ApiV2 } from '@expo/xdl';
import { Command } from 'commander';
declare type WebhookEvent = 'build';
export default function (program: Command): void;
export declare function updateAsync(projectRoot: string, { id, url, event, ...options }: {
    id?: string;
    url?: string;
    event?: WebhookEvent;
    secret?: string;
}): Promise<void>;
export declare function setupAsync(projectRoot: string): Promise<{
    experienceName: string;
    project: any;
    client: ApiV2;
}>;
export {};
