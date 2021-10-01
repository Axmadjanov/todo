const card = document.querySelector(".card");
const div = document.querySelector(".div");
const input = document.getElementById("input");
const icon = document.getElementById("icon");

function Message() {
  const msg = document.createElement("div");
  const removemsg = document.createElement("icon");
  removemsg.classList.add("del");
  removemsg.textContent = "Del";
  msg.textContent = input.value;
  removemsg.addEventListener("click", () => {
    msg.remove();
  });
  msg.classList.add("style");
  msg.append(removemsg);
  input.value = "";
  div.append(msg);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Message();
  }
});

// &cross;
// &#x02717;
// &#10007;

// &Otimes;
// &#10807
