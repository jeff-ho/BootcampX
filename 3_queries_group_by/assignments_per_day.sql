SELECT assignments.day as day, count(assignments.*) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;