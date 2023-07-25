/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function (employee) {
        if(employee.profession === "developer") console.log(employee);
    }
    );
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    function printDeveloper(employee){
        if(employee.profession === "developer"){
            console.log(employee);
        }
    }
    arr.forEach(printDeveloper);
  }
  
  function addData() {
    //Write your code here, just console.log
    let employee = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(employee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter( employee => {
        return employee.profession !== "admin";
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "johney Walker", age: "108", profession: "developer" },
        { id: 5, name: "jackie Chan", age: "67", profession: "manager" },
        { id: 6, name: "karen Polard", age: "39", profession: "HR" },
      ];
    
      console.log(arr.concat(newArr));
  }