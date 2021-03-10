import { Command } from 'commander';
export declare function initGitRepoAsync(root: string, flags?: {
    silent: boolean;
    commit: boolean;
}): Promise<boolean>;
export default function (program: Command): void;
