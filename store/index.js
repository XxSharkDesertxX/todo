import Vuex from 'vuex';
import item from '../data/item.js';


export default()=>{

    return new Vuex.Store({

        state:{
            item
        },

        mutations:{
            remove(state,item){
                state.item.splice(item.id , 1);
            },
            adds(state,item){
                state.item.push(item);
            }
        },

        actions:{
            removes(context,itemrem){
                context.commit("remove", itemrem);
            },
            addItem(context,itemadd){
                context.commit("adds" , itemadd);
            }
        },

        getters:{}
        
    });

};