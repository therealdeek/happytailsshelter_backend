import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    host: "aws-1-us-east-1.pooler.supabase.com",
    port: 5432,
    user: "postgres.tyayuesxvzdpxzsfxdkx",
    password: process.env.DB_PASSWORD,
    database: "postgres",
    ssl: {
        rejectUnauthorized: false,
    },
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
});

export default prisma;
