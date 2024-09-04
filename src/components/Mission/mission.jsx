import React from 'react'
import './Mission.scss'

const Mission = () => {
  return (
    <div className='main'>
      <div className='topic'>
        <hr/>
        <h1><span>OUR</span> MISSION & VISSION</h1>
        <hr/>
      </div>
      <div className='container'>
        <div className='mission'>
          <div className="missionimg">
            <div className='mission-1'>
              <img src="/binoculars.png" alt="binoculars" />
              <h2>OUR VISION</h2>
            </div>
            <div className='mission-2'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga suscipit minus officiis ducimus qui, tempora magni corporis mollitia ipsa perferendis laboriosam. Mollitia autem odit aut soluta ipsa nihil aliquid.</p>
              <img src="/pngwing.com.png" alt="pineapple" />
            </div>
          </div>
        </div>
        <div className='mission'>
          <div className='vissionimg'>
            <div className='mission-1'>
              <img src="/target (1).png" alt="binoculars" />
              <h2>OUR MISSION</h2>
            </div>
            <div className='mission-2 '>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga suscipit minus officiis ducimus qui, tempora magni corporis mollitia ipsa perferendis laboriosam. Mollitia autem odit aut soluta ipsa nihil aliquid.</p>
            <div className='pneimg'>
              <img src="/pineapple.png" alt="pineapple" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
