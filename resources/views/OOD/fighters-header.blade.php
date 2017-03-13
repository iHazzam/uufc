<section class="hero is-primary is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
        <header class="nav">
            <div class="container">
                <div class="nav-left">
                    <a class="nav-item">
                        <img src="https://s16.postimg.org/l2845e0kl/Logomakr_3_Bj_HNZ.png">
                    </a>
                </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

                @include('layouts.rightnav')
            </div>
        </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title">
                UFC Fighter history and stats
            </h1>
            <h2 class="subtitle">
                Find out ranking history, stats and records!
            </h2>
        </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        @include('OOD.fighters-nav')
    </div>
</section>