function skillsMember() {
  // Skills
  var skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Django', level: 60 },
    { name: 'PHP', level: 55 },
    { name: 'WordPress', level: 50 },
    { name: 'MySQL', level: 45 },
    { name: 'C#', level: 40 },
    { name: 'Java', level: 35 },
    { name: 'Swift', level: 30 },
    { name: 'Ruby', level: 25 },
    { name: 'C++', level: 20 },
    { name: 'C', level: 15 },
    { name: 'Rust', level: 10 },
    { name: 'Go', level: 5 }
  ];

  // Output
  for (var i = 0; i < skills.length; i++) {
    console.log(skills[i].name + ' - ' + skills[i].level + '%');
  }
}