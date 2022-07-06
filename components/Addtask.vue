<template>
        <v-dialog max-width="290">
            <template v-slot:activator="{on}">
                    <v-btn icon v-on="on">
                         <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
            <v-card class="headline teal--text">
                Create New Task ...
            </v-card>
            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="form.title" :rules="rulse.title" label="Title" required />
                    <v-text-field v-model="form.desc" :rules="rulse.desc" label="Description" required />
                </v-form>
            </v-card-text>
            <v-card>
                <v-spacer />
                <v-btn text color="teal" @click="save">Save</v-btn>
            </v-card>
        </v-dialog>
</template>

<script>
export default {
    name:"Addtask",

    data() {
        return {
            form:{
                title:null,
                desc:null
            },

            rulse:{
                title:[
                    v => !!v || "Title is required ...",
                    v => (!!v && v.length >= 3) || "Title moust biger of three character ..."
                ],
                desc:[
                    v => !!v || "Description is required",
                    v => (!!v && v.length <= 40) || "Description moust less of 50 character ..."
                ]   
            }
        }
    },

    methods: {
        save(){
            if (this.$refs.form.validate()) {
                this.$store.dispatch({type:'task/add'}, this.form)
                this.$refs.form.reset();
            }
        }
    },
}
</script>

<style scoped>
</style>