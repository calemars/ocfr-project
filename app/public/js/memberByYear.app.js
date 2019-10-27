
var memberYearApp = new Vue({
  el: '#memberYearApp',
  data: {
    members: []
  },
  methods: {
    fetchReports() {
      fetch('api/membersByYear.php')
      .then(response => response.json())
      .then(json => { memberYearApp.members = json })
  }
},
  created() {
    this.fetchReports();
  }
});
