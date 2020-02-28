FROM uhub.service.ucloud.cn/shyin/base:0
RUN mkdir -p /data/download
RUN yum install -y wget && wget -P /data/download http://nginx.org/download/nginx-1.13.7.tar.gz
COPY v0.10.11.tar.gz /data/download
COPY v0.3.0.tar.gz /data/download

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx:0 .