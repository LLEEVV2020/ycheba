

var app = new Vue({
  el: '#app',
  data: {
    people: [
      'cnid',
      'klop',
      'pityh'
    ], 
    peopleOb: [
      {name: 'cnidOb', age: 22},
      {name: 'klopOb', age: 34},
      {name: 'pityhOb', age: 42}
    ],
    person: {
      name: 'Max',
      age: 50,
      job: "frontent"
    } 
  },
  computed: { },
  methods: { }
});