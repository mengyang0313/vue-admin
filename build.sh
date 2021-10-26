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
tar -czf ./dist2.tar dist
scp ./dist2.tar ${user}@${host}:${path}
echo '上传完成!'

echo '开始部署'
ssh ${user}@${host} > /dev/null 2>&1 << eeooff
tar -zxvf ./dist2.tar
mv ./dist dist2
sudo rm -rf /usr/share/nginx/html/dist2
sudo mv ./dist2 /usr/share/nginx/html/
sudo rm -rf ./dist2.tar
exit
eeooff
echo done!

echo '部署完成!'

