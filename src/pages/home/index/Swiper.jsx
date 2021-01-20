import React,{forwardRef} from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import image1 from '../../../utils/img/src=http___p7.zbjimg.com_tianpeng_2015-11_14_product_5646e9c2ba730.jpg&refer=http___p7.zbjimg.jpeg'
import image2 from '../../../utils/img/src=http___ssr.suning.cn_shts_tpl_ds_09a37d2e2b704283ab17ddfd0127df6e_7f5cd1852f30415bb72da3252cd682a5_modules_sshop-designer-lunbotu990_assets_images_990.jpg&refer=http___ssr.suning.jpeg'
import image3 from '../../../utils/img/u=3778391416,1484804317&fm=26&gp=0.jpg'

const SwiperCompanent = forwardRef(() => {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image src={image1} style={{ width: "100%" }} />
        </SwiperItem>
        <SwiperItem>
          <Image src={image2} style={{ width: "100%" }} />
        </SwiperItem>
        <SwiperItem>
          <Image src={image3} style={{ width: "100%" }} />
        </SwiperItem>
      </Swiper>
    )
  }
)
export default SwiperCompanent