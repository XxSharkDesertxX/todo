<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="475" class="mx-auto">   
        <v-toolbar color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-text-box-check</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>
            To Do List 
          </v-toolbar-title>
          <v-spacer />
          <Addtask/>
        </v-toolbar>

        <v-list>

          <v-subheader>In Progress task</v-subheader>
          <v-list-item-group>
            <Taskitem :task="task" v-for="(task,i) in pendingTask" :key="i"/>
          </v-list-item-group>

        <v-subheader>Done task</v-subheader>
          <v-list-item-group>
            <Taskitem :task="task" v-for="(task,i) in doneTask" :key="i" />
          </v-list-item-group>

        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Taskitem from '../components/Taskitem.vue'

import {mapState} from 'vuex'
export default {
  components: { Taskitem },
   data() {
        return {
          tasks:this.item
        }
    },

    computed:{
        ...mapState([
          'item'
      ]),

      doneTask(){
        console.log(this.data);
        return this.item.filter(task => task.done == true);
      },
      pendingTask(){
        return this.item.filter(task => task.done == false);
      },
    },

     



}
</script>
