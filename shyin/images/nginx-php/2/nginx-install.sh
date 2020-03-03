#安装目录 
INSTALL_DIR=/usr/local/
SRC_DIR=/usr/local/software
NGINX="nginx-1.13.7"

mkdir -p ${INSTALL_DIR}
mkdir -p ${SRC_DIR}

cd /${SRC_DIR}/

#解压
tar xzf ${SRC_DIR}/${NGINX}.tar.gz -C /${SRC_DIR}/
#解压lua
tar -xvf v0.3.0.tar.gz
tar -xvf v0.10.11.tar.gz

cd ${SRC_DIR}/${NGINX}
# INSTALL_DIR=/usr/local/test/

#参数
NGINXFEATURES="--prefix=${INSTALL_DIR}nginx \
--user=www \
--group=www \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_gzip_static_module \
--with-ipv6 \
--with-http_sub_module \
--add-module=/usr/local/software/ngx_devel_kit-0.3.0 \
--add-module=/usr/local/software/lua-nginx-module-0.10.11 "

#添加用户
groupadd -r www
useradd -r -g www www

#编译
echo '###################'
echo 'Compile NGINX'
echo '###################'
cd ${SRC_DIR}/${NGINX}

./configure ${NGINXFEATURES}
make
make install