import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateKeySkills ,addArrayElement,removeArrayElement } from '../../ReduxManager/dataStoreSlice'
import { updateKeyLanguages ,addArrayElements,removeArrayElements } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'

// this component renders the key skills page inside the details filling page.

function KeySkills(props) {
    const skillHeads = useSelector(state => state.dataStore.skills) // this state stores the skills of dataStoreSlice.
    const languageHeads = useSelector(state => state.dataStore.languages) 
    const dispatch = useDispatch();

    function AddSkill(){
      //this function is used to push a blank object {skillName:"",} in the skills element of dataStoreSlice,
      //when the user clicks on the Add-Skill button to add more related details//
      dispatch(addArrayElement({
        key:'skills',
        element: {skillName:"",}
        })  
      )   
    }

    function AddLanguage(){
      //this function is used to push a blank object {skillName:"",} in the skills element of dataStoreSlice,
      //when the user clicks on the Add-Skill button to add more related details//
      dispatch(addArrayElements({
        key:'languages',
        element: {languageName:"",}
        })  
      )   
    }

    function RemoveSkill(){
      //this function deletes the latest saved details in the skills element, when the user clicks on the remove button.
      dispatch(removeArrayElement({key:"skills" }))
    }
    
    function RemoveLanguage(){
      //this function deletes the latest saved details in the skills element, when the user clicks on the remove button.
      dispatch(removeArrayElements({key:"languages" }))
    }

  return (
    <div>
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>Key Skills</h1>
        <hr/>
    
        {skillHeads.map((item,index)=>{
            return(
                <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
                    <TextField  type="text" placeholder="Reactjs" value={item.skillName}
                      onChange={(value)=>{
                        // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and the user given input will be send as value  .
                       
                        dispatch(updateKeySkills({
                          //this function updates the targeted key i.e skillName of skills element of dataStore in dataStoreSlice.js //

                          key: 'skillName',
                          value:value,
                          index:index,
                        }))
                      }}
                    />
                </div>
            )
        })}
        <div className='row mt-3 '>
          <div className='col-sm-2 col-12 mt-3'>
            <button type="button" class="btn btn-outline-success"
                      onClick={AddSkill}>
                  Add-Skill

              </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button type="button" class="btn btn-outline-danger"
                      onClick={RemoveSkill}>
                  Remove

              </button>
          </div>
        </div></div>

        <div className="px-5 py-3 font" style={{textAlign:"left"}}>
        <h1>Languages</h1>
        <hr/>
    
        {languageHeads.map((item,index)=>{
            return(
                <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
                    <TextField  type="text" placeholder="English" value={item.languageName}
                      onChange={(value)=>{
                        // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and the user given input will be send as value  .
                       
                        dispatch(updateKeyLanguages({
                          //this function updates the targeted key i.e skillName of skills element of dataStore in dataStoreSlice.js //

                          key: 'languageName',
                          value:value,
                          index:index,
                        }))
                      }}
                    />
                </div>
            )
        })}
        <div className='row mt-3 '>
          <div className='col-sm-2 col-12 mt-3'>
            <button type="button" class="btn btn-outline-success"
                      onClick={AddLanguage}>
                  Add-Skill

              </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button type="button" class="btn btn-outline-danger"
                      onClick={RemoveLanguage}>
                  Remove

              </button>
          </div>
        </div>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/workex' nextPagePath='/detailsfillingpage/Additionaldetails' isFormValid={props.isFormValid}/>
      </div>
    
  )
}

export default KeySkills;
