const getSleepHours = day =>{
  switch (day){
    case 'Monday':
    return 8
    break;
    case 'Tuesday':
    return 7
    break;
    case 'Wednesday':
    return 6
    break;
    case 'Thurday':
    return 5
    break;
    case 'Friday':
    return 4
    break;
    case 'Saturday':
    return 3;
    break;
    case 'Sunday':
    return 2
    break;
    default:
    return 'error'

  }
}
const getActualSleepHours = () => {
getSleepHours('Monday') +
getSleepHours('Tuesday') +
getSleepHours('Wednesday') +
getSleepHours('Thursday') +
getSleepHours('Friday') +
getSleepHours('Saturday') +
getSleepHours('Sunday');
const idealHours = ()=>{
  let idealHours = 8;
  return idealHours * 7;
}
const calculateSleepDebt = () =>{
  let actualSleepHours = 
  getActualSleepHours();
  let ideaSleeplHours =
   getIdealSleepHours();
}
if (actualSleepHours === idealSleepHours){
  console.log('That is a perfect seelp');
} else if (actualSleepHours > idealSleepHours){
  console.log('user got more sleep than needed');
}
else if(actualSleepHours < idealSleepHours){
  console.log('you should get more sleep');
}
else console.log('error');
calculateSleepDebt();
