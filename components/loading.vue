<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="fullPage" :background-color='color'></loading>
        
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
                fullPage: true,
                color: '#111763'
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