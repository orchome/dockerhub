FROM uhub.service.ucloud.cn/shyin/php-release:0

## nginx env
RUN yum -y install gcc gcc-c++ autoconf automake libtool make cmake zlib zlib-devel openssl openssl-devel pcre pcre-devel

RUN mkdir -p /usr/local/software && cd /usr/local/software
RUN yum install -y wget && wget -P /usr/local/software http://nginx.org/download/nginx-1.13.7.tar.gz
COPY v0.10.11.tar.gz /usr/local/software
COPY v0.3.0.tar.gz /usr/local/software

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-env-release:0 . --network=host