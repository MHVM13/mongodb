const {mongoose} = require('mongoose');
const app = require('./app');

const PORT = 8181;
const DB_URL = 'mongodb://localhost:27017/mydb';

mongoose.connect(DB_URL).then(() => {console.log('✅ Success connection!')}).catch(() => {console.log('❌ Something went wrong')});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

