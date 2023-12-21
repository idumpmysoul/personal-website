import React from 'react';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Projects = () => {
  const code1='#include <stdio.h>\n\
\n\
  int main (void){\n\
    float a;\n\
    float b;\n\
    \n\
    scanf("%f %f", &a,&b);\n\
    float luasA = a*a;\n\
    float luasB = 3.14*(b*b);\n\
    \n\
    //printf ("%f %f\\n", luasA, luasB);\n\
    if (luasA>luasB){\n\
      printf("A");\n\
    }\n\
    else if (luasA<luasB){\n\
      printf("B");\n\
    }\n\
    else printf("BEBAS");\n\
    \n\
    return 0;\n\
  }';

  return (

    <div className='container place-items-center py-0 h-fit min-w-full'>
      <div className='py-[5%] px-[10%]'>
        <h1 className='text-white bg-none text-center font-semibold drop-shadow-2xl text-6xl'>Works and Projects</h1>
        <br></br>
        <h1 className='text-white text-center break-words'>So the thing is, i don't really have a projects for now.</h1>
        <h1 className='text-white text-center break-words'>I'll show you my college assignment instead. No choice ૮ ˙Ⱉ˙ ა rawr!</h1>
        <h1 className='text-white text-center break-words'>Let's study with me, hehe.</h1>
      </div> 
      <div className='flex-1 items-center -mt-10 w-full py-[5%] px-[10%]'>
        <h1 className='text-5xl font-bold text-white mb-[2%]'>Modul 1 : Dasar Bahasa C</h1>
        <div className='flex sm:flex-row mobsm:flex-col'>
          <div className='container break-words mobsm:mt-[10%] sm:w-[50%] rounded-xl overflow-hidden mr-[2%]'>
            <SyntaxHighlighter language={cpp} style={atomOneDark}>
              {code1}
            </SyntaxHighlighter>
          </div>
          <div className='container break-words mobsm:mt-[10%] sm:w-[50%] px-[2%] py-[2%] overflow-hidden bg-slate-100 rounded-xl'>
            <h1 className='font-semibold'>Case Study</h1>
            <p>
            Pak Diluc lagi-lagi ditawarkan 2 lahan (A dan B), dimana lahan A berbentuk persegi dan lahan B berbentuk
            lingkaran. Diketahui pula harga dari kedua lahan tersebut sama. Pak Diluc hanya diberitahukan panjang
            sisi dari lahan A dan panjang jari-jari dari Lahan B. Bantulah Pak Diluc untuk memilih lahan mana yang
            lebih menguntungkan bagi Pak Diluc. (Asumsikan lebih besar luas lahannya lebih beruntung). (Asumsikan
            juga phi = 3.14)<br></br>
            <br></br>
            <h1 className='font-semibold'>Format Input :</h1>
            ● Barisan pertama berisi panjang Lahan A<br></br>
            ● Barisan kedua berisi jari-jari Lahan B<br></br>
            <br></br>
            <h1 className='font-semibold'>Format Output :</h1>
            Program mencetak Lahan mana yang lebih Luas. Apabila luas dari kedua lahan sama besar, cukup tampilkan "BEBAS" 
            </p>
          </div>
        </div>
        <h1 className='text-5xl font-bold text-white mt-[5%] mb-[2%]'>Modul 2 : Dasar Bahasa C</h1>
        <div className='flex sm:flex-row mobsm:flex-col'>
          <div className='container break-words mobsm:mt-[10%] sm:w-[50%] rounded-xl overflow-hidden mr-[2%]'>
            <SyntaxHighlighter language={cpp} style={atomOneDark}>
              {code1}
            </SyntaxHighlighter>
          </div>
          <div className='container break-words mobsm:mt-[10%] sm:w-[50%] px-[2%] py-[2%] overflow-hidden bg-slate-100 rounded-xl'>
            <h1 className='font-semibold'>Case Study</h1>
            <p>
            Hari ini anda mendapat undangan untuk mengikuti suatu permainan oleh Tuan X. Pada permainan tersebut,
            anda berhak untuk berbelanja barang sebanyak mungkin dari sebuah toko. Tuan X yang akan membayar
            seluruh belanjaan anda sampai nominal seluruh belanjaan anda mencapai batas penggunaan kartu kredit
            Tuan X dan batas maksimum barang yang dapat dibeli. Tentukan seberapa banyak belanjaan anda yang dibiayai oleh Tuan X.<br></br>
            <br></br>
            <h1 className='font-semibold'>Format Input :</h1>
            ● Barisan pertama berisi panjang Lahan A<br></br>
            ● Barisan kedua berisi jari-jari Lahan B<br></br>
            <br></br>
            <h1 className='font-semibold'>Format Output :</h1>
            Program mencetak Lahan mana yang lebih Luas. Apabila luas dari kedua lahan sama besar, cukup tampilkan “BEBAS
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Projects