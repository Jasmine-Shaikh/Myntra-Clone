import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";

let wishListHeader = document.getElementById('header');
wishListHeader.innerHTML = navbar()

let wishListFooter = document.getElementById('footerEl');
wishListFooter.innerHTML= footer()

let wishListData = JSON.parse(localStorage.getItem('WishList'))

let wishlistCount = document.getElementById('wishlistCount')
wishlistCount.innerHTML = `My Wishlist <span> ${wishListData.length} items <span>`


let WishListContainer = document.getElementById('WishListContainer')



const displayWishListProducts= (data) => {

    WishListContainer.innerHTML=""
    
      data.forEach (function (product) {
        let outer_div = document.createElement ('div');
        let div = document.createElement('div')
        let image_div = document.createElement('div')
        image_div.className = 'img_div';
    
        outer_div.setAttribute('id','products')
    
        let img =  document.createElement('img');
        img.src =   product.images.image1;

        let undo = document.createElement('button')
        undo.setAttribute('id','undo')
        undo.textContent = "X"
        
      
      
        div.innerHTML = `<a>
        <div>
          <div class="title">${product.title}</div>
          <div class="price"> Rs. ${product.price} <span class="line-through">Rs. ${product.off_price}</span> <span class="discount">(${product.discount}% OFF)</span>
          </div>
          <button id = "moveToBag">MOVE TO BAG</button>
        </div></a
      >`
    //   console.log(product)
    
      image_div.append(img)
      image_div.append(undo)
      outer_div.append(image_div,div)
      
      WishListContainer.append (outer_div);

      let cart = document.getElementById('moveToBag');
      cart.addEventListener('click',() => {
        addToCart(product)
    })

    let removeEl = document.getElementById('undo');
    removeEl.addEventListener('click',() => {
      console.log("hi")
      // removeWishList(product.id)
  })

    });    
    }
    
    displayWishListProducts(wishListData)


let cart = localStorage.getItem('cart');
if(cart === null){
  localStorage.setItem('cart',JSON.stringify([]))
}


const addToCart = (data) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let checkIfProductExit = cart.find((cartItem) => cartItem.id === data.id);
  
    if(checkIfProductExit){
      alert('Item Already in cart')
    }else{
        cart.push(data)
        localStorage.setItem('cart',JSON.stringify(cart))
  }
  }

  const removeWishList = (data) => {

  }