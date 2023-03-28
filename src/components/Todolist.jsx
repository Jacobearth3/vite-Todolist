import { React, useState } from 'react'

function Todolist() {
    const [text, settext] = useState("")
    const [list, setList] = useState([])
    const [done, setDone] = useState([])

    const todoCreate = () => {
        if (text === "") return null;
        setList([text, ...list])
        settext("")
    }

    const todoListDelete = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList([...newList])
    }

    const todoDoneDelete = (index) => {
        let newDone = [...done]
        newDone.splice(index, 1)
        setDone([...newDone])
    }


    const todoDone = (index) => {
        let newList = [...list];
        let newDone = newList.splice(index, 1);
        setDone([...newDone, ...done]);
        setList([...newList])
    }

    const todoBack = (index) => {
        let backList = [...done];
        let backText = backList.splice(index, 1)
        setDone([...backList])
        setList([...backText, ...list])
    }



    return (
        <div className='main-container'>
            <h1 className='header'>
                Let's Todo-List &nbsp;
                <img src="https://em-content.zobj.net/thumbs/120/apple/325/memo_1f4dd.png" alt="todolist" className='image' />
            </h1>
            <div className="sub-container">
                <div className='Todolist-content'>
                    <div className="input-container">
                        <input
                            type="text"
                            value={text}
                            placeholder="you can write todo here :D"
                            onChange={(e) => settext(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    todoCreate();
                                }
                            }} />
                    </div>
                    <button onClick={todoCreate} className="button-input">Add</button>
                </div>
                <ul className='list-container' style={{ listStyle: 'none' }}>
                    {list.map((text, index) => (
                        <div key={index}>
                            <li>{text}&nbsp;&nbsp;&nbsp;
                                <span style={{ fontWeight: "bold", cursor: "pointer"}} onClick={() => { todoDone(index) }}>
                                ✓  
                                </span>
                                <span>&nbsp;&nbsp;</span>
                                <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => { todoListDelete(index) }}>
                                🗑️
                                </span>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className='doneheader'><h2>Done Todo-List</h2></div>
                <ul className='donelist-container' style={{listStyle: "none"}}>
                    {done.map((text, index) => (
                        <div key={index}>
                            <li>{text}&nbsp;&nbsp;&nbsp;
                                <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => { todoBack(index) }}>
                                    <img src="https://em-content.zobj.net/thumbs/120/noto-emoji/343/repeat-button_1f501.jpg" alt="back" className='backicon' />
                                </span>
                                <span>&nbsp;&nbsp;</span>
                                <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => { todoDoneDelete(index) }}>
                                🗑️
                                </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todolist