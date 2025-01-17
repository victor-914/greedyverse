import './home.css';
import './home2.css';
import img_07b2fb6 from '../img/team1.jpeg';
import img_561932f from '../img/team2.jpeg';
import img_dbb7bef from '../img/team3.jpeg';

import img_d59cb2a from '../img/team4.jpeg';
import img_e2a0668 from '../img/team5.jpeg';


const Team = () => {

    return(
      <div className="container-fluid bg-black-1 p-t-150 p-b-120" data-v-107fd072="">
        <div data-v-107fd072=""><h1 className="heading-5 burbank text-white fw-bold text-center text-uppercase" data-v-107fd072="">
        CORE TEAM
    </h1></div> 

    <div className="p-5 d-flex flex-row text-white nft-list justify-content-lg-center gap-40" data-v-107fd072="">

        
        
    <div data-v-107fd072=""><div className="position-relative mx-auto" data-v-107fd072=""><img src={img_07b2fb6} alt="nft-1.png" className="image-blur nft-img" data-v-107fd072="" /> <img src={img_07b2fb6} alt="nft-1.png" className="position-relative nft-img lb_50X50_size lb_img_border_curv"  data-v-107fd072="" /></div> <div className="fw-bold pt-4" data-v-107fd072=""><p data-v-107fd072="">Franklin  C</p><p data-v-107fd072="">Co-Founder/COO</p></div></div>
    <div data-v-107fd072=""><div className="position-relative mx-auto" data-v-107fd072=""><img src={img_561932f} alt="nft-2.png" className="image-blur nft-img" data-v-107fd072="" /> <img src={img_561932f} alt="nft-2.png" className="position-relative nft-img lb_50X50_size lb_img_border_curv"  data-v-107fd072="" /></div> <div className="fw-bold pt-4" data-v-107fd072=""><p data-v-107fd072="">Lambert N</p><p data-v-107fd072="">Co-Founder/CTO</p></div></div>
    <div data-v-107fd072=""><div className="position-relative mx-auto" data-v-107fd072=""><img src={img_dbb7bef} alt="nft-3.png" className="image-blur nft-img" data-v-107fd072="" /> <img src={img_dbb7bef} alt="nft-3.png" className="position-relative nft-img lb_50X50_size lb_img_border_curv"  data-v-107fd072="" /></div> <div className="fw-bold pt-4" data-v-107fd072=""><p data-v-107fd072="">Taofiq I</p><p data-v-107fd072="">CMO</p></div></div>
    <div data-v-107fd072=""><div className="position-relative mx-auto" data-v-107fd072=""><img src={img_d59cb2a} alt="nft-4.png" className="image-blur nft-img" data-v-107fd072="" /> <img src={img_d59cb2a} alt="nft-4.png" className="position-relative nft-img lb_50X50_size lb_img_border_curv"  data-v-107fd072="" /></div> <div className="fw-bold pt-4" data-v-107fd072=""><p data-v-107fd072="">Peter O</p><p data-v-107fd072="">Project Manager</p></div></div>
    
    <div data-v-107fd072=""><div className="position-relative mx-auto" data-v-107fd072=""><img src={img_e2a0668} alt="nft-5.png" className="image-blur nft-img" data-v-107fd072="" /> <img src={img_e2a0668} alt="nft-5.png" className="position-relative nft-img lb_50X50_size lb_img_border_curv"  data-v-107fd072="" /></div> <div className="fw-bold pt-4" data-v-107fd072=""><p data-v-107fd072="">Binh D</p><p data-v-107fd072="">Lead Animator</p></div></div>

    
    
    </div> 
    
    
    </div>
        )
   
}
export default Team;