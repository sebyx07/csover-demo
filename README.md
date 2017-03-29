# csover-demo

Setup:

```shell
docker-compose build
docker-compose run backend rails db:reset
docker-compose run frontend npm i && bower i --allow-root
```

Run:
```shell
docker-compose up
```


Logins:

- Customer
	- username: customer
	- password: 312312__OKOK

- Agent
	- username: agent
	- password: 312312__OKOK

- Admin
	- username: admin
	- password: 312312__OKOK