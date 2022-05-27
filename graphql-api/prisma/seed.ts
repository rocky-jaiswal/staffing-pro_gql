const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')
  await prisma.geography.deleteMany({})
  await prisma.geography.createMany({
    data: [
      { name: 'North America' },
      { name: 'South America' },
      { name: 'Europe-MiddleEast' },
      { name: 'Africa' },
      { name: 'Asia' },
      { name: 'Pacific' }
    ]
  })
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
