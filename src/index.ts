import { Hono } from "hono";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.get("/", async (c) => {
	try {
		return c.json({
			data: [],
		});
	} catch (error) {
		return c.json({ error });
	}
});

Bun.serve({
	port: PORT,
	fetch: app.fetch,
});

console.log(`Server is running on port ${PORT}`);
