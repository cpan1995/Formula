import {useState, useEffect} from 'react';

export default function Welcome(){
    const [userInfo, setUserInfo] = useState({"name":"Cheng Pan","status":"active"})
    const [isMobile, setIsMobile] = useState(false)

    // useEffect(()=>{
        
    //     fetch('https://dev-assessment.netlify.app/.netlify/functions/me', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bear 1F8E9119293D34903371897CB1483FF66D25FDDC5D03C1BED6CC47510550B069'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {setUserInfo(data)}) 
    // },[])
    
    let boxShadow = 'test'

    const handleResize = () => {
        if(window.innerWidth < 720){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
    })
    const welcomeStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'auto',
        width: '750px',
        height: '450px',
        borderRadius: '2%',
        backgroundColor: 'white',
        fontSize: '39px',
        fontWeight: '500'
    }

    if(isMobile){
        boxShadow = 'nil'
        
    }

    if(!userInfo.status){
        return (
            <div
                style={welcomeStyle}
                className={boxShadow}
            >
                Loading...
            </div>
        )
    }
    
    
    return (
        <div
            style={welcomeStyle}
            className={boxShadow}
        >
            <div>
            Welcome back{isMobile ? "!": ''}
            </div>
            <div
                style={
                    !isMobile ? {color:'#6fcbff'} : {color:'black'}
                }
            >
            {userInfo.name}
            </div>
        </div>
    )
}