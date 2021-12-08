import React, { useRef } from "react"
const Input: React.FC = () => {

    const userList = [
        { name: "Sharon", age: 12 },
        { name: "Allen", age: 13 }
    ]

    const InputRef = useRef<HTMLInputElement | null>(null);
    const [user, setUser] = React.useState<{ name: string; age: number } | undefined>()
    const [name, setName] = React.useState('')

    const Onclick = () => {
        const foundUser = userList.find((user) => {
            return user.name ===
        })
    }

    return (
        <>
            <input ref={InputRef} name="user" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button>Search</button>
        </>
    )
}

export default Input