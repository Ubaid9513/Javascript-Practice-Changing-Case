var flag = false;
var userinp = prompt("Enter your city");
userinp = userinp.toLowerCase();
var city = ["karachi", "islamabad", "lahore", "faisalabad", "multan", "pishawar", "hyderabad"];
for (var i = 0; i < city.length; i++) {
    if(city[i].includes(userinp)){
        flag = true;
        break;
    }
}
if(flag){
    alert("It's one of the cleanest cities");
}else{
    alert("It's not one of the cleanest cities");
}

var fullname = 'ubaid';
var firstchar = fullname.slice(0,1).toUpperCase()
var result = firstchar + fullname.slice(1);
console.log(result);
