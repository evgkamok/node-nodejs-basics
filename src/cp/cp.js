import path from 'node:path'
import { fork } from 'node:child_process'

const pathFileFork = path.resolve(import.meta.dirname, 'files/script.js')
const childFork = fork(pathFileFork)

const spawnChildProcess = async args => {
	// Write your code here
}

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */)
