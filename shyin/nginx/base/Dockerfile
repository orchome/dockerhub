FROM hub.c.163.com/library/centos:latest

RUN echo "Asia/shanghai" > /etc/timezone;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ENV LANG en_US.UTF-8

RUN yum remove epel-release
RUN yum update -y
RUN yum install epel-release
RUN yum -y install php-fpm php php-gd php-mysql php-mbstring php-xml php-mcrypt  php-imap php-odbc php-pear php-xmlrpc

# docker build -t dockerhub.baofu.com/system/php-base:0 .
# docker build -t uhub.service.ucloud.cn/shyin/base:0 .