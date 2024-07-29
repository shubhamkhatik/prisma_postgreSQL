COMMANDS
> git init

> git add README.md

> git commit -m "first commit"

> git branch -M main

> git remote add origin https://github.com/shubhamkhatik/prisma_postgreSQL.git

>npm init -y

> npm install typescript ts-node @types/node --save-dev
> npx tsc --init
> npm install prisma --save-dev
> npx prisma init --datasource-provider postgresql

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/beyond-the-orm

> npx prisma db pull
> npm install @prisma/client
> npx prisma generate
or for creating new tables in databases migrate the database
>npx prisma migrate dev --name init


