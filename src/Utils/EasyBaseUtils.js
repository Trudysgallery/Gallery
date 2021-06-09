
const EB_PRODUCTS_TABLE = "ARTWORK";
const QUERY_TIMEOUT=5000;

function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject(new Error("Failed to find product"));
      }, ms);
    });
  }

export async function queryProductPromise(db, e, productId){
    return await db(EB_PRODUCTS_TABLE).return().where(e.eq("id",productId)).one();
}

export async function queryProduct (db, e, productId)  {
    console.log("in EasyBaseUtils.queryProduct with pid: ", productId);
    return await Promise.race([timeout(QUERY_TIMEOUT),queryProductPromise(db,e,productId)]);
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
