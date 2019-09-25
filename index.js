class BoardMember {
  constructor(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  veto(){
    'No, I must disagree';
  }
}

class Ceo extends BoardMember {
  hireEmployee(){
    'Welcome aboard!';
  }
}