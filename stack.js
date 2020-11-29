class Stack{
    constructor(){
        this.stack=[];
    }
    
    //push
    push(element){
        console.log('Enter no to push in stack..')
        this.stack.push(element)
    }
    //pop function
    pop(){
        if(this.stack.length===0)
            console.log("Underflow") 
        //console.log(this.stack.pop()+' poped')
        return this.stack.pop();
        
    }
    printStack(){
        var sb="";
        for(var item=0;item<this.stack.length;item++)
            sb+=`${item}: `+this.stack[item]+'\n';
        if(sb.length==0)
            console.log('no data available')
        console.log('STACK: ',sb)
        return sb
    }
    
}
//const s=new Stack()

module.exports=Stack