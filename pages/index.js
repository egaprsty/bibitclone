import React from 'react';
import Image from 'next/image';


function Home() {
  return (
    <div className="sm:px-64 pt-5">
        <div>
          <nav className="flex justify-between">
            <Image 
              src="/bibitlogo.jpg"
              width={120}
              height={80}
            />
            <div className="pt-8">
            <img className="h-5 w-5" src="https://img.icons8.com/android/24/000000/search.png"/>
            </div>
          </nav>
        </div>

        <div className="border-2 border-black-200">
          <div className="ml-5 mt-1 font-lg text-gray-400">
            Portfolio
          <br/>      
      </div>

      <div className="flex justify-between">
            <div className="ml-5">
            Rp 900.925
            </div>

          <div className="mr-5">
            <img className="w-4" src="/kunci.jpg" />
          </div>
          </div>

        <div className="flex justify-between">
          <div className="ml-5 font-lg text-gray-400 mt-1">
          Keuntungan
          </div>

          <div className="font-lg text-gray-400 mr-5">
            Imbal hasil
          </div>
        </div>

        <div className="flex justify-between">
          <div className="ml-5 font-lg text-green-600">
            Rp 3,725
          </div>

          <div className="mr-5 font-lg text-green-600">
            +0.28%
          </div>
        </div>

        <hr className="mt-2" />

      <div className="flex justify-between">
        <div className="ml-5 text-green-600 font-lg mt-1 mb-1">
          Lihat Portfolio
        </div>

        <div className="mr-5 ">
          ➢ 
        </div>
      </div>
        </div>
      <br/>

<div className="flex">
    <div className="border-2 border-black-200 w-80">
      <div className="flex justify-between">
          <div className="ml-5 mt-2">
          <h4 className="font-bold">Tuku Mobil</h4>
          <h1 className="font-lg text-gray-400">3 Reksadana</h1>
          </div>

          <div className="mr-5 mt-3">
            <img className="w-8" src="/ayam.png" />
          </div>
        </div>
      <br/>

      <div className="flex justify-between">
        <div className="ml-5">
          <h4 className="font-lg text-gray-400">Investasi</h4>
          <h5>Rp 900.725</h5>
        </div>

        <div>
          <h4 className="font-lg text-gray-400 mr-5">Keuntungan</h4>
          <h5>Rp 2,550</h5>
        </div>
        </div>

        <hr className="mt-2" />

        <h1 className="text-center font-lg text-green-600 mt-2 mb-2">Top Up</h1>        
      </div>

      <div className="border-2 border-black-200 w-80 ml-5">
      <div className="flex justify-between">
          <div className="ml-5 mt-2">
          <h4 className="font-bold">Dana Pensiun</h4>
          <h1 className="font-lg text-gray-400">0 Reksadana</h1>
          </div>
          <div className="mr-5 mt-3">
            <img className="w-8" src="/kursi.png" />
          </div>
        </div>
      <br/>

      <div className="flex justify-between">
        <div className="ml-5">
          <h4 className="font-lg text-gray-400">Investasi</h4>
          <h5>Rp 0</h5>
        </div>

        <div>
          <h4 className="font-lg text-gray-400 mr-5">Keuntungan</h4>
          <h5>Rp 0</h5>
        </div>
        </div>

        <hr className="mt-2" />

        <h1 className="text-center font-lg text-green-600 mt-2 mb-2">Top Up</h1>        
      </div>

    <div className="ml-5">
      <img className="w-12 mt-10 ml-10" src="/plus.png" />
      <h1 className="mt-2 ml-2 font-lg text-green-600">Tambah Portfolio</h1>
    </div>   
</div>

    <br/>

      <div className="border-2 border-black-200">
        <div className="mt-2 ml-5 flex">
          <img className="w-8" src="/robo.jpg" />
          <h1 className="mt-1 ml-2 font-bold">Robo</h1>
        </div>
      
      <br/>

        <div className="font-bold text-xl ml-5">
          <h1>Rekomendasi robo kamu</h1>
        </div>
        <div className="ml-5 mt-5">
          <h4>Langsung beli 3 reksa dana sesuai dengan profil kamu</h4>
        </div>
        <div className="flex">
        <div>
          <img className="w-8 ml-5 mt-5" src="/kursi.png" />
        </div>
        <div className="mt-5 ml-2">
          <h1>Dana Pensiun</h1>
        </div>
        </div>
      </div>
      

    </div> 
  )
 }
export default Home;