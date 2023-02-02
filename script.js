const show = document.querySelector('.show')
const circle = document.querySelector('.circle')
const containerAll =  document.querySelector('.containerAll')
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')


show.addEventListener('click',()=>{
    circle.style="transform: rotate(-160deg);"
    containerAll.style="transform: rotate(-17deg);"
    link1.style="transform: translate(16rem, 0);"
    link2.style="transform: translate(17rem, 0);"
    link3.style="transform: translate(18rem, 0);"

})
document.querySelector('.close').addEventListener('click',()=>{
    circle.style.removeProperty("transform");
    containerAll.style.removeProperty("transform");
    link1.style.removeProperty("transform");
    link2.style.removeProperty("transform");
    link3.style.removeProperty("transform");
})