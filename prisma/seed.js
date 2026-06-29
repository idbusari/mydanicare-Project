const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('DaniCare2026!', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@mydanicare.com' },
    update: {},
    create: {
      email: 'admin@mydanicare.com',
      name: 'Admin',
      password,
      role: 'admin',
    },
  });

  console.log('Admin user created:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
