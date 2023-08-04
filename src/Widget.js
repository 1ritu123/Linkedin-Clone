import React from 'react'
import'./Css/widget.css'
import InfoIcon from '@material-ui/icons/Info';
function Widget(){
  return (

    <div className='widget'>
     <div className='widget__top'>
        <div className='widget__header'>
            <h4>Linkedin News</h4>
            <InfoIcon/>
        </div>
        <div className='widget__body'>
            <ul className='widget__options'>
                <li>
                    <h4>Slaying Job Search Fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>
                <li>
                    <h4>A Two Pizza Rule For Eating</h4>
                    <p>6d ago * 6,12 readers</p>
                    </li>
                    <li>
                    <h4>How to handle a workplace breakup</h4>
                    <p>3d ago * 4,45 readers</p>
                    </li>
                    <li>
                    <h4>Shorter hour boost productivity</h4>
                    <p>1d ago * 4,45 readers</p>
                    </li>
                    <li>
                    <h4>Flexi leave is the new flexi</h4>
                    <p>1d ago * 4,45 readers</p>
                    </li>
                    
            </ul>
        </div>
     </div>
     <div className='widget__bottom'>
        <div className='widget__header'>
            <h4>Today's top courses</h4>
            <InfoIcon/>
        </div>
        <div className='widget__body'>
            <ul className='widget__options'>
            <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>kay Coly</p>
                    </li>
                    
                    <li>
                    <h4>Building Resilience</h4>
                    <p>Tatianan Kolovau</p>
                    </li>
                    <li>
                    <h4>Critical Thinking for better judgement</h4>
                    <p>3d ago * 4,45 readers</p>
                    </li>
                    <li>
                    <h4>A Two Pizza Rule For Eating</h4>
                    <p>6d ago * 6,12 readers</p>
                    </li>
                    <li>
                    <h4>Slaying Job Search Fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Widget