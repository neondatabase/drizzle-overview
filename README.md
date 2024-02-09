# drizzle-demo


This is a demo app for showing how to get Started with Drizzle ORM. It was used in this video: https://www.youtube.com/watch?v=hIYNOiZXQ7Y


## Getting Started

This project uses [Bun](https://bun.sh) as the runtime. To get started, you can run the following commands:

```bash
bun install
```

Copy the `.env.example` file to `.env` and update the `DATABASE_URL`. you can sign up for free and create a Postgres database at https://neon.tech


```bash
cp .env.example .env
```

To apply the database migrations, you can run the following command:

```bash
bun db:migrate
```

To seed the database with some data, you can run the following command:

```bash
bun db:seed
```

Then you can run the following command to start the server:

```bash
bun dev
```

You can then visit [http://localhost:3000](http://localhost:3000) to see the app.


## Deployment

This project is ready to be deployed to [Railway](https://railway.app), [Render](https://render.com) and[ Fly.io](https://fly.io).

