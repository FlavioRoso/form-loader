const formLoader = {

    state:{
        form: undefined,
        values: undefined,
    },


    submit: function(form,callback){

        

        if( typeof(form) ===  "string" )
        {
            form = document.getElementById(form);
        }

        
        if(form instanceof Element)
        {

            const submitListener = (e) => {

                e.preventDefault();
            
                const values = this.getInputData(e.target);
            
                callback(values);
                
            
            };
            
            form.addEventListener('submit',submitListener);

        }


    },

    getInputsForm: function(form)  {

        const node = form.childNodes;
        let inputs = [];
        Array.prototype.map.call(node,function(elem){
      
            if(elem instanceof Element && elem.tagName === "INPUT")
            {
                
                inputs.push(elem);
            }
         
            
        });



        return inputs;

    },

    getInputData: function (form) {

        let inputs = {}
        
        const nodeInputs = this.getInputsForm(form);

        nodeInputs.forEach((elem) => {
            inputs[elem.name] = elem.value;
        });



        return inputs;

    }

}