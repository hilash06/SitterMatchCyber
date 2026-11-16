const parents = [
  {
    id: 101,
    name: "Maayan Muctar",
    city: "Tel Aviv",
    childrenCount: 2,
    childrenAges: [4, 7]
  },
  {
    id: 102,
    name: "Daniel Katz",
    city: "Ramat Gan",
    childrenCount: 1,
    childrenAges: [3]
  },
  {
    id: 103,
    name: "Roni Levi",
    city: "Givatayim ",
    childrenCount: 2,
    childrenAges: [6, 9]
  }
];

exports.getParents = (req, res) => {
  res.json(parents);
};

exports.getParentsWithToddlers = (req, res) => {
  const parentsWithToddlers = parents.filter(parent =>
    parent.childrenAges.some(age => age < 5)
  );

  res.json(parentsWithToddlers);
};

exports.createParent = (req, res) => {
  res.json(parents);
};

exports.updateParent = (req, res) => {
  res.json(parents);
};

exports.deleteParent = (req, res) => {
  res.json(parents);
};