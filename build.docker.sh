docker build -t flcstapi .
docker login -u andreabertin89
docker tag flcstapi andreabertin89/flcstapi:latest
docker push andreabertin89/flcstapi:latest
docker tag flcstapi andreabertin89/flcstapi:v1.0.0
docker push andreabertin89/flcstapi:v1.0.0

