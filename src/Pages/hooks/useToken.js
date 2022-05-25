import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log('user inside use token', user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside use token', data);
                    const accessToken = data.token;
                    localStorage.setItem('access_token', accessToken);
                    setToken(token)
                })
        }
    }, [user])
    return [token];
}

export default useToken;