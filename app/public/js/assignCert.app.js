var assignCert = new Vue({
  el: '#assignCert',
  data: {
    certifications:[],
    certification: {},
    members:[],
    member:{},
    newCertMember: {
      memberGuid: '',
      certificationGuid: '',
      certExpDate: ''
    },
    selectedCertMember: {
      memberGuid: '',
      certificationGuid: '',
      certExpDate: ''
    },
    currentCerts:[]
  },

  methods: {
    fetchemployees(){
      fetch('api/members/getMembers.php')
      .then(response => response.json())
      .then(json => { assignCert.members = json })
      },
      fetchcerts(){
        fetch('api/certs/getCerts.php')
        .then(response => response.json())
        .then(json => { assignCert.certifications = json })
        },
        fetchCurrentCerts(){
          fetch('api/currentCerts.php')
          .then(response => response.json())
          .then(json => { assignCert.currentCerts = json })
          },
      handleCreate(event){
        fetch('api/assignCert.php', {
        method:'POST',
        body: JSON.stringify(this.newCertMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { assignCert.currentCerts = json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
     this.fetchemployees();
     this.handleReset();
      },
      handleReset() {
        this.selectedCertMember = {
          certificationGuid: '',
          memberGuid: '',
          certExpDate: ''
        },
        this.newCertMember = {
          certificationGuid: '',
          memberGuid: '',
          certExpDate: ''
        }
      },
      handleRowClick(mc) {
        console.log(mc);
        this.selectedCertMember.memberGuid = mc.memberGuid;
        this.selectedCertMember.certificationGuid = mc.certificationGuid;
        this.selectedCertMember.certExpDate = mc.certExpDate;
      },
      handleDelete(event){
        fetch('api/deleteCertMember.php', {
        method:'POST',
        body: JSON.stringify(this.selectedCertMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { assignCert.currentCerts = json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
     this.fetchemployees();
     this.handleReset();
      },
}, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();
      this.fetchCurrentCerts();
      this.fetchcerts();
    }
});
