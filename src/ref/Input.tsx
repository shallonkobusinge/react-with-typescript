import React, { useRef } from "react"
const Input: React.FC = () => {

    const userList = [
        { name: "Sharon", age: 12 },
        { name: "Allen", age: 13 }
    ]

    const InputRef = useRef<HTMLInputElement | null>(null);
    const [user, setUser] = React.useState<{ name: string; age: number } | undefined>()
    const [name, setName] = React.useState('')

    const onClick = () => {
        const foundUser = userList.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }
    React.useEffect(() => {
        if (!InputRef.current) {
            return;
        }
        InputRef.current.focus
    }, [])

    return (
        <>
            <input ref={InputRef} name="user" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search</button>

            {user ?
                <>
                    <h2>{` Name   ${user?.name}`}</h2>
                    <p>{`Age ${user?.age}`}</p>
                </>
                :
                []}
        </>
    )
}

export default Input