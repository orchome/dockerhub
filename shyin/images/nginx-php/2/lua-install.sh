## 安装lua
SRC_DIR=/usr/local/software
cd /${SRC_DIR}/

tar -xvf redisnginxlua.tar.gz
cd /${SRC_DIR}/luajit2
make && make install

cd /${SRC_DIR}/lua-resty-redis
make && make install

# wget http://luajit.org/download/LuaJIT-2.1.0-beta3.tar.gz
# tar -xvf LuaJIT-2.1.0-beta3.tar.gz && cd LuaJIT-2.1.0-beta3
# make && make install
# make && make install PREFIX=/usr/local/luajit
#ln -sf luajit-2.1.0-beta3 /usr/local/bin/luajit

echo "export LUAJIT_LIB=/usr/local/lib" >> /etc/profile
echo "export LUAJIT_INC=/usr/local/include/luajit-2.1" >> /etc/profile
echo "export LD_LIBRARY_PATH=/usr/local/luajit/lib:$LD_LIBRARY_PATH" >> /etc/profile
source /etc/profile