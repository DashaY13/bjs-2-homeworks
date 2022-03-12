class AlarmClock {
    constructor() {
        this.timerId = null;
        this.alarmCollection = [];
    }

    addClock(time, callback, id) {
        if(id === undefined){
          throw new Error('id не передан')
        } else if (this.alarmCollection.find((alarm) => alarm.id === id)) {
          console.error(`Звонок ${id} уже существует!`);
        } else {
          this.alarmCollection.push({time: time, id: id, callback: callback});
        }
      }
      
    removeClock(id) {
      let lengthBeforeRemove = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
      return lengthBeforeRemove !== this.alarmCollection.length;
      }
    
    getCurrentFormattedTime(time) {
      return new Date().toTimeString().slice(0, 5);
      }

    start() {
      let savedThis = this;
      function checkClock(item) {
        if (item.time === savedThis.getCurrentFormattedTime()) {
        item.callback();
        }
      }
        if(this.timerId === null){
        this.timerId = setInterval(() => {
        this.alarmCollection.forEach(elem => checkClock(elem));
        }, 5000);
      }
    }

    stop() {
      clearInterval(this.timerId);
      this.timerId = null;
      }

    printAlarms() {
      this.alarmCollection.forEach(elem => console.log(`Звонок с id = ${elem.id} заведен на время ${elem.time}.`));
      }
    
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
      }
    }
    
  let alarmClock1 = new AlarmClock()
  alarmClock1.addClock("08:00", () => console.log("Вставай"), 1);
  alarmClock1.addClock("08:01", () => { console.log("Вставай уже!"); alarmClock1.removeClock(2)}, 2);
  alarmClock1.addClock("08:01", () => console.log("Вставай проспищь!"));
  alarmClock1.addClock("08:02", () => {
    console.log("Вставай, а то уволят!");
    alarmClock1.clearAlarms();
    alarmClock1.printAlarms();
  }, 3);
  alarmClock1.addClock("08:05", () => console.log("Вставай, а то уволят!"), 1);
  alarmClock1.printAlarms();
  alarmClock1.start();
  