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
		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.id = "checkbox";
		li.insertAdjacentElement("afterbegin", checkBox);
		li.appendChild(document.createTextNode(input.value));
		li.appendChild(deleteButton);
		li.className = "list";
		ul.insertAdjacentElement("afterbegin", li);
		input.value = "";
}

function doneItem(e){
	if(e.target.matches("input#checkbox") && e.target.checked){
		e.target.parentNode.classList.add("done");
		this.appendChild(e.target.parentNode); //Or e.target.parentNode.parentNode.appendChild(e.target.parentNode);
	}else{
		e.target.parentNode.classList.remove("done");
		this.insertAdjacentElement("afterbegin", e.target.parentNode); //Or e.target.parentNode.parentNode.insertAdjacentElement(e.target.parentNode);
	}
}

function deleteItem(e){
	if(e.target && e.target.matches("button.delete")){
		this.removeChild(e.target.parentNode);
		// e.target.parentNode.classList.toggle("done");
	} 
}

// window.addEventListener("load", itemIsPresent);

button.addEventListener("click", doAfterClick); //Create a new item

ul.addEventListener("click", doneItem); //Done item

ul.addEventListener("click", deleteItem); //Delete an item
