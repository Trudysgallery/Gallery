
const EB_PRODUCTS_TABLE = "ARTWORK";

export async function queryProduct(db, e, productId) {
    console.log("in EasyBaseUtils.queryProduct with pid: ", productId);
    // Consider setting a timeout and rendering a placeholder product if url is wrong
    const queriedProduct = await db(EB_PRODUCTS_TABLE).return().where(e.eq("id",productId)).one();
    console.log("queriedProduct: ", queriedProduct);
    return queriedProduct;
}

export async function queryGallery(db) {
    console.log("in EasyBaseUtils.queryGallery");
    return await db(EB_PRODUCTS_TABLE).return().all();
}

export function fetchProductFromData(galleryData,productId) {
    console.log("in EasyBaseUtils.fetchProductFromData");
    const productFromUrl = galleryData.find(
        x => x.id===productId 
    );
    console.log("productFromUrl: ", productFromUrl);
    return productFromUrl;
}
