# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will set up everything you need—including a SQLite database stored on disk—for a local-first experience.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. By default the template stores data in a local SQLite file defined by the `DATABASE_URI`.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development, the provided docker-compose.yml file runs the app in a container and persists the SQLite database on your host file system.

To do so, follow these steps:

- Ensure your `.env` file sets `DATABASE_URI=file:./payload.db` (the default value).
- Run `docker-compose up` to install dependencies and start the dev server (pass `-d` to run in the background).

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally without installing Node on your host.

1. Follow [steps 1 and 2 from above](#development); the docker-compose file will automatically use the `.env` file in your project root.
2. Run `docker-compose up`.
3. Follow [steps 4 and 5 from above](#development) to log in and create your first admin user.

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams. The SQLite database file will persist between runs in the project directory.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
