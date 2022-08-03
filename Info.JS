"use strict"

//Inistalizing Array + Constructor 
const getinfo = [];

function Employee(FullName , Level , Department, Img )  {
this.FullName = FullName ,
this.Level = Level ,
this.Department = Department ,
this.Img = Img,
getinfo.push(this);
}
//Prototype to get Emp unique ID
Employee.prototype.getId = function () {



     //this.Id2 = Math.floor(1000 + Math.random() * 9000)
     this.Id2 = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000
console.log(this.Id2);

}

// prototype to calculate Emp net salary
Employee.prototype.salary = function() {
if (this.Level =="Senior")
{
let EmpSalary = (Math.random() * (2000 - 1500) + 1500) ;
this.getSalary = Math.round(EmpSalary- (EmpSalary * 0.075));
return this.getSalary;
}
else if (this.Level == "Mid-Senior") {
  let EmpSalary = (Math.random() * (1500 - 1000) + 1000) ;
this.getSalary = Math.round(EmpSalary- (EmpSalary * 0.075));
return this.getSalary;
}
else {
  let EmpSalary = (Math.random() * (1000 - 500) + 500) ;
this.getSalary = Math.round(EmpSalary- (EmpSalary * 0.075)); 
return this.getSalary;
}
}
//Emp Info
//(FullName , Level , Department , Img)
let ghaziSamer = new Employee("Ghazi Samer" , "Senior" , "Administration " , "./assest/man.png", );

let lanaAli = new Employee("Lana Ali" , "Senior" , "Finance" , "./assest/woman.png")

let tamaraAyoub = new Employee("Tamara Ayoub" , "Senior" , "Marketing" , "/assest/woman.png")

let safiWalid = new Employee("Safi Walid" ,"Mid-Senior" , "Administration"  ,"./assets/man.png");

let omarZaid = new Employee("Omar Zaid" , "Senior" , "Development" ,"./assets/man.png"  );

let ranaSaleh = new Employee("Rana Saleh" , "Junior" ,"Development" ,"./assets/woman.png"  );

let hadiAhmad = new Employee("Hadi Ahmad" , "Mid-Senior" ,"Finance" ,"./assets/man.png"  ); 


Employee.prototype.render = function (){
  document.write (`<p>Employee Name : ${this.FullName} From the ${this.Department} Department , With a Salary equal to : ${this.salary()}, </p>  `);
}
//ghaziSamer.getId();
//ghaziSamer.salary();
for (let i = 0 ; i < getinfo.length ; i++) {
getinfo[i].render();
}



















