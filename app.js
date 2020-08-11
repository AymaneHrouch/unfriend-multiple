// use the link https://mobile.facebook.com/[Your Username]/friends

friends = document.querySelectorAll('._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]') // list of friends
toUnfriend = []

// CREATING THE CHECKBOXES //
for(i=0;i<friends.length;i++) {
	var checkBox = document.createElement('input')
	checkBox.type = "checkbox";
	checkBox.style.height = "30px";
	checkBox.style.width = "30px";
	checkBox.style.margin = "auto";
	checkBox.id = i;
	friends[i].appendChild(checkBox);
}

// main function to unfriend // new version dusing setTimeout
unfriend = (id, arr) => {
	if(id<arr.length) {
		setTimeout(function() {
			friends[id].children[2].children[0].children[0].children[3].children[0].click();
			document.querySelectorAll('[data-sigil="touchable touchable mflyout-remove-on-click m-unfriend-request"]')[0].click();
			console.log	(friends[id].children[1].children[0].children[0].children[0].children[0].innerText + " has been unfriended");
			id++;
			unfriend(id, arr)
		}, 1000)
	}
	else {
		console.log("DONE!")
	}
}


// CREATING THE BYE BUTTON //
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
