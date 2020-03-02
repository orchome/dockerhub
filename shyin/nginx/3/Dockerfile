FROM uhub.service.ucloud.cn/shyin/php-nginx-snapshot:1
COPY iplimit.conf /usr/local/nginx/conf/
COPY agent_deny.conf /usr/local/nginx/conf/
COPY lua.zip /usr/local/nginx/conf/
COPY enable-php7.2.conf /usr/local/nginx/conf/
COPY ssl.zip /usr/local/nginx/conf/

RUN cd /usr/local/nginx/conf/ && unzip ssl.zip && unzip lua.zip
RUN rm -rf /usr/local/nginx/conf/ssl.zip && rm -rf /usr/local/nginx/conf/lua.zip

COPY lua-lib.zip /usr/local/lib/
RUN cd /usr/local/lib/ && unzip lua-lib.zip && rm -rf /usr/local/lib/lua-lib.zip

# RUN mkdir -p /usr/local/php/etc/php-fpm.d
#COPY www.conf /usr/local/php/etc/php-fpm.d/
#COPY www.conf.default /usr/local/php/etc/php-fpm.d/
#RUN echo "include=/usr/local/php/etc/php-fpm.d/*.conf" >> /etc/php-fpm.d/www.conf

RUN mkdir -p /data/web/CPS-mobile/dist
COPY demo.zip /data/web/CPS-mobile/dist
RUN cd /data/web/CPS-mobile/dist && unzip demo.zip && rm -rf /data/web/CPS-mobile/dist/demo.zip

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-snapshot:2 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx-snapshot:2