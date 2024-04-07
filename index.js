let result = document.getElementById('inputText');

let calculate=(number)=>{
result.value = result.value+number; 
//  neticeni inputda gosterir. +number yaziriq ki elvae olaraq hansi reqemi daxil etsek yanina elave etsin ve ekranda gostersin
}

 let equal=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter valid result")
    }
    // eval()funksiyasi neticeni gostermek ucundur.String formasinda olan reqemleri de toplayir
}
function clr() {
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1)
}
