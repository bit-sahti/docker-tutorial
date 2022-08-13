FROM node:14.17-slim 

RUN apt update && apt install -y wget netcat

RUN wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

#user 1000 on image - check docker hub image docs
USER node

WORKDIR /home/app/

COPY package*.json ./

CMD ["/home/app/start.sh"]