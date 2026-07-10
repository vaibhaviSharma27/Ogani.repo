// import { useMemo, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// import OrderCard from "../components/OrderCard";
// import sampleOrders from "../data/sampleOrders";

// export default function Orders() {
//   const navigate = useNavigate();

//   const [orders] = useState(sampleOrders);

//   const [activeFilter, setActiveFilter] = useState("All");
//   const [search, setSearch] = useState("");

//   const filters = [
//     "All",
//     "Delivered",
//     "Processing",
//     "Cancelled",
//     "Pending",
//   ];

//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const matchStatus =
//         activeFilter === "All" || order.status === activeFilter;

//       const matchSearch =
//         order.orderId.toLowerCase().includes(search.toLowerCase()) ||
//         order.items.some((item) =>
//           item.name.toLowerCase().includes(search.toLowerCase())
//         );

//       return matchStatus && matchSearch;
//     });
//   }, [orders, activeFilter, search]);

//   return (
//     <div className="min-h-screen bg-[#f6f7fb]">

//       {/* Header */}

//       <div className="sticky top-0 z-30 bg-white shadow-sm">

//         <div className="mx-auto max-w-7xl px-6 py-5">

//           <h1 className="text-3xl font-bold text-gray-800">
//             My Orders
//           </h1>

//           <p className="text-gray-500 mt-1">
//             View and manage all your previous orders.
//           </p>

//           {/* Search */}

//           <div className="relative mt-6">

//             <FiSearch
//               className="absolute left-4 top-1/2
//               -translate-y-1/2 text-gray-400"
//               size={20}
//             />

//             <input
//               type="text"
//               placeholder="Search by Order ID or Product..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full rounded-xl border
//               border-gray-200 bg-gray-50
//               py-3 pl-12 pr-4
//               outline-none
//               focus:border-pink-500
//               focus:bg-white"
//             />

//           </div>

//           {/* Filters */}

//           <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

//             {filters.map((filter) => (

//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`rounded-full px-5 py-2
//                 whitespace-nowrap
//                 text-sm font-semibold
//                 transition

//                 ${
//                   activeFilter === filter
//                     ? "bg-pink-600 text-white shadow"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >

//                 {filter}

//               </button>

//             ))}

//           </div>

//         </div>

//       </div>

//             {/* Orders */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <p className="text-sm text-gray-500">Total Orders</p>
//             <h2 className="text-2xl font-bold mt-2">
//               {orders.length}
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <p className="text-sm text-gray-500">Delivered</p>
//             <h2 className="text-2xl font-bold text-green-600 mt-2">
//               {
//                 orders.filter(
//                   (o) => o.status === "Delivered"
//                 ).length
//               }
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <p className="text-sm text-gray-500">Processing</p>
//             <h2 className="text-2xl font-bold text-orange-500 mt-2">
//               {
//                 orders.filter(
//                   (o) => o.status === "Processing"
//                 ).length
//               }
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <p className="text-sm text-gray-500">
//               Total Spent
//             </p>
//             <h2 className="text-2xl font-bold text-pink-600 mt-2">
//               ₹
//               {orders
//                 .reduce((sum, o) => sum + o.total, 0)
//                 .toLocaleString()}
//             </h2>
//           </div>

//         </div>

//         {/* Order List */}

//         {filteredOrders.length === 0 ? (

//           <div className="bg-white rounded-3xl shadow-sm py-24 text-center">

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
//               alt="No Orders"
//               className="w-44 mx-auto opacity-70"
//             />

//             <h2 className="mt-6 text-3xl font-bold">
//               No Orders Found
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Try changing your filters or search.
//             </p>

//           </div>

//         ) : (

//           <div className="space-y-6">

//             {filteredOrders.map((order) => (

//               <OrderCard
//                 key={order._id}
//                 order={order}
//                 onView={() =>
//                   navigate(`/orders/${order._id}`)
//                 }
//               />

//             ))}

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }


export default function Orders(){
    return(
        <></>
    )
}