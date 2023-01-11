let studentarray = [{id: "1",name : "vivek", city : "lucknow", population :45}, 
{id: "2",name : "yash", city : "aashiyana", population: 38},
{id: "3",name : "sarthak", city : "pune", population: 120},
 {id: "4",name : "gopal", city : "kanpur", population: 98}, 
 {id: "5",name : "nitin", city : "kanpur", population:98}];
let newarray = studentarray.map((val) => {
    return{
        id: val.id,
        name: val.name
    };
});
console.log(newarray);

let studentIds = studentarray.map((val) => {
    return val.id;
});

console.log(studentIds);

let totalpopulation = studentarray.reduce(function(acc,obj) {
    return acc+ obj.population ;
},0);

console.log(totalpopulation);

var array = [12,5,7,3,9];
var sum = array.reduce(function(x,y){
    return x+y ;
},0);
console.log(sum);
