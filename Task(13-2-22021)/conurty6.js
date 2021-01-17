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
		  for(var i=0;i<xhr.response.length;i++){
			  for (var j=0;j<xhr.response[i].currencies.length;j++){
				  if(xhr.response[i].currencies[j].name=='United States dollar'){
					  console.log(xhr.response[i].name);
					  var btn = document.createElement("div");
					  btn.innerHTML ='country'+xhr.response[i].name+'<br/>'+'city:'+xhr.response[i].capital+'<br/>'+xhr.response[i].flag+'<br/>'+xhr.response[i].currencies[j].name+'<br/><br/>';
					  document.body.appendChild(btn);
				  }
			  }			  
		  }		      		
      } else {
        console.log(xhr.response);
      }
    };
	console.log(arr)
    xhr.send();