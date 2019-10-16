var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {},
    filter: {
      sab: ''
    }
  },
  methods: {
    fetchPatients() {
      fetch('api/test.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      fetch('api/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPatient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { patientRecordsApp.patients.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });

      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
        memberGuid: '',
        firstName: '',
        lastName: '',
        radioNumber: '',
        isActive: '',
        mobilePhoneNum: '',
        workPhoneNum: '',
        email: '',
        dob: '',
        positionTitle: '',
        stationNumber: '',
        address: ''
      }
    },
    handleRowClick(patient) {
      this.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPatients();
  }
});
