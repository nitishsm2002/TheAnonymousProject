FROM node:20

WORKDIR /app

# Copy only package files first (for better caching)
COPY package.json package-lock.json ./
RUN npm install --production

# Now copy the full project
COPY . .

# Build CAP for production (creates gen/srv)
RUN npx cds build --production

# Expose CAP port
EXPOSE 4004

CMD ["npm", "start"]
