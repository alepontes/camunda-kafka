const { Kafka } = require('kafkajs')

const broker = process.env.KAFKA_CONNECT;

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [broker, broker],
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {

  await consumer.connect()
  await consumer.subscribe({ topic: 'topic-1', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)