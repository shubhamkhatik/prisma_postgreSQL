import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

async function main() {
    await prisma.user.create({
      data: {
        name: 'deep',
        email: 'deep@prisma.io',
        posts: {
          create: { title: 'Hello deep' },
        },
        profile: {
          create: { bio: 'I like bike' },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })