
var app = new Vue({
  el: '#root-div',
  data: {
    response: '',
    request: 'https://api.coindesk.com/v1/bpi/currentprice.json'
  },
  mounted() {
    axios
      .get(this.request)
      .then(response => (this.response = response))
      .catch(error => console.log(error))
  }
})
