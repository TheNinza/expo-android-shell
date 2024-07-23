package expo.modules.androidshell

import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader


class ExpoAndroidShellModule : Module() {

    private fun readStream(stream: InputStream): String {
        val reader = BufferedReader(InputStreamReader(stream))
        val output = StringBuilder()
        var line: String?

        try {
            while (reader.readLine().also { line = it } != null) {
                output.append(line)
            }
        } catch (e: IOException) {
            e.printStackTrace()
        } finally {
            try {
                stream.close()
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }

        return output.toString()
    }

    private fun runCommand(command: String): String {
        var process: Process? = null
        var output = ""
        var error = ""
        try {
            process = Runtime.getRuntime().exec(command)
            output = readStream(process.inputStream)
            error = readStream(process.errorStream)
            process.waitFor()
        } catch (e: IOException) {
            e.printStackTrace()
        } catch (e: InterruptedException) {
            e.printStackTrace()
        } finally {
            process?.destroy()
        }
        return output + error

    }

    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoAndroidShell')` in JavaScript.
        Name("ExpoAndroidShell")


        Function("execCommand") { command: String ->
            val output = runCommand(command)
            return@Function output
        }

        AsyncFunction("execCommandAsync") { command: String, promise: Promise ->
            val thread = Thread {
                val output = runCommand(command)
                promise.resolve(output)
            }

            try {
                thread.start()
            } catch (e: Exception) {
                promise.reject(
                    CodedException(
                        "ERR_EXEC_COMMAND",
                        "Failed to execute command: $command",
                        e
                    )
                )
            }
        }
    }
}
