#!/bin/sh

ps -ef | grep uas
PID=$(ps -ef|grep uas|awk '$0 !~/grep/ {print $2}' |tr -s '\n' ' ')
CMD="kill -9 ${PID}"
echo ${CMD}
${CMD}
ps -ef | grep uas
