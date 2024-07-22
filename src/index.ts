import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAndroidShell.web.ts
// and on native platforms to ExpoAndroidShell.ts
import ExpoAndroidShellModule from './ExpoAndroidShellModule';
import ExpoAndroidShellView from './ExpoAndroidShellView';
import { ChangeEventPayload, ExpoAndroidShellViewProps } from './ExpoAndroidShell.types';

// Get the native constant value.
export const PI = ExpoAndroidShellModule.PI;

export function hello(): string {
  return ExpoAndroidShellModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAndroidShellModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAndroidShellModule ?? NativeModulesProxy.ExpoAndroidShell);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAndroidShellView, ExpoAndroidShellViewProps, ChangeEventPayload };
