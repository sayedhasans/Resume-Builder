import React, { useState,  } from 'react';
import Avatar from 'react-avatar-edit';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';       
import { Dialog } from 'primereact/dialog'; 
import img from "../images/3d-render-little-boy-with-eyeglasses-blue-shirt.jpg";

 
  const Profile = ()=> {       
        const[setimage] =useState("");
		const [imagecrop,setimagecrop] = useState(false);
		const [src,] = useState(false);
		const [profile , setprofile] = useState([]);
		const [pview , setpview] = useState(false);
		const profileFinal = profile.map((item) => item.pview);

		const onClose = ()=>{
			setpview(null);
		};

		const onCrop = (view) => {
			setpview(view);
		};
		const saveCropImage = () => {
			setprofile([...profile, { pview}]);
			setimagecrop(false);
		};
	return(
		<div>
		<div className='text-center p-4'>
				<div className='flex flex-col justify-center items-center'>
		<img className='w-[200px] h-[200px] rounded-lg object-cover border-4 border-green-400 ' onClick={()=> setimagecrop(true)}  src={profileFinal.length ? profileFinal : img } alt="" />
						<label htmlFor="" className='mt-3 font-semibold text-5xl'>Upload Your Profile</label>
						<Dialog visible = {imagecrop} 
							header={() => (
								<p htmlFor="" className='text-2xl font-semibold textColor'>
									Update Profile
								</p>
								)}
							onHide ={() => setimagecrop(false)}
						>
							<div className='flex flex-col items-center'>
								<Avatar width={500} height={400} onCrop={onCrop} onClose={onClose}
								src={src} shadingColor={"#474649"} backgroundColor={"#474649"}
								/>
								<div className='flex flex-col items-center mt-5 w-12'>
									<div className='flex justify-around w-12 mt-4'>
										<Button onClick={saveCropImage}  label ="save" icon ="pi pi-check"/>
									</div>
								</div>
							</div>
						</Dialog>
						
						<InputText type = "file" accept ='/image/*' className="hidden" onChange ={(event)=>{
							const file = event.target.files[0]; 
							if(file && file.type.substring(0,5)==="image"){
								setimage(file);
							} else{
								setimage(null)
							}
						}}/>
				</div>
		</div>
		</div>

		);
};
export default Profile;