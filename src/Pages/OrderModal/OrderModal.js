// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const OrderModal = ({ orders, setOrders}) => {
//     const { _id, name, price } = orders;
//     const [user, loading] = useAuthState(auth);
//     const handleOrder = event => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const phone = event.target.phone.value;
//         const price = event.target.price.value;
//         console.log(email, phone, price)
//         const order = {
//             orderId: _id,
//             order: name,
//             price: price,
//             useremail: user.email,
//             username: user.displayName,
//             phone: event.target.phone.value
//         }
//         fetch('http://localhost:5000/order', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(order)
//         })
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data);
//             setOrders(null)
//         })
        
//     }
//     return (
//         <div>
//             <input type="checkbox" id="order-modal" class="modal-toggle" />
//             <div class="modal modal-bottom sm:modal-middle">
//                 <div class="modal-box">
//                     <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 class="font-bold text-lg">Order For: {name}</h3>
//                     <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
//                         <input type="text" name="name" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
//                         <input type="text" name="phone" placeholder="Your Phone" class="input input-bordered w-full max-w-xs" />
//                         <input type="email" name="email" value={user?.email} class="input input-bordered w-full max-w-xs" />
//                         <input type="text" name="price" value={price} class="input input-bordered w-full max-w-xs" />
//                         <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderModal;