function transformFirstAndLast(arr) {
    for(var i=0;i<arr.length;i++){
        newObject[arr[i]]=arr[arr.length-1-i];
    }
 return (newObject);
}


var arr = ['GUVI', 'I', 'am', 'a geek'];
var newObject={};

console.log(transformFirstAndLast(arr));