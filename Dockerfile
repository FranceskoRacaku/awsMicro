FROM python:latest

# WORKDIR /usr/src/www

# # COPY package*.json ./
# # COPY package.json ./
# # COPY package-lock.json ./
# # copy everything
# COPY . .

# RUN npm install
RUN apt-get update
RUN apt-get -y install python

RUN mkdir -p /data
WORKDIR /data
# EXPOSE 5280
COPY /dist/house .

EXPOSE 8222
# CMD ["npm", "run", "start"]
CMD python -m http.server 8222

