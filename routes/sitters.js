 const express = require('express');
const router = express.Router();

const sitters = [
  {
    id: 1,
    name: "עומר לוי",
    city: "תל אביב",
    hourlyRate: 75,
    rating: 4.9,
    experienceYears: 5
  },
  {
    id: 2,
    name: "שירה כהן",
    city: "תל אביב",
    hourlyRate: 70,
    rating: 4.8,
    experienceYears: 4
  },
  {
    id: 3,
    name: "נעמה רז",
    city: "תל אביב",
    hourlyRate: 65,
    rating: 4.7,
    experienceYears: 2
  }
];

router.get('/', (req, res) => {
  res.json(sitters);
});

router.get('/affordable', (req, res) => {
  const affordable = sitters.filter(s => s.hourlyRate <= 70);
  res.json(affordable);
});


module.exports = router;