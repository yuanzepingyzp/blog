/**
 * Created by zeping on 2015/11/8.
 */
window.onload= draw;
    function draw(){
        blogNumber("blogNumber","white","#928f8a",getBlogNumber());
        blogNumber("commentNumber","#39566a","white","1")
        triangle();
        commentLogo("#39566a");
    }

$(document).ready(function(){
   $("#triangle").click(function(){
        $("#blogMenu ul").stop().slideToggle();
       var a="transform"?"transform":"webkitTransform";
       rotateAnimate();
    });

    $("#commentButton").mouseover(function(){
        commentLogo("#1bbb4b");
    }).mouseleave(function(){
        commentLogo("#39566a")
    });

        var blogList=$("#blogMenu ul li");
        blogList.click(function(){
        var selectBlog=$(this).attr("rel");
        $(".show").removeClass("show");
        $("#"+selectBlog).addClass("show");
        $(".active").removeClass("active");
        $(this).addClass("active");
    });
    var mottoBlack=$("#motto");
    var mottoText=$("#mottoText");
    mottoBlack.mouseover(function(){
        $(this).slideToggle();
        mottoText.fadeToggle();
    });
    $("aside").mouseleave(function(){
        mottoBlack.slideToggle();
        mottoText.fadeToggle();
    })
});

function blogNumber(id,color,textColor,text){
    var canvas=document.getElementById(id);
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(20,20,14,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();

    ctx.font="20px 'Microsoft YaHei'";
    ctx.fillStyle=textColor;
    ctx.fillText(text,13,28);
}

function triangle(){
    var canvas=document.getElementById("triangle");
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(5,9);
    ctx.lineTo(20,31);
    ctx.lineTo(35,9);
    ctx.closePath();
    ctx.fillStyle="white";
    ctx.fill();
}

function commentLogo(color){
    var canvas=document.getElementById("commentLogo");
    var context=canvas.getContext("2d");


    context.clearRect(0,0,40,40);
    var step = 1 / 50;
    context.beginPath();
    context.moveTo(20 + 15, 20);
    for (var i = 0; i < 2 * Math.PI; i += step)
    {
        context.lineTo(20 + 15 * Math.cos(i), 20 + 10 * Math.sin(i));
    }
    context.closePath();
    context.lineWidth=4;
    context.strokeStyle=color;
    context.stroke();


    context.beginPath();
    context.moveTo(16,30);
    context.quadraticCurveTo(20,30,19,40);
    context.quadraticCurveTo(30,25,24,30);
    context.fillStyle=color;
    context.fill();

    context.beginPath();
    context.arc(20,20,3,0,2*Math.PI);
    context.arc(12,20,3,0,2*Math.PI);
    context.arc(28,20,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
}

function getBlogNumber(){
    var number=document.getElementById("blogMenu").getElementsByTagName("li").length;
    return number;
};

var dg=0;
var isRotate=true;
function rotateAnimate(){
    var obj=document.getElementById("triangle");
    if(isRotate){
        obj.style.webkitTransform="rotate("+dg+"deg)";
        obj.style.transform="rotate("+dg+"deg)";
        dg+=10;
        if (dg<190){
            setTimeout(rotateAnimate,20);
        }
        else{
            isRotate=false;
        }
    }
    else{
        obj.style.webkitTransform="rotate("+dg+"deg)";
        obj.style.transform="rotate("+dg+"deg)";
        dg-=10;
       if(dg>-10){
           setTimeout(rotateAnimate,20);
       }
        else{
           isRotate=true;
       }
    }

}