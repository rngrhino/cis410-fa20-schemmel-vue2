<template>
    <div>
        <h1>Coaches</h1>
       
        <table>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Reviews</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisCoach in demos" :key="thisCoach.PK">
                    <th>{{thisCoach.Name}}</th>
                    <td>{{thisCoach.Experience}}</td>
                    <td>{{thisCoach.Reviews}}</td>
                    <td>
                        <router-link :to="`/coaches/${thisCoach.CoachPK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
export default {
    computed:{
        demos(){return this.$store.state.demos}
    }
    
}
</script>

<style scoped>

</style>