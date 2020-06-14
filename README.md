# magic-of-docker
docker init

# centos 安装 docker

```bash
# 官方安装脚本
$ curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 国内 daocloud 脚本
$ curl -sSL https://get.daocloud.io/docker | sh

# 启动 docker
$ sudo systemctl start docker

# 测试 docker
$ sudo docker run hello-world
```

1. 修改 daemon.js

```bash
$ vim /etc/docker/daemon.json
```
```json
{
  "experimental": false,
  "debug": true,
  "registry-mirrors": [
    "https://<id>.mirror.aliyuncs.com",
    "https://hub-mirror.c.163.com/",
    "https://reg-mirror.qiniu.com/"
  ]
}
```

修改完成后重启服务

```bash
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

# centos 安装 docker-compose

1. 安装

```bash
# 官方
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 使用国内镜像
$ sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.26.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

2. 将可执行权限应用于二进制文件

```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```

3. 创建软链

```bash
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

4. 测试是否安装成功

```bash
$ docker-compose --version
```


# centos 安装 nodejs

1. 下载源码

```bash
$ cd /usr/local/src/
$ wget https://npm.taobao.org/mirrors/node/v10.20.1/node-v10.20.1.tar.gz
```

2. 解压源码

```bash
$ tar zxvf node-v10.20.1.tar.gz
```

3. 安装 `gcc` `gcc-c++`

```bash
$ sudo yum install gcc gcc-c++
```

4. 编译安装

```bash
$ cd node-v10.20.1
$ ./configure --prefix=/usr/local/node/10.20.1
$ make
$ make install
```
5. 配置NODE_HOME，进入profile编辑环境变量

```bash
$ vim /etc/profile
```
设置 `nodejs` 环境变量，在 `export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL` 一行的上面添加如下内容:

```
export NODE_HOME=/usr/local/node/10.20.1
export PATH=$NODE_HOME/bin:$PATH
```

应用一下

```bash
$ source /etc/profile
```