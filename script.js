        var HP=100;

 
    $(".Start").click(function(){
        // $("body").css("background-image": "url('https://pngimage.net/wp-content/uploads/2018/06/pokemon-background-png-4.png');");
        // $("body").css("background-color", "yellow");
        // $("#empty").append("#empty");
        // $("#complete").html("<img id='Battle' src='https://i.pinimg.com/originals/e2/84/b1/e284b14af595f046c749aea762b546a6.png'>");
        $("#hp").append("<p> Hp: "+HP+"</p>");
        
        var search=$("#chosenone").val();
        var customurl="https://pokeapi.co/api/v2/pokemon/"+search+"/";
        $(document).ready(function(){
        $.ajax({
            url: customurl,
            method:"GET",
            success:function(response){
                 $("#Image").append("<img class='image' src='"+response.sprites.back_shiny+"'>");
                 $("#move1o").append("<p id='move1'>"+response.moves[0].move.name+"</p>");
                 $("#move2o").append("<p id='move2'>"+response.moves[1].move.name+"</p>");
                 $("#move3o").append("<p id='move3'>"+response.moves[2].move.name+"</p>");
                 $("#move4o").append("<p id='move4'>"+response.moves[3].move.name+"</p>");
            }
        }) ; 
    }) ;  
    });
    $("#move1o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
       return alert("you are only hurting yourself");
    });
     $("#move2o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
       return alert("you are only hurting yourself");
    });
     $("#move3o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
       return alert("you are only hurting yourself");
    });
     $("#move4o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
       return alert("Currently under development as I need to source for an api that has pokemon moves/damage/effectiveness. At the moment your pokemon is the one that takes damage.");
    });