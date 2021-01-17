function fromListToObject(arr) {
    var newObject = {};
    for(var i=0;i<arr.length;i++){
       var arr1=arr[i];
       newObject[arr1[0]]=arr1[1];
        console.log(arr1)
    }
 
 
 return (newObject);
}



var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', '1964']];
console.log(fromListToObject(arr));
 
