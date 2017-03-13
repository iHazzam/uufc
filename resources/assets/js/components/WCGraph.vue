<template>
    <div></div>
</template>

<script>
  var Highcharts = require('highcharts/highstock');
    module.exports = {
      name: "WCGraph",
      data: function() {
              return{
               wcdata: [],
               target: undefined,
          }
      },
      watch: {
          '$route' (to, from) {
            axios.get('/api/division/history/' + this.$route.params.wc)
                                              .then((response) => {
                                                console.log(response);
                                                this.wcdata = response.data;
                                                console.log(this.wcdata);
                                                this.target = Highcharts.chart(this.$el, {
                                                        chart: {
                                                                    zoomType: 'xy'
                                                                },
                                                        title: {
                                                          text: this.wcdata.division + ' Ranking History',
                                                          x: -20 //center
                                                        },
                                                        subtitle: {
                                                            text: document.ontouchstart === undefined ?
                                                              'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
                                                          x: -20
                                                        },
                                                        xAxis: {
                                                          type: 'datetime',
                                                        },
                                                        yAxis: {
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
                                                                    states: {
                                                                        hover: {
                                                                          enabled: true,
                                                                          lineWidth: 5,
                                                                        color: '#FF0000'
                                                                      }
                                                                    }
                                                                },
                                                                series: {
                                                                            states: {
                                                                                hover: {
                                                                                    enabled: true,
                                                                                    lineWidth: 5,
                                                                                    color: '#FF0000'
                                                                                }
                                                                            }
                                                                        }
                                                            },

                                                         legend:{
                                                             enabled: false
                                                      }   ,

                                                      tooltip: {
                                                        valuePrefix: 'Rank '
                                                      },
                                                      series: this.wcdata.series
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
      axios.get('/api/division/history/' + this.$route.params.wc)
                                  .then((response) => {
                                                                                  console.log(response);
                                                                                  this.wcdata = response.data;
                                                                                  console.log(this.wcdata);
                                                                                  this.target = Highcharts.chart(this.$el, {
                                                                                          chart: {
                                                                                                                                                              zoomType: 'xy'
                                                                                                                                                          },
                                                                                          title: {
                                                                                            text: this.wcdata.division + ' Ranking History',
                                                                                            x: -20 //center
                                                                                          },
                                                                                          subtitle: {
                                                                                             text: document.ontouchstart === undefined ?
                                                                                                                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
                                                                                            x: -20
                                                                                          },
                                                                                          xAxis: {
                                                                                            type: 'datetime',
                                                                                          },
                                                                                          yAxis: {
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
                                                                                                                                                                      states: {
                                                                                                                                                                          hover: {
                                                                                                                                                                            enabled: true,
                                                                                                                                                                            lineWidth: 5,
                                                                                                                                                                          color: '#FF0000'
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                  },
                                                                                                  series: {
                                                                                                              states: {
                                                                                                                  hover: {
                                                                                                                      enabled: true,
                                                                                                                      lineWidth: 5,
                                                                                                                      color: '#FF0000'
                                                                                                                  }
                                                                                                              }
                                                                                                          }
                                                                                              },
                                                                                              legend:{
                                                                                              enabled: false
                                                                                              },
                                                                                        tooltip: {
                                                                                          valuePrefix: 'Rank '
                                                                                        },
                                                                                        series: this.wcdata.series
                                                                                      });
                                                                                })
                                                                                .catch((error) => {
                                                                                  console.log(error);
                                                                                });    }
  }
</script>
