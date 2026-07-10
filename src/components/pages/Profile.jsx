import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  ShoppingBag,
  Heart,
  LogOut,
  X,
  Camera,
  Images,
  UserRound
} from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const Profile = () => {
  const navigator = useNavigate();

  const [profileData, setProfileData] = useState({});
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [previewImage, setPreviewImage] = useState("");
  const [visible, setVisibility] = useState(false);




  async function fetchProfile() {
    try {

      let response = await fetch(import.meta.env.VITE_BACKEND_HOST + "/profile", {credentials:"include"})
        

      if (!response.ok) return toast.error("Could not fetch profile!");
      response = await response.json();
      setProfileData(response.message);
      setVisibility(false)
    
    } catch (error) {
      console.log(error);
      toast.error("Could not fetch profile", { position: "bottom-center" });
    }
  }
  console.log(profileData);


  useEffect(() => {
    fetchProfile();
  }, []);

  
//     const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if(file) {
//       setSelectedImage(file);
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   async function uploadImage(){

//     if(!selectedImage){
//       return toast.error("Please select an image.");
//     }

//     const formData = new FormData();
//     formData.append("image", selectedImage);

//   try{
//     const response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/profile",
//       {
//         method:"POST",
//         credentials:"include",
//         body:formData,
//       }
//     )

//     if(!response.ok)
//       return toast.error("Upload failed", {position:"bottom-center"});

//     toast.success("Profile updated!!");
//     setVisibility(false);
//     fetchProfile();
//   }catch(error){
//     toast.error("Upload failed!!", {position:"bottom-center"});

//   }
// };




  async function logoutHandler() {
    try {
      let response = await fetch(import.meta.env.VITE_BACKEND_HOST + "/logout", { credentials: "include" });
      if (!response.ok)
        return toast.error("Could not logout. Please try again!", { position: "bottom-center" });

      toast.success("Logged out", { position: "bottom-center" })
      navigator("/login");

    } catch (error) {
      toast.error("Could not logout. Please try again!", { position: "bottom-center" });

    }
  }


  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-sm p-6 h-fit">
          <div className="flex flex-col items-center text-center">
            <img
            onClick={() => {
              setVisibility(true)
            }}
              src={profileData.profile}
              alt=""
              className="w-28 h-28 rounded-full object-cover border-4 border-[#7fad39]"
            />

            {visible && <div  className="fixed top-0 left-0 bg-black/50 h-screen w-screen flex flex-col justify-center items-center mt-[50px] ">
              <div className="bg-[aliceblue] h-[300px] w-[320px] rounded-[15px]">
               <div className="flex">
                <X className="mt-[15px] ml-[15px] " onClick={ () => setVisibility(false) } />
                <p className="text-center text-[22px] mt-[10px] ml-[40px] ">Add profile picture</p>
                </div>

                <div className="h-[100px] w-[100px] ml-[100px] mt-[20px] border border-[blue] border-[5px] rounded-full bg-[white]">
                    <img className="rounded-full" src="https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg" alt="" />
                </div>

                <a className=" h-[40px] mt-[20px] pl-[20px] pt-[7px] mr-[15px] text-[17px] ml-[15px] bg-white rounded-[5px] hover:cursor-pointer hover:bg-blue-100 hover:text-[blue] flex gap-[10px] " href="#"><Images className="w-5 h-5 " />  Upload from device</a>
                <a className=" h-[40px] mt-[5px] pl-[20px] pt-[7px] mr-[15px] text-[17px] ml-[15px] bg-white rounded-[5px] hover:cursor-pointer hover:bg-blue-100 hover:text-[blue] flex gap-[10px] "  href="#"><Camera className="" />  Take a picture</a>
              </div>
              </div>}

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {profileData.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {profileData.email}
            </p>
          </div>

          {/* Menu */}
          <div className="mt-8 space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#7fad39] text-white font-medium">
              <User size={18} />
              My Profile
            </button>


            <button onClick = {() => {navigator("/orders")}} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition text-gray-700">
              <ShoppingBag size={18} />
              My Orders
            
            </button>


            <button onClick = {() => {navigator("/wishlist")}}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition text-gray-700">
              <Heart size={18} />
              Wishlist
            </button>

            <button onClick={logoutHandler} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition text-red-500">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">

          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Profile Information
                </h3>

              </div>

            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3 text-[#7fad39]">
                  <User size={20} />
                  <span className="font-semibold">Full Name</span>
                </div>

                <p className="text-gray-700 text-lg">
                  {profileData.name}
                </p>
              </div>

              {/* Email */}
              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3 text-[#7fad39]">
                  <Mail size={20} />
                  <span className="font-semibold">Email Address</span>
                </div>

                <p className="text-gray-700 text-lg">
                  {profileData.email}
                </p>
              </div>

              {/* Phone */}
              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3 text-[#7fad39]">
                  <Phone size={20} />
                  <span className="font-semibold">Phone Number</span>
                </div>

                <p className="text-gray-700 text-lg">
                  {profileData.phone}
                </p>
              </div>

              {/* Address */}
              <div className="border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3 text-[#7fad39]">
                  <MapPin size={20} />
                  <span className="font-semibold">Address</span>
                </div>

                <p className="text-gray-700 text-lg">
                  {profileData.address}
                </p>
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Recent Orders
              </h3>

              <button className="text-[#7fad39] font-semibold hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-5">

              {/* Order */}
              {[1, 2, 3].map((order) => (
                <div
                  key={order}
                  className="border rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div>
                    <p className="font-bold text-gray-800">
                      Order #OGN{1000 + order}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      2 Products • March 12, 2025
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="font-bold text-lg text-[#7fad39]">
                      $120.00
                    </p>

                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                      Delivered
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;