interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [contract: boolean]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;  
}
  
function printTeacher(firstName: string, lastName: string): string{
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  printTeacher(firstName: string, lastName: string): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName;
  }

}

