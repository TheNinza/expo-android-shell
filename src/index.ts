// Import the native module. On web, it will be resolved to ExpoAndroidShell.web.ts
// and on native platforms to ExpoAndroidShell.ts
import ExpoAndroidShellModule from "./ExpoAndroidShellModule";

export function execCommand(command: string): string {
  return ExpoAndroidShellModule.execCommand(command);
}

export function execCommandAsync(command: string): Promise<string> {
  return ExpoAndroidShellModule.execCommandAsync(command);
}
