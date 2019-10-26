var certEditApp = new Vue({
  el: '#certEditApp',
  data: {
    certification: {}
  },

  methods: {
    handleEdit() {
      fetch('api/certs/editCert.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      this.handleReset();
    },
    handleDelete() {
      fetch('api/certs/deleteCert.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      this.handleReset();
    },
    handleReset() {
      this.certification = {
        certificationGuid: '',
        certifyingAgency: '',
        certificationName: '',
        expPeriod: ''
      }
    }

  }, // end methods
    created() {
      this.handleReset();
    }
});
