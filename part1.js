let a= "hello eric"
console.log(a.toLowerCase())
console.log(a.toUpperCase())

function title(word){
   return word.toLowerCase().split(' ').map((char)=>(
       char.charAt(0).toUpperCase() + word.slice(1)
    )).join(' ')

}
console.log(title(a))