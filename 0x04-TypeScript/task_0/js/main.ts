interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

 const student1: Student {
  firstName: Gaby;
  lastName: Do;
  age: 10;
  location: Montevideo;
  }

 const student1: Student {
  firstName: Laly;
  lastName: Do;
  age: 6;
  location: Miami;
  }

  let studentsList = [student1, student2];
  console.table(studentsList, ['firstName', 'location']);
