const prismaClientSingleton = () => {
  console.log('Create random');
  return Math.random();
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

globalThis.prismaGlobal = prisma

export default prisma

