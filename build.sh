#!/bin/sh

# 环境名称
env=""

if [ x$1 != x ];then
    env=$1
else
    env='test'
fi

echo '编译环境 =>'${env}

host=`sed '/^'${env}'_host=/!d;s/.*=//' deploy.conf`
user=`sed '/^'${env}'_user=/!d;s/.*=//' deploy.conf`
path=`sed '/^'${env}'_path=/!d;s/.*=//' deploy.conf`

echo '服务器地址 => '${host}
echo '\n'

echo '开始编译'
npm run build:${env}
echo '编译完成!'

echo '上传代码'
tar -czf ./dist.tar dist
scp ./dist.tar ${user}@${host}:${path}
echo '上传完成!'

echo '开始部署'
ssh ${user}@${host} > /dev/null 2>&1 << eeooff
tar -zxvf ./dist.tar
sudo rm -rf /usr/share/nginx/html/dist
sudo mv ./dist /usr/share/nginx/html/
sudo rm -rf ./dist.tar
exit
eeooff
echo done!

echo '部署完成!'

