//write funtion for QUEUE
class Queue{
    constructor(){
        this.queue=[];
    }
    //add element to the queue
    enqueue(item){
        this.queue.unshift(item);
        
    }
    //remove element
    dequeue(){
        if(this.queue.length==0){
            return "Underflow";
        }
        return this.queue.shift();
    }
    //get all data
    printQueue(){
        var str="";
        for(var i=0;i<this.queue.length;i++)
            str+=`${i}: `+this.queue[i]+'\n';
        if(str.length==0)
            console.log('no data available')
        console.log('Queue: \n',str)
        return str
    }
}
//const q=new Queue()

module.exports=Queue