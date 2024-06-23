var listproduct1=[
    {
        anh:'../images/product-1.png',
        trangthai:'NEW',
        name:'Trà Shan Tuyết',
        gia:'50.000 VNĐ',
        dinhluong:'200g',
        limit:8
    },
    {
        anh:'../images/product-2.png',
        trangthai:'NEW',
        name:'Trà Shan Tuyết',
        gia:'50.000 VNĐ',
        dinhluong:'200g'
    },
    {
        anh:'../images/product-3.png',
        trangthai:'NEW',
        name:'nguyen anh huy',
        gia:'50.000 VNĐ',
        dinhluong:'200g'
    }
];

function logrender(listproduct1){
    // $('.listProduct').html('');
    for(var i = 0; i <listproduct1.length;i++ ){
        renderhtml(listproduct1[i]);
    }
}

$(document).ready(function () {
    logrender(listproduct1)
  });



function renderhtml(obj){
        let view=`<div class="product-item position-rel " >
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
                                            <img class="images" src="${obj.anh}" alt="images " style="width: 71%;">
                                        </div>
                                        <div class="product-sale ">
                                            <p style="font-size: 75%;">${obj.trangthai}</p>
                                        </div>
                                    </div>
                                    <div class="mid-product ">
                                        <h4 class="product-cate text-center" >${obj.name}</h4>
                                        <div class="giá text-center d-flex">
                                            <span>${obj.gia}</span>
                                            <span>${obj.dinhluong}</span>
                                        </div>
                                    </div>
                                </div>`;
                                    console.log("view:", view);
                                    $('.listProduct').append(view);
    }

function search(){
    var text = $("#search").val();
    var str=text.trim().toLowerCase();
    $('.listProduct').html('');
    for(var i = 0 ; i<listproduct1.length;i++){
        if(listproduct1[i].name.trim().toLowerCase().includes(str)){
            renderhtml(listproduct1[i]);
        }
    }
}

var result = 0;
function getqlty(){
    for(var i = 0 ; i<listproduct1.length;i++){
        var number = $("#qlty-" + listproduct1[i].id).val();
        if(number>listproduct1.limit){
            alert(listproduct1[i].name + "chỉ còn " + listproduct1[i].limit + "sản phẩm");
        }else{
            var payment = total(0,listproduct1[i].gia,number);
            result = result + payment;
        }
    }
    $("#total-price").text(result);
    result=0;
}

function total(id,price,qlty){
    var sum = price * qlty;
    return parseInt(sum);
}
