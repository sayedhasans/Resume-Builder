import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateawards ,addArrayElement,removeArrayElement,updateErrorMessages } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'
import TextArea from '../InputComponents/TextArea'

// this component renders the key skills page inside the details filling page.

function Awards(props) {
    const awardHeads = useSelector(state => state.dataStore.awards) // this state stores the skills of dataStoreSlice.
    const dispatch = useDispatch();

    const onChangeHandler= (key,value,index,errorMessage=undefined) =>{
      //this function is called each time when the user provides input to the targeted'TextField'
      dispatch(updateawards({
          //this function updates the targeted key of the workEx element of dataStore in dataStoreSlice.js //
          key: key,
          value:value,
          index:index,
     }))
     if(errorMessage!==undefined){
        dispatch(updateErrorMessages({
          // this function is called each time when there is a validatin check applied on the 'TextField' component and it inserts án object {key: errorMessage} into the errorMessages of dataStoreSlice.
          key:key,
          value:errorMessage,
          index:index
        }))
      }
    }
    
    function AddAward(){
      //this function is used to push a blank object {skillName:"",} in the skills element of dataStoreSlice,
      //when the user clicks on the Add-Skill button to add more related details//
      dispatch(addArrayElement({
        key:'awards',
        element: {awardName:"",}
        })  
      )   
    }
    function RemoveAward(){
      //this function deletes the latest saved details in the skills element, when the user clicks on the remove button.
      dispatch(removeArrayElement({key:"awards" }))
    }

    function monthYearRange(startYear, endYear) {
      let ans = [];
      
      for (let year = startYear; year <= endYear; year++) {
          for (let month = 1; month <= 12; month++) {
              ans.push(`${month < 10 ? '0' + month : month}-${year}`);
          }
      }
      
      return ans;
  }
  
  let monthYear = monthYearRange(2000, 2024);
  
    
  return (
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>Achievements : Awards/Certification</h1>
  
        
        {awardHeads.map((awardHeading,index)=>{
            return(
                <div key={index}>
                    <div className="container p-2 font" style={{textAlign:"left"}}>
                        <h5>Awards/Certification {index+1}</h5>
                        <hr/>
                        
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4">                                
                                    <label className="col-sm-12 col-12" htmlFor="Organisation" >Name of the Organisation
                                        <TextField  
                                            type="text" elementId="Organisation" placeholder='Organisation Name' 
                                            value={awardHeading.Organisation}
                                            onChange={
                                                // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and,
                                                //the user given input will be send as value alongwith errorMessage , if there is any .
                                                (value,errorMessage)=>{
                                                    //this function calls back onChangeHandler which will update targeted key of 'WorkEx' and 'errorMessages' in dataStoreSlice as per the value and errorMessage respectively.
                                                    onChangeHandler('Organisation',value,index,errorMessage)
                                                }
                                            }
                                           
                                        />
                                    </label>
                            </div></div>
                            
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4">  
                                    <label className="col-sm-12 col-12" htmlFor="title" >Award Title
                                        <TextField   type="text" elementId="title" 
                                            value={awardHeading.title}
                                            onChange={(value,errorMessage)=>{onChangeHandler('title',value,index,errorMessage)}}
                                           
                                        />
                                    </label>
                            </div>
                        
                        
                            <div className="col-lg-6 col-12 pt-5 px-4"> 
                                <label htmlFor="end"className="col-sm-12 col-12  col-form-label" >Date of Acquisition
                                        <select id="end" className="form-control" value={awardHeading.Date}
                                         onChange={(e)=>{
                                            dispatch(updateawards({
                                                key: 'Date',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            <option > Select year</option>
                                            {
                                            monthYear.map((yr,i)=>{
                                               return(
                                                <option  key={i} >{yr}</option>
                                               ) 
                                            })}
                                            
                                        </select>
                                </label>
                            </div>
                        </div></div>
                        <div className="row font">
                        <div className="col-lg-6 col-12 pt-5 px-4 ms-2"> 
                            <label  className="col-sm-12 col-12" htmlFor="Location">Location
                                <TextField   type="text" elementId="Location" placeholder='Coimbatore, Tamilnadu.'value={awardHeading.Location}
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
                        </div></div>

                        <div className="form-group">
                            <div className="col-lg-12 col-12 pt-5 px-4"> 
                                <label htmlFor="Description" className="col-sm-12 col-12 col-form-label">Description
                                    <TextArea  elementId="Description" rows="3" value={awardHeading.Description}
                                        onChange={(value)=>{onChangeHandler('Description',value,index)}}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
              
                
            )
        })}
                
            
        


        <div className='row mt-3 '>
          <div className='col-sm-2 ms-4 col-12 mt-3'>
            <button type="button" class="btn btn-outline-success"
                      onClick={AddAward}>
                  Add-Awards

              </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button type="button" class="btn btn-outline-danger"
                      onClick={RemoveAward}>
                  Remove

              </button>
          </div>
        </div>


        <BottomNavigation prevPagePath='/detailsfillingpage/keyskills' nextPagePath='/myresume' isFormValid={props.isFormValid}/>
      
    </div>
  )
}

export default Awards;
