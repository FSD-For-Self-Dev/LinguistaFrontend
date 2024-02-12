# The first stage
# Build React static files
FROM node:15.8-alpine as build
WORKDIR /app/frontend
COPY package.json package-lock.json ./
# COPY ../package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
