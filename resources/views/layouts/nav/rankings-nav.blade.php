<nav class="tabs is-boxed">
    <div class="container">
        <ul>
            <router-link v-for="wc in capwcs" tag="li" :to="{path: '/' + wc}" exact><a>@{{wc}}</a></router-link>
        </ul>
    </div>
</nav>