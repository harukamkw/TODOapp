var todo = new Vue({
  el: '#todos',
  data: {
    items: [
      { id:1, taskName: 'task1', checked: false, hideTask: false, edit: false, color: '' },
      { id:2, taskName: 'task2', checked: false, hideTask: false, edit: false, color: '' },
      { id:3, taskName: 'task3', checked: false, hideTask: false, edit: false, color: '' },
    ],
  taskName: '',
  showButton: false,
  allDone: false,
  id: '4',
  },
  computed: {
    taskCount: function() {
      var count = 0;
      var tasks = this.items;
      var length = tasks.length;
      for (var i = 0; i < length; i++) {
        if (!tasks[i].checked) {
          count++;
        }
      }
      return count;
    }
  },
  updated: function() {
    var count = 0;
    var tasks = this.items;
    var length = tasks.length;
    for (var i = 0; i < length; i++) {
      if (tasks[i].checked) {
        count++;
      }
    }
    if (count > 0) {
      todo.showButton = true;
    } else {
      todo.showButton = false;
    }
  },
  methods: {
    addTask: function() {
      if (this.taskName != '') {
        this.items.push({
          id: this.id,
          taskName: this.taskName,
          checked: false,
          hideTask: false,
          edit: false,
          color: '',
        }),
        this.taskName = '',
        this.id++
      }
    },
    deleteTask: function(index) {
      this.items.splice(index, 1)
    },
    deleteCompletedTask: function () {
      var tasks = this.items
      var length = tasks.length
      for (var i = length - 1; i >= 0; i--) {
        if (tasks[i].checked == true) {
          this.items.splice(i, 1)
        }
      }
    },
    allDoneBtn: function() {
      var tasks = this.items
      var length = tasks.length;
      if (todo.allDone == false) {
        for (var i = 0; i < length; i++) {
          tasks[i].checked = true;
        }
        todo.allDone = true;
      } else {
        for (var i = 0; i < length; i++) {
          tasks[i].checked = false;
        }
        todo.allDone = false;
      }
    },
    showActive: function() {
      var tasks = this.items
      var length = tasks.length
      for (var i = 0; i < length; i++) {
        if(tasks[i].checked == true) {
          tasks[i].hideTask = true
        } else {
          tasks[i].hideTask = false
        }
      }
    },
    showCompleted: function() {
      var tasks = this.items
      var length = tasks.length
      for (var i = 0; i < length; i++) {
        if(tasks[i].checked == false) {
          tasks[i].hideTask = true
        } else {
          tasks[i].hideTask = false
        }
      }
    },
    showAll: function() {
      var tasks = this.items
      var length = tasks.length
      for (var i = 0; i < length; i++) {
        tasks[i].hideTask = false
      }
    },
    updateTask: function(index) {
      var task = this.items[index]
      task.edit = false;
    },
    destroyTasks: function() {
      var length = this.items.length
      this.items.splice(0, length)
    },
    changeColor: function(index) {
      if (this.items[index].color == '') {
        this.items[index].color = 'blue'
      } else if (this.items[index].color == 'blue') {
        this.items[index].color = 'red'
      } else {
        this.items[index].color = ''
      }
    },
  },
})
