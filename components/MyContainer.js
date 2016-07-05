/**
 * Created by zp on 16-6-28.
 */
import FormEditor from './FormEditor.js'
import FormPreview from './FormPreview.js'
import React,{ Component } from "react"
import * as containerAPI from '../hander/container-api.js'
import {showPreview} from '../hander/container-api.js'
import * as types from '../actions/action-types.js'
import  store from '../store.js'

class MyContainer extends Component{


  constructor(props){
    super(props);

  }


  toPreview(){
    document.getElementById('alertBox').innerHTML='';
    containerAPI.showPreview()
  }

  toEdit(){

    containerAPI.showEdit()
  }

  render(){
    var self=this;
    return(
      <div>{(() =>{
        if(self.props.status==='edit'){
          return <button onClick={this.toPreview}>to preview</button>
        }else {return <button onClick={this.toEdit}>to edit</button>}
      })()}
      {(() =>{
        if(self.props.status==='edit'){
          return <FormEditor items={this.props.items} />
        }
        else{
          return <FormPreview items={this.props.items} />
        }
      })()

      }</div>
    )
  }
}


export default MyContainer

