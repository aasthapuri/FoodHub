function p01Func() {
	
  /* in Ex2, add a getElementById here to get the "probelm" div and 
     set its innerHTML to <p>I'm looking for a type of ...</p>
  */document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>"
    document.getElementById("design").setAttribute("src","dosaDesign.jpg");
    
    document.getElementById("js").setAttribute("src","dosa1.jpg");
    document.getElementById("another").setAttribute("src","dosa2.jpg");
 
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}





function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "inline"	 
    
    document.getElementById("design").style.display="inline";
     
  }
  else {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "none"	 
      
     document.getElementById("design").style.display="none";
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "inline"	 
     document.getElementById("js").style.display="inline";
     
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "none"	 
      
     document.getElementById("js").style.display="none";
  }
}


/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3(){
  if(document.getElementById("check2").checked==true){
      document.getElementById("another").style.display="inline";
  }
  else{
      document.getElementById("another").style.display="none";
  }

}


/* in Ex4, create function p02Func similar to p01Func */
function p02Func(){
  document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It'ss one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>"
  document.getElementById("design").setAttribute("src","jujehDesign.jpg");
    
    document.getElementById("js").setAttribute("src","jujeh1.jpg");
   document.getElementById("another").setAttribute("src","jujeh2.jpg")
  
   }
   function p03Func(){
    document.getElementById("problem").innerHTML="<p>This is a delicious stew made with lentils, spice powder, quick cook veggies & herbs. Serve it with idli, dosa or vada. This Idli sambar tastes delicious & is super aromatic!</p>"
    document.getElementById("design").setAttribute("src","idliwiki.jpg");
      
      document.getElementById("js").setAttribute("src","idlisambhar.jpg");
     document.getElementById("another").setAttribute("src","idli2.jpg")
    
     }

     function p04Func(){
      document.getElementById("problem").innerHTML="<p>Chhole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar. Halwa Poori  is a Pakistani dish with roots in the Indian subcontinent.</p>"
      document.getElementById("design").setAttribute("src","cholewiki.jpg");
        
        document.getElementById("js").setAttribute("src","chole.jpg");
       document.getElementById("another").setAttribute("src","chole2.jpg")
      
       }
 
       function p05Func(){
        document.getElementById("problem").innerHTML="<p>Pav bhaji is a fast food dish from India. It consists of a thick vegetable curry served with a soft bread roll. Vegetables in the curry may include potatoes, onions, carrots, chillies, peas, bell peppers, and tomatoes. Its origins are in the state of Maharashtra</p>"
        document.getElementById("design").setAttribute("src","pavbhajiwiki.jpg");
          
          document.getElementById("js").setAttribute("src","pavbhaji2.jpg");
         document.getElementById("another").setAttribute("src","pavbhaji.jpg")
        
         }      

/* in Ex5, create functions zoomIn() and zoomOut() */
function zoomIn(){
  document.getElementById("design").style.width="200%";
  document.getElementById("another").style.width="200%";
  document.getElementById("js").style.width="200%";
}
function zoomOut(){
    document.getElementById("design").style.width="100%";
    document.getElementById("another").style.width="100%";
    document.getElementById("js").style.width="100%";
}