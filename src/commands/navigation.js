import { readdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

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
			.map(entry => entry.name)
			.sort()

		const files = entries
			.filter(entry => entry.isFile())
			.map(entry => entry.name)
			.sort()

		if (directories.length > 0) {
			console.log('\nDirectories:')
			directories.forEach(dir => console.log(`  📁 ${dir}`))
		}

		if (files.length > 0) {
			console.log('\nFiles:')
			files.forEach(file => console.log(`  📄 ${file}`))
		}

		if (directories.length === 0 && files.length === 0) {
			console.log('Directory is empty')
		}
	} catch (error) {
		throw new Error('Failed to list directory contents')
	}
}
