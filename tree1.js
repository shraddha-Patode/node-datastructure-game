//const treeify=require('treeify')

function Node(data){
    this.data=data;
    this.left=null;
    this.right=null;
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    add(data){
        const node=new Node(data);

        if(!this.root){
            this.root=node;
        }
        else{
            this.insertNode(node)
        }
    }
    insertNode(node){
        let current=this.root;
        while(current){
            if(node.data<current.data){
                if(!current.left){
                    current.left=node;
                    return this
                    //break;
                }
                current=current.left;
            }
            else if(node.data>current.data){
                if(!current.right){
                    current.right=node;
                    return this
                   // break;
                }
                current=current.right;
            }
            else{
                break;
            }

        }
    }
    remove(data){
        this.root=this.removeNode(this.root,data);
    }
    removeNode(node,data){
        if(!node){
            return null;
        }
        if(data===node.data){
            if(!node.left && !node.right){
                return null;
            }
            if(!node.left){
                return node.right;
            }
            if(!node.right){
                return node.left

            }
            const temp=this.getMin(node.right);
            node.data=temp;

            node.right=this.removeNode(node.right,temp)
            return node;
        }else if(data<node.data){
            node.left=this.removeNode(node.left,data)
            return node;
        }else{
            node.right=this.removeNode(node.right,data)
            return node;
        }
    }

    getMin(node){
        if(!node){
            node=this.root;
        }
        while(node.left){
            node=node.left;
        }
        return node.data;
    }
    preOrder(node,cb){
        if(node){
            if(cb)
            {
                cb(node)
            }
            this.preOrder(node.left,cb)
            this.preOrder(node.right,cb)
        }
    }
    traversDFS(cb,method){
        const current=this.root;
        if(method){
            this[`${method}`](current,cb)
        }else{
            this.preOrder(current,cb);
        }
    }
printDFS(){
    this.traversDFS((node)=>{
        console.log(
            `Node.data ${node.data}`,
            `Node.left ${node.left ? node.left.data:null}`,
            `Node.right ${node.right ? node.right.data:null}`
        )
    })
}

}

module.exports=BinarySearchTree