/*
4. Implement js switch statement to grade an iiucian’s cse-3532 course based on the number he/she provides you as input.
For example, if number is above 80, s/he gets A+.
*/

function showGrade(marks)
{
	switch(marks/10){
		case 10:
		case 9:
		case 8:
		console.log('A+') ;
		break ;
		case 7:
		console.log('A') ;
		break ;
		case 6:
		console.log('A-') ;
		break ;
		case 5:
		console.log('B') ;
		break ;
		case 4:
		console.log('C') ;
		break ;
		case 3:
		case 2:
		case 1:
		console.log('F') ;
	}
}
