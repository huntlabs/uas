#!/bin/sh

ps -ef | grep cas
PID=$(ps -ef|grep bbs|awk '$0 !~/grep/ {print $2}' |tr -s '\n' ' ')
CMD="kill -9 ${PID}"
echo ${CMD}
${CMD}
ps -ef | grep cas
