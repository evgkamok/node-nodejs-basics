import os from 'node:os'

export async function osInfo(flag) {
	if (!flag) {
		throw new Error('Flag is required')
	}

	try {
		switch (flag) {
			case '--EOL':
				const EOL = JSON.stringify(os.EOL)
				console.log(`default system End-Of-Line is - ${EOL}`)
				break
			case '--cpus':
				const cpus = os.cpus()
				console.log('Total count CPU - ', cpus.length)
				cpus.forEach((cpu, index) => {
					console.log(
						`${index + 1}. ${cpu.model} - ${(cpu.speed / 1000).toFixed(2)}Ghz`
					)
				})
				break
			case '--homedir':
				console.log(`Home directory is - ${os.homedir}`)
				break
			case '--username':
				const userInfo = os.userInfo()
				console.log(`Username is ${userInfo.username}`)
				break
			case '--architecture':
				console.log(`CPU arch is ${os.arch}`)
				break
			default:
				throw new Error('Invalid OS flag')
		}
	} catch (error) {
		throw new Error('Failed to get OS information')
	}
}
