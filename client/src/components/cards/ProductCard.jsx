import { Link } from "react-router-dom"
import { goToProductDetail } from "../../AppRoute"
import { formatRupiah } from "../../utility/Format"

/* eslint-disable react/prop-types */
function ProductCard({data}) {
    return (
        <div className="w-3/12 border grid-cols cols-1">
            <Link to={goToProductDetail(data._id)}>
                <img className="h-10/12 w-full object-cover" src={data.list_picture[0]} alt={`Picture of ${data.name}`} />
            </Link>
            <div className="text-center py-5">
                <p className="font-inter font-bold">{data.name}</p>
                <p className="font-inter uppercase">{formatRupiah(data.price)}</p>
            </div>
            <Link>
                <div className="text-center mb-5">
                    <div className="inline bg-black py-2 px-5 rounded-sm text-white">
                        Add to Cart
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard