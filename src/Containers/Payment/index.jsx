import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
// import "./manager.css"
// import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from './Header';



// import { workerRegister } from '../../service/api';
// import { uploadFile } from '../../service/api';

function PaymentDetails() {

    const [aadhar, setAadhar] = useState();
    const [nameBeni, setNameBeni] = useState();

    const [experience, setExperience] = useState(0);
    const [bankName, setBankName] = useState();
    const [BankAddress, setBankAddress] = useState();



    const [price, setPrice] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();
    const [profilePic, setProfilePic] = useState('');
    const [aadharPic, setAadharPic] = useState('');
    const [profilePicName, setProfilePicName] = useState('')
    const [aadharPicName, setAadharPicName] = useState('')
    const [storeData, setStoreData] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [showImg, setShowImg] = useState(false);
    const [profilePicLink, setprofilePicLink] = useState('/profile.png');
    const [aadharPicLink, setAadharPicLink] = useState('/profile.png');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {

        event.preventDefault();
        // console.log('aadhar:', aadhar);
        // console.log('experience:', experience);
        // console.log('Price:', price);
        // console.log('address:', address);
        // console.log('pin:', pin);
        // console.log('age:', age);
        // console.log('phone:', phone);
        // console.log("profile pic link ", profilePicLink);
        // console.log("aadhar pic link ", aadharPicLink);


        //   if(!address || !phone || !age || !pin || !price || !experience || !aadharPic || !profilePic ||  !aadhar){
        //     console.log("mouse clicked");
        //     toast("Form is not filled properly",{
        //         autoClose:2000
        // })
        //   }

        //   else{
        setWorkerData();

        //     toast.success("Form Submitted Successfully!!", {
        //         autoClose: 1500, 
        //     });

        //     const timer = setTimeout(() => {        navigate("/adminLabour");
        // }, 1500);

        // return () => clearTimeout(timer);



        // const d= new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset","rental-rack");
        // d.append("cloud_name","ddwsaojx6");

        // const d1= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:d
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setProfilePic(data.url)
        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ",data.url);
        // }).catch((err)=>{
        //     console.log(err)
        // })

        // const dA= new FormData();
        // dA.append("file", aadharPic);
        // dA.append("upload_preset","rental-rack");
        // dA.append("cloud_name","ddwsaojx6");

        // const d2= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:dA
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setAadharPic(data.url)
        //         setAadharPicLink(data.url);
        //         console.log("aadhar url is ", data.url);


        //     }

        // }).catch((err)=>{
        //     console.log(err)
        // })
        // }
    };
    const setWorkerData = async () => {
        const data = localStorage.getItem("user")
        const user = JSON.parse(data)
        localStorage.setItem("role", "worker");

        const myForm = new FormData();

        myForm.set("age", age);
        myForm.set("email", user.email);
        myForm.set("fullName", user.fullname);
        myForm.set("aadhar", aadhar);
        myForm.set("phone", phone);
        myForm.set("address", address);
        myForm.set("role", role);
        myForm.set("pin", pin);
        myForm.set("profilePic", profilePicLink);
        myForm.set("aadharPic", aadharPicLink);
        myForm.set('experience', experience);
        myForm.set("price", price);
        myForm.set("userId", user._id);


        // console.log("my form is ",myForm);

        // const res = await workerRegister(myForm);


        // const res = await workerRegister({
        //     aadhar: aadhar,
        //     age: age,
        //     fullName: user.fullname,
        //     email: user.email,
        //     userId: user._id,
        //     phone: phone,
        //     pin: pin,
        //     address: address,
        //     role: role,
        //     profilePic: profilePicLink,
        //     aadharPic: aadharPicLink,
        //     experience: experience,
        //     price: price,
        // })
    }

    const onProfilePicChange = async (e) => {

        const reader = new FileReader();



        reader.onload = () => {

            if (reader.readyState === 2) {
                // setAvatarPreview(reader.result);
                setprofilePicLink(reader.result);
            }
        };


        reader.readAsDataURL(e.target.files[0]);

        // console.log("e is ",e.target.files[0]);





        // setProfilePic(e.target.files[0]);
        setProfilePicName(e.target.files[0].name);
        // const d = new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset", "rental-rack");
        // d.append("cloud_name", "ddwsaojx6");
        // const d1 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
        //     method: "post",
        //     body: d
        // }).then((res) => res.json()).then((data) => {
        //     if (data) {
        //         setProfilePic(data.url)


        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ", data.url);
        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    const onAadharPicChange = async (e) => {

        const reader = new FileReader();

        reader.onload = () => {

            if (reader.readyState === 2) {
                // setAvatarPreview(reader.result);
                setAadharPicLink(reader.result);
            }
        };



        reader.readAsDataURL(e.target.files[0]);






        // setAadharPic(e.target.files[0]);
        setAadharPicName(e.target.files[0].name);

        // const dA = new FormData();
        // dA.append("file", aadharPic);
        // dA.append("upload_preset", "rental-rack");
        // dA.append("cloud_name", "ddwsaojx6");

        // const d2 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
        //     method: "post",
        //     body: dA
        // }).then((res) => res.json()).then((data) => {

        //     if (data) {
        //         setAadharPic(data.url)
        //         setAadharPicLink(data.url);
        //         console.log("aadhar url is ", data.url);
        //         // setWorkerData();   
        //     }
        // }).catch((err) => {
        //     console.log(err)
        // })
    }



    return (
        <>
            {/* <Header /> */}
            <h1 style={{ color: "white" }} id="lform">Payment Details</h1>
            <div className="labour-form">
                <form className='roleform' onSubmit={handleSubmit}>

                    <div className="display2">

                        <div className="display1">
                            <label htmlFor="aadharPic">Account Number:&nbsp;&nbsp;

                            </label>
                            <input
                                type="number"
                                id="account"
                                placeholder='Enter Account Number'
                                min={0}
                                value={aadhar}
                                onChange={(event) => setAadhar(event.target.value)}
                                inputMode={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}

                            />
                        </div>

                        <div className="display1">
                            <label htmlFor="aadharPic">Beneficiary Name:&nbsp;&nbsp;

                            </label>
                            <input
                                type="string"
                                id="name"
                                placeholder='Enter Name'
                                min={0}
                                value={nameBeni}
                                onChange={(event) => setNameBeni(event.target.value)}
                            // inputMode={(event) => {
                            //     if (!/[0-9]/.test(event.key)) {
                            //         event.preventDefault();
                            //     }
                            // }}

                            />
                        </div>
                    </div>


                    <div className="display2">
                        <div className="display1">

                            <label htmlFor="address">Beneficiary Address  :&nbsp;&nbsp; </label>
                            <input
                                type="text"
                                id="address"
                                placeholder='Enter Address'
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="display1">

                            <label htmlFor="address">Bank Name  :&nbsp;&nbsp; </label>
                            <input
                                type="text"
                                id="bankName"
                                placeholder='Enter Bank Address'
                                value={bankName}
                                onChange={(event) => setBankName(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="display2">
                        <div className="display1">

                            <label htmlFor="address">Bank Address :&nbsp;&nbsp; </label>
                            <input
                                type="text"
                                id="BankAddress"
                                placeholder='Enter Bank Address'
                                value={BankAddress}
                                onChange={(event) => setBankAddress(event.target.value)}
                            />
                        </div>
                        <div className="display1">
                            <label htmlFor="price">Price (per day) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder='Price Per Day'
                                id="price-labour"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>

                    </div>


                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="pin">Pin Code :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="pin"
                                placeholder='Enter Pin '
                                value={pin}
                                onChange={(event) => setPin(event.target.value)}
                            />
                        </div>
                        <div className="display1">
                            <label htmlFor="age">Age (only 18+) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="age"
                                placeholder='Your Age'
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </div>

                    </div>

                    <div className="display2">
                        <div className="display1">
                            <label for="role">Type of Affilate:&nbsp;&nbsp;</label>
                            <select id="role" style={{ "cursor": "pointer" }} value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="Construction">Construction Labour</option>
                                <option value="Tiles">Tiles | Marble | Work Helper</option>
                                <option value="Loading">Loading | Unloading</option>
                                <option value="Cleaning">Cleaning Workers</option>
                                <option value="Shifting">Home Shifting</option>
                                <option value="Warehouse">Godam | Warehouse</option>
                                <option value="Factory">Factory Labour</option>
                                <option value="Gardening">Gardening Work</option>
                                <option value="Other">Other Labour Works</option>
                            </select>
                        </div>


                        <div className="display1">
                            <label htmlFor="phone">Phone Number :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder=' Enter Phone Nmber'
                                id="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>


                    <button className='rolebutton' onClick={handleSubmit} type="submit">Submit</button>
                </form>


            </div>
            {/* <Footer /> */}
            <ToastContainer />
        </>
    )
}

export default PaymentDetails;

