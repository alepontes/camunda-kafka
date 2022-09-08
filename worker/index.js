const { Kafka } = require('kafkajs');
const secounds = 1;

const kafka = new Kafka({
    clientId: 'test-group',
    brokers: ['localhost:9092', 'localhost:9092'],
})

const producer = kafka.producer();

console.log(`Iniciando Worker`);

const worker = async () => {
    await producer.connect();
    await producer.send({
        topic: 'topic-1',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    });
}

setInterval(worker, 1000 * secounds);
