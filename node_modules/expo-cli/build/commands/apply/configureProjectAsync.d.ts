import { ExpoConfig } from '@expo/config';
import { ModPlatform } from '@expo/config-plugins';
export declare const expoManagedPlugins: string[];
export default function configureManagedProjectAsync({ projectRoot, platforms, }: {
    projectRoot: string;
    platforms: ModPlatform[];
}): Promise<ExpoConfig>;
