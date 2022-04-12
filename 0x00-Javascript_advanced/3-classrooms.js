const createClassRoom = (numbersOfStudents) => {
  const studentSeat = (seat) => {
    return () => {
      return seat;
    };
  };

  const students = [];
  for (let num = 0; num < numbersOfStudents; num++) {
    students.push(studentSeat(num + 1));
  }
  return students;
};

const classRoom = createClassRoom(10);
