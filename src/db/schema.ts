import { relations } from "drizzle-orm";
import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const posts = pgTable("posts", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const comments = pgTable("comments", {
	id: serial("id").primaryKey(),
	postId: integer("post_id").references(() => posts.id),
	userId: integer("user_id").references(() => users.id),
	text: text("text").notNull(),
});

export const postsRelations = relations(posts, ({ one, many }) => ({
	user: one(users, { fields: [posts.userId], references: [users.id] }),
	comments: many(comments),
}));

export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
	post: one(posts, { fields: [comments.postId], references: [posts.id] }),
	user: one(users, { fields: [comments.userId], references: [users.id] }),
}));
