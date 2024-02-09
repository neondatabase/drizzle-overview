import { db } from "./";
import { comments, posts, users } from "./schema";

const main = async () => {
	try {
		await db
			.insert(users)
			.values([
				{
					id: 1,
					name: "Alice Johnson",
					email: "alice.johnson@example.com",
				},
				{
					id: 2,
					name: "Bob Smith",
					email: "bob.smith@example.com",
				},
			])
			.onConflictDoNothing();

		await db
			.insert(posts)
			.values([
				{
					id: 1,
					userId: 1,
					title: "Introduction",
					content: "Hello, World! Excited to join this community.",
				},
				{
					id: 2,
					userId: 2,
					title: "Reply",
					content: "Hello, Alice! Welcome to the community!",
				},
				{
					id: 3,
					userId: 1,
					title: "Reply",
					content: "Thanks, Bob! Glad to be here.",
				},
			])
			.onConflictDoNothing();

		await db
			.insert(comments)
			.values([
				{
					id: 1,
					text: "Welcome, Alice! Looking forward to your posts.",
					userId: 2,
					postId: 1,
				},
				{
					id: 2,
					text: "Thank you, Bob! Excited to be part of the conversation.",
					userId: 1,
					postId: 2,
				},
			])
			.onConflictDoNothing();
	} catch (error) {
		console.error(error);
		throw new Error("Failed to seed database");
	}
};

main();
