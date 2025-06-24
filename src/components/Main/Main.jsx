import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
     
   const {onSent,recentPrompt, showResult,loading,resultData, setInput,input} = useContext(Context)
    

  return (
    <div className = 'main'>
       <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=""
        //  style = {{width:"100%", maxWidth:"60px", height:"auto"}}
        />
       </div>

      <div className="main-container">

        {!showResult
        ?<>
          <div className="greet">
            <p><span>Hello, There!</span></p>
            <p>How can I assist you?</p>
          </div>

          <div className="cards">
            <div className="card">
               <p>Suggest beautiful places to view World Wondow.</p>
               <img src={assets.compass_icon} alt="" />
              </div>
            <div className="card">
              <p>Briefly summarize this concept: urbar planning.</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstom team bonding activities for our work reteat.</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
        :<div className = "result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className="loader">
                <hr />
                <hr />
                <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
         </div>
        
        }
        
      
        <br /><br /><br />
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder = "Enter a prompt here." />
            <div>
              <img src={assets.galary_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <br /><br /><br />
          <p>Gemini may diaplay inaccurate info, including
            about people, so, double click it's responses.
            Your Privecy & Policy of Gemini.
          </p>
        </div>
     </div>
    </div>
  )
}

export default Main
