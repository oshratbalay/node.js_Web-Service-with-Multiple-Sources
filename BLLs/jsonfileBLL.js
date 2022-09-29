const jsonFileDAL = require("../DALs/jsonfileDAL")
const WS_DAL = require("../DALs/WS_DAL")
const model = require('../model/personModel')



const getData = async()=>{
try{
const personData = await WS_DAL.getPerson()
const phones =await jsonFileDAL.getPhons()
const address = await model.find({})

const arr =[]
 

personData.forEach((person) => {

   const personPhone = phones.find(phone => phone.id === person.id) 
   const personAddress = address.find(addressP => addressP.number === person.id) 


   let obj = {}

   obj.id = person.id;
   obj.name = person.name;
   obj.email = person.email;
   obj.phone = personPhone.number
   obj.address = personAddress.address

   arr.push(obj)
});
return arr
}catch (e) {
    return e
}

}

module.exports = {getData}

// getData()
