const Mock = require("mockjs")
// const {cname} = require("mockjs/src/mock/random/name");
const Random = Mock.Random

// console.log(Mock.Random);
module.exports = ()=>{
    let data = {
        news:[]
    }

    for (let i = 0; i < 20; i++) {
        data.news.push({
            id: i,
            age: Random.integer(15,50),
            name: Random.cname()
        })
    }
    return data
}