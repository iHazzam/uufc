<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">About the UUFC ranking algorithm</div>

                    <div class="panel-body">
                        <p>
                            The algorithm is loosely based on the K-1 kickboxing algorithm, however majorly modified for MMA.
                        </p>
                        <p>
                            Points are gained (or lost) per fight, based on the difference in RP between the winning fighter and the losing fighter.
                            If fighter A is worth 1000 and fighter B is worth 1200, fighter B is "expected" to win. If he does, he gains points based on his opponent's score, with percentage modifiers in place for finishing the fight or being unanimous, and with flat bonuses for title fights and FOTN/POTN awards.
                            <br> if fighter B "upsets" the odds and wins, he will gain more points because his opponent has more points than him. However his opponent, being "expected" to win, will now also <b>lose</b> points based on the difference between his and his opponent's score.
                            <br> Both minimum fight "win" gains and maximum fight "loss" gains are capped to avoid over-punishing flexibility in the rankings - anyone can beat anyone in MMA!
                            <br>
                            Points scored however lose value over time. Rankings, calculated weekly, will see fighter's scores lower over time - meaning frequent fights are desirable. Points values will drop off at yearly intervals - fights in their second year will be worth 2/3 their initial value (positive or negative), 1/3 in the third year before being worth nothing after.
                            <br>
                            Sometimes, fighters can't fight as much as they would like with injuries and cancellations. The rankings reflect this with percent modifers based on the number of fights (Modifiers if a fighter has 4,3,2 or 1 fight in the last 3 years)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
