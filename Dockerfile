# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the app on port 3002
EXPOSE 3002

# Start the app
CMD ["node", "index.js"]

