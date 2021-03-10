declare function runTravelingFastlaneAsync(command: string, args: readonly string[], envs?: Record<string, string>): Promise<{
    [key: string]: any;
}>;
export { runTravelingFastlaneAsync };
