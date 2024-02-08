import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
	try {
		const data = [{}];
		return c.json({
			data,
		});
	} catch (error) {
		return c.json({ error });
	}
});

Bun.serve({
	port: process.env.PORT || 3000,
	fetch: app.fetch,
});
