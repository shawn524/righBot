var righ = [
"https://i.imgur.com/6pihyeL.jpg",
"https://i.imgur.com/cQAjJK0.jpg",
"https://i.imgur.com/rhIJTNH.jpg",
"https://i.imgur.com/zL3yGXl.jpg"
]

module.exports = function() {
  return righ[Math.floor(Math.random() * righ.length)]
}

module.exports.righ = righ