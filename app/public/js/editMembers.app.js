var employeesEditApp = new Vue({
  el: '#employeesEditApp',
  data: {
    employeeData: {}
  },

  methods: {
    handleEdit() {
      fetch('api/members/editMember.php', {
        method:'POST',
        body: JSON.stringify(this.employeeData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      this.handleReset();
    },
    handleDelete() {
      fetch('api/members/deleteMember.php', {
        method:'POST',
        body: JSON.stringify(this.employeeData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
      this.handleReset();
    },
    handleReset() {
      this.employeeData = {
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
        address: '',
        gender: '',
        city: '',
        state: '',
        zip: '',
        dateJoined:''
      }
    }

  }, // end methods
    created() {
      this.handleReset();
    }
});
