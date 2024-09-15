import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const [productName, setProductName] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [productPrice, setProductPrice] = useState('');


    const dispatch = useDispatch()

    const errorMessage =()=>{
        toast.error('🦄 Запольните данные', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const succses = () => {
        toast.success('🦄 Добавлено', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }


    function createProduct() {
        if (productName === '' || productUrl === '' || productPrice === '') {
            errorMessage()
        } else {
            const NewProduct = {
                id: Math.floor(Math.random()*100),
                name: productName,
                img: productUrl,
                price: productPrice,
                raiting: 5
            }
            dispatch({ type: 'CREATE_PRODUCT', payload: NewProduct })
            succses()
        }
        setProductUrl('')
        setProductName('')
        setProductPrice('')
    }

    return (
        <div>
            <div className="container">
                <div className="w-[50%] mx-auto my-[50px] flex items-center justify-center flex-col">
                    <div class="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            class="block py-2.5 px-0 w-full text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => setProductUrl(e.target.value)}
                            value={productUrl}
                        />
                        <label
                            class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Product URL...
                        </label>
                    </div>
                    <div class="relative z-0 w-full my-[50px] group ">
                        <input
                            type="text"
                            class="block py-2.5 px-0 w-full text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                        />
                        <label
                            class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Product Name...
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            class="block py-2.5 px-0 w-full text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => setProductPrice(e.target.value)}
                            value={productPrice} />
                        <label
                            class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Product text...
                        </label>
                    </div>
                    <button
                        type="button"
                        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                         dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => createProduct()}
                    >
                        Create product
                    </button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    )
}



export default Create
