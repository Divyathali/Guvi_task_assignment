var cat = {"name":"Fluffy","activities":["play","eat cat food"],"catFriends":[{"name":"bar","activities":["be grumpy","eat bread omblet"],"weight":"8","furcolor":"white"},{"name":"foo","activities":["sleep","pre-sleep naps"],"weight":3}]};
	
cat.height=100;
cat.weight=200;
cat.name='Fluffyy';
len=cat.catFriends.length;
for (var i=0;i<len;i++){
    for(var j=0;j<len;j++){
        console.log(cat.catFriends[i].activities[j]);
    }
}

console.log("\t")
for (var i=0;i<len;i++){
    console.log(cat.catFriends[i].name)
}
console.log('\t')
var total=0
for (var i=0;i<len;i++){
    total=total+parseInt(cat.catFriends[i].weight)
}

console.log(total)
console.log("\t")
var str="";
for (var i=0;i<len;i++){
    str+=cat.activities[i]+":"
    for(var j=0;j<len;j++){
        str+=cat.catFriends[i].activities[j]+' ';
    }
    str=str+'\n'
}
console.log(str.trim())
console.log('\t')
for (var i=0;i<len;i++){
    console.log(cat.catFriends[i].activities);
}
console.log("\t")
//console.log(cat)

cat.catFriends[0].furcolor='red';

console.log(cat)


