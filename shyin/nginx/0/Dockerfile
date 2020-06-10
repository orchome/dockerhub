FROM hub.c.163.com/library/centos:latest

RUN echo "Asia/shanghai" > /etc/timezone;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ENV LANG en_US.UTF-8

RUN mkdir /usr/local/software && cd /usr/local/software
RUN yum install -y gcc gcc-c++  make zlib zlib-devel pcre pcre-devel  libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers
# wget https://www.php.net/distributions/php-7.2.28.tar.gz
COPY php-7.2.28.tar.gz /usr/local/software
RUN cd /usr/local/software && ls /usr/local/software && tar -xvf php-7.2.28.tar.gz && cd /usr/local/software/php-7.2.28 && ./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php --enable-mbstring --enable-ftp --with-gd --with-jpeg-dir=/usr --with-png-dir=/usr --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd --without-pear  --disable-phar --enable-sockets --with-freetype-dir=/usr --with-zlib --with-libxml-dir=/usr --with-xmlrpc --enable-zip --enable-fpm --enable-xml --enable-sockets --with-gd --with-zlib --with-iconv --enable-zip --with-freetype-dir=/usr/lib/ --enable-soap --enable-pcntl --enable-cli --with-curl && make && make install
RUN mv /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
RUN mv /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
RUN cd /usr/local/software/php-7.2.28 && cp sapi/fpm/php-fpm /usr/local/sbin
RUN echo "export PATH=/usr/local/php/bin:$PATH" >> /etc/profile && source /etc/profile

# docker build -t uhub.service.ucloud.cn/shyin/php-snapshot:1 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-snapshot:1