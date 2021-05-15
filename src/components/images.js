// function importAll (r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

require.context('../assets/art',false, /\.(png|jpe?g|svg)$/);

const images = [
     { id :0, src: '../assets/art/CanalCanvas.jpg', title: "Canal Canvas", description: "One of my favorite pieces from College"}
];
export default images;