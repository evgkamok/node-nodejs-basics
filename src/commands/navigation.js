import { readdir } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

export async function up() {
	try {
		const currentDir = process.cwd()
		process.chdir('..')

		if (currentDir === process.cwd()) {
			console.warn('Already at root directory')
			return
		}
	} catch (error) {
		throw new Error('Failed to navigate up')
	}
}

export async function cd(targetPath) {
	if (!targetPath) {
		throw new Error('Path is required')
	}

	try {
		const destinationPath = path.resolve(targetPath)
		process.chdir(destinationPath)
	} catch (error) {
		throw new Error(`Failed to navigate to ${targetPath}`)
	}
}

export async function ls() {
	try {
		const entries = await readdir(process.cwd(), { withFileTypes: true })

		const directories = entries
			.filter(entry => entry.isDirectory())
			.map(entry => ({
				Name: entry.name,
				Type: 'directory',
			}))

		const files = entries
			.filter(entry => entry.isFile())
			.map(entry => ({
				Name: entry.name,
				Type: 'file',
			}))

		const contentDir = [...directories, ...files]

		console.table(contentDir)

		if (directories.length === 0 && files.length === 0) {
			console.log('Directory is empty')
		}
	} catch (error) {
		console.log(error)
		throw new Error('Failed to list directory contents')
	}
}

export async function goHomeDir() {
	const homePath = os.homedir()
	process.chdir(homePath)
}
