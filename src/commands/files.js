import {
	readFile,
	rename,
	writeFile,
	copyFile,
	unlink,
	mkdir as creteDirectory,
} from 'node:fs/promises'
import path from 'node:path'

export async function cat(filePath) {
	if (!filePath) {
		throw new Error('File path is required')
	}

	try {
		const absFilePath = path.resolve(filePath)
		const content = await readFile(absFilePath, 'utf-8')

		process.stdout.write(content + '\n')
	} catch (error) {
		throw new Error('File to read file')
	}
}

export async function add(fileName) {
	console.log('add')

	if (!fileName) {
		throw new Error('File name is required')
	}

	try {
		const filePath = path.join(process.cwd(), fileName)

		await writeFile(filePath, '', { flag: 'wx' })
		console.log(`File ${fileName} successfully created`)
	} catch (error) {
		if (error.code === 'EEXIST') {
			throw new Error('File with this name already exist')
		}
		throw new Error('Failed to create file')
	}
}

export async function rn(oldFilePath, nameNewFile) {
	if (!oldFilePath || !nameNewFile) {
		throw new Error('Both arguments are required')
	}

	try {
		const absOldFilePath = path.resolve(oldFilePath)
		const nameDirectory = path.dirname(absOldFilePath)
		const absNewFilePath = path.join(nameDirectory, nameNewFile)

		await rename(absOldFilePath, absNewFilePath)
		console.log(`File successfully renamed`)
	} catch (error) {
		throw new Error('Failed to rename file')
	}
}

export async function cp(srcPath, destDir) {
	if (!srcPath || !destDir) {
		throw new Error('Both arguments are required')
	}

	try {
		const absSrcPath = path.resolve(srcPath)
		const srcFileName = path.basename(absSrcPath)
		const absDestPath = path.resolve(destDir)

		const destPath = path.join(absDestPath, srcFileName)

		await copyFile(absSrcPath, destPath)
		console.log(`File copied successfully`)
	} catch (error) {
		console.log(error)
		throw new Error('Failed to copy file')
	}
}

export async function mv(srcPath, destDir) {
	if (!srcPath || !destDir) {
		throw new Error('Both arguments are required')
	}

	try {
		const absSrcPath = path.resolve(srcPath)
		const srcFileName = path.basename(srcPath)

		const absDestPath = path.resolve(destDir)
		const destPath = path.join(absDestPath, srcFileName)

		await rename(absSrcPath, destPath)
		console.log(`File moved successfully`)
	} catch (error) {
		throw new Error('Failed to move file')
	}
}

export async function rm(filePath) {
	if (!filePath) {
		throw new Error('File path argument is required')
	}

	try {
		const absFilePath = path.resolve(filePath)

		await unlink(absFilePath)
		console.log(`File deleted successfully`)
	} catch (error) {
		throw new Error('Failed to delete file')
	}
}

export async function mkdir(nameDir) {
	if (!nameDir) {
		throw new Error('Name directory is required')
	}

	try {
		await creteDirectory(nameDir)
		console.log(`Directory successfully created`)
	} catch (error) {
		throw new Error('Failed to create directory')
	}
}
