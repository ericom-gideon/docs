page_title:       Reset your server password
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct server users how can rest their passwords.
page_keywords:    server volume password username 

## Resetting your server password

There may be a point in time where you will need to reset the password. If your Virtual Machine was created from a Ninefold provided template (and isn't a Windows machine), this can be achieved by:

* Select your server in the portal
* Select the __Options__ tab
* Select the __Reset password__ button
* Your server will reboot and email you a new password
 

However, if your virtual machine does not support the Password reset feature (e.g. Created from an ISO, Windows machine or an older template without password reset support) this option will not be available to you. 

__It is important to note that Ninefold does not have access to any of the passwords generated or any passwords you have decided to use on your virtual machine.__ We encourage the use of [SSH keys](servers/ssh_keys) on Linux servers in preference to shared passwords.



## Windows Servers

A frequently asked question: "I've lost my Windows Server Password, are you sure I can't get it or reset it somehow?".

We understand that in extreme circumstances, passwords can get misplaced or people leave a company and don't pass on certain information leaving you in a bad position. 

There are unsupported ways to reset the Windows Server password (e.g. [Offline Windows Password & Registry Editor, Bootdisk / CD](http://pogostick.net/~pnh/ntpasswd)).

__We will not and do not provide support for any third-party software or tools. If you choose to follow our suggested link you acknowledge that you do this at your own risk and will not hold Ninefold or its staff accountable for any damage caused. As with all risky operations we recommend you take a Server backup prior to undertaking such operations.__


