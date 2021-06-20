import React from 'react';
import Image from 'next/image';


function Home() {
  return (
    <div className="sm:px-64 pt-5">
      <title>Bibit Clone</title>
        <div>
          <nav className="flex justify-between mr-5">
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
          <div className="ml-5 mt-1 font-lg text-gray-400 text-sm">
            Portfolio
          <br/>      
      </div>
      <div className="flex justify-between">
            <div className="ml-5">
            Rp 21.927.520
            </div>
          <div className="mr-5">
            <img className="w-4" src="/kunci.jpg" />
          </div>
          </div>

        <div className="flex justify-between">
          <div className="ml-5 font-lg text-gray-400 mt-1 text-sm">
          Keuntungan
          </div>
          <div className="font-lg text-gray-400 mr-5 text-sm">
            Imbal hasil
          </div>
        </div>

        <div className="flex justify-between">
          <div className="ml-5 font-lg text-green-600">
            Rp 870,520
          </div>
          <div className="mr-5 font-lg text-green-600">
            +1.28%
          </div>
        </div>

        <hr className="mt-2" />

      <div className="flex justify-between">
        <div className="ml-5 text-green-600 font-lg mt-1 mb-1 text-sm">
          Lihat Portfolio
        </div>
        <div className="mr-5 mt-1">
          ➢ 
        </div>
      </div>
        </div>
      <br/>

<div className="flex">
    <div className="border-2 border-black-200 w-80">
      <div className="flex justify-between">
          <div className="ml-5 mt-2">
          <h4 className="font-bold text-sm">Tuku Mobil</h4>
          <h1 className="font-lg text-gray-400 text-sm">3 Reksadana</h1>
          </div>
          <div className="mr-5 mt-3">
            <img className="w-8" src="/ayam.png" />
          </div>
        </div>
      <br/>

      <div className="flex justify-between">
        <div className="ml-5">
          <h4 className="font-lg text-gray-400 text-sm">Investasi</h4>
          <h5>Rp 21.927.520</h5>
        </div>
        <div>
          <h4 className="font-lg text-gray-400 mr-5 text-sm">Keuntungan</h4>
          <h5>Rp 870,520</h5>
        </div>
        </div>

        <hr className="mt-2" />

        <h1 className="text-center font-lg text-green-600 mt-2 mb-2">Top Up</h1>        
      </div>

      <div className="border-2 border-black-200 w-80 ml-5">
      <div className="flex justify-between">
          <div className="ml-5 mt-2">
          <h4 className="font-bold text-sm">Dana Pensiun</h4>
          <h1 className="font-lg text-gray-400 text-sm">0 Reksadana</h1>
          </div>
          <div className="mr-5 mt-3">
            <img className="w-8" src="/kursi.png" />
          </div>
        </div>
      <br/>

      <div className="flex justify-between">
        <div className="ml-5">
          <h4 className="font-lg text-gray-400 text-sm">Investasi</h4>
          <h5>Rp 0</h5>
        </div>
        <div>
          <h4 className="font-lg text-gray-400 mr-5 text-sm">Keuntungan</h4>
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
      
      

        <div className="font-bold text-xl ml-5">
          <h1 className="mt-4">Rekomendasi robo kamu</h1>
        </div>
        <div className="ml-5 mt-3">
          <h4 className="text-sm">Langsung beli 3 reksa dana sesuai dengan profil kamu</h4>
        </div>

        <br/>
        <br/>

    <div className="px-8">
      <div className="border-2 border-gray-200">
        <div className="flex justify-between ">
        <div className="flex">
          <img className="w-8 h-8 ml-5 mt-5" src="/kursi.png" />
          <div className="mt-3 ml-2">
              <h1 className="font-bold">Dana Pensiun</h1>
              <p className="text-sm">Profil Resiko: 1.5</p>
          </div>
        </div>
        
        <div className="flex">
          <h4 className="mr-5 mt-5 text-green-600">Ubah</h4>
        </div>
      </div>
      <hr className="mt-2"/>

      <div className="flex justify-between">
          <div className="flex ml-10">
            <img src="/sucor.jpg" className="w-8 h-8 mt-4" />
            <div className="ml-3 mt-2">
              <h4 className="font-bold text-sm">Pasar Uang</h4>
              <h5 className="text-gray-400 text-sm">Sucorinvest Money Market fund</h5>
            </div>
          </div>
            
            <div className="flex">
              <h4 className="mr-5 mt-4">70%</h4>
            </div>
        </div>
        <hr/>

        <div className="flex justify-between">
          <div className="flex ml-10">
            <img src="/ayam.png" className="w-8 h-8 mt-4" />
            <div className="ml-3 mt-2">
              <h4 className="font-bold text-sm">Obligasi</h4>
              <h5 className="text-gray-400 text-sm">Manulife Obligasi Negara Indonesia</h5>
            </div>
          </div>
            
            <div className="flex">
              <h4 className="mr-5 mt-4">20%</h4>
            </div>
        </div>
        <hr/>
        <div className="flex justify-between">
          <div className="flex ml-10">
            <img src="/kunci.jpg" className="w-8 h-8 mt-4" />
            <div className="ml-3 mt-2">
              <h4 className="font-bold text-sm">Saham</h4>
              <h5 className="text-gray-400 text-sm">Sucorinvest Equity Fund</h5>
            </div>
          </div>
            
            <div className="flex">
              <h4 className="mr-5 mt-4">10%</h4>
            </div>
        </div>
        <hr/>

        <div className="ml-4 mr-4 mt-5 mb-5 bg-green-600">
          <h1 className="text-center pt-2 pb-2 text-white font-bold">Investasi Sekarang</h1>
        </div>

    </div>

      

        

        </div>

      <br/>
      <br/>

      </div>  
      
     <br/>
     <br/> 

    </div> 
  )
 }
export default Home;