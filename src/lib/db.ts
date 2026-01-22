import { PrismaClient } from "@/generated/prisma";

const golbalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const prisma = golbalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') golbalForPrisma.prisma = prisma

export default prisma
