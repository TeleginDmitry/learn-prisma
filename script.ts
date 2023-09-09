import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const users = await prisma.user.findMany({
		where: {
			name: { contains: 'dmitry' },
			email: { contains: '@test.ru' },
		},
		// distinct: ['name'],
		// take: 5,
		// skip: 0,
		orderBy: {
			age: 'desc',
		},
	})

	console.log(users)
}

main()
	.catch(error => {
		console.log(error.message)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
