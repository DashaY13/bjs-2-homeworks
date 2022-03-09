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
        return this.alarmCollection.toTimeString();
    }


    start() {

    }

    stop() {

    }

    printAlarms() {
      alarmCollection.forEach(id, time);
        console.log(alarmCollection);
      }
    
    clearAlarms() {
    }
  }


  const alarmClock = new AlarmClock()
  this.alarmCollection.push({time: time, id: id, callback: callback});
  