class NewTeacher {
  constructor(id, name, department, subjects) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.subjects = subjects;

    //get former data
    let teachers = new Teachers();
    let profs = teachers.getAll();
    let instructors = [];
    for (let i = 0; i < profs.length; i++) {
      instructors.push(profs[i]);
    }
    //insert new teacher
    instructors.push({
      id: id,
      name: name,
      department: department,
      subjects: subjects,
    });

    window.localStorage.setItem("teachers", JSON.stringify(instructors));
  }
}

class Teachers {
  getAll() {
    const teachers = window.localStorage.getItem("teachers");
    return JSON.parse(teachers) || [];
  }

  getTeacher(id) {
    let teachers = this.getAll();
    let teacher;
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i].id === id) {
        teacher = teachers[i];
      }
    }
    return teacher;
  }

  deleteAll() {
    window.localStorage.removeItem("teachers");
  }
}
