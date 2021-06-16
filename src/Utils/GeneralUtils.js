
export function fetchNotNullImagesFromProduct(product){
    return Object.keys(product).filter(
            key => key.startsWith("image")
    ).reduce((result, key) => {
        if(product[key]!==null){
                result.push(product[key]);
        }
        return result;
    },[]);
}