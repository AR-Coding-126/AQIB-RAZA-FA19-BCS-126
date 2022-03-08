let sandwitch_cal= function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "Need More bread";
    }
    }
    console.log("bread =10 & sandwitch mades: ",sandwitch_cal(10));
    function sandwitch(bread,cheese){
        if(bread % 2 == 0 && cheese > 1 ){
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1){
            return 1;
        }
        else{
            return "Need more bread";
        }
    }
    console.log("bread = 10 & 1 cheese sandwitch mades: ",sandwitch(10,1));