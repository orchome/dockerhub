FROM uhub.service.ucloud.cn/shyin/php-nginx:6
COPY iplimit.conf /usr/local/nginx/conf/
COPY agent_deny.conf /usr/local/nginx/conf/
COPY lua.zip /usr/local/nginx/conf/
COPY enable-php7.2.conf /usr/local/nginx/conf/
COPY ssl.zip /usr/local/nginx/conf/

RUN cd /usr/local/nginx/conf/ && unzip ssl.zip && unzip lua.zip
RUN rm -rf /usr/local/nginx/conf/ssl.zip && rm -rf /usr/local/nginx/conf/lua.zip

COPY lua-lib.zip /usr/local/lib/
RUN cd /usr/local/lib/ && unzip lua-lib.zip && rm -rf /usr/local/lib/lua-lib.zip
# docker build -t uhub.service.ucloud.cn/shyin/php-nginx:7 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx:7