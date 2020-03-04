FROM uhub.service.ucloud.cn/shyin/app-release:0

# 将应用放到镜像指定的位置中
ADD nginx.conf /usr/local/nginx/conf/
ADD backend-web.conf /etc/nginx/conf.d/
ADD app.tar /data/web/