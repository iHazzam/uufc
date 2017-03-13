<template>
    <div></div>
</template>

<script>
  var Highcharts = require('highcharts/highstock');
    module.exports = {
      name: "FighterGraph",
      data: function() {
              return{
               fighter: [],
               target: undefined,
          }
      },
      watch: {
          '$route' (to, from) {
            axios.get('/api/fighters/history/' + this.$route.params.fighter)
                                              .then((response) => {
                                                console.log(response);
                                                this.fighter = response.data;
                                                console.log(this.fighter.name);
                                                this.target = Highcharts.chart(this.$el, {

                                                        title: {
                                                          text: this.fighter.name + ' Rankings History',
                                                          x: -20 //center
                                                        },
                                                        subtitle: {
                                                          text: 'Source: UnofficialUFC rankings algorithm',
                                                          x: -20
                                                        },
                                                        xAxis: {
                                                          type: 'datetime',
                                                        },
                                                        yAxis: {
                                                        inverted: true,
                                                        min: 0, max: 100,
                                                          title: {
                                                          text: 'UUFC Ranking'
                                                          }
                                                        },
                                                        plotOptions: {
                                                                line: {
                                                                    dataLabels: {
                                                                        enabled: false
                                                                    },
                                                                }
                                                            },
                                                      tooltip: {
                                                        valuePrefix: 'Rank '
                                                      },
                                                      legend: {
                                                        enabled:true
                                                      },
                                                      series: this.fighter.series
                                                    });
                                              })
                                              .catch((error) => {
                                                console.log(error);
                                              });

          }
      },
      created() {

      },
      mounted : function() {
      axios.get('/api/fighters/history/' + this.$route.params.fighter)
                                  .then((response) => {
                                                                                  console.log(response);
                                                                                  this.fighter = response.data;
                                                                                  console.log(this.fighter.name);
                                                                                  this.target = Highcharts.chart(this.$el, {

                                                                                          title: {
                                                                                            text: this.fighter.name + ' Rankings History',
                                                                                            x: -20 //center
                                                                                          },
                                                                                          subtitle: {
                                                                                            text: 'Source: UnofficialUFC rankings algorithm',
                                                                                            x: -20
                                                                                          },
                                                                                          xAxis: {
                                                                                            type: 'datetime',
                                                                                          },
                                                                                          yAxis: {
                                                                                          inverted: true,
                                                                                          min: 0, max: 100,
                                                                                            title: {
                                                                                            text: 'UUFC Ranking'
                                                                                            }
                                                                                          },
                                                                                          plotOptions: {
                                                                                                  line: {
                                                                                                      dataLabels: {
                                                                                                          enabled: false
                                                                                                      },
                                                                                                  }
                                                                                              },
                                                                                        tooltip: {
                                                                                          valuePrefix: 'Rank '
                                                                                        },
                                                                                        legend: {
                                                                                          enabled:true
                                                                                        },
                                                                                        series: this.fighter.series
                                                                                      });
                                                                                })
                                                                                .catch((error) => {
                                                                                  console.log(error);
                                                                                });

    }
  }
</script>
