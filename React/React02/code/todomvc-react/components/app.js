(function (React) {
  const todos = [
    {id: 1, title: '写代码', completed: true},
    {id: 2, title: '写代码', completed: false},
    {id: 3, title: '写代码', completed: true}
  ]

	window.App = class extends React.Component {
    constructor () {
      super()
      this.state = {
        todos
      }
    }
		render () {
			return (
				<div>
					<section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                onKeyDown={this.handleNewTodoKeyDown.bind(this)}
                placeholder="What needs to be done?" autoFocus />
            </header>
            {/* This section should be hidden by default and shown when there are todos */}
            {
              this.state.todos.length > 0 && (
                <div>
                  <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                      {/* These are here just to show the structure of the list items */}
                      {/* List items should get the className `editing` when editing and `completed` when marked as completed */}
                      {/*
                        {
                        this.state.todos.map(todo => {
                          return (
                            <li key={todo.id} className="completed">
                              <div className="view">
                                <input className="toggle" type="checkbox" defaultChecked />
                                <label>{todo.title}</label>
                                <button className="destroy"></button>
                              </div>
                              <input className="edit" defaultValue="Create a TodoMVC template" />
                            </li>
                          )
                        })
                      }
                      */}
                     {this.getTodoList()}
                    </ul>
                  </section>
                  {/* This footer should hidden by default and shown when there are todos */}
                  <footer className="footer">
                    {/* This should be `0 items left` by default */}
                    <span className="todo-count"><strong>0</strong> item left</span>
                    {/* Remove this if you don't implement routing */}
                    <ul className="filters">
                      <li>
                        <a className="selected" href="#/">All</a>
                      </li>
                      <li>
                        <a href="#/active">Active</a>
                      </li>
                      <li>
                        <a href="#/completed">Completed</a>
                      </li>
                    </ul>
                    {/* Hidden if no completed items are left ↓ */}
                    <button className="clear-completed">Clear completed</button>
                  </footer>
                </div>
              )
            }
          </section>
          <footer className="info">
            <p>Double-click to edit a todo</p>
            {/* Remove the below line ↓ */}
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            {/* Change this out with your name and url ↓ */}
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          </footer>
				</div>
			)
		}

    getTodoList () {
      return this.state.todos.map(todo => {
        return (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {/* className 就是给字符串，如果想写的像 Vue 一样，则需要使用一个第三方库：classNames */}
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked />
              <label>{todo.title}</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        )
      })
    }

    handleNewTodoKeyDown (event) {
      const {target, keyCode} = event
      if (keyCode !== 13) {
        return
      }

      // 获取文本框内容，判断是否为空
      const inputText = target.value.trim()
      if (!inputText.length) {
        return
      }

      // 获取最后一个 todo
      const lastTodo = this.state.todos[this.state.todos.length - 1]

      // 这里添加的数据不会触发视图更新
      this.state.todos.push({
        id: lastTodo ? lastTodo.id + 1 : 1,
        title: inputText,
        completed: false
      })

      // 通知 React 更新数据
      this.setState({
        todos: this.state.todos
      })

      // 清空文本框
      target.value = ''
    }
	}
})(React)


/*
 * class className
 * 单标签必须结束
 * autofocus autoFocus
 * 注释
 * checked defaultChecked
 * value defaultValue
 * for htmlFor
 */
