import path from 'node:path'
import { fork } from 'node:child_process'

const pathFileFork = path.resolve(import.meta.dirname, 'files/script.js')

const spawnChildProcess = async args => {
	fork(pathFileFork, args)
}

spawnChildProcess(['someArgument1', 'someArgument2'])
