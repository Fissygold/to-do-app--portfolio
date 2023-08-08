//  const lm,i =document.querySelector("h1")

//  li.className="hello"

//  document.querySelector("h1").classList









 var button = document.getElementById("enter");
 var input = document.getElementById("userinput")
 var ul = document.querySelector("ul")


 function listLength(){
    return input.value.length;
 }

 function elementCreate(){

      var li = document.createElement("li")
      var bot= document.createElement("button")
      var node= document.createTextNode(input.value)
      li.appendChild(bot)
      bot.innerText="delete"
     li.appendChild(node)
     ul.appendChild(li)
     input.value=""
     ul.appendChild(li).style=' padding: 10px;  background:rgb(28, 126, 190); margin: 20px; color:#fff;'
     li.appendChild(bot).style='padding: 5px; '
    
     function liste(){
       var sun = li.appendChild(bot) 
       sun.addEventListener("click",function(){
        this.style.display="none"
        ul.appendChild(li).style.display="none"
       })
   
     }
     liste()  
 }

 


 var but= document.querySelectorAll(".remove")
 
 Array.from(but).forEach(function(bnn){

   bnn.addEventListener("click",function(e){

      const list=e.target.parentElement
      list.parentNode.removeChild(list)
   })
 }
 )
  





 button.addEventListener("click", function(){
if(listLength() >0){
    elementCreate();
}
 })

 input.addEventListener("keypress", function(event){
    if(input.value.length >0 && event.keyCode===13){
    elementCreate();     
    }
     })



     function displayTime(){
      var dateTime= new Date()
      var hrs = dateTime.getHours();
      var min =dateTime.getMinutes();
      var sec = dateTime.getSeconds();
      var session = document.getElementById("sessions")
      if(hrs >=12){
          session.innerHTML="PM"
      
      }else{
          session.innerHTML="AM"
      }
      document.getElementById("hours").innerHTML=hrs
      document.getElementById("minutes").innerHTML=min
      document.getElementById("seconds").innerHTML=sec
  }4
  setInterval(displayTime, 10)

    
  
