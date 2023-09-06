import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import AppLogo from '../Images/app_logo.png';
import axios from 'axios';
import Logo from '../Images/logo.png';
import "../Fonts/Font.css";


function Inst() {
    const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
    const SEVER_URL = 'http://localhost:4000/api/todo';
    const [ Signin, SigninList ] = useState<any[]>([]);

    // 서버로 데이터값 정제하는 함수 --> fechData
    const fetchData = async() => {
        const response = await axios.get(SEVER_URL) 
        SigninList(response.data);
        /* fetch('http://localhost:4000/api/todo')
            .then((response) => response.json())
            .then((data) => setTodoList(data)); */
    }

    useEffect(() => {fetchData()}, []);

    const onSubmitHandler = async(e : any) => {
        // submit의 기본 동작을 막는다.
        e.preventDefault();
        
        const id = e.target.id.value;
        const password = e.target.password.value;
        const done = e.target.done.checked;
        await axios.post(SEVER_URL, { id, password, done });
        fetchData();
        /* fetch('http://localhost:4000/api/todo', {
            // 값을 보내는 타입
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // 직렬화
            body: JSON.stringify({
                text,
                done,
        }),
        }).then(() => fetchData()); */
    };

    return (
        <div className="flex h-screen relative">
            <div className="w-2/3">

                {/* 앱 화면 */}
                <div style={{backgroundColor:'#F5F5F5', height: '620px'}} className="flex flex-col">
                    <div className="flex items-center ml-4 mt-8">
                        <img src={AppLogo} alt="toucan_app_logo" style={{float:'left'}}/>
                        <p style={{float:'left', fontFamily: 'Raleway-Bold'}}>&nbsp;Enjoy college life using the application!</p>
                    </div>
                    <div className="columns-3 flex justify-center gap-x-12 mt-8">
                        <div style={{border:'1px solid black'}} className="w-56 h-96 rounded">dd</div>
                        <div style={{border:'1px solid black'}} className="w-56 h-96 rounded">dd</div>
                        <div style={{border:'1px solid black'}} className="w-56 h-96 rounded">dd</div>
                    </div>
                    {/* 스토어 버튼 */}
                    <div className="flex justify-center gap-x-4 mt-8">
                       <div style={{border:'1px solid black'}}>구글</div>
                       <div style={{border:'1px solid black'}}>애플</div>
                    </div>
                </div>
                <div className="mt-28 ml-8" style={{height:'624px'}}>
                    <img src={Logo} alt="toucan_logo"/>
                    <ul className="mt-12">
                        <li style={{fontFamily:'Raleway-Bold', fontSize:'30px'}}><p>● &nbsp;&nbsp;Hello, This website is Toucan. Welcome!</p></li>
                        <li className="ml-16" style={{fontFamily:'Raleway-Light', fontSize:'18px'}}>Log in and try toucan!</li>
                        <li className="mt-16" style={{fontFamily:'Raleway-Bold', fontSize:'30px'}}><p>● &nbsp;&nbsp;Get a lot of information for your university!</p></li>
                        <li className="ml-16" style={{fontFamily:'Raleway-Light', fontSize:'18px'}}>Contains information on universities across the country!</li>
                        <li className="mt-16" style={{fontFamily:'Raleway-Bold', fontSize:'30px'}}><p>● &nbsp;&nbsp;Make your timetable, and enjoy community!</p></li>
                        <li className="ml-16" style={{fontFamily:'Raleway-Light', fontSize:'18px'}}>Experience not only the timetable, but also many other unique features of Toucan!</li>
                    </ul>
                </div>

                {/* 소개 화면 */}
                <div></div>
                {/* 값 출력 
                {todoList.map((todo) => (
                    <div key={todo.id} style={{display: 'flex'}}>
                        <div>{todo.id}</div>
                        <div>{todo.text}</div>
                        <div>{todo.done ? 'Y' : 'N'}</div>
                    </div> 
                ))}*/}
            </div>
            
            {/* Side Login */}
            <div style={{ borderLeft: '1px solid #a8a8a8'}} className="w-1/3 flex justify-center fixed top-0 right-0 h-full">
                <div className="w-96">
                    <p style={{fontFamily:'Raleway-Bold', fontSize:'18px'}} className="text-center mt-12">Welcome!</p>

                    <form className="mt-8" onSubmit={onSubmitHandler}>
                        <p style={{fontFamily:'Raleway-Regular', fontSize:'15px'}}>Email</p>
                        <div className="flex justify-between">
                            <div className="w-full pr-2">
                                <input style={{fontFamily:'Raleway-Light', fontSize:'13px'}} name="id" placeholder="Enter your Email" className="w-full p-2 border rounded" />
                            </div>
                        </div>
                        <p className="mt-4" style={{fontFamily:'Raleway-Regular', fontSize:'15px'}}>Password</p>
                        <input style={{fontFamily:'Raleway-Light', fontSize:'13px'}} name="password" placeholder="●●●●●●●●●●●" className="w-full p-2 border rounded" />
                        <div className="grid grid-cols-12 gap-4 items-center mt-12">
                            <div className="col-start-1 col-end-2">
                                <input name="done" type="checkbox" className="mr-2" />
                            </div>
                            <div className="col-start-2 col-end-6">
                                <p style={{fontFamily:'Raleway-Regular', fontSize:'14px'}}>Remember me</p>
                            </div>
                            <div style={{marginRight:'-10px'}} className="col-start-9 col-end-13">
                                <p className="hover:underline decoration-toucan-sub hover:text-toucan-sub" style={{fontFamily:'Raleway-Regular', fontSize:'14px'}}>Forgot Password?</p>
                            </div>
                            <div className="col-start-1 col-end-13 flex justify-center mt-4">
                                <button style={{fontFamily:'Raleway-Regular', fontSize:'15px'}} type="submit" className="bg-FDCE55 hover:bg-toucan-sub text-white w-full py-2 rounded">Sign in your account</button>
                            </div>
                            <div className="col-start-1 col-end-13 mt-8">
                                <div>
                                    <p style={{fontFamily:'Raleway-Light', float:'left'}}>Don't have an account yet? </p>
                                </div>
                                <div>
                                    <p className="hover:underline decoration-toucan-sub hover:text-toucan-sub" style={{fontFamily:'Raleway-Regular'}}> Sign up here</p>
                                </div>
                            </div>
                            <div style={{fontFamily:'Raleway-Light', fontSize:'13px'}} className="col-start-1 col-end-13 flex justify-center gap-20 mt-12">
                                <p className="hover:underline decoration-black">About</p>
                                <p className="hover:underline decoration-black">Develop Team</p>
                                <p className="hover:underline decoration-black">Caution</p>
                            </div>
                            <div className="col-start-1 col-end-13 flex justify-center mt-32">
                                <p style={{fontFamily:'Raleway-Light', fontSize:'13px'}}>© 2023. TOCAN Co. all rights reserved.</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inst;
