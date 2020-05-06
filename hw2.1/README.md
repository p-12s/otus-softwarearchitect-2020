### Простой сервер  
  
#### Что десь происходит:    

Деплой в k8s простого сервера  
Манифесты описывают сущности Deployment, Service, Ingress.  
В Deployment указаны Liveness, Readiness пробы.  
Количество реплик = 2.  
Image контейнера берется с Dockerhub.  
В Ingress-е правило, которое форвардит все запросы с /otusapp/* на сервис с rewrite-ом пути.  
Хост в ингрессе - arch.homework.  
В итоге после применения манифестов GET запрос должен отдавать {“status”: “OK”}  

#### Порядок запуска:  
  
Скачиваем репозиторий:  
git clone https://github.com/p-12s/otus-softwarearchitect-2020.git  

Переходим в папку:  
cd hw2  

Запускаем minikube (он должен быть уже установлен):  
minikube start -vm-driver=virtualbox  
  
Применяем конфиги:  
kubectl apply -f deployment.yaml -f service.yaml -f ingrees.yaml  
Вариант с применением всех конфигов одновременно - kubectl apply -f .  
не работает, т.к. эта команда ругается на файл package.json  
  
Смотрим ip сервиса:  
kubectl get ing  
  
Стучимся по GET, используя ip-ADDRESS:  
curl -H 'Host: arch.homework' http://ip-ADDRESS-сервиса/otusapp/health/  
  