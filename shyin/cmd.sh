V`P]6E<O&e[Y
kubectl exec -ti -n nginx `kubectl get pods -n nginx|grep Running|grep php-app|awk '{print $1}'` /bin/bash
kubectl exec -ti -n nginx `kubectl get pods -n nginx|grep Running|grep php-test|awk '{print $1}'` /bin/bash
wget https://www.php.net/distributions/php-7.2.28.tar.gz