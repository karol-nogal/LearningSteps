console.log('hello world');

const  Student1 = {
    name: "adam",
    adress: 'asdasdassd',
    IDnumber: 1234,
    Profile: "dasdsa",
    DisplayFullInfo: function(){
        console.log(this.name +" "+ this.adress +" "+ this.IDnumber +" "+ this. Profile);
    },
    ChangeID: function(a){
        this.IDnumber = a;
    }
};

const  Student2 = {
    name: "ewa",
    adress: 'asdasdaasdasdssd',
    IDnumber: 2132134,
    Profile: "dasdasdassa",
    DisplayFullInfo: function(){
        console.log(this.name +" "+ this.adress +" "+ this.IDnumber +" "+ this. Profile);
    },
    ChangeID: function(a){
        this.IDnumber = a;
    }
};

var studentList = [];

const Student = {

    setDate: function(newName, newAdress, newID){
        this.name = newName;
        this.adress = newAdress;
        this.IDnumber = newID;
        studentList.push(this);
    },
    name: "",
    adress: "",
    IDnumber: 1
    
}

var Student1 = Object.create(Student);
Student1.setDate("karol",'gdansk',Math.round(Math.random()*1000))

var Student2 = Object.create(Student);
Student2.setDate("asd",'gdansk',Math.round(Math.random()*1000))

var Student3 = Object.create(Student);
Student3.setDate("fsaf",'gdansk',Math.round(Math.random()*1000))

var Student4 = Object.create(Student);
Student4.setDate("cxv",'gdansk',Math.round(Math.random()*1000))

var Student5 = Object.create(Student);
Student5.setDate("qwe",'gdansk',Math.round(Math.random()*1000))

var Student6 = Object.create(Student);
Student6.setDate("bf",'gdansk',Math.round(Math.random()*1000))

var Student7 = Object.create(Student);
Student7.setDate("sdvsdf",'gdansk',Math.round(Math.random()*1000))

var Student8 = Object.create(Student);
Student8.setDate("xcvxvzs",'gdansk',Math.round(Math.random()*1000))

var Student9 = Object.create(Student);
Student9.setDate("karol",'gdansk',Math.round(Math.random()*1000))

var Student10 = Object.create(Student);
Student10.setDate("asdasdasdas",'gdansk',Math.round(Math.random()*1000))

console.log(studentList);







// Class DB
function PersonDB() {
    this.database = [];
  };
  
  PersonDB.prototype.addPerson = function(person) {
    this.database.push(person);
  };
  
  PersonDB.prototype.removePerson = function(removeIndex) {
    this.database.splice(removeIndex, 1);
    renderInstance.setHtml(dbInstance.database);
  };
  
  PersonDB.prototype.displayPeople = function() {
    console.log(this.database);
  };
  
  
  // Class People
  function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
  };
  
  
  // Class for render methods
  function Render(container, button, inputName, inputSurname, inputAge, inputRole) {
    this.container = document.getElementById(container);
    this.button = document.getElementById(button);
    this.inputName = document.getElementById(inputName);
    this.inputSurname = document.getElementById(inputSurname);
    this.inputAge = document.getElementById(inputAge);
    this.inputRole = document.getElementById(inputRole);
  };
  
  Render.prototype.renderRow = function(name, surname, age, role, index) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div><button onclick="dbInstance.removePerson('+index+')">Jednak lubię tą osobę</button></div>';
  };
  
  Render.prototype.setHtml = function(database) {
    this.container.innerHTML = '';
    var self = this;
    database.map(function(person, index){
      self.container.innerHTML += self.renderRow(person.name, person.surname, person.age, person.role, index);
    });
  };
  
  Render.prototype.getValuesFromInput = function() {
    return {
      name: this.inputName.value,
      surname: this.inputSurname.value,
      age: this.inputAge.value,
      role: this.inputRole.value,
    }
  };
  
  Render.prototype.addClick = function() {
    var self = this;
    this.button.addEventListener('click', function(){
      var person = self.getValuesFromInput();
  
      dbInstance.addPerson(person);
      renderInstance.setHtml(dbInstance.database);
    });
  };
  
  
  
  // Create object of PersonDB
  var dbInstance = new PersonDB();
  
  // Create object of Render
  var renderInstance = new Render('records', 'button', 'inputName', 'inputSurname', 'inputAge', 'inputRole');
  renderInstance.addClick();
  renderInstance.setHtml(dbInstance.database);

var studentList= [];
var techersList = [];

class People {
  constructor(name,age,adress,IDnumber){
    this.name = name;
    this.age = age;
    this.adress = adress;
    this.IDnumber = IDnumber
  }
  displayFullInfo(){
    console.log(`${this.profile} ${this.name} lat ${this.age} zamieszkaly w ${this.adress} o nr ${this.IDnumber}`);
  }
  changeID(a){
    this.IDnumber = a;
  }
};


class Student extends People{
  constructor(name,age,adress,IDnumber){
    super(name,age,adress,IDnumber);
    this.profile = 'Student';
    studentList.push(this)
  }
  
};

class Teacher extends People{
  constructor(name,age,adress,IDnumber){
    super(name,age,adress,IDnumber);
    this.profile = 'Teacher';
    techersList.push(this);
  };
  
  
};
var student1 = new Student("karol",21,"gdansk",123);
var student2 = new Student("adam", 22 , "gdansk", 432);
var teacher1 = new Teacher("kamil", 25,"poznan",321);
var teacher2 = new Teacher("kamil1", 225,"poznan",3221);


class Render {
  static renderList(list, goal) {
      const grabList = document.querySelector(`.${goal}`)
      let htmlValue = "";
      list.map((element) => {
          htmlValue += `<div> ${element.profile}, imię: ${element.name}, adres: ${element.adress}, ID: ${element.IDnumber}, wiek: ${element.age}</div>`
      });
      grabList.innerHTML = htmlValue;
  }
}


class AddNew {
  static addToList(inputName,inputAge,inputRole,inputAdress,inputID){
     inputName = document.getElementById("inputName").value
     inputAge = document.getElementById("inputAge").value
     inputAdress = document.getElementById("inputAdress").value
     inputRole = document.getElementById("inputRole").value
     inputID = document.getElementById("inputID").value
      if(inputRole == "Teacher"){
         new Teacher(inputName,inputAge,inputAdress,inputID,inputRole)
        Render.renderList(techersList,"teachers")
      }else if(inputRole == "Student"){
         new Student(inputName,inputAge,inputAdress,inputID,inputRole)
        Render.renderList(studentList,"students")
      }

  }
    
}

const resetButton = function(){
  document.getElementById("inputName").value =  ""
  document.getElementById("inputAdress").value =  ""
  document.getElementById("inputAge").value =  ""
  document.getElementById("inputID").value =  ""
  document.getElementById("inputRole").value =  ""
  
}