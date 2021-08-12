const db = require('./db')
const Page = require('./page')
const User = require('./user')


async function seed() {
    try {
        console.log(cyan('Connecting to the database...'));
        await db.sync({force:false})
        console.log(blue('Seeding the database....'))
        
        
    } catch(error){
        console.error(error)
        await db.close()
    }
}

module.exports = {db,User,Page}

