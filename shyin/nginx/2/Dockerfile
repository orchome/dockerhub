FROM uhub.service.ucloud.cn/shyin/php-nginx:0

RUN yum install -y unzip lua-devel

COPY nginx-install.sh /usr/local/software
COPY lua-install.sh /usr/local/software

RUN chmod +x /usr/local/software/nginx-install.sh
RUN chmod +x /usr/local/software/lua-install.sh
RUN /usr/local/software/lua-install.sh
RUN /usr/local/software/nginx-install.sh

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx:6 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx:6