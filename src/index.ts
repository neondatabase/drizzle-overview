import { Hono } from "hono";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Hono();

app.get("/", async (c) => {
	try {
		const data = await db.select().from(users);
		return c.json(data);
	} catch (error) {
		return c.json({ error: error.message });
	}
});

Bun.serve({
	port: process.env.PORT || 3000,
	fetch: app.fetch,
});
