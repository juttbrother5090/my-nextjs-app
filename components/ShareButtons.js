import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
} from 'react-share';
import { BsShare } from 'react-icons/bs';

export default function ShareButtons({ url, title, image }) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <BsShare className="text-purple-600 text-xl" />
        <span className="text-lg font-bold text-gray-800">
          Share This Blessing
        </span>
      </div>
      
      <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
        <FacebookShareButton url={url} quote={title} className="hover:scale-110 transition-transform duration-300">
          <FacebookIcon size={44} round />
        </FacebookShareButton>
        
        <TwitterShareButton url={url} title={title} className="hover:scale-110 transition-transform duration-300">
          <TwitterIcon size={44} round />
        </TwitterShareButton>
        
        <WhatsappShareButton url={url} title={title} className="hover:scale-110 transition-transform duration-300">
          <WhatsappIcon size={44} round />
        </WhatsappShareButton>
        
        <LinkedinShareButton url={url} title={title} className="hover:scale-110 transition-transform duration-300">
          <LinkedinIcon size={44} round />
        </LinkedinShareButton>

        <PinterestShareButton url={url} media={image} description={title} className="hover:scale-110 transition-transform duration-300">
          <PinterestIcon size={44} round />
        </PinterestShareButton>
      </div>
    </div>
  );
}