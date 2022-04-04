import style from './Profile.module.css';
import Header from '../../components/Header/Header';
import { useEffect, useRef, useState } from 'react';
import getData from '../../helpers/getData';
import userImage from '../../assets/images/desktop.jpg'

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [edit, setEdit] = useState(false);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const companyRef = useRef(null);
    const bioRef = useRef(null);

    useEffect(() => {
        if (!profileData) {
            getData("https://624084882aeb48a9af74b006.mockapi.io/profile")
            .then(res => setProfileData(res[0]));
        }
    }, [profileData]);

    // useEffect(() => {
    //     console.log(profileData);
    // })

    function handleEdit() {
        setEdit(!edit);
    }
    function setEditedFields() {
        setProfileData({
            ...profileData,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            company: companyRef.current.value,
            bio: bioRef.current.value,
        })
    }


    return (
        <div className={style.profilePage}>
            <Header boards settings logout />
            <div className={style.profile}>
                <div className={style.profileHeader}>
                    <div onClick={handleEdit} className={style.editButton}>Edit information <i className="fa fa-edit"></i></div>
                    {edit && <div className={style.deleteButton}>Delete account <i className="fa fa-trash"></i></div> }
                    {edit && <div className={style.addField}>Add new field <i className="fa fa-plus"></i></div> }
                </div>
                <div className={style.aboutUser}>
                    <div className={style.infoFields}>
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>First name</p>
                                <input onChange={setEditedFields} ref={firstNameRef} value={profileData.firstName} readOnly={!edit ? true: false} placeholder='First name' type="text" className={style.profileInput} /> 
                            </label>
                        }
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>Last name</p>
                                <input onChange={setEditedFields} ref={lastNameRef} value={profileData.lastName} readOnly={!edit ? true: false} placeholder='Last name' type="text" className={style.profileInput} /> 
                            </label>
                        }    
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>Phone</p>
                                <input onChange={setEditedFields} ref={phoneNumberRef} value={profileData.phoneNumber.toString()} readOnly={!edit ? true: false} placeholder='Phone number' type="text" className={style.profileInput} /> 
                            </label>
                        }    
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>Email</p>
                                <input onChange={setEditedFields} ref={emailRef} value={profileData.email} readOnly={!edit ? true: false} placeholder='Email' type="email" className={style.profileInput} /> 
                            </label>
                        }    
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>Address</p>
                                <input onChange={setEditedFields} ref={addressRef} value={profileData.address} readOnly={!edit ? true: false} placeholder='Address' type="text" className={style.profileInput} /> 
                            </label>
                        }    
                        { profileData && <label className={style.profileLabel}>
                                <p className={style.labelText}>Company</p>
                                <input onChange={setEditedFields} ref={companyRef} value={profileData.company} readOnly={!edit ? true: false} placeholder='Company' type="text" className={style.profileInput} /> 
                            </label>
                        }
                    </div>
                    <div className={style.imageBlock}>
                        <div style={{ backgroundImage: userImage }} className={style.userImage}>
                            <div className={style.blured} >
                                <i className="fa fa-plus"></i> 
                                Upload an image
                            </div>
                        </div>
                        {profileData && 
                            <label className={style.bioLabel}>
                                <p className={style.bioLabelText}>User's biography</p>
                                <textarea 
                                    rows={10}
                                    ref={bioRef}
                                    value={profileData.bio} 
                                    onChange={setEditedFields}
                                    readOnly={!edit ? true: false}
                                    className={style.userBiography}
                                />
                            </label>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}