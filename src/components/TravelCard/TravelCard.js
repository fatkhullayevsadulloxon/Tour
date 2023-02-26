import { Link } from "react-router-dom"

export const TravelCard = ({item}) => {
    return  (
        <>
                <Link to={`travel/${item.id}`} class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="traveling-box">
                        <i><img src={item.img} alt="icon" width={100} height={100}/></i>
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}$</p>
                        <div class="read-more">
                            <a class="btn-read" href="#!">Band qilib qo'yish</a>
                        </div>
                    </div>
                </Link>
           
        </>
    )
}