
//验证用户名合法性
function checkname(){
        aa=document.getElementById("uname").value;
        s=aa.substring(0,1);
        l=aa.length;
        if(aa==""||aa==null) {
            console.log("用户名不能为空");
            document.getElementById("yhmts").value="用户名不能为空"; 
            return false;
        }else if(l<4 || l>16){
            console.log("用户名长度为4-16位");
            document.getElementById("yhmts").value="用户名长度应为4-16位"; 
            return false;
        }else if(!(s>='a'&&s<='z')||(s>='A'&&s<='Z')){
            console.log("用户名首位应为字母");
            document.getElementById("yhmts").value="用户名首位应为字母"; 
            return false;
        }else{
            console.log("用户名正确");
            document.getElementById("yhmts").value="用户名格式正确";
            return true;
        }
}

//密码合法性
function checkpwd(){
    aa=document.getElementById("pwd").value;
    l=aa.length;
    var reg=/^[a-zA-Z0-9]{8,16}$/; 
    if(l<8 || l>16){
        console.log("密码长度应为8-16位");
        document.getElementById("mmts").value="密码长度应为8-16位";
        return false;
    }else if(!reg.test(aa)){
        document.getElementById("mmts").value="密码应有大小写字母加数字";
        console.log("密码强度太低");
        return false;  
    }else{
        document.getElementById("mmts").value="密码正确";
        console.log("密码正确");
        return true; 
    }
}

//确认密码
function checkspwd(){
    c=document.getElementById("pwd").value;
    d=document.getElementById("spwd").value;
    if(c!=d){
        document.getElementById("smmts").value="两次密码不一致";
        console.log("两次密码不一致");
        return false;
    }else{
        document.getElementById("smmts").value="两次密码一致";
        console.log("两次密码一致");
        return true;
    }
}

//邮箱
function checkemail(){
    yx=document.getElementById("uemail").value;
    var aa = yx.indexOf("@");
    var l = yx.length;
    if(aa<1||aa>=l){
        document.getElementById("yxts").value="邮箱格式不正确！";
        return false;
    }else{
        document.getElementById("yxts").value="邮箱格式正确！";
        return true;
    }
}

//收货地址
function checkaddr(){
    shdz=document.getElementById("addr").value;
    
    if(shdz==""||shdz==null){
        document.getElementById("dzts").value="地址不能为空！";
        return false;
    }else{
        document.getElementById("dzts").value="地址正确！";
        return true;
    }
}


//手机号码
function checkphone(){
    e=document.getElementById("phn").value;
    var regMobile=/^1\d{10}$/;
    if(regMobile.test(e)==false){
        document.getElementById("sjhts").value="手机号错误！";
        return false;
    }else{
        document.getElementById("sjhts").value="手机号正确！";
        return true;
    }
}



//注册按钮
function Submit(){
    if(checkname()&&checkpwd()&&checkspwd()&&checkemail()&&checkaddr()&&checkphone()){
        console.log("正确！");
    return true;
    }else{
        alert("注册信息有误！");
        console.log("注册信息有误！");
        return false;
    }
    
}