function firstNonRepeatedChar(str) {
let count={};
for (let index = 0; index < str.length; index++) {
	let ele=str.charAt(index);
	if(count[ele]){
		count[ele]+=1
	}
	else{
		count[ele]=1
	}
}
	for(let key in count){
		if(count[key]==1){
			return key;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
