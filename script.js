var userPath='';
var compPath = '';
var level = 0;
var start = false;

$(".start").click(function(){
    start=true;
    $("#title").text("Level 0");
    activeBlock();

})
$(document).keypress(function(event){
    if(event){
        start = true;
        $("#title").text("Level 0");
        activeBlock();
    }
})


function activeBlock(){
    var block = Math.ceil(Math.random(0,1)*4);
    $("#"+block).addClass("block_animation");
    setTimeout(function(){
        $("#"+block).removeClass("block_animation");
    },600);
    compPath+=block;
    console.log("compPath=>"+compPath);
    userPath='';
   
}


$(".block").click(function(){
    if(start){
        audioHit();
        animation(this);
        userPath+=$(this).attr("id");
        console.log("userpath=>"+userPath);
        if(userPath.length==compPath.length){
            checkpath();
    }
    }
})

function checkpath(){
    if(userPath.localeCompare(compPath)==0){
        $("#title").text("level  "+eval(level+1));
        level=level+1;
        setTimeout(()=>activeBlock(),1000);
    }else{
        
        $("#title").text("Press Any Key To Start");
        gameOver();
        start=false;
        compPath='';
        userPath='';
        level=0;
    }
}

function animation(block){
    $(block).fadeOut("fast").fadeIn("fast");
}

function audioHit(){
    var audio = new Audio("hit.wav");
    audio.play();
}

function gameOver(){
    var audio = new Audio("game_over.wav");
    audio.play();
}
