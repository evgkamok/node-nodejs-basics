import { readdir } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

export async function up() {
	const currentDirPath = process.cwd()
	process.chdir('..')

	if (currentDirPath === process.cwd()) {
		console.warn('Already at root directory')
	}
}

export async function cd(targetPath) {
	if (!targetPath) {
		throw new Error('Path is required')
	}

	const absDstPath = path.resolve(targetPath)
	process.chdir(absDstPath)
}

export async function ls() {
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
}

export async function goHomeDir() {
	const homePath = os.homedir()
	process.chdir(homePath)
}
