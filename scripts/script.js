//q3
'use strict'
let sortInfo=(info)=>
{
    let ages=info.map(item=>item.age)
    ages=ages.sort()
    let database=[]
    ages.forEach((element) => {
        let info2=info.filter((item)=>item.age===element)    
        database.push(info2)
    });
    console.log(database);
}
let info=[
    {
        name:'ali' ,
        age:30 
    },
    {
        name:'mohsen' ,
        age:24 
    },
    {
        name:"mohammad" ,
        age:37 
    },
    {
        name:"arian" ,
        age:20
    }
];
sortInfo(info);