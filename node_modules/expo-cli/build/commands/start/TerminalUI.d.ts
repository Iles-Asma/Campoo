declare type StartOptions = {
    reset?: boolean;
    nonInteractive?: boolean;
    nonPersistent?: boolean;
    maxWorkers?: number;
    webOnly?: boolean;
};
export declare const printServerInfo: (projectDir: string, options?: Pick<StartOptions, "webOnly">) => Promise<void>;
export declare const startAsync: (projectRoot: string, options: StartOptions) => Promise<void>;
export {};
