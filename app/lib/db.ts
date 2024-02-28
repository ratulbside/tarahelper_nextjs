// import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  uniqueIndex
} from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { sql } from '@vercel/postgres';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
// let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
// let db = drizzle(client);

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 64 }).notNull(),
  password: varchar('password', { length: 64 }).notNull(),
  passwordSalt: varchar('passwordSalt', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
},
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);

export async function getUser(email: string) {
  return await db.select().from(usersTable).where(eq(usersTable.email, email));
}

export async function createUser(email: string, password: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(usersTable).values({ email: email, password: hash, passwordSalt: salt, createdAt: new Date() });
}