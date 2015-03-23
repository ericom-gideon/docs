page_title: SSH Keys
page_description: Access your server with SSH Keys
page_keywords: ssh, keys, access, login

##How to manage SSH keys on Ninefold
Ninefold recently added a function to manage SSH keys. If you use one of Ninefold's standard Linux templates, we will automatically manage your keys as they are added or removed from __Account Details__ > __Keys__.

##Identifying your SSH key
Github has a great guide on [Locating or Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys/) (steps 1 & 2 only)

##Administering user keys
Each user manages their own public keys on Ninefold.

1. Click on the user account dropdown in the navigation bar and select __Account Details__.
2. Under __keys__, click __Add new key__.
3. Give your key a name, and copy the contents of your public key into Public key
4. Click __Register Key__

**NOTE:**
_For Ninefold to be managing your SSH keys you must have an IP assigned directly to your machine, and it must be accessible over SSH on port 22. We know this doesn't convenience everyone, we're looking to other ways to improve on this in the future._

##Supported Server templates
__By default all Ninefold-published linux templates from 18/03/2015 support key management.__ Any servers created from legacy Ninefold templates do not support this functionality. __No windows templates are supported.__

We manage your keys by installing a Ninefold management public key on your server, and we populate your authorized_keys file with keys from users in your portal account.

**NOTE:**
Upon deploying a new server, there will be a slight delay once the server says it has been created successfully now while the SSH keys are synched on to the VM (about a couple of minutes generally).


##Modifying Existing & custom server templates
__If you have brought a linux ISO or VHD to Ninefold__ then we can still manage your keys for you, although there are a few things you'll need to do to make this work.

The functionality only works if a specific cloud init script is installed on your servers. The location and procedure differs a little per operating system.

###Ubuntu
 - sudo -i
 - Add in the **cloud-set-guest-sshkey** script to */etc/init.d* (get it [here](https://github.com/ninefold/customer-scripts/blob/master/cloud-set-guest-sshkey-Ubuntu))
 - run
```
/etc/init.d/update-rc.d cloud-set-guest-sshkey defaults
/etc/init.d/chmod +x cloud-set-guest-sshkey
```
 **(Optional)** To enable passwordless sudo; add the following to the end of /etc/sudoers: 
```
user ALL=(ALL) NOPASSWD: ALL
```
 - reboot

###CentOS
 - Add in the **cloud-set-guest-sshkey** script to */etc/init.d* (get it [here](https://github.com/ninefold/customer-scripts/blob/master/cloud-set-guest-sshkey-CentOS))
 - run 
```
 /etc/init.d/chmod +x cloud-set-guest-sshkey
```
 - Create the following file in /var/lib/systemd/system and populate with:
```
# cloud-set-guest-password.service

      [Unit]
      Description=Cloudstack set guest password
      After=network.target
       
      [Service]
      Type=simple
      User=root
      Group=root
      ExecStart=/etc/init.d/cloud-set-guest-password start
      Type=forking
       
      # Give a reasonable amount of time for the server to start up/shut down
      TimeoutSec=300
       
      [Install]
      WantedBy=multi-user.target 
```

 - Run the following:
```
    # Install the above systemd service (this will make it start on boot)
    systemctl enable cloud-set-guest-password.service
     
    # Start the service manually (good for testing during template creation)
    systemctl start cloud-set-guest-password.service
     
    # Get the status of the service (good for testing during template creation)
    systemctl status cloud-set-guest-password.service
```
  - reboot