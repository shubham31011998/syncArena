import {IoEnterOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter} from "react-icons/io5";
import ButtonIndigo from "../../components/buttonIndigo";
import ButtonGray from "../../components/buttonGray";
import InputText from "../../components/inputText";
import Card from "../../components/card";
import { useNavigate } from 'react-router-dom';
import "./styles.css";


const Home = ({userData, setuserData, socket}) => {
    const navigate = useNavigate();
    console.log('userData', userData.username)

    const handleUsername = (e) => {
        if (setuserData && userData) {
            setuserData({
                ...userData,
                username: e.target.value
            })
        }
    }
    const handleSelectedRoom = (e) => {
        if (setuserData && userData) {
            setuserData({
                ...userData,
                room: e.target.value
            })
        }
    }
    const joinRoom = () => {
        if (userData.room !== '' && userData.username !== '') {
            const userName = userData.username;
            const userRoom = userData.room;
            socket.emit('join_room', {userName, userRoom});
        }
        navigate('/chat', { replace: true });
    };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-4 bg_1">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5 text-white">SyncArena</h1>
                <Card>
                    <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">User Name</label>
                        <InputText onChange={handleUsername} />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Select Room</label>
                        <select className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={handleSelectedRoom} >
                            <option>Select Room</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='node'>Node</option>
                            <option value='express'>Express</option>
                            <option value='react'>React</option>
                        </select>
                        <ButtonIndigo
                            icon={
                                <IoEnterOutline
                                    name="enter-outline"
                                    className="w-5 h-5 inline-block"
                                />
                            }
                            text={"Enter Room"}
                            onClick={joinRoom}
                        />
                    </div>
                    <div className="p-5">
                        <div className="grid grid-cols-3 gap-1">
                            <ButtonGray text={<span>Twitter <IoLogoTwitter className="inline-block" /></span>} />
                            <ButtonGray text={<span>Meta <IoLogoFacebook className="inline-block" /></span>} />
                            <ButtonGray text={<span>Instagram <IoLogoInstagram className="inline-block" /></span>} />
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                    <span className="inline-block ml-1">Forgot Password</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="inline-block ml-1">Help</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* <div className="py-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className="inline-block ml-1">Back to your-app.com</span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Home;