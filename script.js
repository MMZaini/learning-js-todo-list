let items = [""];

function addItem() {
  let item = document.getElementById("input").value
  items.push(item);

  // update html
  let itemhtml = document.getElementById("items")
  itemhtml.innerHTML = ""
  items.forEach((e) => {
    let li = document.createElement("li");
    li.innerText = e;
    itemhtml.appendChild(li);
  })
}
