import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const OrderAll = ({ item }) => {
    const [order, setOrder] = useState({})
    console.log(item);
    useEffect(() => {
        fetch(`https://travel.iprogrammer.uz/services/get/${item.service_id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => {
                setOrder(data);
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <div className="row row2 mt-4">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                    <p className="text-center text-white p-3">Nomi</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                    <p className="text-center text-primary p-3">Narxi</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                    <p className="text-center text-white p-3">Sanasi</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                    <p className="text-center text-primary p-3">To'lov</p>
                </div>
            </div>
            <div className="row row2 mt-3">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                    <p className="text-center text-white p-3">{order.name}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                    <p className="text-center text-primary p-3">{order.price}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                    <p className="text-center text-white p-3">{item.birth_day}</p>
                </div>


                {item.is_pay == true ?
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-success border">
                        <p className="text-center text-white p-3">To'lov qilingan</p>
                    </div> :
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-danger border">
                        <p className="text-center text-white p-3">
                            {item.pay_id ? 
                            <a target={"_blank"} className="btn btn-dark" href={`https://checkout.paycom.uz/${item.pay_id}`}>To'lov qilish</a> : "to'lov qilinmagan"}    
                        </p>
                    </div>}
            </div>
            <br />
            <br />
        </>
    )
}