

let input=document.querySelector('#cartnum')
let input1=document.querySelector('#cartn')
let span=document.querySelector('#calc')
let buy=document.querySelector('.total')

buy.addEventListener('change',()=>{
    console.log(input .value);
   let  total=`Total=${((input1.value)*65)+((input.value)*45)}$`
    console.log(total);
    span.innerText=total
    console.log(input1.value);
})