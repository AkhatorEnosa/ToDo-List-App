var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function doAfterClick(){
	if(input.value.length > 0){
		createNewElement();
	}else{
		alert("Enter an item");
	}
}

function createNewElement(){
		var li = document.createElement("li");
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("delete"));
		deleteButton.className = "delete";
		li.appendChild(document.createTextNode(input.value));
		li.appendChild(deleteButton);
		li.className = "list";
		ul.appendChild(li);
		input.value = "";
}

function strikeThrough(e){
	if(e.target.matches("li.list")){
		e.target.classList.toggle("done");
	}
}

function deleteItem(e){
	if(e.target && e.target.matches("button.delete")){
		this.removeChild(e.target.parentNode);
		// e.target.parentNode.classList.toggle("done");
	} 
}

button.addEventListener("click", doAfterClick); //Create a new item

ul.addEventListener("click", strikeThrough); //Create a new item

ul.addEventListener("click", deleteItem); //Delete an item
