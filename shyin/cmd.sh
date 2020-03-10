kubectl exec -ti -n nginx `kubectl get pods -n nginx|grep Running|grep php-app|awk '{print $1}'` /bin/bash
kubectl exec -ti -n nginx `kubectl get pods -n nginx|grep Running|grep php-test|awk '{print $1}'` /bin/bash

## kubectl create clusterrolebinding jenkins --clusterrole cluster-admin --serviceaccount=jenkins:jenkins2
## kubectl create secret docker-registry mysecret --docker-server=uhub.service.ucloud.cn --docker-username=263230286@qq.com --docker-password=shyinwork -n jenkins

## 广东
kubectl label nodes 10.13.119.72  area=A
kubectl label nodes 10.13.137.159 area=A
kubectl label nodes 10.13.164.42  area=B
kubectl label nodes 10.13.35.52   area=B
kubectl label nodes 10.13.58.179  area=C
kubectl label nodes 10.13.85.238  area=C

## 香港
kubectl label nodes 10.8.16.170 area=A
kubectl label nodes 10.8.179.50 area=A
kubectl label nodes 10.8.23.154 area=B
kubectl label nodes 10.8.60.68  area=B
kubectl label nodes 10.8.89.175 area=C
kubectl label nodes 10.8.90.105 area=C