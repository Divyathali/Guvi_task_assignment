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
			  arr.push(xhr.response[i].population);
		  }
		  const reducer = (accumulator, currentValue) => accumulator + currentValue;
		  console.log(arr.reduce(reducer));	    		
      } else {
        console.log(xhr.response);
      }
    };
	console.log(arr)
    xhr.send();