const starship1 = new Vue({
  el: '#starship1',
  data: {
    starship1: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/2/")
      .then(response => response.json())
      .then(json => { this.starship1 = json })
  }
})

const starship2 = new Vue({
  el: '#starship2',
  data: {
    starship2: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/3/")
      .then(response => response.json())
      .then(json => { this.starship2 = json })
  }
})

const starship3 = new Vue({
  el: '#starship3',
  data: {
    starship3: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/5/")
      .then(response => response.json())
      .then(json => { this.starship3 = json })
  }
})

const starship4 = new Vue({
  el: '#starship4',
  data: {
    starship4: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/9/")
      .then(response => response.json())
      .then(json => { this.starship4 = json })
  }
})

const starship5 = new Vue({
  el: '#starship5',
  data: {
    starship5: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/10/")
      .then(response => response.json())
      .then(json => { this.starship5 = json })
  }
})

const starship6 = new Vue({
  el: '#starship6',
  data: {
    starship6: []
  },
  created () {
    fetch("https://swapi.dev/api/starships/11/")
      .then(response => response.json())
      .then(json => { this.starship6 = json })
  }
})
