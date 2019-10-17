
var reportingApp = new Vue({
  el: '#reportingApp',
  data: {
    reports: []

  },
  methods: {
    fetchReports() {
      fetch('api/reports.php')
      .then(response => response.json())
      .then(json => { reportingApp.reports = json })
  }
},
  created() {
    this.fetchReports();
  }
});
