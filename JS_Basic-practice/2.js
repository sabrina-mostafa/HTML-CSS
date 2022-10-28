/*
2. Show output on which season is it based on user’s input date using js.
If it’s November to February then, winter, March to June then, summer and July to October then monsoon.
*/

function showSeason(message)
{
	switch(message){
		case 'November':
		case 'December':
		case 'January':
		case 'February':
		console.log('winter') ;
		break ;
		case 'March':
		case 'April':
		case 'May':
		case 'June':
		console.log('summer') ;
		break ;
		case 'July':
		case 'August':
		case 'September':
		case 'October':
		console.log('monsoon') ;
	}
}
