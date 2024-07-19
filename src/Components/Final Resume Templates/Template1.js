import React from 'react'
import { useSelector } from 'react-redux'
const shortid = require('shortid')

function Template1() {
    const dataStore = useSelector(state => state.dataStore)

  return (
    <div className="mb-5 p-4 w-100" style={{border:"5px solid #00adb5", backgroundColor:"biege"}}>
        <div >
            <div className="row  m-0 d-flex align-items-center" style={{height:"250px"}}>
                <div className="col-2 text-center media" >
                    <img className="rounded align-self-center mx-auto " src={ dataStore.imageFile}alt='profile-pic'
                         style={{maxHeight:'180px',minHeight:"120px", width:'100px', background:'grey',padding:0}}/>
                </div>

                <div className="col-6    text-left font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div className=' d-flex justify-content-center' style={{color:"#00adb5",fontSize:"55px"}}>{ dataStore.personalInfo.firstName +" "+  dataStore.personalInfo.lastName}</div>
                    <h5 className=' d-flex justify-content-center'>{dataStore.workEx[dataStore.workEx.length -1].title}</h5>
                </div>

                <div className="col-4  ">
                    <div className=' p-3' style={{fontSize:"18px",float:"left",display:"inline-block"}}>
                        <div >{dataStore.personalInfo.Email} </div>
                        <div>{dataStore.personalInfo.Mobile}</div>
                        <div>{dataStore.personalInfo.Address1 +", "+dataStore.personalInfo.City+", "+ dataStore.personalInfo.State}</div>
                       <div>{dataStore.personalInfo.Country +" " + dataStore.personalInfo.Pin}</div>
                        <div>{dataStore.personalInfo.LinkedIn}</div>
                        <div>{dataStore.personalInfo.Github}</div>
                        
                        
                
                    </div>
                </div>
            </div>
        </div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
        <div className="text-justify mx-4">{dataStore.personalInfo.Objective}</div>

      

        <div className="container" style={{fontFamily:"Serif",}}>
            <div className="row">
            <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left" style={{color:"#00adb5"}}><h4>Education</h4></div>
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        {dataStore.education.map((item)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <b> {item.Degree}</b>
                                    <div> I  completed my {item.Type} in {item.Degree} from {item.University} , {item.Location} with an {item.Grade}.
                                        The duration of my studies was from {item.Start} to {item.End}.

                                        </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>

                <div className="col-3 text-left  " style={{color:"#00adb5"}}> <h4> Professional Experience</h4></div>
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                    {dataStore.workEx.map((item)=>{
                        return(
                            <div key={shortid.generate()}>
                                <div className='mt-2'><b>{item.title}</b></div>
                                <div className='mt-2'>
                                    I Worked as a {item.title} at <b>{item.orgName}</b> in {item.City}, {item.Country} from {item.startYear} to {item.endYear}.
                                    During my tenure, {item.jobDescription}
                                </div>
                          
                            </div>
                        )})
                    }
                
                </div>
                
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left " >
                    <h4 style={{color:"#00adb5"}}>Key Skills</h4>
                </div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    
                        {dataStore.skills.map((skill)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <li style={{listStyle:"none"}}>{skill.skillName}</li>
                                </div>
                            )
                             
                        })}
                </div>

                
                <div className="w-100 mt-4 "> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left mb-3 " >
                    <h3 style={{color:"#00adb5"}}>Languages</h3>
                </div>
                <div className="col-9 text-left mb-3" style={{fontSize:"18px"}}>
                    
                        {dataStore.languages.map((language)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <li style={{listStyle:"none"}}>{language.languageName}</li>
                                </div>
                            )
                             
                        })}
                </div>

                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>

                <div className="col-3 text-left  " style={{color:"#00adb5"}}> <h4> Certificates</h4></div>
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                    {dataStore.awards.map((item)=>{
                        return(
                            <div key={shortid.generate()}>
                                <div className='mt-2'><b>{item.title}</b></div>
                                <div className='mt-2'>
                                    Achieved <b>{item.title}</b> Certification from {item.Organisation} in {item.Date} , {item.Location} . {item.Description}
                                   
                                </div>
                          
                            </div>
                        )})
                    }
                
                </div>
                   
                </div>
        </div>
    </div>
                
    
  )
}

export default Template1
