import Vuex from 'vuex';
import item from '../data/item.js';


export default()=>{

    return new Vuex.Store({

        state:{
            item,
            task:[]
        },

        mutations:{
            remove(state,item){
                state.item.splice(item ,1);
            },
            adds(state,item){
                state.item.push(item);
            },
            save(state){
                state.task = item;
            }
        },

        actions:{
            removes(context,itemrem){
                context.commit("remove", itemrem);
            },
            addItem(context,itemadd){
                context.commit("adds" , itemadd);
            },
            save(context, itemsave){
                context.commit('save',itemsave);
            }
        },

        getters:{}
        
    });

};