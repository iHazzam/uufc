<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <table class="table">
                  <thead>
                    <tr>
                      <th><abbr title="Position">Pos</abbr></th>
                      <th><abbr title="Photo">Photo</abbr></th>
                      <th><abbr title="Name">Name</abbr></th>
                      <th><abbr title="Rank Points">RP</abbr></th>
                      <th><abbr title="Record (3 yrs)">Record (3 yrs)</abbr></th>
                      <th><abbr title="Move">+/-</abbr></th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th><abbr title="Position">Pos</abbr></th>
                      <th><abbr title="Photo">Photo</abbr></th>
                      <th><abbr title="Name">Name</abbr></th>
                      <th><abbr title="Rank Points">RP</abbr></th>
                      <th><abbr title="Record (3 yrs)">Record (3 yrs)</abbr></th>
                      <th><abbr title="Move">+/-</abbr></th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr v-for="fighter in fighters">
                      <td>
                      	  <figure class="image is-64x64">
                                <img :src="'https://placehold.it/160x160/348899/F2EBC7/&text=' + fighter.rank" class="img-circle" alt="Ranking Image">
                          </figure>
                      </td>
                      <td>
                      	<figure class="image maxwidth">
                           <img :src="fighter.pic" alt="Image">
                        </figure>
                      </td>
                      <td>
                      	<span class="name"><a :href="'/#/history/fighter/'+ fighter.id"><strong>{{fighter.name}}</strong> </a></span>
                      </td>
                      <td><strong>{{fighter.rp}}</strong></td>
                      <td><span v-for="f1 in fighter.fights" :class="'result-' + f1">
                                {{f1}}
                          </span>
                      </td>
                      <td>
                        <span class="result-W" v-if="fighter.fights[fighter.fights.length - 1] == 'W' ">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </span>
                        <span class="result-D" v-if="fighter.fights[fighter.fights.length - 1] == 'D' ">
                            <i class="fa fa-arrows-h" aria-hidden="true"></i>
                        </span>
                        <span class="result-L" v-if="fighter.fights[fighter.fights.length - 1] == 'L' ">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
        </div>
</template>

<script>
    module.exports = {
        data: function() {
                return{
                 fighters: []
                }
            },
        watch: {
            '$route' (to, from) {
              axios.get('/api/fighters/' + this.$route.params.wc)
                .then((response) => {
                  console.log(response);
                  this.fighters = response.data;
                })
                .catch((error) => {
                  console.log(error);
                });
            }
        },
        created() {
            axios.get('/api/fighters/' + this.$route.params.wc)
                            .then((response) => {
                              console.log(response);
                              this.fighters = response.data;
                            })
                            .catch((error) => {
                              console.log(error);
                            });
        },


    }
</script>


TODO: work out how to code this! https://vue-hn.now.sh/top (ish)
TODO: write AXIOS request in "watch" function
