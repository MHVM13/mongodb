const {MongoClient} = require('mongodb');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateUsersData(size) {
    let usersList = []

    for (let i = 0; i < size; i++) {
        let user = {
            "fist_name": 'Maksim', //TODO
            "second_name": 'Mikheev', //TODO
            "phone": `+7${random(9000000000, 9999999999)}`,
            "gender": (Math.random() < 0.5) ? 'Male' : 'Female',
            "age": random(16, 70),
            "address": {
                "town": 'Moscow', //TODO
                "street": 'Pushkina', //TODO
                "number_of_house": random(1, 100)
            },
        }

        usersList.push(user)
    }

    return usersList
}

// TODO обработать ошибки если такие будут
async function main() {
    const URI = 'mongodb://127.0.0.1:27017'
    const SIZE = 5

    const client = new MongoClient(URI)
    await client.connect().then(() => console.log('Connected to MongoDB'))
    const myDB = client.db('db')
    const myColl = myDB.collection('users')

    await myColl.drop().then(() => console.log('Dropped data')) // Очистка БД каждый раз перед добавлением

    const users = generateUsersData(10000)
    await myColl.insertMany(users)


    client.close().then(() => console.log('Disconnected from MongoDB'))
}

main()
