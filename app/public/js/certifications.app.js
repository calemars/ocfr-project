
var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: []

  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  }
},
  created() {
    this.fetchCertifications();
  }
});
