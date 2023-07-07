import { Carousel } from 'antd'
import './CarouselPage.scss'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
export default function CarouselPage() {
  const items =[
    {
        img:'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        img:'https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

  ]
  return (
    <div>
      <Carousel autoplay>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.img}
                alt=""
                className="img"
              />
            </div>
          );
        })}
      </Carousel>
      <MdKeyboardArrowRight className="iconn" />
      <MdKeyboardArrowLeft className="iconb" />
    </div>
  );
}
