import Image from 'next/image'
import authorImage from '@/public/images/authors/steph-kohlanta.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Stéphane.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a web developer based in Montreal, Canada. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
      </div>
      <div className='relative'>
        <Image
        //   className='flex-1 rounded-lg grayscale'
          className='flex-1 rounded-s-full'
          src={authorImage}
          alt='Stéphane Norng'
          width={250}
          height={250}
          priority
        />
      </div>
    </section>
  )
}