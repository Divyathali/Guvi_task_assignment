var obj={"name":"ISRO","age":"35","role":"Scientist"};
var len=Object.values(obj).length;
var arr=[];
var arr1=[];
var a=Object.keys(obj);
var b=Object.values(obj);
for(var i=0;i<len;i++){
    arr1=[a[i]+","+b[i]];
    arr.push(arr1)
}

console.log(arr)

