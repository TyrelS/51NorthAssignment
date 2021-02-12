const planet1 = new Vue({
  el: '#planet1',
  data: {
    planet1: []
  },
  created () {
    fetch("https://swapi.dev/api/planets/1/")
      .then(response => response.json())
      .then(json => { this.planet1 = json })
  }
})

const planet2 = new Vue({
  el: '#planet2',
  data: {
    planet2: []
  },
  created () {
    fetch("https://swapi.dev/api/planets/2/")
      .then(response => response.json())
      .then(json => { this.planet2 = json })
  }
})

const planet3 = new Vue({
  el: '#planet3',
  data: {
    planet3: []
  },
  created () {
    fetch("https://swapi.dev/api/planets/3/")
      .then(response => response.json())
      .then(json => { this.planet3 = json })
  }
})
