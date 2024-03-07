const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (url === '/students') {
        const databaseFile = process.argv[2];
        if (!databaseFile) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error: Database file not provided\n');
            return;
        }
        
        fs.readFile(databaseFile, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error: Failed to read database file\n');
                return;
            }
            
            const students = data.trim().split('\n').filter(line => line.trim() !== '');
            const totalStudents = students.length;
            const studentsCS = students.filter(student => student.endsWith('CS')).length;
            const studentsSWE = students.filter(student => student.endsWith('SWE')).length;
            const studentsListCS = students.filter(student => student.endsWith('CS')).map(student => student.split(',')[0]);
            const studentsListSWE = students.filter(student => student.endsWith('SWE')).map(student => student.split(',')[0]);

            const response = `This is the list of our students\nNumber of students: ${totalStudents}\nNumber of students in CS: ${studentsCS}. List: ${studentsListCS.join(', ')}\nNumber of students in SWE: ${studentsSWE}. List: ${studentsListSWE.join(', ')}\n`;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

app.listen(1245);

module.exports = app;