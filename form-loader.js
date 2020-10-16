const formLoader = {


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

        const tags = [
            "INPUT",
            "SELECT"
        ]

        Array.prototype.map.call(node,function(elem){
      
            if(elem instanceof Element &&  tags.indexOf(elem.tagName) >= 0)
            {
                
                inputs.push(elem);
            }
         
            
        });



        return inputs;

    },

  

    getInputData: function (form) {

        let inputs = {}

        const typesData = {

            "radio" : function(obj,elem){

                if(elem.checked)
                     obj[elem.name] =  elem.value ;

            },
            "checkbox": function(obj,elem){

                if(obj[elem.name] == undefined)
                    obj[elem.name] = [];

                if(elem.checked)
                     obj[elem.name].push(elem.value);

            }
            
        }
        
        const nodeInputs = this.getInputsForm(form);

        nodeInputs.forEach((elem) => {

            
            if(typesData[elem.type] !== undefined)
            {
                typesData[elem.type](inputs,elem)
            }
                
            else
            {
                inputs[elem.name] = elem.value;
            }
                
        });



        return inputs;

    }

}