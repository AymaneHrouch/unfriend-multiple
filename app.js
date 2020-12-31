// use the link https://mobile.facebook.com/[Your Username]/friends

// CREATING THE CHECKBOXES //
checkboxId = 0;
const createCB = () => {
  friends = document.querySelectorAll(
    '._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]'
  );
  for (i = checkboxId; i < friends.length; i++) {
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.height = "30px";
    checkBox.style.width = "30px";
    checkBox.style.margin = "auto";
    checkBox.classList.add("mycheckbox");
    checkBox.id = checkboxId++;
    friends[i].appendChild(checkBox);
  }
};

/// Load Friends
const loadFriends = (scrolling = false) => {
  const callback = (mutationList, observer) => {
    console.log("callback");
    const moreFriends = document.querySelector(".seeMoreFriends");
    if (moreFriends) {
      createCB();
      if (scrolling) moreFriends.scrollIntoView();
    } else {
      observer.disconnect();
      console.log("no more friends");
      createCB();
    }
  };

  const loader = document.querySelector(".seeMoreFriends");
  if (loader) {
    const obs = new MutationObserver(callback);
    const options = { childList: true };
    obs.observe(document.querySelector("._2pit"), options);
    createCB();
    if (scrolling) loader.scrollIntoView();
  }
};
loadFriends();

// CREATING THE BYE BUTTON //
createBtn = () => {
  btn = document.createElement("button");
  btn.innerText = "Bye";
  btn.style.fontSize = "30px";
  list = document.querySelector("._55wo._55x2");
  list.insertBefore(btn, list.childNodes[0]);
  btn.addEventListener("click", () => {
    unfriend(0, toUnfriend());
  });
};
createBtn();

// main function to unfriend // new version using setTimeout
toUnfriend = () => {
  friends = document.querySelectorAll(
    '._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]'
  );
  return Array.prototype.slice
    .call(document.getElementsByClassName("mycheckbox"))
    .filter(f => f.checked);
};

unfriend = (id, arr) => {
  if (id >= arr.length) return;
  friendIndex = arr[id].id;
  friends = document.querySelectorAll(
    '._55wp._7om2._5pxa._8yo0[data-sigil="undoable-action"]'
  );
  if (id < arr.length) {
    setTimeout(function () {
      friends[
        friendIndex
      ].children[2].children[0].children[0].children[3].children[0].click();
      document
        .querySelectorAll(
          '[data-sigil="touchable touchable mflyout-remove-on-click m-unfriend-request"]'
        )[0]
        .click();
      console.log(
        friends[friendIndex].children[1].children[0].children[0].children[0]
          .children[0].innerText + " has been unfriended"
      );
      friends[friendIndex].children[3].checked = false;
      id++;
      unfriend(id, arr);
    }, 100);
  } else {
    console.log("DONE!");
  }
};

// Select all

selectAll = () => {
  for (i = 0; i < friends.length; i++) friends[i].children[3].checked = true;
};
