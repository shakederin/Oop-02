class Person{
    #id;
    constructor(fName,sName, salary, age, id){
        this.firstName = fName;
        this.surName = sName;
        this.salary = salary;
        this.age = age;
        this.#id = id;
    }

    get getfName(){
        return this.firstName;
    }

    get getsName(){
        return this.surName;
    }

    get getsalary(){
        return this.salary;
    }

    set setsalary(newSalary){
         this.salary = newSalary;
    }

    get getage(){
        return this.age;
    }

    set setage(newage){
         this.age = newage;
    }

    get getId(){
        return this.#id
    }

}

class Player extends Person{
    constructor(fName,sName, salary, age, id, strongLeg, position, celebrationSentence){
        super(fName,sName, salary, age, id);
        this.strongLeg = strongLeg;
        this.position = position;
        this.celebrationSentence = celebrationSentence;
    }

    goalCelebration(){
        console.log(this.celebrationSentence);
        this.salary = this.salary*1.025
    }

    get getstrongLeg(){
        return this.strongLeg
    }

    get getposition(){
        return this.position
    }

    set setposition(newPosition){
        this.position = newPosition
    } 

    get getcelebrationSentence(){
        return this.celebrationSentence;
    }

    set setcelebrationSentence(newcelebrationSentence){
       this.celebrationSentence = newcelebrationSentence;
    }
}

class GoalKeeper extends Person{
    constructor(fName,sName, salary, age, id, isLeftHanded, lastGoalConceded= new Date(Date.now())){
        super(fName,sName, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceded = lastGoalConceded;
    }

    concededAGoal(){
        this.lastGoalConceded = new Date(Date.now());
        this.salary = this.salary*0.975
    }
    get getIsLeftHanded(){
        return this.isLeftHanded;
    }

    get getlastGoalConceded(){
        return this.lastGoalConceded;
    }

    set setlastGoalConceded(newDate){
        this.lastGoalConceded = newDate;
    }

}