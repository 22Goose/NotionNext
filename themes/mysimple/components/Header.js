// import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
// import CONFIG from '../config'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

/**
 * 网站顶部
 * @returns
 */
export default function Header (props) {
  // const { siteInfo } = props

  return (
        <header className="flex justify-start item-center px-6 bg-white h-16 dark:bg-black relative z-10">
            <div className="float-none inline-block py-3">
                <Link href='/'>
                    {/* 可使用一张单图作为logo */}
                    <div className='flex space-x-6 justify-center items-center'>
                        <div className='flex-col flex justify-center'>
                            <div className='text-2xl font-serif dark:text-white py-1  '>{siteConfig('AUTHOR')}</div>
                        </div>
                        {/* Social Media Link Button */}
                        <div className='flex justify-center'>
                            <SocialButton />
                        </div>
                    </div>
                </Link>
            </div>
        </header>
  )
}
