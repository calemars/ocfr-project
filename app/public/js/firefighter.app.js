var firefighterRegisterApp = new Vue({
  el: '#firefighterRegisterApp',
  data: {
    members: [],
    member: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/test.php', {
        method:'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => { firefighterRegisterApp.member = json })

      this.handleReset();
    },
    handleReset() {
      this.member = {
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
    }
  },
  created() {
    this.handleReset();
  }
});
