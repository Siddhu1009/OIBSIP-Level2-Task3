document.getElementById("to-do1").addEventListener("submit", function(e) {
  e.preventDefault();

  var tin = document.getElementById("title");
  var din = document.getElementById("desc");

  var t = tin.value;
  var d = din.value;

  var task = {
    title: t,
    description: d
  };

  var storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));

  var list = document.createElement("li");
  var title = document.createElement("span");
  title.textContent = t;
  list.appendChild(title);

  var desc = document.createElement("div");
  desc.textContent = d;
  list.appendChild(desc);

  var comp = document.createElement("button");
  comp.textContent = "Complete";
  comp.style.backgroundColor = "green";
  comp.style.color = "white";
  comp.style.padding = "3px 18px";
  comp.style.borderRadius = "25px";
  comp.addEventListener("click", function() {
    list.classList.toggle("completed");
  });
  list.appendChild(comp);

  var edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.style.backgroundColor = "orange";
  edit.style.color = "black";
  edit.style.padding = "3px 18px";
  edit.style.borderRadius = "25px";
  edit.addEventListener("click", function() {
    var newt = prompt("Enter a new title:", t);
    var newd = prompt("Enter a new description:", d);

    if (newt !== null && newd != null) {
      title.textContent = newt;
      desc.textContent = newd;
      t = newt;
      d = newd;

            localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  });
  list.appendChild(edit);

  var del = document.createElement("button");
  del.textContent = "Delete";
  del.style.backgroundColor = "red";
  del.style.color = "black";
  del.style.padding = "3px 18px";
  del.style.borderRadius = "25px";
  del.addEventListener("click", function() {
    list.remove();

       storedTasks = storedTasks.filter(function(item) {
      return item.title !== task.title && item.description !== task.description;
    });

    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  });
  list.appendChild(del);

  document.getElementById("task").appendChild(list);

  tin.value = "";
  din.value = "";
});

var storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
storedTasks.forEach(function(task) {
  var list = document.createElement("li");
  var title = document.createElement("span");
  title.textContent = task.title;
  list.appendChild(title);

  var desc = document.createElement("div");
  desc.textContent = task.description;
  list.appendChild(desc);

  var comp = document.createElement("button");
  comp.textContent = "Complete";
  comp.style.backgroundColor = "green";
  comp.style.color = "white";
  comp.style.padding = "3px 18px";
  comp.style.borderRadius = "25px";
  comp.addEventListener("click", function() {
    list.classList.toggle("completed");
  });
  list.appendChild(comp);

  var edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.style.backgroundColor = "orange";
  edit.style.color = "black";
  edit.style.padding = "3px 18px";
  edit.style.borderRadius = "25px";
  edit.addEventListener("click", function() {
    var newt = prompt("Enter a new title:", task.title);
    var newd = prompt("Enter a new description:", task.description);

    if (newt !== null && newd != null) {
      title.textContent = newt;
      desc.textContent = newd;
      task.title = newt;
      task.description = newd;

            localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  });
  list.appendChild(edit);

  var del = document.createElement("button");
  del.textContent = "Delete";
  del.style.backgroundColor = "red";
  del.style.color = "black";
  del.style.padding = "3px 18px";
  del.style.borderRadius = "25px";
  del.addEventListener("click", function() {
    list.remove();

     storedTasks = storedTasks.filter(function(item) {
      return item.title !== task.title && item.description !== task.description;
    });

     localStorage.setItem("tasks", JSON.stringify(storedTasks));
  });
  list.appendChild(del);

  document.getElementById("task").appendChild(list);
});
