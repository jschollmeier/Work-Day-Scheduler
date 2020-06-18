$("#currentDay").text(moment().format('dddd, MMMM Do'));

init();

var times = []
$(".form-control").each(function (){
    times.push(this.id)
});
//var times2 = times.split(" ");


for (var i = 0; i<times.length; i++){
    if (times[i]===moment().format("H"))
    {
        $("#"+times[i]).css("background-color","#ff6961");
        
    }
    else if (parseInt(times[i])>parseInt(moment().format("H"))){
        $("#"+times[i]).css("background-color","#77dd77");
        
    }
    else{
        $("#"+times[i]).css("background-color", "#d3d3d3");
        
    }
} 

$(".btn").on('click', function(){
    console.log($("#"+this.id).val());

    localStorage.setItem(this.id, $("#"+this.id).val()) ;
    
})

function init() {

    for(var i = 9; i<18; i++)
    {
        $("#"+i).text(localStorage.getItem(i));
    }

  }
  
  

