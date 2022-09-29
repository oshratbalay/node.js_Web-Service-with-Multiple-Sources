const axios = require('axios')

async function getPerson(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
    
}

module.exports =  {getPerson}