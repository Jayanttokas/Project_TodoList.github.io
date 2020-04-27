const functional = (() => {

  var newTask = function(Id,task) {
    this.Id = Id;
    this.task = task;
  };

  var tasks = {
    alltasks: []
  };

  return{
    getTask:() => {
        return {
          task: document.getElementById("todo").value
        }
    },

    addItem: (task) => {
      var newWork, ID;

      if(tasks.alltasks.length > 0){
        ID = tasks.alltasks.length;
      } else {
        ID = 0;
      }
      newWork = new newTask (ID,task);
      tasks.alltasks.push(newWork);

      return newWork;
    },

    getdata: () => {
      console.log(tasks);
    },

    displayItem: (task) => {
      html = `<h3 class="task-style" id="task-item-${task.Id}">${task.task}<button class="close pt-1" id="remove">&times;</button></h3>`
      document.getElementById("task-container").insertAdjacentHTML("beforeend", html);
    },

    clear: () => {
      document.querySelector("#todo").value = "";
    },

    deleteItem: (id) => {
      var ids, index;
      ids = tasks.alltasks.map(function(current) {
          return current.Id;
      });

      //GETTING THE ID OF WHAT WE WANT TO DELETE
      index = ids.indexOf(id);
      if (index !== -1){
          tasks.alltasks.splice(index, 1);
      }
    },

    //DELETE FROM UI
    deleteFromUI: (selectorID) => {
      var el = document.getElementById(selectorID)
      el.parentNode.removeChild(el);
    }

  }

})();

const controller = ( (fnctrl) => {

  eventHandler = () => {
    document.getElementById("add-item").addEventListener("click",ctrlAddItem);
    document.addEventListener("keypress", function(e){
      if (e.key === "Enter") {
          ctrlAddItem();
      }
    });
    document.querySelector("#task-container").addEventListener("click",ctrlDeleteItem);
}

  //ADD ITEM
  ctrlAddItem = () => {
    let input,newtask;
    input = fnctrl.getTask();

    //ADDING TO DATA STRUCTURE
    newtask = fnctrl.addItem(input.task);

    //DISPLAY TASK
    fnctrl.displayItem(newtask);

    //DISPLAY CLEAR
    fnctrl.clear();
  };

  //DELETING ITEM
  ctrlDeleteItem = () => {
    let itemID, splitID, ID;
    itemID = event.target.parentNode.id;

    if(itemID) {
      splitID = itemID.split("-");
      ID = parseInt(splitID[2]);
    }

    fnctrl.deleteItem(ID);
    fnctrl.deleteFromUI(itemID);
  }

  return {
    init: () => {
      console.log("App Started");
      eventHandler();
    }
  }

})(functional);

controller.init();
