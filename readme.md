# Introduction to microservices
See the architecture.png for overview of this repo.
The directories inside packages are actually separate repos.
Not sure how to deploy all this. 

todo: learn about Kubernetes

# Mailing Service:
Consumes messages from the RabbitMQ service. Right now
only consoles out the message.

todo: set up mailjet or something to actually email the things
you send with graphql

# Gateway:
You send graphql queries to the port this is listening on.
- For queries, it requests the information from the database
- For mutation, it sends the data to CloudAMQP
(CloudAMQP is hosted RabbitMQ servers (message queues) that 
lets you pass messages between processes and other systems). 
You could use AWS SQS or Kafka instead of RabbitMQ.

# Database service:
MongoDB database on MLab that stores emails. Talks to the gateway.

