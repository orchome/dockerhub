FROM uhub.service.ucloud.cn/shyin/php-nginx-release:0

# 该dockerfile为用户自定义公共类，差异化打包，在本案例中进行
ADD iplimit.conf /usr/local/nginx/conf/
ADD agent_deny.conf /usr/local/nginx/conf/
ADD enable-php7.2.conf /usr/local/nginx/conf/
ADD ssl.tar.gz /usr/local/nginx/conf/
ADD lua.tar.gz /usr/local/nginx/conf/

RUN mkdir -p /usr/local/lib/lua
ADD luajiaoben.tar.gz /usr/local/lib/lua/

# 自定义 www.conf
RUN mv /usr/local/php/etc/php-fpm.d/www.conf /usr/local/php/etc/php-fpm.d/www.conf_bak
COPY www.conf /usr/local/php/etc/php-fpm.d/
RUN mkdir -p /usr/local/php/var/run/php-fpm/

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-snapshot:12 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx-snapshot:12