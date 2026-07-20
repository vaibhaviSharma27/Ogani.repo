import React, { useState } from "react";
import { Trash2,ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigator = useNavigate();
    
  async function addToWishlist(productId, quantity){
    try {
      let response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/userItems/wishlist`,{
        method:"POST",
        credentials:"include",
        headers:{"content-type":"application/json"},
        body: JSON.stringify({ productId, quantity })
      });

      if(!response.ok)
        return toast.error("Could not fetch cart at the moment!", {position: "bottom-center"});

      response = await response.json();
      console.log(response.wishlist);
      setWishlistItems(response.wishlist);
      
    } catch (error) {
      console.log(error);
      toast.error("Could not fetch wishlist at the moment!!", { position: "bottom-center"});
      
    }
  }

  const increaseQty = (productId, quantity) => {
    addToWishlist(productId, quantity)
  }

  const decreaseQty = (productId, quantity) => {
    addToWishlist(productId, quantity)
  }

  const removeItem = (productId, quantity) => {
    addToWishlist(productId, quantity)
  }

  // const increaseQuantity = (id) => {
  //   setWishlistItems((prev) =>
  //     prev.map((item) =>
  //       item._id === id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // };

  // const decreaseQuantity = (id) => {
  //   setWishlistItems((prev) =>
  //     prev.map((item) =>
  //       item._id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setWishlistItems((prev) =>
  //     prev.filter((item) => item._id !== id)
  //   );
  // };

  async function fetchWishlist(){
    try {
      let response = await fetch(import.meta.env.VITE_BACKEND_HOST + "/userItems/wishlist", {credentials: "include"});
      if(!response.ok)
        return toast("Could not fetch your wishlist!!", {position: "boottom-center"});

      response = await response.json();
      console.log(response);
      setWishlistItems(response.wishlist);
    } catch (error) {
      toast.error("Could not fetch your wishlist!!", {position:"bottom-center"});
      
    }
  }

      async function addToCart(productId, quantity) {
        try {
          // alert(quantity)
          let response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/cart`, {
            method: "POST",
            credentials:"include",
            headers: { "content-type":"application/json"},
            body: JSON.stringify({ productId, quantity })
          });
    
          if (!response.ok)
            return toast.error("Could not fetch cart at the moment!", { position: "bottom-center" });
        
          toast.success("Item added to the cart!!", {position:"bottom-center"});
          response = await response.json();
          console.log(response.cart)
    
        } catch (error) {
          console.log(error);
          toast.error("Could not fetch cart at the moment!!", { position: "bottom-center" });
    
        }
      }

  useEffect(() => { fetchWishlist() }, []);

 return (
  <div className="min-h-screen bg-[#f6f6f6] py-12 px-4">
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl sm:text-4xl font-bold mb-10">
        My Wishlist
      </h1>

      <div className="flex flex-col gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-[25px] p-4 sm:p-6 border border-gray-200"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

              {/* LEFT SIDE */}
              <div className="flex flex-col sm:flex-row gap-5">

                {/* IMAGE */}
                <img
                  src={
                    import.meta.env.VITE_BACKEND_HOST +
                    "/image/images/" +
                    item.image
                  }
                  alt={item.title}
                  className="w-full sm:w-[150px] h-[220px] sm:h-[150px] rounded-[20px] object-cover mx-auto sm:mx-0"
                />

                {/* DETAILS */}
                <div className="flex flex-col gap-3">

                  <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-green-600 text-2xl sm:text-[30px] font-semibold">
                    INR {item.price}
                  </p>

                  {/* QUANTITY + CART */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">

                    <div className="w-full sm:w-[220px] h-[55px] border border-gray-300 rounded-[18px] flex items-center justify-between px-6">
                      <button
                        onClick={() =>
                          decreaseQty(item.productId, -1)
                        }
                        className="text-3xl"
                      >
                        -
                      </button>

                      <span className="text-xl sm:text-2xl font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.productId, 1)
                        }
                        className="text-3xl"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        addToCart(
                          item.productId,
                          item.quantity
                        )
                      }
                      className="flex items-center justify-center gap-3 bg-[#7fad39] hover:bg-[#6f9d32] transition text-white px-6 py-4 rounded-2xl font-semibold w-full sm:w-auto"
                    >
                      <ShoppingCart size={20} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex lg:flex-col justify-between items-center lg:items-end gap-4">

                <button
                  onClick={() =>
                    removeItem(
                      item.productId,
                      -item.quantity
                    )
                  }
                  className="w-[50px] h-[50px] border border-gray-300 rounded-[15px] flex items-center justify-center hover:bg-red-50 transition"
                >
                  <Trash2
                    size={20}
                    className="text-red-500"
                  />
                </button>

                <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-slate-900">
                  INR {(item.price * item.quantity).toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY WISHLIST */}
      {wishlistItems.length === 0 && (
        <div className="bg-white rounded-[25px] p-8 sm:p-16 text-center mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Wishlist is Empty ❤️
          </h2>

          <button
            onClick={() => navigator("/shop")}
            className="w-full mt-6 bg-[#7fad39] hover:bg-[#6f9d32] transition py-4 rounded-2xl text-white text-lg sm:text-xl font-bold"
          >
            Add products to your wishlist
          </button>
        </div>
      )}
    </div>
  </div>
);
};

export default Wishlist;