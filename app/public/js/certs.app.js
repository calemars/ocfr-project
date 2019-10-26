var registerCert = new Vue({
  el: '#registerCert',
  data: {
    certifications:[],
    certification: {}
  },

  methods: {
    fetchemployees(){
      fetch('api/certs/getCerts.php')
      .then(response => response.json())
      .then(json => { registerCert.certifications = json })
      },
      handleCreate(event){
        fetch('api/certs/addCerts.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { registerCert.certifications.push( certification ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
     this.fetchemployees();
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
      handleRowClick(certification) {
        certEditApp.certification = certification;
      }
}, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();

    }
});
