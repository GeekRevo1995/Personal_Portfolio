

 "use strict";

    var btn1 = document.getElementById("btn1"),
        btn2 = document.getElementById("btn2");

function left()
    {
    var box2 = document.getElementById("box2"),
    box1 = document.getElementById("box1");  
    btn1.style.backgroundColor ="#EFEFEF";
    btn2.style.backgroundColor ="#009473";    
    box1.style.left="-70em"; 
    box1.style.transition = "left .5s";
    box2.style.left="35px";
    box2.style.transition = "left .5s";
     
    }
function right()
    {
    var box2 = document.getElementById("box2"),
    box1 = document.getElementById("box1");
    btn2.style.backgroundColor ="#EFEFEF";
    btn1.style.backgroundColor ="#009473";   
    box1.style.left="35px"; 
    box1.style.transition = "left .5s";
    box2.style.left="70em";
    box2.style.transition = "left .5s";
    }
    

/******************************>
change page script
********************************/

var about = document.getElementById("about"),
    portfolio = document.getElementById("portfolio"),
    contact = document.getElementById("contact"),
    tab = [about,portfolio,contact];

function slidePage(number)
    {   
     tab[number].style.height = "auto";
     for( var i= 0; i<tab.length ; i++)
          {          
        tab[i].style.visibility="hidden";
            if(tab[i] != tab[number])
                {
        tab[i].style.height = tab[number].clientHeight+"px";      
                }
             
          }
        tab[number].style.visibility = "visible"; 
    }
        
//if(tab[number] != tab[0] && tab[number].clientWidth+"px" == "840px")
//        {
//          tab[number].style.transition = "left .5s";
//          tab[number].style.left = "300px";
//        }
//        else if(tab[number] != tab[0] && tab[number].clientWidth+"px" == "690px"){
//          tab[number].style.transition = "left .5s";
//          tab[number].style.left = "250px";
//        }
//        else if(tab[number].clientWidth+"px" == "720px")
//            {
//                 tab[number].style.left = "0";
//            }*/
//   }
//
///*************************************
//     change portfolio script 
//*************************************/
//
//var web_design = document.getElementsByClassName("web_design"),
//    graphic = document.getElementsByClassName("graphic"), 
//    m_graphic = document.getElementsByClassName("m_graphic"),  
//    tab1 = [web_design,graphic,m_graphic];
//    graphic = [],
//    graphic_m = [];





