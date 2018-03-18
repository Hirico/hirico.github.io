

var counter = 1;
$("#prev").click( function() {
    if (counter == 1){
        counter = 3;
        $("#gallery").attr('class','gallery3');
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=WolUZjYsT-M&list=PLB4C51A85A5AF3364'>[AKROSS Con 2010] SilentMan - Drawn Dream</a>");
    }
    else if(counter == 2){
        counter = 1;
        $("#gallery").attr('class','gallery'+counter);
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=L9rlTKI0GJ0&list=PLXQT78wkZBLTEwV2JkzQ5maM2Xb0FGm61'>[AKROSS Con 2012] Umika - Sincerity</a>");
    }
    else{
        counter = 2;
        $("#gallery").attr('class','gallery'+counter);
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=3EbX7JdcHa0&index=10&list=PLXQT78wkZBLQ8errJbaApfVUlh-qOLKi2'>[AKROSS Con 2013] Centurione - Pandora</a>");

    }
});

$("#next").click( function() {
    if (counter == 3){
        counter = 1;
        $("#gallery").attr('class','gallery1');
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=L9rlTKI0GJ0&list=PLXQT78wkZBLTEwV2JkzQ5maM2Xb0FGm61'>[AKROSS Con 2012] Umika - Sincerity</a>");
    }
    else if(counter == 2){
        counter = 3;
        $("#gallery").attr('class','gallery'+counter);
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=WolUZjYsT-M&list=PLB4C51A85A5AF3364'>[AKROSS Con 2010] SilentMan - Drawn Dream</a>");
    }
    else{
        counter = 2;
        $("#gallery").attr('class','gallery'+counter);
        $("#description").html("<a class='describe' href='https://www.youtube.com/watch?v=3EbX7JdcHa0&index=10&list=PLXQT78wkZBLQ8errJbaApfVUlh-qOLKi2'>[AKROSS Con 2013] Centurione - Pandora</a>");
    }
});
