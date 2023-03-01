import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
    results: Array<{
        id: number
        price: number
        title: string
    }>
}


export const SearchResults = ({results}: SearchResultsProps) => {
    const totalPrice  = useMemo(()=> {
        return results.reduce((total, product) => {
            return total += product.price
        }, 0)
    }, [results])

    return (
        <div>
            {totalPrice}
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product}/>
                )
            })}
        </div>
    )
}