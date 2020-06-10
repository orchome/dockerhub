FROM hub.c.163.com/library/centos:latest

# php基础环境安装，不要涉及到用户相关业务属性

# 时区设置
RUN echo "Asia/shanghai" > /etc/timezone;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 系统语言
ENV LANG en_US.UTF-8

# 默认安装软件位置
RUN mkdir /usr/local/software && cd /usr/local/software

# php依赖
RUN yum install -y gcc gcc-c++  make zlib zlib-devel pcre pcre-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers
RUN yum -y install libxslt libxslt-devel

# php安装
# wget https://www.php.net/distributions/php-7.2.28.tar.gz
COPY php-7.2.28.tar.gz /usr/local/software

RUN cd /usr/local/software \
    && tar -xvf php-7.2.28.tar.gz \
    && cd /usr/local/software/php-7.2.28 \
    && ./configure --prefix=/usr/local/php \
       --with-config-file-path=/usr/local/php/etc \
       --with-fpm-user=www \
       --with-fpm-group=www \
       --with-curl \
       --with-gd \
       --with-gettext \
       --with-iconv-dir \
       --with-kerberos \
       --with-libdir=lib64 \
       --with-libxml-dir \
       --with-openssl \
       --with-pcre-regex \
       --with-pdo-sqlite \
       --with-pear \
       --with-xmlrpc \
       --with-xsl \
       --with-zlib \
       --enable-fpm \
       --enable-bcmath \
       --enable-libxml \
       --enable-inline-optimization \
       --enable-mbregex \
       --enable-mbstring \
       --enable-opcache \
       --enable-pcntl \
       --enable-shmop \
       --enable-soap \
       --enable-sockets \
       --enable-sysvsem \
       --enable-xml \
       --enable-zip \
       --enable-static \
       --enable-json \
       --disable-phar \
       --with-mysqli=mysqlnd \
       --with-pdo-mysql=mysqlnd \
       --with-freetype-dir \
       --with-jpeg-dir \
       --with-png-dir \
       --disable-debug \
       --enable-fileinfo \
       --enable-filter \
    && make && make install

RUN mv /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
RUN mv /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
RUN echo "export PATH=/usr/local/php/bin:/usr/local/php/sbin:$PATH" >> /etc/profile && source /etc/profile
# docker build -t uhub.service.ucloud.cn/shyin/php-release:0 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-release:0