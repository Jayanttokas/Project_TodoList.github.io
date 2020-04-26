const functional = (() => {

  getTask  = () => {
      task = document.getElementById("todo").value;
  };

  displayItem = () => {
    html = `<h3 class="task-style" id="task-item">${task}<button class="close pt-1" id="remove">&times;</button><button class="close pt-1" id="done" >&#x2714;</button></h3>`
    document.getElementById("task-container").insertAdjacentHTML("beforeend", html);
  }

  return{
    addItem: () => {

      getTask();
      displayItem();
    },

    getdata: () => {
      console.log(tasks);
    },

  }

})();

const controller = ((fnctrl) => {

  eventHandler = () => {
    document.getElementById("add-item").addEventListener("click",fnctrl.addItem);
  }

  return{
    init: () => {
      console.log("App Started");
      eventHandler()
    }
  }

})(functional);

controller.init();
