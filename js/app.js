$(document).foundation()


$(document).ready(function(){
	$("#pyLogo").click(function(){
        $("#moreInfoBox").text("Python is featured in both the Twitterbot and the top r/programming post projects that are on display!");
    });
    $("#htmlLogo").click(function(){
        $("#moreInfoBox").text("HTML has obviously been heavily implemented and modified for this website to even work! The Foundation framework has been a boon in ensuring complete responsiveness!");
    });
    $("#javaLogo").click(function(){
        $("#moreInfoBox").text("To be implemented");
    });
    $("#rubyLogo").click(function(){
        $("#moreInfoBox").text("Ruby helps compile and interpret Scss aspects of the Foundation framework for easy customization and complete control over the design and content of this website. ");
    });
    $("#phpLogo").click(function(){
        $("#moreInfoBox").text("PHP has been featured in the r/programming top post project and helps this website communicate with our MySQL server in order to retrieve and deliver fresh content daily!");
    });
    $("#cLogo").click(function(){
        $("#moreInfoBox").text("Javascript has been implemented in everything from this very info box, to the animated 'installation' of my credentials at the top of the page, to menus and other features that the Foudation framework uses behind the scenes.");
    });
    
});


$(document).ready(function(){
    $("#clearScreen").click(function(){
        $("#hider").slideToggle("slow");
    });
});


 $(function() {
   $("#typed").typed( {
     strings: ["sudo apt-get install about-nathan<br><br>Aspiring developer with front and back-end experience, RaspberryPi enthusiast and amateur statistician.<br><b>Education:</b><br><br>Queen's University Bachelor of Computing 2012 - 2016<br><br><b>Technical skills include:</b><br><br>~Webdev – Python, HTML5, CSS3, JS (Angular, Bootstrap, jQuery), PHP, additional database management and hosting experience with MySQL and WAMP/LAMP.<br><br>~Back-end – Java, Python, Perl, C(++, #), Prolog, Haskell, R<br><br>~UNIX/Linux, Vim, Emacs, SEO, some knowledge of Arduino/microcontrollers, strong mathematics.<br><br>~WordPress, webmaster Autobiographymag.com"],
     typeSpeed: 0.5,
     backDelay: 12000,
     loop: true,
     // defaults to false for infinite loop
     loopCount: false,
     callback: function() {foo();
     }
   });
   function foo() {console.log("Callback");}
 });