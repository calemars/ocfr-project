var employeesCertApp = new Vue({
  el: '#employeesCertApp',
  data: {
    employees:[],
    recordemployees: {}
  },

  methods: {
    fetchemployees(){
      fetch('api/members/getMembers.php')
      .then(response => response.json())
      .then(json => { employeesCertApp.employees = json })
      },
    handleRowClick(employeeData) {
      console.log(employeeData.memberGuid)
      fetch('api/certMember.php', {
      method:'POST',
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => { certificationApp.certifications = json })
    }
}, // end methods
    created() {
      this.fetchemployees();

    }
});
