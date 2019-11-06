function ceckSign(value){
    if (value>0){
        return "positive";
    }
    else if (value<0){
        return "negative";
    }
    else {
        return 0;
    }

    }
     console.log(ceckSign(-2));
     console.log(ceckSign(0));
     console.log(ceckSign(15 ));