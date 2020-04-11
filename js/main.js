var taskList = [];


//function addItem

	

function addItem(){
  var task =document.getElementById("todoInput").value;
  var ul = document.getElementById("myUl");
  //alert(task);


//triming sting
	if (task.trim().length === 0 ){

		return false;
	} //end of if

	else {
	//make addItem for 5 items
  if (taskList.length < 5){

  	taskList.push(task);

  	var li = document.createElement("li");
  	var text = document.createTextNode(task);
  	li.appendChild(text);

  	var checkMark = document.createElement("button");
  	checkMark.innerHTML = "&check;";
  	checkMark.className = "listItemButton";
 	checkMark.setAttribute("onclick","checkMe(this)");
	li.appendChild(checkMark);	//append check mark to list

  	var crossMark = document.createElement("button");
  	crossMark.innerHTML = "&#x2715";
  	crossMark.className = "listItemButton";  

  	crossMark.setAttribute("onclick", "removeMe(this)");
  	li.appendChild(crossMark);  //append crossmark to list

  	ul.appendChild(li);

  	reset();
  	

  }// if end

} //end of else
} //end of function AddItem

function reset (){

document.getElementById("todoInput").value = "";

} // end reset


function checkMe(item){

	var liTag = item.parentElement;
	//alert (liTag);

	liTag.style.textDecoration = (liTag.style.textDecoration === "line-through")? "none" : "line-through";

//alert(item);
} //end checkMe

function removeMe(item){
	var liTag = item.parentElement;
	var ulTag =  liTag.parentElement;

	ulTag.removeChild(liTag);

	taskList.pop();
	alert(taskList);

}// end removeMe