import style from './Profile.module.css';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import getData from '../../helpers/getData';

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        if (!profileData) {
            getData("https://624084882aeb48a9af74b006.mockapi.io/profile")
            .then(res => setProfileData(res));
        }
    }, [profileData]);


    return (
        <div className={style.profilePage}>
            <Header logout />
            <div className={style.profile}>
                <div className={style.profileHeader}>
                    <div className={style.editButton}>Edit information <i className="fa fa-edit"></i></div>
                    <div className={style.deleteButton}>Delete account <i className="fa fa-trash"></i></div>
                    <div className={style.addField}>Add new field <i className="fa fa-plus"></i></div>
                </div>
                <div className={style.aboutUser}>
                    <div className={style.infoFields}>
                        <input readOnly placeholder='First name' type="text" className={style.profileInput} />
                        <input readOnly placeholder='Last name' type="text" className={style.profileInput} />
                        <input readOnly placeholder='Phone number' type="text" className={style.profileInput} />
                        <input readOnly placeholder='Email' type="text" className={style.profileInput} />
                        <input readOnly placeholder='Address' type="text" className={style.profileInput} />
                        <input readOnly placeholder='Company' type="text" className={style.profileInput} />
                        <div className={style.social}>
                            <div className={style.platform}>
                                <div className={style.platformImage}><i className="fa fa-github"></i></div>
                                <div className={style.platformTitle}>Github</div>
                            </div>
                            <div className={style.platform}>
                                <div className={style.platformImage}><i className="fa fa-linkedin"></i></div>
                                <div className={style.platformTitle}>Linkedin</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.imageBlock}>
                        <div className={style.userImage}>
                            <div className={style.blured} >
                                <i className="fa fa-plus"></i> 
                                Upload an image
                            </div>
                        </div>
                        <textarea rows={10} placeholder='BIO' className={style.userBiography} />
                    </div>
                </div>
            </div>
        </div>
    );
}