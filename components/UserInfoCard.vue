<template>
    <a-card>
        <a-card-meta 
        :title="user" 
        description="simple.note" />
    </a-card>
</template>

<script>
export default {
    props: {
        user:{
            type: String,
            default: {
                user: ''
            }
        }
    }
}
</script>