var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees:[],
    recordemployees: {}
  },

  methods: {
    fetchemployees(){
      fetch('api/members/getMembers.php')
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
      },
      handleCreate(event){
        fetch('api/members/addMembers.php', {
        method:'POST',
        body: JSON.stringify(this.recordemployees),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { employeesApp.employees.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
     this.fetchemployees();
     this.handleReset();
      },
      handleReset() {
        this.recordemployees = {
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
    handleRowClick(employeeData) {
      employeesEditApp.employeeData = employeeData;
    }
}, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();

    }
});
