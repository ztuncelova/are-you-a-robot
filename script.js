let bot = new RiveScript();

const brains = ["brain/subs.rive", "brain/brain.rive"];

bot.loadFile(brains).then(botReady).catch(botNotReady);

const message_container = document.querySelector(".messages");

const form = document.querySelector("form");

const input_box = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = "";
  input_box.focus();
});

function preloadObject(url) {
  return new Promise((resolve, reject) => {
    const object = new Image();
    object.onload = () => resolve();
    object.onerror = () => reject();
    object.src = url;
  });
}

preloadObject('devrimup.gif')

preloadObject('kup.gif')

preloadObject('patriciaup.gif')

preloadObject('sajidup.gif')

preloadObject('unknownup.gif')

preloadObject('devrimdown.gif')

preloadObject('kdown.gif')

preloadObject('sajiddown.gif')

preloadObject('unknowndown.gif')

preloadObject('patriciadown.gif')






function botReply(message) {
  message_container.innerHTML += `<div class="bot">${message}</div>`;
}

function selfReply(message) {
  message_container.innerHTML += `<div class="self">${message}</div>`;

  bot
    .reply("local-user", message)
    .then(function (reply) {
      botReply(reply);
    })
    .then(function () {
      message_container.lastElementChild.scrollIntoView();
    });
}

function botReady() {
  bot.sortReplies();
}

function botNotReady(err) {
  console.log("An error has occurred.", err);
}













  






