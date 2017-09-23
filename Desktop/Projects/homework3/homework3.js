//1
const parameteroftriangle=function(num1,num2,num3)
{
	return num1+num2+num3;
;};
const par=parameteroftriangle(5,8,2);
console.log(par) 

//2
const myName=function(){
	return "Vazgen";
};
console.log(myName());

//3
const area=function(a,b,h)
{
	(a+b)/2*h;
	console.log(area);
}
area(10,20,30)



//4
const fullname=function(Fname, Lname) {
	return Fname + " " + Lname;
};
console.log(fullname("Vazgen", "Tadevosyan")); 

//5
const longest=function(string1, string2, string3) {
	if (string1.length > string2.length && string1.length > string3.length){
		return string1;
	} else if (string2.length > string1.length  && string2.length > string3.length) {
		return string2;		
	} else {
		return string3;
	}
};
const result = longest("the world is yours", "change the world", "my name");
console.log(result);
 
 //6
 const twoNum=function(numb1,numb2){if (numb1 > numb2){
 	return "1";
    }else if (numb2 > numb1){
 	return "-1";
    }else if (numb1=numb2){
	return "0"
    }
};
const result2=twoNum(5,9)
console.log(result2);

//7
const chisht=function(a,b,c){if(a)
	return a;
       else if (b) 
       return b;
       else (c)
       return c;}
       const r=chisht(0,4,9)
       console.log(r)
