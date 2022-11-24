FROM node:16-alpine 
WORKDIR /app
COPY ./app .
RUN npm install 
#RUN npm run build
# ENV NODE_ENV production
EXPOSE 3000
#CMD [ "npx", "start" ]
CMD [ "npm" , "run", "dev"]