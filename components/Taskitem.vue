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
                <v-btn icon color="error" @click="remove(task.id)">
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
      'removes',
      'save'
    ]),

    remove(data){
        this.removes(data)
        console.log(this.task.id);
    }, 
    changeStatus(){
        return this.task.done = !this.task.done
    }
   },

   mounted() {
      this.save();
   },

}
</script>

<style scoped>

</style>