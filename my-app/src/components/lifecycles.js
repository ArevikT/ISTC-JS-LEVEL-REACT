import React,{Component} from 'react';


class Cycle extends Component{
   state={
       value: 0,
   }
   componentDidMount(){
       setInterval(()=>this.setState({value: this.state.value+1}),2000)
   }
   shouldComponentUpdate(nextProps,nextState){
        if(nextState.value!==this.state.value){
       return true
        }
        return false
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
       if(prevState.value !== this.state.value){

           return prevState.value;
       }

       return null;

   }
   componentDidUpdate(prevProps,prevState,snapshot){
       // if(prevState.value!==this.state.value){
       // console.log("Didupdaten e")
       // }

       if(snapshot!== null){
           console.log(snapshot,"snapshot")
       }
   }

   render(){
       return(
<p>
   {this.state.value}
</p>
       )
   }
}
export default Cycle;