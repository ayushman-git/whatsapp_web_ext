let leftDiv;
let showSidenav = true;
let showMessages = true;
let showArchive = true;

const interval = setInterval(() => {
  const isLoaded = document.querySelector(
    "#app > div > div > div._2Ts6i._3RGKj"
  );
  if (isLoaded) {
    const messages = document.querySelectorAll("._2KKXC");
    leftDiv = isLoaded;
    // detect key combination of command + shift + left arrow
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      if (key === "ArrowLeft" && event.shiftKey && event.metaKey)
        toggleLeftDiv();
      if (key === "ArrowRight" && event.shiftKey && event.metaKey)
        toggleMessages(messages);
      if (key.toLowerCase() === "a" && event.shiftKey) toggleArchive();
    });
    clearInterval(interval);
  }
}, 1000);

const toggleLeftDiv = () => {
  if (showSidenav) {
    leftDiv.style.display = "none";
    showSidenav = false;
  } else {
    leftDiv.style.display = "block";
    showSidenav = true;
  }
};

const toggleMessages = (messages) => {
  if (showMessages) {
    messages.forEach((message) => {
      message.style.display = "none";
    });
    showMessages = false;
  } else {
    messages.forEach((message) => {
      message.style.display = "block";
    });
    showMessages = true;
  }
};

const toggleArchive = () => {
  const archive = document.querySelector("._2O4d9");
  if (showArchive) {
    archive.style.display = "none";
    showArchive = false;
  } else {
    archive.style.display = "block";
    showArchive = true;
  }
};
