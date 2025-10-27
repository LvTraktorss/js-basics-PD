function printTicketPrice(visitorAge, isStudent){
letisStudent= Boolean(0);

if(visitorAge <6){
     console.log("ieeja ir bezmaksas");
} else if (isStudent ==true){
     console.log("ieejas cena ir 5 EUR");
} else{
     console.log("ieejas cena  ir 10 EUR");
}
}

printTicketPrice(12, Boolean(true))
printTicketPrice(35, Boolean, false)
