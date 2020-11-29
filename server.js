
const treeData=require('./tree1')
const treeify1=require('treeify')
const stack=require('./stack')
const queue=require('./queue')


const readline=require('readline')
const rl=readline.createInterface(
    process.stdin,
    process.stdout  
),prefix='GAME> ';

let tree=new treeData()
let s=new stack()
let q=new queue()

game();
function game(){
rl.question('Press Oprtions(1 for stack,2 for Queue and 3 for Tree): ',function (que){
    switch(que.trim()){
        case '1':
            //rl.clearLine(line);
            console.log('ENTER PUSH: For PUSH Operation\nENTER POP:For POP Operation\nENTER DISPLAY:To DEPLAY ALL DATA IN STACK\nENTER PREV1: TO SELECT(STACK,QUEUE,TREE OPTIONS.)')

            rl.on('line',(line)=>{
                
                switch(line.trim().toLowerCase()){
                    case 'push':
                        
                        rl.question('stack push: ',(data)=>{
                            s.push(data)
                            console.log(s,'\nEnter PUSH for push operation,POP for POP operation , DISPALY for display stack and Enter prev1 to go in previous option')
                        })
                       
                        break;
                    case 'pop':
                       console.log('pop element is: ',s.pop())  
                        
                        console.log('Enter PUSH for push operation,POP for POP operation, DISPALY for display stack and Enter prev1 to go in previous option');
                        break;
                    case 'display':
                        s.printStack()
                        console.log('Enter PUSH for push operation,POP for POP operation , DISPALY for display stack and Enter prev1 to go in previous option');
                        break;
                          case 'prev1':
                            game();
                            break;                
                    default:
                        
                        break;
                } 
            })
            
        break;
        case '2':
            console.log('ENTER NQ:For ENQUEUE option\nENTER DQ:For DEQUEUE option\nENTER QD: DEPLAY ALL ITEMS IN QUEUE\nENTER PREV2: TO SELECT(STACK,QUEUE,TREE OPTIONS.)')

            rl.on('line',(Queue)=>{
                switch(Queue.trim().toLowerCase()){
                    case 'nq':
                        
                        rl.question('Queue Enqueue: ',(d)=>{
                            q.enqueue(d)
                            console.log(q,'\nenter nq for enqueue,dq for dequeue, qd for display queue and Enter prev2 to go in previous option')
                        })
                       
                        break;
                    case 'dq':

                        console.log('dequeue element is: ',q.dequeue())
                        
                        console.log('enter nq for enqueue,dq for dequeue,qd for display queue and Enter prev2 to go in previous option');
                        break;
                    case 'qd':
                        q.printQueue()
                        console.log('enter nq for enqueue,dq for dequeue,qd for display queue and Enter prev2 to go in previous option');
                        break;
                        //case 'qp':
                           // console.log('QuePre')
                        //     function queue(){
                        //         rl.question('previous step for Queue:',d=>{
                        //              test(d);
                        //         })
                        //    }
                        case 'prev2':
                            game();
                            break;  
                                           
                    default:
                        
                        break;
                     
                } 
            })
            
        break;
        case '3':

            console.log('WELCOME IN TREE DS.\nENTER NA: to add node\nENTER RN:to remove node\nENTER ND: DEPLAY ALL NODE IN TREE\nENTER PREV3: TO SELECT(STACK,QUEUE,TREE OPTIONS.)')

            rl.on('line',(Trees)=>{
                switch(Trees.trim().toLowerCase()){
                    case 'na':
                        rl.question('NODE INSERT: ',(t)=>{
                            tree.add(t)
                            console.log(treeify1.asTree(tree,true),'\nNOTE: To enter node in left press min value than root and for right node enter max value than root....!!!\nEnter NA for node add,RN for remove node and ND for display Tree and Enter prev3 to go in previous option')
                        })
                    break;    
                    case 'rn':
                        rl.question('ENTER NODE TO REMOVE: ',(r)=>{
                            tree.remove(r)
                            console.log(treeify1.asTree(tree,true),'\nNOTE: To enter node in left press min value than root and for right node enter max value than root....!!!\nEnter NA for node add,RN for remove node, ND for display Tree and Enter prev3 to go in previous option')
                        })
                        break;
                    case 'nd':
                        console.log('Display Tree:\n',treeify1.asTree(tree,true))
                        break;
                        case 'prev3':
                            game();
                            break;  
                                            
                    default:
                        
                        break;
                        
                } 
            })
            
        break;     
        default:
            console.log('please enter no 1 or 2 or 3')
        break;
    }
})
}
rl.setPrompt(prefix,prefix.length);
rl.prompt();

// function getPrevious(){
//     rl.question('WELCOME: To select option press\nSTACK: press: 1 \n QUEUE: press: 2\n TREE: press: 3:\npress value: ',d=>{
//          game();
//     })
// }

rl.on('close',function(){
    console.log("close")
    process.exit(0);
})
console.log('HI, WELOCME TO CONSOLE LINE DATASTRUCTURE GAME! \nNOTE:-,PLEASE FOLLOW THIS RULES TO ENJOY GAME....\nPress: 1 for STACK operation\nPress 2 for QUEUE Operation\nPress 3 for TREE Operation')
rl.setPrompt(prefix,prefix.length);
rl.prompt()

