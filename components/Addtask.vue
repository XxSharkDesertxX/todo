<template>
        <v-dialog max-width="290">
            <template v-slot:activator="{on}">
                    <v-btn icon v-on="on">
                         <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
            <v-card class=" headline tela--text pa-2">
                Create New Task ...
            </v-card>
            <v-card-text class=" info ">
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
import { mapActions } from "vuex";
import { mapState } from "vuex";

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

    computed:{
        ...mapState([
            'item'
        ])
    },

    methods: {
        ...mapActions([
            'addItem'
        ]),



        save(){
           let data ={
            id:this.item.length,
            title:this.form.title,
             desc : this.form.desc,
            done:false
           }
           this.addItem(data);
           this.form.title=null;
           this.form.desc=null
        }
    },
}
</script>

<style scoped>
</style>