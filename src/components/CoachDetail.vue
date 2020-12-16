<template>
    <div>
        <h1>Coach Details</h1>
          <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{coach.Name}}</h2>
                <br/>
                <p>Experience: <br/> <strong>{{coach.Experience}}</strong></p>
                <p>Reviews: <br/> <strong>{{coach.Reviews}}</strong></p>
                <p>Game: <br/> <strong>{{coach.GameFK}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/coaches/${this.$route.params.pk}/demo`">
            <button type="button" class="btn btn-success">Add a demo review</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Create a Demo Review With This Coach</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    computed:{
        coach(){
            var coaches = this.$store.state.demos 
            var thisCoach = coaches.find((aCoach)=> aCoach.CoachPK == this.$route.params.pk )
            return thisCoach
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>