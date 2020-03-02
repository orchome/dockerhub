FROM hub.c.163.com/library/centos:latest

RUN echo "Asia/shanghai" > /etc/timezone;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ENV LANG en_US.UTF-8

RUN yum update -y
RUN yum -y install php-fpm php php-gd php-mysql php-mbstring php-xml php-mcrypt  php-imap php-odbc php-pear php-xmlrpc

snaoshot
# docker build -t uhub.service.ucloud.cn/shyin/php:0 . --network=host