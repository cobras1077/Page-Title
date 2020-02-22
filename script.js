

    $(".Start").click(function(){
        // $("body").css("background-image": "url('https://pngimage.net/wp-content/uploads/2018/06/pokemon-background-png-4.png');");
        // $("body").css("background-color", "yellow");
        var search=$("#chosenone").val();
        var customurl="https://pokeapi.co/api/v2/pokemon/"+search+"/";
        $(document).ready(function(){
        $.ajax({
            url: customurl,
            method:"GET",
            success:function(response){
                 $("#Image").append("<img class='image' src='"+response.sprites.back_shiny+"'>");
                 $("#move1").append(response.moves[0].move.name);
                 $("#move2").append(response.moves[1].move.name);
                 $("#move3").append(response.moves[2].move.name);
                 $("#move4").append(response.moves[3].move.name);
            }
        }) ; 
    }) ;  
    });
