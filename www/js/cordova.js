//var tom={sjaak:function() {
//    alert('Sjaak');
//}
//        }
//tom.sjaak();
//function sjaak() {
//    //alert('Harses willem');
//
//    window.addEventListener("scroll", scrollHandler);
//    var scrollObject = {};
//
//    function scrollHandler(ev) {
//        getScrollPosition();
//        console.log("scrollObject =" + scrollObject.y);
//
//        //       if(scrollObjectl.y > 100){
//        ////           $("#terugKnop").fadeIn();
//        // //      }
//        // //      else{ $("#terugKnop").fadeOut();}
//        //   }
//        function getScrollPosition() {
//            scrollObject = {
//                x: window.pageXOffset,
//                y: window.pageYOffset
//            }
//            // If you want to check distance
//            if (scrollObject.y > 500) {
//                // add class
//
//            } else {
//                // remove class
//            }
//        }
//
//        //$("#terugKnop").click(function () {
//        //    $("html, body").animate({
//        //        scrollTop: 0
//        //    }, 2000);
//        //});
//    }
//}
//sjaak();

//jquery
$(window).scroll(function(){
    if($(this).scrollTop() > 1080){
        $("#terugKnop").fadeIn();
    }
    else{ $("#terugKnop").fadeOut();}
});

$("#terugKnop").click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function(){

    if($(this).scrollTop() > 2000){
        $("#6maanden").fadeIn();
    }
    else{ $("#6maanden").fadeOut();}
});




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("pic1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



// Get the modal2
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("pic2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}



// Get the modal3
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("pic3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}
