import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false,
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false,
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true,
    },
  ]);

  const toggleStudentPresence = (studentId) => {
    // calculate the updated student data by finding the student that matches
    // the passed id, making a copy with object spreading, then overwriting
    // the presence value with its inverse
    const students = studentData.map(student => {
      if (student.id === studentId) {
        // this was the toggled student, so make a new record with the updated
        // presence value
        return { ...student, isPresentData: !student.isPresentData };
      } else {
        // this was not the student who was toggled, so we can use the existing
        // data in the new student array
        return student;
      }
    });

    // uses value-passing style to update the student data, but could be
    // refactored to use function-passing style
    setStudentData(students);
  };

  // function to delete all student data
  const deleteStudents = () => {
    setStudentData([]);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      {/*
        Delete button with anonymous event handler. The event details aren't
        needed, so no parameter is declared. deleteStudents itself /could/ be
        set directly as the event handler, since it makes no use of inputs,
        but it was kept separate to keep the idea of responding to the click
        event, and deleting the student data as two distinct concerns.
      */}
      <button onClick={() => deleteStudents()}>Delete All Students!</button>
      <StudentList
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
    </main>
  );
}

export default App;
