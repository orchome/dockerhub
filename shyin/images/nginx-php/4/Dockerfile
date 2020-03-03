FROM uhub.service.ucloud.cn/shyin/app-release:0

# 临时测试，将项目放上去
ADD webproject.tar.gz /data/web/

CMD ['/usr/local/nginx/sbin/nginx', '-g','daemon off;']

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-snapshot:16 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx-snapshot:16