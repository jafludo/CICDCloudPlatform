#FROM openjdk:15.0.2-slim

#ARG JAR_FILE=target/*.jar
#COPY ${JAR_FILE} app.jar

#EXPOSE 8080

#ENTRYPOINT ["java", \
#            "-jar", \
#            "-Dfile.encoding=UTF-8", \
#            "-Duser.timezone=GMT", \
#            "-Djava.security.egd=file:/dev/./urandom -jar", \
#            "app.jar"]
#
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

ENV PATH="/node/src"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY /node/src/package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
