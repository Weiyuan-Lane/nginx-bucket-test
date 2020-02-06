FROM nginx:1.17-alpine

COPY build/nginx/nginx-segment.conf /etc/nginx/conf.d/segment.conf
COPY build/nginx/nginx-base.conf /etc/nginx/nginx.conf
COPY build/nginx/fragments/ /etc/nginx/fragments/
COPY build/supervisor/supervisor.ini /etc/supervisor.d/
COPY app-a/ /opt/app-a/
COPY app-b/ /opt/app-b/
COPY app-c/ /opt/app-c/
COPY app-start /opt/app-start

RUN apk --update --no-cache add supervisor nodejs npm && \
    mkdir -p /var/log/supervisord && \
    rm /etc/nginx/conf.d/default.conf && \
    cd /opt/app-a/ && npm i -s && \
    cd /opt/app-b/ && npm i -s && \
    cd /opt/app-c/ && npm i -s

ENTRYPOINT [ "/opt/app-start" ]
