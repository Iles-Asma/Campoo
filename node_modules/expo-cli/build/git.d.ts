interface GitStatusOptions {
    showUntracked?: boolean;
}
declare function gitStatusAsync({ showUntracked }?: GitStatusOptions): Promise<string>;
declare function gitDiffAsync(): Promise<void>;
declare function gitAddAsync(file: string, options?: {
    intentToAdd?: boolean;
}): Promise<void>;
declare function gitDoesRepoExistAsync(): Promise<boolean>;
declare function gitRootDirectory(): Promise<string>;
export { gitStatusAsync, gitDiffAsync, gitAddAsync, gitDoesRepoExistAsync, gitRootDirectory };
