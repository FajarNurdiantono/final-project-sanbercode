import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getGrade(score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'E';
  }
}

function DataSiswa() {
  const [studentScores, setStudentScores] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    course: '',
    score: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudentScores();
  }, []);

  const fetchStudentScores = () => {
    axios
      .get('https://backendexample.sanbercloud.com/api/student-scores')
      .then((res) => setStudentScores(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then(() => {
        fetchStudentScores();
      })
      .catch((err) => console.error('Error deleting data:', err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    axios
      .post('https://backendexample.sanbercloud.com/api/student-scores', newStudent)
      .then(() => {
        fetchStudentScores();
        setNewStudent({ name: '', course: '', score: '' });
      })
      .catch((err) => console.error('Error adding data:', err));
  };

  const handleEdit = (id) => {
    axios
      .get(`https://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then((res) => {
        setEditMode(true);
        setEditingId(id);
        setNewStudent({
          name: res.data.name,
          course: res.data.course,
          score: res.data.score,
        });
      })
      .catch((err) => console.error('Error fetching data for editing:', err));
  };

  const handleUpdateStudent = () => {
    axios
      .put(`https://backendexample.sanbercloud.com/api/student-scores/${editingId}`, newStudent)
      .then(() => {
        setEditMode(false);
        fetchStudentScores();
        setNewStudent({ name: '', course: '', score: '' });
      })
      .catch((err) => console.error('Error updating data:', err));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-[90vw] max-w-screen-md h-full bg-white rounded-lg shadow-md p-8 my-14">
        <table className="w-full mb-6">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-2 px-4">NO</th>
              <th className="py-2 px-4">NAMA</th>
              <th className="py-2 px-4">MATA KULIAH</th>
              <th className="py-2 px-4">NILAI</th>
              <th className="py-2 px-4">INDEX NILAI</th>
              <th className="py-2 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center divide-y divide-gray-200">
            {studentScores.map((student, index) => (
              <tr key={index}>
                <td className="py-2 px-4 font-semibold">{index + 1}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.course}</td>
                <td className="py-2 px-4">{student.score}</td>
                <td className="py-2 px-4">{getGrade(student.score)}</td>
                <td className="py-2 px-4 space-x-2 flex">
                  <button onClick={() => handleEdit(student.id)} className="bg-yellow-400 text-white py-1 px-2 rounded hover:bg-yellow-800 ">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="bg-red-700 text-white py-1 px-2 rounded hover:bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{editMode ? 'Edit Data Siswa' : 'Tambah Data Siswa'}</h2>
          <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} className="mb-2 px-2 py-1 border rounded w-full" placeholder="Nama" />
          <input type="text" name="course" value={newStudent.course} onChange={handleInputChange} className="mb-2 px-2 py-1 border rounded w-full" placeholder="Mata Kuliah" />
          <input type="text" name="score" value={newStudent.score} onChange={handleInputChange} className="mb-2 px-2 py-1 border rounded w-full" placeholder="Nilai" />
          {editMode ? (
            <div className="flex">
              <button onClick={handleUpdateStudent} className="px-4 py-2 bg-green-500 text-white rounded">
                Update
              </button>
              <button onClick={() => setEditMode(false)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
                Cancel
              </button>
            </div>
          ) : (
            <button onClick={handleAddStudent} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataSiswa;
