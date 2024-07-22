import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAndroidShellViewProps } from './ExpoAndroidShell.types';

const NativeView: React.ComponentType<ExpoAndroidShellViewProps> =
  requireNativeViewManager('ExpoAndroidShell');

export default function ExpoAndroidShellView(props: ExpoAndroidShellViewProps) {
  return <NativeView {...props} />;
}
