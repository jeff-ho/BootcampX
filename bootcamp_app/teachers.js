const { query } = require('express');
const { Pool } = require('pg');
let arg = process.argv[2];
let max = process.argv[3];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query (`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = $1
ORDER BY teacher;`, [arg])
.then(results => {
  results.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`)
  })
})
.catch(error => {
  console.log('Error')
});
