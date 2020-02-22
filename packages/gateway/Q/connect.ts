import amqp, { Channel } from "amqplib";

const q = "test_q";
let channel: Channel;

amqp
  .connect(
    "amqp://zeqptczy:dVEIMU-4_FbuaWqpL6d4ufw5kXsRxJrb@jaguar.rmq.cloudamqp.com/zeqptczy"
  )
  .then(conn => {
    return conn.createChannel();
  })
  .then(async ch => {
    await ch.assertQueue(q, { durable: true });
    ch.sendToQueue(q, Buffer.from("Hello from RabbitMQ"));
    channel = ch;
  })
  .catch(err => {
    throw new Error(err);
  });

export const pushToMessageQ = (message: string) => {
  if (!channel) {
    setTimeout(() => pushToMessageQ(message), 1000);
  }
  channel.sendToQueue(q, Buffer.from(message));
  return { m: "done" };
};
