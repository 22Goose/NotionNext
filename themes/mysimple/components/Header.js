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
        <header className="text-center justify-between items-center px-6 bg-white h-40 dark:bg-black relative z-10">
            <div className="float-none inline-block py-12">
                <Link href='/'>
                    {/* 可使用一张单图作为logo */}
                    <div className='flex space-x-6'>
                        <div className='flex-col flex justify-center'>
                            <div className='text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200'>{siteConfig('AUTHOR')}</div>
                        </div>
                    </div>
                </Link>
                {/* Social Media Link Button */}
                <div className='flex justify-center'>
                <SocialButton />
                </div>
            </div>
        </header>
  )
}
