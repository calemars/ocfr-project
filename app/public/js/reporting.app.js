
var expriedCertApp = new Vue({
  el: '#expriedCertApp',
  data: {
    members: []

  },
  methods: {
    fetchReports() {
      fetch('api/reports.php')
      .then(response => response.json())
      .then(json => { expriedCertApp.members = json })
  }
},
  created() {
    this.fetchReports();
  }
});
