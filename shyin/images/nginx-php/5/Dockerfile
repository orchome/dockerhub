FROM uhub.service.ucloud.cn/shyin/app-release:0

# php依赖
RUN yum remove -y gcc gcc-c++  make zlib zlib-devel pcre pcre-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers
RUN yum remove -y libxslt libxslt-devel

## nginx env
RUN yum remove -y gcc gcc-c++ autoconf automake libtool make cmake zlib zlib-devel openssl openssl-devel pcre pcre-devel
RUN yum remove -y wget
RUN rm -rf /usr/local/software

# 设置镜像权限
RUN sh -c 'echo shiyin9999 | passwd root --stdin'
RUN groupadd -r app && useradd -r -s /bin/false -g app app
USER app

# docker build -t uhub.service.ucloud.cn/shyin/php-nginx-snapshot:17 . --network=host
# docker push uhub.service.ucloud.cn/shyin/php-nginx-snapshot:17