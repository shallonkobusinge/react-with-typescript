import React, { useRef } from "react"
const Input: React.FC = () => {

    const userList = [
        { name: "Sharon", age: 12 },
        { name: "Allen", age: 13 }
    ]

    const InputRef = useRef<HTMLInputElement | null>(null);
    const [user, setUser] = React.useState<{ name: string; age: number } | undefined>()
    return (
        <>
            <input ref={InputRef} name="user" type="text" />
        </>
    )
}

export default Input