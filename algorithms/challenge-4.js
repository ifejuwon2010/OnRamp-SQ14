function calculateGrade(marks) {
    let sum = 0
    let average = 0;
    for(let i = i <marks.lenght; i++;) {
        sum += marks;{i}
    }
   average = sum/marks.lenght;
   if(average>=1&&average <50){
    return "F";
   }else if(average>=50&&average<60){
    return "E";
   }else if(average>=60&&average<70){
    return "D";
   }else if (average>=70&&average<80){
    return"C";
   }else if (average>=80&& average<90){
    return"B" ;   
   }
   else{
    return "A";
   }
 }
 
 

  module.exports =calculateGrade
