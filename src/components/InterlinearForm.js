import React from 'react'
import moment from 'moment'

export default class InterlinearForm extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         title: props.interlinear ? props.interlinear.title : '',
         createdAt: props.interlinear ? moment(props.interlinear.createdAt) : moment()
      }
      
   }

   onTitleChange = (e) => {
      const title = e.target.value
      if(!title || title.match(/^[A-Za-zА-Яа-я0-9ёЁáéíóúýÁÉÍÓÚÝñÑüÜ -]+$/)) {
         this.setState(() => ({ title }))
      }
      
   }

   onSubmit = (e) => {
      e.preventDefault()
      if (!this.state.title) {
         this.setState(() => ({ error: 'Please provide title' }))
      } else {
         this.setState(() => ({ error: '' }))
         this.props.onSubmit({
            title: this.state.title,
            createdAt: this.state.createdAt.valueOf()
         })
         console.log('submitted')
      }
   }

   render() {
      return (
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
               <input
                  type="text"
                  placeholder="title"
                  autoFocus
                  value={this.state.title}
                  onChange={this.onTitleChange}
               />
               <button>Add text</button>
            </form>
         </div>
      )
   }
}
