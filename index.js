import React from 'react'
import ReactDOM from 'react-dom'
import MyContainer from './components/MyContainer.js'
import store from './store.js'

var rootEl=document.getElementById('root');


function render() {
  ReactDOM.render(
    <MyContainer status={store.getState().formstate.status} items={store.getState().itemstate.items}/>,
    rootEl
  )
  
}


render();
store.subscribe(render)

