FROM mysql:5.7

COPY db/utf8.cnf /etc/mysql/conf.d/
COPY db/init-db.sql /docker-entrypoint-initdb.d/