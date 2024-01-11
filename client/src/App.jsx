import axios from 'axios'
import { useState } from 'react'

const App = () => {

    const [IPAdress, setIPAdress] = useState('')
    const [IPInf, setIPInf] = useState(null)

    axios.get('https://api.ipify.org?format=json')
        .then(res => {
            axios.get(`https://ipapi.co/${res.data.ip}/json/ `)
                .then(res => {
                    setIPInf(res.data)
                    console.log(IPInf)
                })
                console.log(res.data)
        })
    return (
        <h1>test</h1>
    )
}

export default App