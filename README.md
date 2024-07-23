# expo-android-shell

A native expo module to execute shell commands on Android.

## Installation

```sh
npm install expo-android-shell
```

## Methods

### `execCommand(command: string): string`

Executes a shell command synchronously. Returns the output of the command.

### `execCommandAsync(command: string): Promise<string>`

Executes a shell command asynchronously on a native background thread. Returns a promise that resolves with the output of the command.

## Usage

See the [example](example/App.tsx) for a full example.
