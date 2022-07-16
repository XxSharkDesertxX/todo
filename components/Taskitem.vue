<template>
  <v-list-item v-if="task" inactive >
              <v-list-item-action>
                <v-btn icon :color="color" @click="changeStatus">
                <v-icon>{{icon}}</v-icon>
              </v-btn>  
              </v-list-item-action> 

                <v-list-item-content>
                  <v-list-item-title>
                    {{task.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{task.desc}}
                  </v-list-item-subtitle>
                </v-list-item-content>

              <v-list-item-action>
                <v-btn icon color="error" @click="remove()">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>  
              </v-list-item-action> 
    </v-list-item>
</template>

<script>
import {mapActions } from 'vuex';
import { mapState } from "vuex";
export default {
    name:"Taskitem",

   props:{
    task:{
        type: Object,
        default:null
    }
   },

   computed:{

      ...mapState([
        'item'
      ]),

        icon(){
            return this.task.done ? "mdi-check" : "mdi-reload-alert"
        },
        color(){
            return this.task.done ? "success" : "warning"
        }
   },

   methods: {

    ...mapActions([
      'removes'
    ]),

    remove(){
        this.removes(this.task.id)
        console.log(this.task.id);
    }, 
    changeStatus(){
        return this.task.done = !this.task.done
    }
   },

}
</script>

<style scoped>

</style>