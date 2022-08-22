SELECT cohorts.name as cohort, COUNT(assignments_submissions.*) as total_submissions
FROM cohorts 
JOIN students on cohort_id = cohorts.id
JOIN assignment_submissions on student_id = students.id
JOIN assignments on assignment_id = assignments.id
GROUP BY cohort
ORDER BY total_submissions DESC;
