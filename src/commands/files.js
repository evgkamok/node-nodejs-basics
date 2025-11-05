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

	const absFilePath = path.resolve(filePath)
	const content = await readFile(absFilePath, 'utf-8')

	process.stdout.write(content + '\n')
}

export async function add(fileName) {
	if (!fileName) {
		throw new Error('File name is required')
	}

	const filePath = path.join(process.cwd(), fileName)

	await writeFile(filePath, '', { flag: 'wx' })

	console.log(`File ${fileName} successfully created`)
}

export async function rn(oldFilePath, nameNewFile) {
	if (!oldFilePath || !nameNewFile) {
		throw new Error('Both arguments are required')
	}

	const absOldFilePath = path.resolve(oldFilePath)
	const nameDirectory = path.dirname(absOldFilePath)
	const absNewFilePath = path.join(nameDirectory, nameNewFile)

	await rename(absOldFilePath, absNewFilePath)
	console.log(`File successfully renamed`)
}

export async function cp(srcPath, destDir) {
	if (!srcPath || !destDir) {
		throw new Error('Both arguments are required')
	}

	const absSrcPath = path.resolve(srcPath)
	const srcFileName = path.basename(absSrcPath)
	const absDestPath = path.resolve(destDir)

	const destPath = path.join(absDestPath, srcFileName)

	await copyFile(absSrcPath, destPath)
	console.log(`File copied successfully`)
}

export async function mv(srcPath, destDir) {
	if (!srcPath || !destDir) {
		throw new Error('Both arguments are required')
	}

	const absSrcPath = path.resolve(srcPath)
	const absDestPath = path.resolve(destDir)
	const srcFileName = path.basename(srcPath)
	const targetPath = path.join(absDestPath, srcFileName)

	await rename(absSrcPath, targetPath)
	console.log(`File moved successfully`)
}

export async function rm(filePath) {
	if (!filePath) {
		throw new Error('File path argument is required')
	}

	const absFilePath = path.resolve(filePath)
	await unlink(absFilePath)
	console.log(`File deleted successfully`)
}

export async function mkdir(nameDir) {
	if (!nameDir) {
		throw new Error('Name directory is required')
	}

	await creteDirectory(nameDir)
	console.log(`Directory successfully created`)
}
