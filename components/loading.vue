<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="fullPage" :background-color="rgb(17, 23, 99)"></loading>
        
    </div>
</template>
 
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            start () {
      this.isLoading = true
    },
      finish () {
      this.isLoading = false
      },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        }
    }
</script> 