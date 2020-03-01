FROM uhub.service.ucloud.cn/shyin/php-nginx:0

COPY nginx-install.sh /usr/local/software
RUN chmod +x /usr/local/software/nginx-install.sh
RUN /usr/local/software/nginx-install.sh

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx:1 . --network=host