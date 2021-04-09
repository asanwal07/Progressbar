 const progress=document.getElementById("progress")
 const prev=document.getElementById("prev");
 const next=document.getElementById("next");
 const circles=document.querySelectorAll(".circle")

let currentactive=1
 next.addEventListener("click",function()
 {
      currentactive++;
      // if(currentactive>4)OR
      if(currentactive > circles.length)
      {
            currentactive=circles.length
      }
      update()
 })
 prev.addEventListener("click",function()
 {
      currentactive--;
      // if(currentactive>4)OR
      if(currentactive<1)
      {
            currentactive=1
      }
      console.log(currentactive)
      update()
 })
function update()
{
      circles.forEach((circle,idx)=>{
            if(idx < currentactive)
            {
                  circle.classList.add('active')
            }
            else {
                  circle.classList.remove('active')
            }

      })

      const actives = document.querySelectorAll(".active")
      progress.style.width=(((actives.length-1)/(circles.length-1))*100) + "%"
      if(currentactive==1)
      {
            prev.disabled =true
      }
      else if(currentactive==circles.length)
      {
            next.disabled=false

      }
      else{
            prev.disabled=false
            next.disabled=false
      }
}

//  circle.addEventListener("click",function()
//  {
//       document.querySelectorAll(".circle").classlist.add("circle active")
//  })