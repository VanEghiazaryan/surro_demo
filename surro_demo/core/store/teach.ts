import { defineStore } from 'pinia';

export const useMySchool = defineStore('mySchool', {
    state: () => ({
        school: ref<School>(new School()),
        currentClass: ref<ClassRoom>(new ClassRoom(0 , 'o'))
    }),

    actions: {
        loadFromStorage() {
            const savedDataSchool = localStorage.getItem('school');
            const saveCurrentClass = localStorage.getItem('currentClass')
            if (savedDataSchool) {
                const parsedDataSchool = JSON.parse(savedDataSchool);
                this.school.parseToSchool(parsedDataSchool);
                if (saveCurrentClass) {
                    const parsedDataCurrent = JSON.parse(saveCurrentClass);
                    this.currentClass.parseObjectToClassRoom(parsedDataCurrent);
                }
                console.log('load Storage School ', this.school);
            }
        },
 
        addNewClass(clasNumber: number, classType: string) {
            this.school.addClassRoom(new ClassRoom(clasNumber, classType))
            this.afterMutation()
        },

        addNewTeacher(teacher: Teacher) {
            this.school.teacherRoom.addTeacher(teacher);
            this.afterMutation();
        }, 

        afterMutation() {
            localStorage.setItem('school', JSON.stringify(this.school));
            console.log('this is afterMount function ', this.school);
        },

        addCurrent(currentClass:ClassRoom, callback:any=()=>{}){
            callback();
            this.currentClass = currentClass;
            localStorage.setItem('currentClass', JSON.stringify(this.currentClass));
        }
    }
});


export abstract class Person {
    name: string;
    surname: string;
    constructor(name: string, surname: string) {
        this.name = name,
            this.surname = surname
    }
}

export class Teacher extends Person {
    skill: TeacherSkills
    constructor(name: string, surname: string, skill: TeacherSkills) {
        super(name, surname),
            this.skill = skill
    }

    teaching() {
        alert("Hello. My name is " + this.name + ". I am " + this.skill + " teacher");
    }

    parseToTeacher(objectTeacher: any) {
        if (objectTeacher.name && objectTeacher.surname && objectTeacher.skill) {
            this.name = objectTeacher.name;
            this.surname = objectTeacher.surname;
            this.skill = objectTeacher.skill;
        }
    }
}

abstract class Student extends Person {
    grade: StudentGrade;
    classNumber: number;
    classCategory: string
    constructor(name: string, surname: string, grade: StudentGrade, classNumber: number, classCategory: string) {
        super(name, surname),
            this.grade = grade;
        this.classNumber = classNumber;
        this.classCategory = classCategory
    }
    abstract answerToClass(skill?: string): void

    goToaClass(classRoom: ClassRoom) {
        classRoom.students?.push(this);
    }
    abstract goToaBreak(school: School, student: Student): void


    printStudent() {
        console.log('Student name and surname', this.name, this.surname);
    }

    parseToStudent(objectStudent: any) {
        if (objectStudent.name && objectStudent.surname && objectStudent.grade && objectStudent.classNumber && objectStudent.classCategory) {
            this.name = objectStudent.name;
            this.surname = objectStudent.surname;
            this.classNumber = objectStudent.classNumber;
            this.classCategory = objectStudent.classCategory;
        }
    }
}

export class BadStudent extends Student {
    constructor(name: string, surname: string, grade: StudentGrade, classNumber: number, classCategory: string) {
        super(name, surname, grade, classNumber, classCategory)
    }

    override answerToClass(skill?: string): void {
        alert("My name is " + this.name + ". I did not learn to lesson  becouse i could not learn " + skill + " lesson");
    }

    override goToaBreak(school: School, student: Student): void {
        school.addcorridor(student)
    }
}

export class MiddleStudent extends Student {
    constructor(name: string, surname: string, grade: StudentGrade, classNumber: number, classCategory: string) {
        super(name, surname, grade, classNumber, classCategory)
    }
    override answerToClass(skill?: string): void {
        alert("My name is " + this.name + ". I learned my lesson badly becouse i dont love " + skill + " lesson");
    }



    override goToaBreak(school: School, student: Student): void {
        school.corridor.push(student)
    }
}

export class WellStudent extends Student {
    constructor(name: string, surname: string, grade: StudentGrade, classNumber: number, classCategory: string) {
        super(name, surname, grade, classNumber, classCategory)
    }
    override answerToClass(skill?: string): void {
        alert("My name is " + this.name + ". I learned my lesson well becouse i dont love " + skill + " lesson");
    }


    override goToaBreak(school: School, student: Student): void {
        school.corridor.push(student)
    }
}

export class ExcellentStudent extends Student {
    constructor(name: string, surname: string, grade: StudentGrade, classNumber: number, classCategory: string) {
        super(name, surname, grade, classNumber, classCategory)
    }
    override answerToClass(skill?: string): void {
        alert("My name is " + this.name + ". I learned my lesson the Best becouse i dont love " + skill + " lesson");
    }

    override goToaClass(classRoom: ClassRoom): void {
        classRoom.students?.push(this)
    }

    override goToaBreak(school: School, student: Student): void {
        school.corridor.push(student)
    }
}

export class ClassRoom {
    students?: Array<Student>;
    teacher?: Teacher;
    numbers: number
    classType: string
    constructor(numbers: number, classType: string) {
        this.numbers = numbers,
            this.classType = classType
    }

    addStudent(student: Student) {
        if (this.students) {
            this.students.push(student);
        } else {
            this.students = [student]
        }

    }

    parseObjectToClassRoom(objectClassRoom: any) {
        if (objectClassRoom.students) {

            this.students = objectClassRoom.students
        }
        if (objectClassRoom.teacher) {

            this.teacher = objectClassRoom.teacher
        }
        if (objectClassRoom.numbers) {

            this.numbers = objectClassRoom.numbers
        }
        if (objectClassRoom.classType) {
            this.classType = objectClassRoom.classType
        }
    }

    addTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }
}

export class TeacherRoom {
    teachers: Array<Teacher>
    constructor() {
        this.teachers = [];
    }

    addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    parseToTeacher(teacherObj: any) {
        if (teacherObj.teachers) {
            for (let index = 0; index < teacherObj.teachers.length; index++) {
                const element = teacherObj.teachers[index];
                const teacehr: Teacher = new Teacher('', '', TeacherSkills.algebra)
                teacehr.parseToTeacher(element);
                this.teachers.push(element);
            }
        }
    }
}

export class School {
    classRoom: Array<ClassRoom>
    teacherRoom: TeacherRoom
    corridor: Array<Student>
    stateRing?: number
    constructor() {
        this.classRoom = []
        this.teacherRoom = new TeacherRoom();
        this.corridor = []
    }
    parseToSchool(schoolObject: any) {
        if (schoolObject.classRoom) {
            for (let i = 0; i < schoolObject.classRoom.length; i++) {
                let classRoom: ClassRoom = new ClassRoom(1, 'a');
                classRoom.parseObjectToClassRoom(schoolObject.classRoom[i]);
                this.classRoom.push(classRoom);
            }
        }
        if (schoolObject.corridor) {

            for (let index = 0; index < schoolObject.corridor.length; index++) {
                const element = schoolObject.corridor[index];
                if (element.grade == StudentGrade.bad) {
                    let student: Student = new BadStudent('', '', StudentGrade.bad, 1, '');
                    student.parseToStudent(element);
                    this.corridor.push(student);
                }
                if (element.grade == StudentGrade.middle) {
                    let student: Student = new MiddleStudent('', '', StudentGrade.middle, 1, '');
                    student.parseToStudent(element);
                    this.corridor.push(student);
                }
                if (element.grade == StudentGrade.well) {
                    let student: Student = new WellStudent('', '', StudentGrade.well, 1, '');
                    student.parseToStudent(element);
                    this.corridor.push(student);
                }
                if (element.grade == StudentGrade.excellent) {
                    let student: Student = new ExcellentStudent('', '', StudentGrade.excellent, 1, '');
                    student.parseToStudent(element);
                    this.corridor.push(student);
                }
            }
        }
        if (schoolObject.teacherRoom) {
            let teacherRoom: TeacherRoom = new TeacherRoom();
            teacherRoom.parseToTeacher(schoolObject.teacherRoom);
            this.teacherRoom = teacherRoom;
        }
        if (schoolObject.stateRing) {
            this.stateRing = schoolObject.stateRing;
        }
    }
    addClassRoom(newClass: ClassRoom) {
        this.classRoom.push(newClass)
    }
    addcorridor(allStudents: Student) {
        this.corridor.push(allStudents)
    }

    printSchool() {
        console.log('This School ', this);
    }
}

export enum StudentGrade {
    bad = "bad",
    middle = "middle",
    well = "well",
    excellent = "excellent"
}

export enum TeacherSkills {
    history = "history",
    algebra = "algebra",
    geometry = "geometry",
    geography = "geography",
    literature = "literature",
    physical = "physical",
    physics = "physics"
}
