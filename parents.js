const express = require('express');
const router = express.Router();

const parents = [
  {
    id: 101,
    name: "מעיין מוכתר",
    city: "תל אביב",
    childrenCount: 2,
    childrenAges: [4, 7]
  },
  {
    id: 102,
    name: "דניאל כץ",
    city: "רמת גן",
    childrenCount: 1,
    childrenAges: [3]
  },
  {
    id: 103,
    name: "רונית לוין",
    city: "גבעתיים",
    childrenCount: 2,
    childrenAges: [6, 9]
  }
];

// נתיב 1: החזרת כל ההורים
router.get('/', (req, res) => {
  res.json(parents);
});

// נתיב 2: החזרת הורים לפעוטות (ילדים מתחת לגיל 5)
router.get('/toddlers', (req, res) => {
  const parentsWithToddlers = parents.filter(p => p.childrenAges.some(age => age < 5));
  res.json(parentsWithToddlers);
});

module.exports = router;