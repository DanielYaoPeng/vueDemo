<template>
    <div>
    {{msg}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"shuju"
        }
        
    },
    mounted(){
        console.log(this.$route.params);
       
    }
}
</script>