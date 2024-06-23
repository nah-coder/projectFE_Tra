function prechecklogin(){
    hoten = document.getElementById('txt').value;
    email = document.getElementById('email').value;
    sdt = document.getElementById('dienThoai').value;
    noidung = document.getElementById('noidung').value;
    if(hoten==""&&email==""&&sdt==""&&noidung=="")
        alert("Bạn đang chưa điền gì cả");
    else{
        if(hoten==""){
            alert("Bạn đang chưa điền họ tên");
        }
            
        else if(email==""){
            alert("Bạn đang chưa điền email");
        }
            
        else if(sdt==""){
            alert("bạn đang chưa điền số điện thoại");
        }
        else if(noidung==""){
            alert("bạn đang chưa điền nội dung");
        }
        else{
            precheckaccount(hoten,email,sdt,noidung);
        }
    }
}

var obj={
    hoten:'Nguyễn Anh Huy',
    email:'huyanhnguyen1211@gmail.com',
    sdt:'0941615493',
    noidung:'huydz'
}

function precheckaccount(hoten,email,sdt,noidung){
    if(hoten != obj.hoten){
        alert("sai họ tên");
    }else if(email != obj.email){
        alert("sai email");
    }else if(sdt != obj.sdt){
        alert("sai số diện thoại");
    }else if(noidung != obj.noidung){
        alert("sai nội dung");
    }else{
        alert("thành công");
    }
}