// store moust all wasy have for funciton main : state - mutations - actions - geters 

export const state = ()=>({
    // the part data storage is hear

    tasks:[]

});

export const mutations={
    // funcito can chane in state

    init(state){
        state.tasks = JSON.parse(localStorage.getItem(key = '_tasks_')) || [] ;
    },

    save(state){
        localStorage.setItem('_tasks_', JSON.stringify(state.tasks));
    },

    add(state, {title , desc}){
        let id , Flag = true;
        while(Flag){
            id = Math.random() * 10000;
            Flag = !!state.tasks.find(tasks => tasks.id === id );
        }
        state.tasks.push({
            id:id,
            title :title,
            desc : desc,
            done:false
        });
    },
    
    remove(state,id){
        state.tasks  = state.filter(tasks => tasks.id !== id);
    },

    done(state, {id,done:boolean = true}){
        state.tasks = state,tasks.map(tasks => {
            if (tasks.id === id ) {
                tasks.done = done;
                return tasks;
            }
        });
    }
};

export const actions ={
    //functino in all file and folder project can use is

    init(context){
        context.commit('init');
    },
    
    save(context){
        context.commit("save");
    },

    add(context, {title, desc}){
        context.commit("add", {title , desc});
        context.commit('save');
    },

    remove(context , id){
        context.commit("remove", parseInt(id));
        context.commit('save');
    },

    done(context, {id , done:boolean = true}){
        context.commit("done" , {id: parseInt(id) , done :boolean = true});
    }

};

export const getters ={
    // get variable and send

    tasks(state){
        return state.tasks;
    },
    task:(state) => (id) =>{
        return state.tasks.find(tasks => tasks.id = id);
    },
    pendingTask:(state)=>{
        return state.tasks.filter(tasks => tasks.done === false);
    },
    doneTask:(state)=>{
        return state.task.filter(tasks => tasks.done === true);
    }

};