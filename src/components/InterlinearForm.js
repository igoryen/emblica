import React from 'react'
import moment from 'moment'

export default class InterlinearForm extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         mainlang: props.interlinear ? props.interlinear.mainlang : '',
         title: props.interlinear ? props.interlinear.title : '',
         lines: props.interlinear ? props.interlinear.lines : '',
         createdAt: props.interlinear ? moment(props.interlinear.createdAt) : moment()
      }
   }


   onMainLangChange = (e) => {
      const mainlang = e.target.value
      if(!mainlang || mainlang.match(/^[a-z]+$/)) {
         this.setState(() => ({ mainlang }))
      }
   }

   onTitleChange = (e) => {
      const title = e.target.value
      if(!title || title.match(/^[A-Za-zА-Яа-я0-9ёЁáéíóúýÁÉÍÓÚÝñÑüÜ -]+$/)) {
         this.setState(() => ({ title }))
      }
   }

   onChange = (event) => {
      const file = event.target.files[0]
      const blob = new Blob([file], {type:"application/json" })
      const reader = new FileReader()
      reader.addEventListener("load", (e) => {
         // console.log("---->", e.target.result, JSON.parse(reader.result))
         this.setState({lines: JSON.parse(reader.result)})
      })
      reader.readAsText(blob)
   }

   onSubmit = (e) => {
      e.preventDefault()
      if (!this.state.title) {
         this.setState(() => ({ error: 'Please provide title' }))
      } else {
         this.setState(() => ({ error: '' }))
         this.props.onSubmit({
            mainlang: this.state.mainlang,
            title: this.state.title,
            lines: this.state.lines,
            createdAt: this.state.createdAt.valueOf()
         })
      }
   }

   render() {
      return (
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
               <input
                  type="text"
                  placeholder="mainlang"
                  autoFocus
                  value={this.state.mainlang}
                  onChange={this.onMainLangChange}
               />
               <input
                  type="text"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.onTitleChange}
               />
               <input
                  type="file"
                  name="file"
                  accept=".json"
                  onChange={this.onChange}
               />
               <button>Add text</button>
            </form>
         </div>
      )
   }
}
