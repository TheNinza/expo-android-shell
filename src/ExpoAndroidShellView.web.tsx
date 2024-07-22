import * as React from 'react';

import { ExpoAndroidShellViewProps } from './ExpoAndroidShell.types';

export default function ExpoAndroidShellView(props: ExpoAndroidShellViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
