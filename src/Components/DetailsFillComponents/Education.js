import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateEducation ,addArrayElement,removeArrayElement ,updateErrorMessages} from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'

// this component renders the Education page inside the details filling page.
function Education(props) {
    const educationHeads = useSelector(state => state.dataStore.education)//this state is used to store education object of dataStoreSlice.
    
    const dispatch = useDispatch();
    const onChangeHandler= (key,value,index,errorMessage=undefined) =>{
        //this function is called each time when the user provides input to the targeted'TextField'
        dispatch(updateEducation({
            //this function updates the targeted key of education element of dataStore in dataStoreSlice.js //
            key: key,
            value:value,
            index:index,
       }))
       if(errorMessage!==undefined){
          dispatch(updateErrorMessages({
            // this function is called each time when there is a validation check applied on the 'TextField' component and it inserts án object {key: errorMessage} into the errorMessages of dataStoreSlice.
            key:key,
            value:errorMessage,
            index:index,
          }))
        }
      }
    function AddEducation(){
        //this function is used to push a blank object in the education element of dataStoreSlice,
      //when the user clicks on the Add-new button to add more related details//
        dispatch(addArrayElement({
            key:'education',
            element: {
                Type:"",
                University:"",
                Degree:"",
                Start:"",
                End:""
            }
    })  )
    }
    function RemoveEducation(){
        //this function deletes the latest saved details in the education element, when the user clicks on the remove button.
        dispatch(removeArrayElement({key:"education" }))
        //after deletion of education element , the errors associated with it also removed.
        dispatch(updateErrorMessages({
            key:'University',
            value:"",
            index:educationHeads.length-1
          }))

        dispatch(updateErrorMessages({
            key:'Degree',
            value:"",
            index:educationHeads.length-1
          }))
    }

    function yearRange(start, end) {
        //this function  is used to create list of years in a range to display list of options in the 'Select' input field of the form.
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    let year =yearRange(2000,2024)
  return (
    <div className="container p-4 font" style={{textAlign:"left"}}>
        <h1>Education details</h1>
        <hr/>
        {educationHeads.map((educationHeading,index)=>{
            return(
                <div key={index}>
                    <div className="row font">
                        <div className="col-lg-6 col-12 pt-5 px-4"> 
                            <label className='col-md-12 col-12' htmlFor="type">Type
                                <select id="type" className="form-control" value={educationHeading.Type}
                                        onChange={(e)=>{
                                            dispatch(updateEducation({
                                                key: 'Type',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}
                                >   
                                    <option value='SSLC'> SSLC</option>
                                    <option value='Hsc'> HSC / Diploma</option>
                                    <option value='Graduation'> Graduation</option>
                                    <option value='Post Graduation'> Post Graduation</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="row font">
                        <div className="col-lg-6 col-12 pt-5 px-4"> 
                            <label  className="col-md-12 col-12" htmlFor="University">School/College Name
                                <TextField   type="text" elementId="University" placeholder='School/College Name'value={educationHeading.University}
                                        onChange={
                                            // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and,
                                            //the user given input will be send as value alongwith errorMessage , if there is any .
                                            (value,errorMessage)=>{
                                                //this function calls back onChangeHandler which will update targeted key of 'WorkEx' and 'errorMessages' in dataStoreSlice as per the value and errorMessage respectively.
                                                onChangeHandler('University',value,index,errorMessage)
                                            }
                                        }
                                />
                            </label>
                        </div>
                        <div className="col-lg-6 col-12 pt-5 px-4"> 
                            <label  className="col-md-12 col-12" htmlFor="degree">Qualification
                                <TextField  type="text" elementId="Degree" placeholder='Degree' value={educationHeading.Degree}
                                        onChange={(value,errorMessage)=>{onChangeHandler('Degree',value,index,errorMessage)}}
                                       
                                />
                            </label>
                        </div>
                    </div>

                    <div className="row font">
                        <div className="col-lg-6 col-12 pt-5 px-4"> 
                            <label  className="col-md-12 col-12" htmlFor="Location">Location
                                <TextField   type="text" elementId="Location" placeholder='Coimbatore, Tamilnadu.'value={educationHeading.Location}
                                        onChange={
                                            // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and,
                                            //the user given input will be send as value alongwith errorMessage , if there is any .
                                            (value,errorMessage)=>{
                                                //this function calls back onChangeHandler which will update targeted key of 'WorkEx' and 'errorMessages' in dataStoreSlice as per the value and errorMessage respectively.
                                                onChangeHandler('Location',value,index,errorMessage)
                                            }
                                        }
                                />
                            </label>
                        </div>
                        <div className="col-lg-6 col-12 pt-5 px-4"> 
                            <label  className="col-md-12 col-12" htmlFor="Grade">Grade/Percentage
                                <TextField  type="text" elementId="Grade" placeholder= '% or CGPA' value={educationHeading.Grade}
                                        onChange={(value,errorMessage)=>{onChangeHandler('Grade',value,index,errorMessage)}}
                                       
                                />
                            </label>
                        </div>
                    </div>

                    <div className="row font">
                        <div className="col-lg-6 col-12 pt-5 px-4">
                            <label htmlFor="Start" className="col-md-12 col-12 col-form-label">Start year
                                    <select id="Start" className="form-control" value={educationHeading.Start}
                                            onChange={(e)=>{
                                                dispatch(updateEducation({
                                                    key: 'Start',
                                                    value:e.target.value,
                                                    index:index,
                                                 }))
                                            }}
                                    >
                                        <option>Select year</option>
                                        {
                                        year.map((yr,i)=>{
                                            return(
                                            <option key={i}  value={yr} 
                                            >{yr}
                                            </option>
                                            ) 
                                        })}
                                    </select>
                            </label>
                        </div>
                        <div className="col-lg-6 col-12 pt-5 px-4">
                            <label htmlFor="end" className="col-md-12 col-12 col-form-label"> End year
                                    <select id="end" className="form-control" value={educationHeading.End}
                                            onChange={(e)=>{
                                                dispatch(updateEducation({
                                                    key: 'End',
                                                    value:e.target.value,
                                                    index:index,
                                                 }))
                                            }}
                                    >
                                        <option >Select year</option>
                                        {
                                        year.map((yr,i)=>{
                                            return(
                                            <option key={i} 
                                                value={yr}
                                            >{yr}
                                            </option>
                                            ) 
                                        })}
                                    </select>
                            </label>
                        </div>
                    </div>
                </div>
                
            )
        })}
        <div className='d-flex px-5 gap-3 mt-2'>
                <button type="button" class="btn btn-outline-success"
                    onClick={AddEducation}
                >
                    Add new
                </button>
                <button type="button" class="btn btn-outline-danger"
                    onClick={RemoveEducation}
                >
                    Remove
                </button>
            </div>
            <BottomNavigation prevPagePath='/detailsfillingpage/personalinfo' nextPagePath='/detailsfillingpage/workex' isFormValid={props.isFormValid}/>
    </div>
  )
}

export default Education
