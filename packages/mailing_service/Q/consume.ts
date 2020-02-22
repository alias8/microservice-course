import amqp, { Channel } from "amqplib";

export default () => {
  const q = "test_q";
  amqp
    .connect(
      "amqp://zeqptczy:dVEIMU-4_FbuaWqpL6d4ufw5kXsRxJrb@jaguar.rmq.cloudamqp.com/zeqptczy"
    )
    .then(conn => {
      return conn.createChannel();
    })
    .then(async ch => {
      await ch.assertQueue(q, { durable: true });
      ch.consume(
        q,
        msg => {
          let mail;
          try {
            mail = JSON.parse(msg!.content.toString());
          } catch (e) {
            console.log(e);
            mail = msg?.content.toString();
          }
          console.log("I RECEVIED A MESSAGE", mail);
          ch.ack(msg!);
        },
        { noAck: false }
      );
    })
    .catch(err => {
      throw new Error(err);
    });
};
