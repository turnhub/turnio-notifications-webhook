# turn_notifications
Sending a message notification to the admin as soon as the message is received at turn interface. 

# Submit template
Make sure that you have a template approved. You can submit the template from the turn interface. The sample content of the template that was used in the current implemenation is :

```
ALERT FROM TURN.IO

A message is received in the Turn support WhatsApp business platform. The details are below:

Sender's Name : {{1}}
Sender's wa_id : {{2}}
Message : {{3}}

Please go to https://app.turn.io to address the issue.
```

# .env file variables

```
PORT =
TURN_NAMESPACE = 
TEMPLATE_NAME = 
TEMPLATE_LANGUAGE = 
TURN_TOKEN = 
ADMIN = <Phone number of the admin>
```
