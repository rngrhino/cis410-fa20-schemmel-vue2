<template>
    <div>
        <h1>account</h1>
        <hr/>
        <h3>{{firstName}}'s Demo Reviews</h3>

        <p v-if="accountError" class="form-text text-danger">Can't get your account information, please try again</p>
          <table v-if="reviewsByUser" class="table">
            <thead>
                <th>Coach</th>
                <th>Comments</th>
                <th>Results</th>
            </thead>
            <tbody>
                <tr v-for="thisReview in reviewsByUser" :key="thisReview.DemoPK">
                    <th><router-link :to="`/coaches/${thisReview.CoachFK}`">{{thisReview.CoachFK}}</router-link></th>
                    <th>{{thisReview.Comments}}</th>
                    <th>{{thisReview.Results}}</th>
                </tr>
            </tbody>   
        </table>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
        reviewsByUser: null,
        accountError: false
        }
    },
    computed:{
        firstName(){return this.$store.state.user.NameFirst}
    },
    created(){
        axios.get("/player/demos",{
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((response)=>{
            console.log(response)
            this.reviewsByUser = response.data
        })
        .catch(()=>{
            this.accountError = true;
        })
    }
}
</script>

<style scoped>

</style>