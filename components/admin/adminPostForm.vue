<template>
            <form v-on:submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.preview">Preview Test</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
                <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="ondelete">Delete Post</AppButton>
            </form>
</template>
<script>
import AppControlInput from '@/components/UI/AppControlInput';
import AppButton from '@/components/UI/AppButton'
export default {
    props:{
        post:{
            type:Object,
            required:false
        }
    },
    components:{
        AppControlInput,
        AppButton
    },

    data: function(){
        return{
            editedPost:this.post ?{...this.post}:{
                author:'',
                title:'',
                thumbnail:'',
                content:'',
                preview:'',
                date: new Date(),
            }
        }
    },
    methods: {
        onSave:function (){
            //save the post
            this.$emit('submit',this.editedPost)
            console.log(this.editedPost)
        },
        ondelete(){
            this.$emit('delete',this.editedPost)
        },
        onCancel(){
            //cancel the post
            this.$router.push('/admin');
        }
    },
}
</script>