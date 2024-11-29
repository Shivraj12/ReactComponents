import React from "react";

const students = [
  {
    name: "Rahul",
    marks: {
      maths: 85,
      chemistry: 78,
      physics: 92,
    },
  },
  {
    name: "Akhil",
    marks: {
      maths: 72,
      chemistry: 85,
      physics: 79,
    },
  },
  {
    name: "Raj",
    marks: {
      maths: 90,
      chemistry: 88,
      physics: 82,
    },
  },
  {
    name: "Anand",
    marks: {
      maths: 78,
      chemistry: 80,
      physics: 85,
    },
  },
  {
    name: "Ayush",
    marks: {
      maths: 95,
      chemistry: 92,
      physics: 88,
    },
  },
  {
    name: "Kriti",
    marks: {
      maths: 83,
      chemistry: 75,
      physics: 81,
    },
  },
  {
    name: "Rucha",
    marks: {
      maths: 89,
      chemistry: 86,
      physics: 90,
    },
  },
  {
    name: "Mahesh",
    marks: {
      maths: 75,
      chemistry: 70,
      physics: 65,
    },
  },
  {
    name: "Suresh",
    marks: {
      maths: 68,
      chemistry: 72,
      physics: 74,
    },
  },
  {
    name: "Sukesh",
    marks: {
      maths: 81,
      chemistry: 79,
      physics: 82,
    },
  },
];

const Leaderboard = () => {
  // Calculate total marks and sort students by total marks in descending order
  const sortedStudents = students
    .map((student) => ({
      ...student,
      totalMarks:
        student.marks.maths + student.marks.chemistry + student.marks.physics,
    }))
    .sort((a, b) => b.totalMarks - a.totalMarks);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Leaderboard</h1>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "80%",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Rank
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Total Marks
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={student.name}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                {student.name}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                {student.totalMarks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
