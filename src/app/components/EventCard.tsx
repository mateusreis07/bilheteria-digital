"use client";
import Link from 'next/link';






export default function EventCard({ evento }) {
    return (
<>
<Link href={`/eventos/${evento.id}`}>
  <div className="overflow-hidden border bg-white rounded-lg hover:shadow-lg">
          <div className="relative">
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle
              </span>
            </div>
            <div className="block aspect-w-4 aspect-h-3">
              <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
            </div>
          </div>
      <div className="p-4">
          <span className="block mt-1 text-sm font-semibold tracking-wider text-gray-500 uppercase"> March 21, 2020 </span>
          <h1 className="mt-2 text-lg font-semibold">{evento.nome}</h1>
          <p className="mt-2 text-base text-gray-600">{evento.local}</p>
      </div>
  </div>
</Link>

</>
    );
  }
