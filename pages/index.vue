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
import getters from '../store/task'
export default {
  components: { Taskitem },
   data() {
        return {
          tasks:[
                {
                    id:1,
                    title:"Task 1",
                    desc : "Description Task 1",
                    done:false
                }, {
                    id:2,
                    title:"Task 2",
                    desc : "Description Task 2",
                    done:true
                }, {
                    id:3,
                    title:"Task 3",
                    desc : "Description Task 3",
                    done:false
                },
            ]
        }
    },

    computed:{
      getters(){
        this.doneTask 
      },

      doneTask(){
        return this.tasks.filter(task => task.done == true);
      },
      pendingTask(){
        return this.tasks.filter(task => task.done == false);
      },
    }

}
</script>
