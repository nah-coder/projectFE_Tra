
var listProductcard=[{
    id : 1,
    category:"sản phẩm 1",
    avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
    prices :"50.000 VND",
    weight :"200g",
    price:100000,
    limit:5
},{
    id : 2,
    category:"sản phẩm 2",
    avatar:"https://www.facebook.com/photo/?fbid=145705261835762&set=a.104983212574634",
    prices :"50.000 VND",
    weight :"200g",
    price:100000,
    limit:100
}];

function setviewcard(arrProduct){ 
$('.listProduct').html('');
for(var i=0;i<arrProduct.length;i++){
    renderHTMLcard(arrProduct[i]);
}
}

function renderHTMLcard(obj){
            let view2=`<div class="col">
                        <div class="card mb-3">
                            <img class="card-img-top" src="${obj.avatar}" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${obj.category}</h5>
                            <p class="card-text">${obj.prices}</p>
                            <div class="d-flex justify-content-between">
                                <div>
                                    Giá thành sản phẩm : ${obj.price} <span>VNĐ</span>
                                </div>
                                <input type="number" id="qlty">

                            </div>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>`;
        console.log("view2:...",view2);
        $(".list-card").append(view2)
}


function search(){
var text=$("#search").val();
var str= text.trim().toLowerCase();
$('.listProduct').html('');
for(var i=0;i<listProduct2.length;i++){
    // if(listProduct2[i].category == text){
    //     renderHTML(listProduct2[i]);
    // }
    if(listProduct2[i].category.trim().toLowerCase().includes(str)){
        renderHTMLcard(listProduct[i]);
    }
}
}

// $('.btn-search').click(function){
//     search();
// }

$(document).ready(function(){
setviewcard(listProductcard); 
})


