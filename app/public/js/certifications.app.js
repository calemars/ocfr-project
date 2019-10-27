var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    selectedCert: {},
    employees:[]
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  },
  handleRowClick(cert) {
    console.log(cert.certificationGuid)
    employeesApp.employees = [];
    fetch('api/membersCert.php', {
    method:'POST',
    body: JSON.stringify(cert),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then( response => response.json() )
    .then( json => { employeesApp.employees = json })
    this.handleReset();
  },
  handleReset() {
    this.certification = {
      certificationGuid: '',
      certifyingAgency: '',
      certificationName: '',
      expPeriod: ''
    }
  },
  // fetchemployees(){
  //   fetch('api/members/getMembers.php')
  //   .then(response => response.json())
  //   .then(json => { certificationApp.employees = json })
  //   }
},
  created() {
    this.fetchCertifications();
    //this.fetchemployees();
  }
});
