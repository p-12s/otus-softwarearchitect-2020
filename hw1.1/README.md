https://hub.docker.com/layers/p12s/hw1/2/images/sha256-76256b522a1396a62816e5bfc7614386bcccdcba950fdcb8c26c7d59ed93c9df?context=repo
  
# сборка
$ docker build -t <your username>/node-web-app .  
  
$ docker images  
  
# запуск  
$ docker run -p 49160:8080 -d <your username>/node-web-app  
$ docker ps  
$ docker logs <container_id>  

# войти в контейнер в интерактивном режиме  
$ docker exec -it <container id> /bin/bash  
  
$ curl -i localhost:49160  
  