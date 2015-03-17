page_title: User Data
page_description: Adding User data during your deployment
page_keywords: user data

###What is User Data?
User data lets you pass data to your Server. You can curl this data from a URL available to your server at any time.

###Adding User Data
User Data can be added via the deployment wizard or if your server is already deployed click on the server then __options__, add your user data then click __Save__

___In this example i added:___

```
#cloud-config
coreos:
  update:
    reboot-strategy: best-effort
  etcd:
    discovery: https://discovery.etcd.io/adiscoverykey
    addr: $private_ipv4:4001
    peer-addr: $private_ipv4:7001
  fleet:
    public-ip: $private_ipv4
  units:
    - name: etcd.service
      command: start
    - name: fleet.service
      command: start
```
      
###Access your User Data
To access your user data

1. SSH on to the sever 

2. install __Curl__ (Ubuntu Example `$ sudo apt-get install curl`)

3. User data can be retrieved by Curl-ing the below address

	__http://10.101.1.1/latest/user-data__

	Ubuntu example:

```
$ curl http://10.101.1.1/latest/user-data
#cloud-config
coreos:
  update:
    reboot-strategy: best-effort
  etcd:
    discovery: https://discovery.etcd.io/adiscoverykey
    addr: $private_ipv4:4001
    peer-addr: $private_ipv4:7001
  fleet:
    public-ip: $private_ipv4
  units:
    - name: etcd.service
      command: start
    - name: fleet.service
      command: start
```

