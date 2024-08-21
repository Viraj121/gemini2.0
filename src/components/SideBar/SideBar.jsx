/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const SideBar = () => {

    const [Extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPreviousPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {Extended ? <p>New Chat</p> : null}
                    {/* <p>New Chat</p> */}
                </div>
                {Extended
                    ?
                    <div className="recent">
                        <p className="recent-title">
                            {prevPrompts.map((item, index) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div onClick={() => loadPreviousPrompt(item)} className="recent-entry">
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )
                            })}
                        </p>

                    </div>
                    :
                    null

                }

            </div>
            <div className="botton">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {Extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {Extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {Extended ? <p>Settings</p> : null}
                </div>
            </div>

        </div>
    )
}

export default SideBar 