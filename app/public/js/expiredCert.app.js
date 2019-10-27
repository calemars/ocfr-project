
var expiredCertApp = new Vue({
  el: '#expiredCertApp',
  data: {
    certifications: [],
    filter: {
      certificationName: ''
    }
  },
  methods: {
    fetchReports() {
      fetch('api/expiredCerts.php')
      .then(response => response.json())
      .then(json => { expiredCertApp.certifications = json })
  }
},
  created() {
    this.fetchReports();
  }
});
