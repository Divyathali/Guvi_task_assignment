function pri(num,cap){
  var btn = document.createElement("div");
  btn.innerHTML ='country '+num+' '+'capital is '+cap;
  document.body.appendChild(btn);
  //document.getElementById('id01').innerHTML=num+'<br/>';
}
var url="https://restcountries.eu/rest/v2/all";
 var arr=[]
 var arr2=[]
var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {	 
      var status = xhr.status;
      if (status === 200) {
	    for (var i=0;i<xhr.response.length;i++){
		 console.log(xhr.response[i].name);
		 arr.push(xhr.response[i].name);
		 arr2.push(xhr.response[i].capital);
        }
        for (var j=0;j<arr.length;j++){
		  pri(arr[j],arr2[j]);
		}	        
      } else {
        console.log(xhr.response);
      }
    };
	console.log(arr)
    xhr.send();