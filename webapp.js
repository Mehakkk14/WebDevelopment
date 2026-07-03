function weekday(){
                var day = parseInt(prompt("Enter a number between 1 to 7: ?"));
                switch(day){
                    case 1:
                        alert("Monday");
                        break;
                    case 2:
                        alert("Tuesday");
                        break;
                    case 3:
                        alert("Wednesday");
                        break;
                    case 4:
                        alert("Thursday");
                        break;
                    case 5:
                        alert("Friday");
                        break;
                    case 6:
                        alert("Saturday");
                        break;
                    case 7:
                        alert("Sunday");
                        break;
                    default:
                        alert("Invalid input. Please enter a number between 1 to 7.");
                }
            }

function month(){
                var num = parseInt(prompt("Enter a month no. : ?"));
                if(num == 12 || num == 1 || num == 2){
                    alert("The month is winter: " + num);
                }
                else if(num == 3 || num == 4 || num == 5){
                    alert("The month is spring: " + num);
                }
                else if(num == 6 || num == 7 || num == 8){
                    alert("The month is summer: " + num);
                }
                else if(num == 9 || num == 10 || num == 11){
                    alert("The month is autumn: " + num);
                }
                else{
                    alert("Invalid month number: " + num);
                }
           }            