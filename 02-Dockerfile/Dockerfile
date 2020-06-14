# 指定 node镜像
FROM node:10-alpine

# 移动 当前目录文件 到 目标目录 下
ADD . /app/

# 工作目录，类似于cd命令
WORKDIR /app

# 构建镜像时执行的命令
RUN npm install

# 指定于外界交互的端口
EXPOSE 3000

# 构建容器后调用，也就是在容器启动时才进行调用。
CMD [ "node", "index.js" ]
