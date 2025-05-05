<template>
            <tbody id="students-list"></tbody>
</template>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 900px;
    margin: auto;
}
</style>

<script>
        async function fetchStudents() {
            try {
                const response = await fetch('/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // const students = await response.json();
                const students = fakeStudents;
                const list = document.getElementById('students-list');
                list.innerHTML = '';
                students.forEach(student => {
                    list.innerHTML += `
                        <tr>
                            <td>${student.studentId}</td>
                            <td>${student.name}</td>
                            <td>${student.totalMarks}</td>
                            <td>${student.grade}</td>
                            <td>
                                <button class="btn btn-warning" onclick="editStudent('${student._id}')">Edit</button>
                                <button class="btn btn-danger" onclick="deleteStudent('${student._id}')">Delete</button>
                            </td>
                        </tr>`;
                });
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        function editStudent(id) {
            window.location.href = `/front-end/edit.html`;
        }

        async function deleteStudent(id) { // still i didn't an api for it
            try {
                await fetch(`/delete/${id}`, { method: 'DELETE' });
                fetchStudents(); 
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }

        fetchStudents();
</script>