/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  function createEmployeeRecords(records) {
    return records.map(createEmployeeRecord);
  }
    function createTimeInEvent(dateStamp) {
        const [date, hour] = dateStamp.split(" ");
        this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
        return this;
      }
      function createTimeOutEvent(dateStamp) {
        const [date, hour] = dateStamp.split(" ");
        this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
        return this;
      }
      function hoursWorkedOnDate(date) {
        const timeInEvent = this.timeInEvents.find(event => event.date === date);
        if (!timeInEvent) {
          return 0;
        }
      
        const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
        if (!timeOutEvent) {
          return 0;
        }
      
        const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
        return hoursWorked;
      } 
      function wagesEarnedOnDate(date) {
        const hoursWorked = hoursWorkedOnDate.call(this, date);
        const totalWages = hoursWorked * this.payPerHour;
        return totalWages;
      }
      function findEmployeeByFirstName(employees, firstName) {
        return employees.find((employee) => employee.firstName === firstName);
      }
      function calculatePayroll(employees) {
        const allWages = employees.map(employee => allWagesFor.call(employee));
        return allWages.reduce((totalWages, wages) => totalWages + wages, 0);
      }

