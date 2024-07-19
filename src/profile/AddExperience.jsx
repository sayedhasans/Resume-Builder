import { useState } from "react";

function AddExperience(){

const [companyInfo, setCompanyInfo] = useState([{ name: "", position: "" }]);
// updates the state with user's input
const handleAddCompany = () =>
    setCompanyInfo([...companyInfo, { name: "", position: "" }]);

// removes a selected item from the list
const handleRemoveCompany = (index) => {
    const list = [...companyInfo];
    list.splice(index, 1);
    setCompanyInfo(list);
};
// updates an item within the list
const handleUpdateCompany = (e, index) => {
    const { name, value } = e.target;
    const list = [...companyInfo];
    list[index][name] = value;
    setCompanyInfo(list);
};
return (
    <div className='flex justify-evenly text-xl '>
        <form>
            {/* --- other UI tags --- */}
            {companyInfo.map((company, index) => (
                <div className='nestedContainer' key={index}>
                    <div className='companies'>
                        <label htmlFor='name'>Company Name</label>
                        <input
                            type='text'
                            name='name'
                            required
                            onChange={(e) => handleUpdateCompany(e, index)}
                        />
                    </div>
                    <div className='companies'>
                        <label htmlFor='position'>Position Held</label>
                        <input
                            type='text'
                            name='position'
                            required
                            onChange={(e) => handleUpdateCompany(e, index)}
                        />
                    </div>

                    <div className='btn__group'>
                        {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                            <button id='addBtn' onClick={handleAddCompany}>
                                Add
                            </button>
                        )}
                        {companyInfo.length > 1 && (
                            <button id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                                Del
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <button>CREATE RESUME</button>
        </form>
    </div>
);

}
export default AddExperience;