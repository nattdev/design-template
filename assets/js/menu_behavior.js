var el_LinkList1 = document.querySelectorAll("div#LinkList1 ul li a"); 
          var el_LinkList2 = [];
          
          for(var i = 0; i < document.querySelectorAll("div#LinkList1 ul li a").length - 0; i++){
          	el_LinkList2[i] =  "div#LinkList1 ul li:nth-child" + "(" + (i + 1) + ") a";
          }
           
          let tarjet = ["#header_main","#us_section", "#services_section", "#porta_section", "#form_section"];
    /*Menu-active-screen*/
    
			window.addEventListener("scroll", function(){
    if(window.scrollY > 0 && window.innerWidth > 1330){
    		document.querySelector("#LinkList1").classList.add("container-menu-active");
    		} else {
    		document.querySelector("#LinkList1").classList.remove("container-menu-active");
    		}
    		});
    		
    
    /*Menu-active-mobile*/
    let button_menu = document.createElement("div");
    button_menu.classList.add("button");
    button_menu.textContent = "v";
    
  	let container_mobile = document.querySelector("#us_section");
    container_mobile.insertAdjacentElement("afterbegin", button_menu)
    button_menu.addEventListener("click", function(){
    document.querySelector("#LinkList1").classList.toggle("container-menu-active");
    console.log("clik clik");
    
    });
              
          for(var i = 0; i < document.querySelectorAll("div#LinkList1 ul li a").length - 0; i++){
        		
        let offsetTop = document.querySelector(tarjet[i]).offsetTop;
	

 $("ul li").click(function() {
    	console.log(offsetTop);
        $(this)
            .addClass('menu-active') //set the current as active
            .siblings("li") //find sibling h3 elements
            .removeClass("menu-active") // and remove the active from the
   }); 
    
          $(el_LinkList2[i]).on("click", function(e){	
    		e.preventDefault();
          $("html, body").animate(
          { scrollTop: offsetTop}, 1300);
       		});
          }
