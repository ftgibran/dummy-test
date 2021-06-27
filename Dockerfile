FROM nginx
USER root
COPY ./build /usr/share/nginx/html
