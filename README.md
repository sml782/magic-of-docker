# magic-of-docker
docker init

# centos 安装 docker

```bash
# 官方安装脚本
$ curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 国内 daocloud 脚本
$ curl -sSL https://get.daocloud.io/docker | sh
```

# centos 安装 nodejs

1. 下载源码

```bash
$ cd /usr/local/src/
$ wget https://nodejs.org/dist/v10.20.1/node-v10.20.1.tar.gz
```

2. 解压源码

```bash
$ tar zxvf node-v10.20.1.tar.gz
```

3. 安装 `gcc` `gcc-c++`

```bash
$ cd node-v10.20.1
$ sudo yum install gcc gcc-c++
```

4. 编译安装

```bash
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