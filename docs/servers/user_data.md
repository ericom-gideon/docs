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
To access your user data (__Ubuntu Exampe__)

1. SSH on to the sever 

2. install __Curl__ `$ sudo apt-get install curl`
3. Discover your DCHCP server IP 

	`If deployed in Asia Pacific 2 your IP will be 10.101.1.1`
	
	`If deployed in Asia Pacific 1 your IP will be 10.102.1.1`
	
	
3. User data can be retrieved by Curl-ing the below address

	__http://10.10x.1.1/latest/user-data__ *substitue x with an above DHCP IP based on your deployment reigon

	
```
$ curl http://10.101.1.xx/latest/user-data
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

