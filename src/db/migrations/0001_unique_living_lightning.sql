ALTER TABLE "comments" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;