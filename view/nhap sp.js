
    var listProduct=[{
        id : 1,
        category:"sản phẩm 1",
        avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
        price :"50.000 VND",
        weight :"200g",
        price:100000,
        limit:5
    },{
        id : 2,
        category:"sản phẩm 2",
        avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
        price :"50.000 VND",
        weight :"200g",
        price:100000,
        limit:100
    }];

    var listProduct2=[{
        id : 4,
        category:"sản phẩm 4",
        avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
        price :"50.000 VND",
        weight :"200g"
    },{
        id : 5,
        category:"sản phẩm 5",
        avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
        price :"50.000 VND",
        weight :"200g"
    }];
    var product3={
        id : 3,
        category:"sản phẩm 3",
        avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
        price :"50.000 VND",
        weight :"200g"
    }
listProduct.push(product3 );

var arr=[1,2,3,4,5]

// var view=`<div class="product-item position-rel " >
//             <div class="top-product position-rel">
//                 <div class="sao d-flex">
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>  
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>  
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>  
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>  
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>  
//                     </div>
//                 </div>
//                 <div class="product-image">
//                     <a href="../view/chitietsp.html">
//                         <img class="images" src="${product3.avatar}" alt="images " style="width: 71%;">
//                     </a>
                    
//                 </div>
//                 <div class="product-sale ">
//                     <p style="font-size: 75%;">NEW</p>
//                 </div>
//             </div>
//             <div class="mid-product "> 
//                 <h4 class="product-cate text-center" >${product3.category}</h4>
//                 <div class="giá text-center d-flex">
//                     <span>${product3.price}</span>
//                     <span>${product3.weight}</span>
//                 </div>
//             </div>
//         </div>`;

for(var i = 0; i<listProduct.length;i++)
{
    console.log("thông tin sản phẩm thứ "+ i + "là:");
    console.log(listProduct[i].id);
    console.log(listProduct[i].name);
    console.log(listProduct[i].category);
    console.log(listProduct[i].price);
    console.log(listProduct[i].weight);
    // console.log("view:",view);
}

function setview(arrProduct){ 
    $('.listProduct').html('');
    for(var i=0;i<arrProduct.length;i++){
        renderHTML(arrProduct[i]);
    }
}

function renderHTML(obj){
    let view2=`<div class="product-item position-rel " >
                <div class="top-product position-rel">
                    <div class="sao d-flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                        </div>
                    </div>
                    <div class="product-image">
                        <a href="../view/chitietsp.html">
                            <img class="images" src="${obj.avatar}" alt="images " style="width: 71%;">
                        </a>
                        
                    </div>
                    <div class="product-sale ">
                        <p style="font-size: 75%;">NEW</p>
                    </div>
                </div>
                <div class="mid-product "> 
                    <h4 class="product-cate text-center" >${obj.category}</h4>
                    <div class="giá text-center d-flex">
                        <span>${obj.price}</span>
                        <span>${obj.weight}</span>
                    </div>
                </div>
            </div>`;
            console.log("view2:...",view2);
            $('.listProduct').append(view2)
}

// function logview(){
//     for(var i=0;i<listProduct.length;i++){
//         let view2=`<div class="product-item position-rel " >
//                 <div class="top-product position-rel">
//                     <div class="sao d-flex">
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                             </svg>  
//                         </div>
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                             </svg>  
//                         </div>
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                             </svg>  
//                         </div>
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                             </svg>  
//                         </div>
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                             </svg>  
//                         </div>
//                     </div>
//                     <div class="product-image">
//                         <a href="../view/chitietsp.html">
//                             <img class="images" src="${listProduct[i].avatar}" alt="images " style="width: 71%;">
//                         </a>
                        
//                     </div>
//                     <div class="product-sale ">
//                         <p style="font-size: 75%;">NEW</p>
//                     </div>
//                 </div>
//                 <div class="mid-product "> 
//                     <h4 class="product-cate text-center" >${listProduct[i].category}</h4>
//                     <div class="giá text-center d-flex">
//                         <span>${listProduct[i].price}</span>
//                         <span>${listProduct[i].weight}</span>
//                     </div>
//                 </div>
//             </div>`;
//             console.log("view2:...",view2);
//             $('.listProduct').append(view2)
//     }
// }



function search(){
    var text=$("#search").val();
    var str= text.trim().toLowerCase();
    $('.listProduct').html('');
    for(var i=0;i<listProduct2.length;i++){
        // if(listProduct2[i].category == text){
        //     renderHTML(listProduct2[i]);
        // }
        if(listProduct2[i].category.trim().toLowerCase().includes(str)){
            renderHTML(listProduct2[i]);
        }
    }
}

// $('.btn-search').click(function){
//     search();
// }

$(document).ready(function(){
    setview(listProduct); 
})


