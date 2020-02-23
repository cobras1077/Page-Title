        var HP=100;

 
    $(".Start").click(function(){
        // $("body").css("background-image": "url('https://pngimage.net/wp-content/uploads/2018/06/pokemon-background-png-4.png');");
        // $("body").css("background-color", "yellow");
        // $("#empty").append("#empty");
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
    });
     $("#move2o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
    });
     $("#move3o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
    });
     $("#move4o").click(function(){

        var newHP=HP--;
       $("#hp").html("<p> Hp: "+newHP+"</p>");
    });