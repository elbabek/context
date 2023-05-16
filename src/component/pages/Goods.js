import { Link } from "react-router-dom"
const Goods = ()=>{
    const goods = [
        {
            id:1,
            name:'Iphone 14 pro max'
        },
        {
        id: 2,
        name: 'Xiaomi note 10'
        },
         {
            id: 3,
            name: 'Samsung S22 ultra'
        }
    ]
    return(
        <div>
            Телефоны
            <div>
            {
                goods.map(item=>(
                    <>
                        <Link to={`/goods/${item.id}/${item.name}`} key={item.id}> {item.name}
                     
                    </Link>
                    <br/>
                    </>
                ))
            }
            </div>
        </div>
    )
}
export default Goods