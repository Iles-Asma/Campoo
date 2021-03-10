declare type Options = {
    parent?: {
        nonInteractive: boolean;
    };
};
export declare function fetchAndroidKeystoreAsync(projectRoot: string, options: Options): Promise<void>;
export declare function fetchAndroidHashesAsync(projectRoot: string, options: Options): Promise<void>;
export declare function fetchAndroidUploadCertAsync(projectRoot: string, options: Options): Promise<void>;
export {};
