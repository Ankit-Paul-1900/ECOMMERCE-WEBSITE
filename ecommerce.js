const bar=document.getElementById("ham-burger");
let nav=document.getElementById("navbar");
let close=document.getElementById("close");
let cart_no=document.getElementById("cart_no");
const products=[
    {
        id:1,
        image:"https://assets.ajio.com/medias/sys_master/root/20240920/U6Gl/66ed6083f9b8ef490b5589ee/-78Wx98H-700348575-blue-MODEL.jpg",
        price:"₹1,999",
        name:"Men Regular Fit Shirt",
        comp:"H&M"
    },
    {
        id:2,
        image:"https://assets.ajio.com/medias/sys_master/root/20240919/DPbe/66ec5256260f9c41e8147c24/-78Wx98H-700444421-blue-MODEL.jpg",
        price:"₹440",
        name:"Men Floral Print Regular Fit Shirt with Short Sleeves",
        comp:"Poipet"

    },
    {
        id:3,
        image:"https://assets.ajio.com/medias/sys_master/root/20240920/wQsj/66ed5eadf9b8ef490b557ea9/-78Wx98H-700348590-blue-MODEL.jpg",
        price:"₹1,999",
        name:"Men Relaxed Fit Shirt"
        , comp:"H&M"
    },
    {
        id:4,
        image:"https://assets.ajio.com/medias/sys_master/root/20240916/cx4v/66e7de6e1d763220faeb8c14/-78Wx98H-700424648-blue-MODEL.jpg",
        price:"₹440",
        name:"Micro Print Regular Fit Shirt"
        ,comp:"Poipet"
    },
    {
        id:5,
        image:"https://assets.ajio.com/medias/sys_master/root/20240203/OJSu/65be028e16fd2c6e6ad72879/-473Wx593H-467010736-grey-MODEL.jpg",
        price:"₹377",
        name:"Men Ribbed Regular Fit Shirt with Patch Pocket"
        , comp:"EYEBOGLER"
    }
];
let product_cont=document.getElementsByClassName('product_container');
products.map((item)=>{
    product_cont[0].innerHTML+=`
    <div class="prod" data-id=${item.id}>
                <img src=${item.image} alt=${item.name} tabindex="0">
                <span id="company">${item.comp}</span>
                <h3 id="prod_name">${item.name}</h3>
                <div class="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h4 class="price">${item.price}</h4>
                <button ><i class="fa fa-shopping-cart" onclick='cart(${item.id})'></i></button>

            </div>`
});
function cart(id){
    
    localStorage.setItem("product_id",id);
    cart_no.innerHTML=parseInt(cart_no.innerHTML)+1;
    
       
   
}
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log(nav.classList)
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        console.log(nav.classList)
    })
}