import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

const DB_PATH = './prisma/dev.db';

function sqliteQuery(table: string, where?: string): any[] {
  const sql = where
    ? `SELECT * FROM "${table}" WHERE ${where}`
    : `SELECT * FROM "${table}"`;
  const out = execSync(
    `sqlite3 "${DB_PATH}" "${sql.replace(/"/g, '\\"')}" -json`,
    { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
  );
  if (!out.trim()) return [];
  try {
    return JSON.parse(out);
  } catch {
    return [];
  }
}

function sqliteScalar(sql: string): any {
  const out = execSync(`sqlite3 "${DB_PATH}" "${sql.replace(/"/g, '\\"')}"`, {
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'ignore'],
  });
  return out.trim();
}

async function main() {
  const prisma = new PrismaClient();

  const tablesRaw = sqliteScalar(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_%' ORDER BY name"
  );
  const tables = tablesRaw.split('\n').filter(Boolean);
  console.log('Tables found in SQLite:', tables);

  // ─── User ───
  if (tables.includes('User')) {
    const neonCount = await prisma.user.count();
    if (neonCount > 0) {
      console.log(`Skipping User — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('User');
      if (rows.length) {
        await prisma.user.createMany({
          data: rows.map((r: any) => ({
            id: r.id,
            email: r.email,
            name: r.name,
            password: r.password,
            role: r.role,
            createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
            updatedAt: r.updatedAt ? new Date(r.updatedAt) : new Date(),
          })),
        });
        console.log(`Migrated ${rows.length} users`);
      }
    }
  }

  // ─── BlogPost ───
  if (tables.includes('BlogPost')) {
    const neonCount = await prisma.blogPost.count();
    if (neonCount > 0) {
      console.log(`Skipping BlogPost — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('BlogPost');
      if (rows.length) {
        await prisma.blogPost.createMany({
          data: rows.map((r: any) => ({
            id: r.id,
            slug: r.slug,
            title: r.title,
            excerpt: r.excerpt,
            content: r.content,
            image: r.image,
            author: r.author,
            keywords: r.keywords,
            published: r.published === 1 || r.published === true,
            publishedAt: r.publishedAt ? new Date(r.publishedAt) : null,
            createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
            updatedAt: r.updatedAt ? new Date(r.updatedAt) : new Date(),
            metaTitle: r.metaTitle,
            metaDesc: r.metaDesc,
          })),
        });
        console.log(`Migrated ${rows.length} blog posts`);
      }
    }
  }

  // ─── Lead ───
  if (tables.includes('Lead')) {
    const neonCount = await prisma.lead.count();
    if (neonCount > 0) {
      console.log(`Skipping Lead — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('Lead');
      if (rows.length) {
        await prisma.lead.createMany({
          data: rows.map((r: any) => ({
            id: r.id,
            source: r.source,
            firstName: r.firstName,
            lastName: r.lastName,
            email: r.email,
            phone: r.phone,
            state: r.state,
            dob: r.dob,
            insurance: r.insurance,
            reason: r.reason,
            message: r.message,
            notes: r.notes,
            data: r.data,
            createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
            status: r.status || 'new',
          })),
        });
        console.log(`Migrated ${rows.length} leads`);
      }
    }
  }

  // ─── PageView ───
  if (tables.includes('PageView')) {
    const neonCount = await prisma.pageView.count();
    if (neonCount > 0) {
      console.log(`Skipping PageView — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('PageView');
      if (rows.length) {
        const batchSize = 500;
        for (let i = 0; i < rows.length; i += batchSize) {
          const chunk = rows.slice(i, i + batchSize);
          await prisma.pageView.createMany({
            data: chunk.map((r: any) => ({
              id: r.id,
              page: r.page,
              ip: r.ip,
              userAgent: r.userAgent,
              referrer: r.referrer,
              device: r.device,
              source: r.source,
              country: r.country,
              city: r.city,
              createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
            })),
          });
        }
        console.log(`Migrated ${rows.length} page views`);
      }
    }
  }

  // ─── SiteSetting ───
  if (tables.includes('SiteSetting')) {
    const neonCount = await prisma.siteSetting.count();
    if (neonCount > 0) {
      console.log(`Skipping SiteSetting — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('SiteSetting');
      if (rows.length) {
        await prisma.siteSetting.createMany({
          data: rows.map((r: any) => ({
            id: r.id,
            key: r.key,
            value: r.value,
          })),
        });
        console.log(`Migrated ${rows.length} site settings`);
      }
    }
  }

  // ─── ConversionEvent ───
  if (tables.includes('ConversionEvent')) {
    const neonCount = await prisma.conversionEvent.count();
    if (neonCount > 0) {
      console.log(`Skipping ConversionEvent — already has ${neonCount} record(s) in Neon`);
    } else {
      const rows = sqliteQuery('ConversionEvent');
      if (rows.length) {
        await prisma.conversionEvent.createMany({
          data: rows.map((r: any) => ({
            id: r.id,
            event: r.event,
            page: r.page,
            ip: r.ip,
            userAgent: r.userAgent,
            value: r.value,
            createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
          })),
        });
        console.log(`Migrated ${rows.length} conversion events`);
      }
    }
  }

  await prisma.$disconnect();
  console.log('\n✅ Migration complete. All data copied from SQLite to Neon.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
