
var memberStationApp = new Vue({
  el: '#memberStationApp',
  data: {
    members: [],
    filter: {
      stationNumber: ''
    }
  },
  methods: {
    fetchReports() {
      fetch('api/membersByStation.php')
      .then(response => response.json())
      .then(json => { memberStationApp.members = json })
  }
},
  created() {
    this.fetchReports();
  }
});
