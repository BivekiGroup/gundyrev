import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type Review = {
  id: string;
  quote: string;
  author: string;
  position?: string;
  company?: string;
  focus?: string;
  createdAt: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "reviews.json");

async function ensureFile() {
  try {
    await fs.access(DATA_PATH);
  } catch {
    const dir = path.dirname(DATA_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_PATH, "[]", "utf8");
  }
}

export async function getReviews(): Promise<Review[]> {
  await ensureFile();
  const file = await fs.readFile(DATA_PATH, "utf8");
  const data = JSON.parse(file) as Review[];
  return data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function addReview(review: Omit<Review, "id" | "createdAt">): Promise<Review> {
  await ensureFile();
  const current = await getReviews();
  const entry: Review = {
    ...review,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  current.unshift(entry);
  await fs.writeFile(DATA_PATH, JSON.stringify(current, null, 2), "utf8");
  return entry;
}
