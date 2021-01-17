function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    var new1={}
    var new2={}
    len=arr.length;
    n=parseInt(len/2);
    for(i=0;i<len;i++){
        for(j=0;j<arr[i].length;j++){
            
            if(i<=parseInt(n/2)){
                var arr1=arr[i][j];
                new1[arr1[0]]=arr1[1];
            }
            else{
                var arr2=arr[i][j];
                new2[arr2[0]]=arr2[1]
            }
            
        }
    }
    tranformEmployeeList.push(new1);
    tranformEmployeeList.push(new2);
    return tranformEmployeeList;
}
 

var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', '24'], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', '28'], ['role', 'Coder']]];


console.log(transformEmployeeData(arr));