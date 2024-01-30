// Добавление в коллекцию пользователей
db.users.insertMany([
    {
        full_name: 'Андреева Есения Данииловна',
        phone_number: '79157300178',
        email: 'sid_emusufe67@outlook.com',
        shipping_addresses: [
            {city: 'Москва', street: 'Пушкинская', house_number: '26',}
        ],
        cards: [
            {card_number: '4792356272037367', exp_date: '07/26',}
        ]
    },
    {
        full_name: 'Князев Владимир Романович',
        phone_number: '79159106603',
        email: 'wevug_ituxa86@aol.com',
        shipping_addresses: [
            {city: 'Санкт-Петербург', street: 'Ленина', house_number: '1',},
            {city: 'Санкт-Петербург', street: 'Ворошилова', house_number: '10',}
        ],

        cards: [
            {card_number: '4209119838649456', exp_date: '03/28',}
        ],

    },
    {
        full_name: 'Романова Аделина Серафимовна',
        phone_number: '79155781118',
        email: 'zab_ofipexa75@hotmail.com',
        shipping_addresses: [
            {city: 'Москва', street: 'Профсоюзная', house_number: '13'}
        ],
        cards: [
            {card_number: '4763745662459121', exp_date: '02/25'},
            {card_number: '4344726443434516', exp_date: '02/26'}
        ]
    },
    {
        full_name: 'Вишневский Роман Кириллович',
        phone_number: '79152969903',
        email: 'xafo-zixamo12@hotmail.co',
        shipping_addresses: [
            {city: 'Москва', street: 'Генерала Антонова', house_number: '8'}
        ],
        cards: [
            {card_number: '4112260127868880', exp_date: '01/26'}
        ]
    },
    {
        full_name: 'Никитин Владислав Артёмович',
        phone_number: '79154105465',
        email: 'secip_icahu77@mail.com',
        shipping_addresses: [
            {city: 'Челябинск', street: 'Победы', house_number: '5'},
            {city: 'Челябинск', street: 'Сталина', house_number: '15'}
        ],
        cards: [
            {card_number: '4681340751988369', exp_date: '12/28'},
            {card_number: '4074017599594576', exp_date: '09/28'}
        ]
    },
    {
        full_name: 'Осипов Кирилл Артёмович',
        phone_number: '79155707025',
        email: 'zoget-irafo48@gmail.com',
        shipping_addresses: [
            {city: 'Санкт-Петербург', street: 'Коллонтай', house_number: '16A'}
        ],
        cards: [
            {card_number: '4960364729762310', exp_date: '06/27'}
        ]
    }
])

// Добавление в коллекцию заказов
db.orders.insertMany([
    {user_id: '1', date: '13.06.2023', status: 'Доставлен', products: [{product_id: 'p1', count: 1}, {product_id: 'p4', count: 2}]},
    {user_id: '3', date: '10.08.2023', status: 'Отменен', products: [{product_id: 'p5', count: 1}, {product_id: 'p2', count: 2}]},
    {user_id: '5', date: '12.09.2023', status: 'Доставлен', products: [{product_id: 'p1', count: 4}]},
    {user_id: '3', date: '26.11.2023', status: 'Доставлен', products: [{product_id: 'p2', count: 1}, {product_id: 'p4', count: 5}, {product_id: 'p1', count: 1}]},
    {user_id: '6', date: '30.11.2023', status: 'Доставлен', products: [{product_id: 'p3', count: 2}]},
])

// Добавление в коллекцию продуктов
db.products.insertMany([
    {_id: 'p1', product_name: 'Телефон', description: 'Описание телефона', rating: 4.7, price: 15000, amount: 150},
    {_id: 'p2', product_name: 'SSD', description: 'Описание SDD', rating: 4.9, price: 8000, amount: 50},
    {_id: 'p3', product_name: 'Колонка', description: 'Описание колонки', rating: 2.0, price: 1000, amount: 500},
    {_id: 'p4', product_name: 'Футболка', description: 'Описание футболки', rating: 0.0, price: 1500, amount: 100},
    {_id: 'p5', product_name: 'Кружка', description: 'Описание кружки', rating: 5.0, price: 300, amount: 1000}
])

db.reviews.insertMany([
    {product_id: 'p1', user_id: '1', date: '13.06.2023', rating: 5.0, text: 'Все хорошо'},
    {product_id: 'p1', user_id: '5', date: '12.09.2023', rating: 4.0, text: 'Не все идеально, но пойдет'},
    {product_id: 'p2', user_id: '3', date: '10.08.2023', rating: 4.9, text: 'Отлично'},
    {product_id: 'p3', user_id: '6', date: '30.11.2023', rating: 2.0, text: 'Разочарован'},
    {product_id: 'p5', user_id: '3', date: '10.08.2023', rating: 5.0, text: 'Отличные материалы'},
]);