FROM uhub.service.ucloud.cn/shyin/php-nginx-env-release:0

RUN yum install -y unzip lua-devel

COPY nginx-install.sh /usr/local/software
COPY lua-install.sh /usr/local/software
COPY redisnginxlua.tar.gz /usr/local/software

RUN chmod +x /usr/local/software/nginx-install.sh
RUN chmod +x /usr/local/software/lua-install.sh
RUN /usr/local/software/lua-install.sh
RUN /usr/local/software/nginx-install.sh

# 安装mogo和swoole扩展
RUN printf "yes\nyes\n" | /usr/local/php/bin/pecl install swoole
RUN printf "yes\nyes\n" | /usr/local/php/bin/pecl install mongodb

RUN cp /usr/local/software/php-7.2.28/php.ini-production /usr/local/php/etc/php.ini \
    && echo "extension=mongodb.so" >> /usr/local/php/etc/php.ini \
    && echo "extension=swoole.so" >> /usr/local/php/etc/php.ini

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-release:0 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx-release:0