const { Kafka } = require('kafkajs');
const secounds = 5;
const broker = process.env.KAFKA_CONNECT;

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [broker, broker],
})

const producer = kafka.producer();

console.log(`Iniciando Worker`);

const getExternalTask = () => { }

const send = async () => { }

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
