// import shiki from './test-react-cache';
// import prisma from "./test-globalthis";
import db from "./test-class";

export async function generateStaticParams() {
  return Array.from({length: 100}).map((_, i) => {
    return {
      slug: i.toString()
    }
  })
}

export default async function Page({ params }: { params: { slug: string}}) {
  // 3 test cases, enable or disable them together with the imports
  
  // await shiki();
  // prisma;
  db;
  return <div>{params.slug}</div>
}