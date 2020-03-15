let carts = document.querySelectorAll('.add-cart');


// cadastro dos produtos
let products = [
    {
        name: 'fitness watch',
        tag: 'gal09',
        price: 40,
        inCart: 0,
        

    },

    {
        name: 'aspirador de po',
        tag: 'gal01',
        price: 30,
        inCart: 0,
        

    },

    {
        name: 'relogio aple',
        tag: 'gal04',
        price: 20,
        inCart: 0

    },

    {
        name: 'moda feminina',
        tag: 'gal06',
        price: 10,
        inCart: 0

    },


    {
        name: 'oculos de sol',
        tag: 'gal05',
        price: 18,
        inCart: 0

    },


    {
        name: 'tenis nike',
        tag: 'gal03',
        price: 100,
        inCart: 0

    },


    {
        name: 'bolsa tenis',
        tag: 'gal07',
        price: 25,
        inCart: 0

    },


    {
        name: 'bolsa feminina',
        tag: 'gal08',
        price: 90,
        inCart: 0

    },

    {
        name: 'Camisa Kappa Botafogo III 2019 4 Honda Especial',
        tag: 'gal10',
        price: 249,
        inCart: 0

    }


]



// contagem de produtos NUMERO
for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })

}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-item').textContent = productNumbers;
    }
}


// add item no carrinho
function cartNumbers(products){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart-item').textContent = productNumbers + 1 ;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-item').textContent = 1;
    }


   setItem(products)
   
}

// itens do carrinho
function setItem(products){


    let cartItens = localStorage.getItem("productsInCart")
    cartItens = JSON.parse(cartItens)

    

    if(cartItens != null){


        if(cartItens[products.tag] == undefined){
            cartItens = {
                ...cartItens,
                [products.tag]: products
            }
        }


        cartItens[products.tag].inCart += 1;


    }else{
        products.inCart = 1;
        cartItens = {
            [products.tag] : products
        }
    }

    
    localStorage.setItem('productsInCart', JSON.stringify(cartItens))
    console.log(cartItens)
}

// valor do carrinho
function totalCost(products){
    let cartCost = localStorage.getItem('totalCost')
    


    if(cartCost != null ){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + products.price)
    }else{
        localStorage.setItem('totalCost', products.price)
    }

}



function displayCart(){
    let cartItens = localStorage.getItem("productsInCart")
    cartItens = JSON.parse(cartItens)
    let productContainer = document.querySelector('.products')
    let cartCost = localStorage.getItem('totalCost')

    let desconto = document.getElementById('cupom')



    /*function calcularDesc(){
        if(cupom === 'joga10'){
            (cartCost/10)*100;
        }
    }*/
    

    console.log(cartItens)

    if(cartItens && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItens).map(item => {
            productContainer.innerHTML +=  `
                <div class="product">

                <div class="produto">
                <img src="assets/img/${item.tag}.jpg">
                <span>${item.name}</span>
                </div>
              
                
                <div class="price">
                <span>R$ ${item.price}.00 </span>
                 </div>


                 <div class="qtd">
                 <span>${item.inCart}</span>
                 </div>


                 <div class="totalM">
                 
                   R$ ${item.inCart * item.price},00
                 </div>

                 </div>

                 
        `
                
        })

        productContainer.innerHTML += `
            <div class="SubTotal">


                <div class="valorSub">
                    <h4 class="subTotalTittle">
                    Sub Total
                    </h4>

                    <h4 class="totalPr">
                
                    R$${cartCost},00
                    </h4>
                    
                </div>


                <div class="desconto">
                    <input type="text" id="cupom" placeholder="Insira seu cupom"> <button class="btn btn-success" onclick="calcularDesc()">Ok</button>
                </div>

                <div class="valorSub" style="margin-top:50px">
                    <h4 class="subTotalTittle">
                    Total
                    </h4>

                    <h4 class="totalPr">
                
                    R$${cartCost},00
                    </h4>
                    
                </div>

                <div class="desconto-1">
                
                <button class="btn btn-success confirmar">CONCLUIR PEDIDO</button>
                
                </div>

              
            </div>
        `

    }    
}





onLoadCartNumbers()
displayCart()


