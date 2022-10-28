// 3. Take 10 numbers as input and output each number on basis of odd and even. For example: 3 is an odd number. 10 is an even number.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
for(let x=0; x<=9; x++)
{
	if(numbers[x]%2==0)
		document.write(numbers[x] +" is an EVEN number.<br/>") ;
	else
		document.write(numbers[x] +" is an ODD number.<br/>") ;
}
