import { serial, text, timestamp, pgTable, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  isSubscribed: boolean("is_subscribed").default(true),
});