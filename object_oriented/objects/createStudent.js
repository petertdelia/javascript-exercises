// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

//     info: Logs the name and year of the student.
//     addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
//     listCourses: Returns a list of the courses student has enrolled in.
//     addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
//     updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
//     viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

let school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else console.log('Invalid year');
  },

  enrollStudent(student, course) {
    this.students.filter(pupil => student === pupil)[0].addCourse(course);
  },

  addGrade(student, courseName, grade) {
    let course = student.listCourses()
                        .filter(course => course.name === courseName)[0];
    course.grade = grade;
  },

  getReportCard(student) {
    student.listCourses()
           .forEach(course => {
             if (course.grade) {
               console.log(`${course.name}: ${course.grade}`);
             } else console.log(`${course.name}: In progress`);
           });
  },

  courseReport(courseName) {
    let gradesToPrint = [];
    let grades = [];
    
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          gradesToPrint.push(`${student.name}: ${course.grade}`);
          grades.push(course.grade);
        }
      });
    });

    if (gradesToPrint.length > 0) {
      let average = grades.reduce((accum, val) => accum + val) / grades.length;
      console.log(`=${courseName} grades=`);
      gradesToPrint.forEach(grade => console.log(grade));
      console.log('---');
      console.log(`Course Average: ${average}`);
    }
  },

  printStudents() {
    console.log(this.students);
  }
}

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          if (course.note) course.note += `; ${note}`;
          else course.note = note;
        }
      });
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = note;
        }
      });
    }
  };

}

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Physics', code: 202, });
school.enrollStudent(foo, { name: 'Math', code: 101});
school.enrollStudent(foo, { name: 'Advanced Math', code: 102});
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, });

school.getReportCard(foo);
school.courseReport('Math');