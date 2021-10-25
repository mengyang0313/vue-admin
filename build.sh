#!/bin/bash

# 环境名称
env = ''

if [ x$1 != x ];then
    env=$1
else
    env='test'
fi

echo '编译环境 =>' ${env} '\n'

host = `sed '/^'${env}_host'=/!d;s/.*=//' deploy.conf`
user = `sed '/^'${env}_user'=/!d;s/.*=//' deploy.conf`
path = `sed '/^'${env}_path'=/!d;s/.*=//' deploy.conf`

echo '服务器地址 => '${host}
echo '\n'

echo '开始编译'
# npm run build:${env}
echo '\n'

echo '删除服务器上旧代码'
ssh  ${user}@${host} "rm -rf"${path}
echo '上传新代码'
scp -r ./dist ${user}@${host}:${path}
echo '上传完成\n'


