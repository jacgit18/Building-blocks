import React, { useState, useEffect, Component } from "react";
import axios from 'axios'


// CONDITINAL EFFECTS
export class ClassCounterOneLifeCycleHooker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: "",
		};
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("Updating document title");
			document.title = `Clicked ${this.state.count} times`;
		}
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		);
	}
}

// Passing array with count button action creates condition on effect were effect isnt used unless we press the button
export function UseEffectHookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	useEffect(() => {
		console.log("useEffect - Updating document title ");
		document.title = `You clicked ${count} times`;
	}, [count]);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	);
}


export class ClassMouse extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	logMousePosition = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.logMousePosition)
	}

	render() {
		return (
			<div>
				X - {this.state.x} Y - {this.state.y}
			</div>
		)
	}
}


// This hook doesnt depend on any prop or state
export function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
  // when button is pressed component unmounts but event listener is still active
  // which is a problem becuase it is a memory leak
  // when unmouting component you need to cancel the event listener & subscriptions 
  // if this was class you would need to use componentWillUnmount() and implement the logic for cancelation  
  // This is the way you cancel within hooks  
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}



export function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	)
}

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	tick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return <h1>{this.state.count}</h1>
	}
}




export function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	}, [count])
  return (
    <div>
      {count}
    </div>
  )
}

//EEXAMPLE NO RUNNING
// The second param in use effect is like a dependency array meaning what is your effect dependent on like state or props
// IF function is used in useffect and use a vairiable just define it inside useeffect even if function doesnt take any params

// export function IntervalHookCounterAlT() {
//   const [count, setCount] = useState(0)

//   const tick = () => {
//     setCount(count + 1)
//   }


// useEffect(() => {
//   function doSomething() {
//     console.log(someProp)
//   }

//   doSomething()

//    const interval = setInterval(tick, 1000)
//     return () => {
//       clearInterval(interval)
//     }
//   }, [someProp])

//   return <div>{count}</div>


// }


 


// you can have a function with multiple useEffect and pass one as a param in to another almost like an 
// async await with of using async await

//  function FriendStatusWithCounter(props) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });
//   // ..
// }




export function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

