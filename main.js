const notificationBtn = document.getElementById("notification");
const toastContainer = document.querySelector(".toasts");

const toastMsgArr = [
  {
    message: "This is warning",
    type: "warning",
  },

  {
    message: "This is error",
    type: "error",
  },
  {
    message: "This is info",
    type: "info",
  },
];

notificationBtn.addEventListener("click", function (event) {
  let index = Math.floor(Math.random() * toastMsgArr.length);
  const { message, type } = toastMsgArr[index];
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type);
  notif.textContent = message;
  toastContainer.prepend(notif);
  setTimeout(() => {
    notif.remove();
  }, 1000);
});
