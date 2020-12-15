export class Personne {
  constructor(
    public id = 0,
    public firstname = '',
    public name = '',
    public age = 0,
    public cin = 0,
    public job = '',
    public path = ''
  ) {
    this.id = id;
    this.firstname = firstname;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
    this.name = name;
  }
}
