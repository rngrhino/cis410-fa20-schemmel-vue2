<template>
  <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create a Review</h4> 
                     <form id="review-form" @submit.prevent="submitReview">
                        <div class="form-group">
                             <label for="commentsinput">Comments</label> 
                             <textarea row="3" id="commentsinput" name="comments" required="required" class="form-control" v-model="comments"></textarea>
                        </div> 
                        <div class="form-group">
                            <label for="resultsinput">Results</label>
                        <textarea row="3" id="summaryinput" name="results" required="required" class="form-control" v-model="results"></textarea>
                        </div> 
                        <div class="form-group">
                             <label for="gameinput">Game: Valorant=1 CSGO=2 OW=3 RL=4 LoL=5</label> 
                             <input type="number" id="gameinput" name=" rating" min="1" max="5" required="required" class="form-control" v-model="game">
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Submit Review</button> 
                        
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>
                       
                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
  
     data(){
        return{
            comments: "",
            results:"",
            game: null,
            errorMessage: null
        }
    },
    computed:{
        userPK(){return this.$store.state.user.PlayerPK}
    },
    methods:{
        submitReview(){
            
            const myReview={
                comments: this.comments,
                results: this.results,
                playerFK: this.userPK,
                coachFK: this.$route.params.pk,
                gameFK: this.game
            
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.token;
            axios.post("/demo", myReview, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create a review, please try again later."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>