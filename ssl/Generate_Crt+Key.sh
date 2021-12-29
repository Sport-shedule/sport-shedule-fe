#!/bin/bash

rm server.crt
rm server.key

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -config ./openssl-config.cnf \
    -sha256 \
    -days 365