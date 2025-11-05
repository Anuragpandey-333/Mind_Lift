const { PrismaClient } = require('@prisma/client')

// Singleton pattern for serverless environments
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

module.exports = prisma