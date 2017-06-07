
export function getImageUrl(image) {
  return `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${image.id}/zoom/${image.fileName}?sh=512`;
}

export function getCoverImageUrl(images) {
  return getImageUrl(images[0]);
}
