import { Hono } from "hono";
import { db } from "./db";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.get("/", async (c) => {
	try {
		const data = await db.query.posts.findMany({
			with: {
				comments: true,
				user: true,
			},
		});
		return c.json({
			data,
		});
	} catch (error) {
		return c.json({ error });
	}
});

Bun.serve({
	port: PORT,
	fetch: app.fetch,
});

if (process.env.NODE_ENV === "development") {
	console.log(`Server is running at http://localhost:${PORT}`);
}
