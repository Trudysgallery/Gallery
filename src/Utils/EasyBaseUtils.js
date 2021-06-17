
const EB_PRODUCTS_TABLE = "ARTWORK";
const EB_PRODUCT_IMAGES_TABLE = "PRODUCTIMAGES";
const QUERY_TIMEOUT=5000;

function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject(new Error("Failed to find product"));
      }, ms);
    });
  }

async function queryProductPromise(db, e, productId){
    return await db(EB_PRODUCTS_TABLE).return().where(e.eq("id",productId)).one();
}

export async function queryProduct(db, e, productId)  {
    return await Promise.race([timeout(QUERY_TIMEOUT),queryProductPromise(db,e,productId)]);
}

async function queryProductImagesPromise(db,e,productId){
  return await db(EB_PRODUCT_IMAGES_TABLE).return().where(e.eq("id",productId)).one();
}

export async function queryProductImages(db, e, productId)  {
  return await Promise.race([timeout(QUERY_TIMEOUT),queryProductImagesPromise(db,e,productId)]);
}


export async function queryGallery(db) {
    return await db(EB_PRODUCTS_TABLE).return().all();
}

export function fetchProductFromData(galleryData,productId) {
    const productFromUrl = galleryData.find(
        x => x.id===productId 
    );
    return productFromUrl;
}
