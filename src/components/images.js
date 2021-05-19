import CanalCanvas from '../assets/art/CanalCanvas.jpg';
import CorkHeart from '../assets/art/CorkHeart.jpg';
import Harley from '../assets/art/Harley.jpg';
import HulkPot from '../assets/art/HulkPot.jpg';
import PlainPots from '../assets/art/PlainPots.jpg';
import RocksCounter from '../assets/art/RocksCounter.jpg';
import SuperHeroes from '../assets/art/SuperHeroes.jpg';
import Wolverine from '../assets/art/Wolverine.jpg';


// function importAll (r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

//require.context('../assets/art',false, /\.(png|jpg|svg)$/);

const images = [
     { id :0, src: CanalCanvas, title: "Canal Canvas", description: "One of my favorite pieces from College"},
     { id :1, src: CorkHeart, title: "CorkHeart", description: "One of my favorite pieces from College"},
     { id :2, src: Harley, title: "Harley", description: "One of my favorite pieces from College"},
     { id :3, src: HulkPot, title: "HulkPot", description: "One of my favorite pieces from College"},
     { id :4, src: PlainPots, title: "PlainPots", description: "One of my favorite pieces from College"},
     { id :5, src: RocksCounter, title: "RocksCounter", description: "One of my favorite pieces from College"},
     { id :6, src: SuperHeroes, title: "SuperHeroes", description: "One of my favorite pieces from College"},
     { id :7, src: Wolverine, title: "Wolverine", description: "One of my favorite pieces from College"}
];
export default images;