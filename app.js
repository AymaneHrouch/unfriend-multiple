// use the link https://mobile.facebook.com/[Your Username]/friends



x = parseInt(prompt("How many friends you wanna load?"))
friends = document.querySelectorAll('._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]')
scrolling = (n) => {
	console.log(n + " friends loaded")
	if(n < x) {
		setTimeout(function() {
			window.scrollTo(0, 9999999);
			friends = document.querySelectorAll('._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]')
			scrolling(friends.length)
		}, 3000)
	}
	else 
	{
		window.scrollTo(0,0);
		createCB();
		
	}
}
scrolling(friends.length)

toUnfriend = []

// CREATING THE CHECKBOXES //
createCB = () => {
	for(i=0;i<friends.length;i++) {
		var checkBox = document.createElement('input')
		checkBox.type = "checkbox";
		checkBox.style.height = "30px";
		checkBox.style.width = "30px";
		checkBox.style.margin = "auto";
		checkBox.id = i;
		friends[i].appendChild(checkBox);
	}
	createBtn();
}


// main function to unfriend // new version dusing setTimeout
unfriend = (id, arr) => {
	if(id<arr.length) {
		setTimeout(function() {
			friends[arr[id]].children[2].children[0].children[0].children[3].children[0].click();
			document.querySelectorAll('[data-sigil="touchable touchable mflyout-remove-on-click m-unfriend-request"]')[0].click();
			console.log(friends[arr[id]].children[1].children[0].children[0].children[0].children[0].innerText + " has been unfriended");
			friends[arr[id]].children[3].checked = false;
			id++;
			unfriend(id, arr)
		}, 1000)
	}
	else {
		console.log("DONE!")
	}
}


// CREATING THE BYE BUTTON //
createBtn = () => {
	btn = document.createElement('button')
	btn.innerText = "Bye"
	btn.style.fontSize = "30px"
	list = document.querySelector('._55wo._55x2')
	list.insertBefore(btn, list.childNodes[0])
	btn.addEventListener('click', () => {
		for(i=0;i<friends.length;i++) {
			cB = document.getElementById(i).checked
			if(cB) {
				toUnfriend.push(i)
			}
		}

	  unfriend(0, toUnfriend);
		toUnfriend = []
	})
}

// Select all

selectAll = () => {
	for(i=0;i<friends.length;i++)
    	friends[i].children[3].checked = true
}
