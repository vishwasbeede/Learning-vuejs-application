from node:12 AS ui-build
WORKDIR /usr/src/app
COPY test-app/ ./test-app/
RUN cd test-app && npm install && npm run build 

FROM node:12 AS api-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/test-app/dist ./test-app/dist
COPY server/package*.json ./api/
RUN cd api && npm install
COPY server/src/ ./api/

EXPOSE 8082
#CMD ["/bin/bash"]
CMD ["node","./api/app.js"]

