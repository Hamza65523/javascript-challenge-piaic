let list = ['apple','banana','graps','apple','graps','graps']

let result = list.map((items)=>(
    items=='graps'?true:false
))
console.log(result)