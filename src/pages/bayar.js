import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import gopay from "../component/assets/gopay.png";
import bni from "../component/assets/bni.png";
import shopee from "../component/assets/shopee.png";

export default function Bayar() {

    const data = {
        total: 50.000
    }

    const [total, setTotal] = useState(data);

    const Bayar = [
        {
            img : gopay,
            alt : "gopay"
        },
        {
            img : bni,
            alt : "bni"
        },
        {
            img : shopee,
            alt : "shopee"
        },
    ]
    // const Bayar = [
    //     {
    //         img : "https://alfamart.co.id/storage/page/February2022/dRNzzS17nfiafonStDGR.png",
    //         alt : "gopay"
    //     },
    //     {
    //         img : "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/BankNegaraIndonesia46-logo.svg/800px-BankNegaraIndonesia46-logo.svg.png",
    //         alt : "bni"
    //     },
    //     {
    //         img : "https://www.siampay.com/en/images/shopeepay-img1.png",
    //         alt : "shopee"
    //     },
    // ]


    return(
        <div className=" absolute flex justify-center items-center bg-black opacity-90 h-screen w-screen">
            
            {/* page */}
            <div className=" flex flex-col space-y-5 p-5 bg-white rounded-2xl w-1/2">

                {/* header, close button */}
                <div className=" flex items-center justify-between">
                    <p className=" text-4xl font-bold text-[#3B82F6]">Pembayaran</p>
                    <div className=" flex items-center rounded-lg shadow-lg p-2">
                        <IoClose/>
                    </div>
                </div>

                <div className="flex flex-col space-y-5 p-3 bg-slate-200 rounded-2xl">
                    <p className=" text-xl font-semibold">Total</p>
                    <p className="text-4xl font-bold">Rp.50.000</p>
                    <p className=" text-lg text-[#4B4B4B]">Order Id</p>
                </div>

                <p className=" text-2xl font-bold text-[#4B4B4B]">Metode Pembayaran</p>

                <div className="flex flex-col space-y-5 w-full">
                    {Bayar.map((item) => (
                        <div className="flex justify-between items-center rounded-lg p-5 shadow-lg">
                            <img src={item.img} alt={item.alt} className=" w-1/5"/>
                            <div className=" scale-150">
                                <MdKeyboardArrowRight/>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

        </div>
    );
}