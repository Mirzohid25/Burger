let food = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kccal: 500,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },

    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kccal: 650,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kccal: 800,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },
}

let btn = [...document.querySelectorAll(".main__product-btn")]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        prepare(this)
    })
}

function prepare(item) {
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector(".main__product-num")
    let price = parent.querySelector(".main__product-price span")
    let kccal = parent.querySelector(".main__product-kccal span")

    let sym = item.getAttribute("data-symbol")

    let count = food[parentId].amount
    console.log(count)

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kccal.innerHTML = food[parentId].kccalSum
}



let levelScore = document.querySelector(".header__timer-extra");
let counter = 0;
let timeSpeed = 0;
function level() {
    setTimeout(() => {
        counter++
        if (counter < 30) {
            timeSpeed = 100
        } else if (counter <= 50) {
            timeSpeed = 500
        } else if (counter <= 100) {
            timeSpeed = 1000
        } else {
            timeSpeed = 0
            return
        }
        levelScore.innerHTML = counter
        level()
    }, timeSpeed)

}
level()



// zakaz chek oynasi
let receipt =   document.querySelector(".receipt")
let receiptWindow = receipt.querySelector(".receipt__window")
let receiptWindowOut = receipt.querySelector(".receipt__window-out")
let receiptWindowBtn = receipt.querySelector(".receipt__window-btn")
let addCart = document.querySelector(".addCart")


addCart.addEventListener("click" , function () {
   receipt.style.display = "block"
   setTimeout(() => {
    receipt.style.opacity = "1"
    receiptWindow.style.transition = ".5s"
   }, 100);
let menu = "Your cart : \n\n"
let totalPrice = 0
let totalKcall = 0
   receiptWindow.style.top = "25%"
   for (const key in food) {
    console.log(food[key].img)
 if (food[key].amount) {
menu = menu + `${food[key].name}    ${food[key].amount}x ${food[key].price}  = ${food[key].calcSum}\n\n`
totalPrice = totalPrice + food[key].calcSum
totalKcall = totalKcall + food[key].kccalSum


}
    
   }

     
   receiptWindowOut.innerHTML = `${menu} total price ${totalPrice} sum \n total kaloriya ${totalKcall} kaloriya`




   receiptWindowBtn.addEventListener("click" , function(){
   
    location.reload()

    if(e.target){
        receipt.style.opacity = "0"
        receipt.style.top = "-100"
        setTimeout(() => {
        receipt.style.display = "none"
            
        }, 200);
    }
   })
})
//view oynasi

let firstimg = document.querySelector('#info')
let secondimg = document.querySelector('#info2')
let thirdimg = document.querySelector('#info3')
let view = document.querySelector(".view")
let viewClose = document.querySelector(".view__close")
let imgburger = document.querySelector(".imgburger")
let imgcamburger = document.querySelector(".imgcamburger")
let imgcambo = document.querySelector(".imgcambo")


viewClose.addEventListener("click" , function(){
    view.classList.remove("active")
})

 
firstimg.addEventListener("click" , function(){
    view.classList.add("active")

    imgburger.style.display = "block"
    imgcamburger.style.display = "none"
    imgcambo.style.display = "none"


})


secondimg.addEventListener("click" , function(){
    view.classList.add("active")
    imgburger.style.display = "none"
    imgcamburger.style.display = "block"
    imgcambo.style.display = "none"

})



thirdimg.addEventListener("click" , function(){
    view.classList.add("active")
    imgburger.style.display = "none"
    imgcamburger.style.display = "none"
    imgcambo.style.display = "block"
})