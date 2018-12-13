#!/bin/bash
pid=`netstat -nptl|grep 7001|awk '{print $NF}'|awk -F "/" '{print $1}'|xargs`
ntpdate -u ntp.api.bz
cd /data/dlang/uas
dub build -v -f
if [ ! -z "$pid" ];then
	kill $pid
fi
chmod +x ./uas
nohup ./uas &
nohup ./uas &
nohup ./uas &
nohup ./uas &
nohup ./uas &