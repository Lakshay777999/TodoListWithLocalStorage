var i=document.getElementById("todo_input");
var b=document.getElementById("clickme");
var u=document.getElementById("todo");


b.addEventListener("click",add);
var save=[];
showdata();
function add()
{
var value=i.value;
  if(value==="")
  {
    return;
  }
  var el=document.createElement("li");
  el.innerText=value;
  u.appendChild(el);
  el.addEventListener("dblclick",function(e){
  u.removeChild(el);
   e = e || window.event;
    var target = e.target 
        text =  target.innerText;  
      index=save.indexOf(text);
      save.splice(index,1);
      var save_str=JSON.stringify(save);
localStorage.setItem("saved",save_str);
i.innerText="";
  });




save.push(value);

var save_str=JSON.stringify(save);
localStorage.setItem("saved",save_str);
i.value="";
}
i.addEventListener("keyup",function(event){
 if(event.keyCode==13)
 {
    add();
 }
});

function showdata()
{
var data=localStorage.getItem("saved");
data=JSON.parse(data);
save=data;


save.forEach(function(value){
  var el=document.createElement("li");
  el.innerText=value;
  u.appendChild(el);
  el.addEventListener("dblclick",function(e){
  u.removeChild(el);
   e = e || window.event;
    var target = e.target 
        text =  target.innerText;  
      index=save.indexOf(text);
      save.splice(index,1);
      var save_str=JSON.stringify(save);
localStorage.setItem("saved",save_str);
});
  
})

}
