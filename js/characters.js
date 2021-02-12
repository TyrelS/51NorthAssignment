const character1 = new Vue({
  el: '#character1',
  data: {
    character1: []
  },
  created () {
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(json => { this.character1 = json })
  }
})

const character2 = new Vue({
  el: '#character2',
  data: {
    character2: []
  },
  created () {
    fetch("https://swapi.dev/api/people/5")
      .then(response => response.json())
      .then(json => { this.character2 = json })
  }
})

const character3 = new Vue({
  el: '#character3',
  data: {
    character3: []
  },
  created () {
    fetch("https://swapi.dev/api/people/14")
      .then(response => response.json())
      .then(json => { this.character3 = json })
  }
})

const character4 = new Vue({
  el: '#character4',
  data: {
    character4: []
  },
  created () {
    fetch("https://swapi.dev/api/people/4")
      .then(response => response.json())
      .then(json => { this.character4 = json })
  }
})
