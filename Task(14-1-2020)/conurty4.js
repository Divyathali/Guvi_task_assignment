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
		  xhr.response.forEach(word=> console.log(word.name,word.capital,word.flag));
		  //console.log(result);
	    for (var i=0;i<xhr.response.length;i++){
			//console.log(xhr.response[i].name);
			arr.push(xhr.response[i].name);
			arr2.push(xhr.response[i].capital);
			arr3.push(xhr.response[i].flag);
			arr4.push(xhr.response[i].region);
			//asia.push(xhr.response[i].name);		
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