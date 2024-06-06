# Use the official Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Set the environment variable
ENV PORT=5000

# Expose the port the app runs on
EXPOSE 5000

# Run the web service on container startup.
CMD [ "node", "server.js" ]