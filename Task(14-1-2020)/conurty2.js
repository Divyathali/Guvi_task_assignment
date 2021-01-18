function pri(num,cap,flag,reg){
  var btn = document.createElement("div");
  btn.innerHTML ='Country Name: '+num+'<br/>'+'Capital: '+cap+'<br/>'+'Flag : '+flag+'<br/>'+'Region:'+reg+'<br/><br/>';
  document.body.appendChild(btn);
  //document.getElementById('id01').innerHTML=num+'<br/>';
}
var url="https://restcountries.eu/rest/v2/all";
 var arr=[];
 var arr2=[];
 var arr3=[];
 var asia=[];
 var population_arr=[];
 var arr4=[];
var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {	 
      var status = xhr.status;
      if (status === 200) {
		  var result=xhr.response.filter(word => word.region =="Asia");
		  console.log(result);
	    for (var i=0;i<xhr.response.length;i++){
			if(xhr.response[i].region === 'Asia')//asia region
			{
				//console.log(xhr.response[i].name);
				arr.push(xhr.response[i].name);
				arr2.push(xhr.response[i].capital);
				arr3.push(xhr.response[i].flag);
				arr4.push(xhr.response[i].region);
				asia.push(xhr.response[i].name);
			}
			if(xhr.response[i].population<=200000)//less than 2 lac population
			{
				population_arr.push(xhr.response[i].name);
			}
		 //console.log(arr4,asia);
        }
        for (var j=0;j<arr.length;j++){
		  pri(arr[j],arr2[j],arr3[j],arr4[j]);		  
		}
		
      } else {
        console.log(xhr.response);
      }
    };
	console.log(arr)
    xhr.send();