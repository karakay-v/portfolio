FROM node:lts-alpine

# install required C libraries for esbuild & node
RUN apk add --no-cache libatomic libc6-compat

# Set pnpm environment variables to fix global installation path
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

# enable pnpm
RUN corepack enable pnpm

# install simple http server for serving static content
RUN pnpm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy package files AND workspace settings
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# install project dependencies
RUN pnpm install --frozen-lockfile

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN pnpm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
