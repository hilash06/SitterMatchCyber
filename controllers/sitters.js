const sitters = [
  {
    id: 1,
    name: "Omer levi",
    city: "Tel Aviv",
    hourlyRate: 75,
    rating: 4.9,
    experienceYears: 5
  },
  {
    id: 2,
    name: "Shira Cohen",
    city: "Hadera",
    hourlyRate: 70,
    rating: 4.8,
    experienceYears: 4
  },
  {
    id: 3,
    name: "Nehama Raz",
    city: "Kfar Saba",
    hourlyRate: 65,
    rating: 4.7,
    experienceYears: 2
  }
];


exports.getSitters = (req, res) => {
  res.json(sitters);
};

exports.getAffordableSitters = (req, res) => {
  const affordable = sitters.filter(sitter => sitter.hourlyRate <= 70);
  res.json(affordable);
};

exports.createSitter = (req, res) => {
  res.json(sitters);
};

exports.updateSitter = (req, res) => {
  res.json(sitters);
};

exports.deleteSitter = (req, res) => {
  res.json(sitters);
};
