import React from 'react';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Projects = () => {
  const code1="
  <h1></h1>
  ";

  return (

    <div className='container place-items-center py-0 h-fit min-w-full'>
      <div className='py-[5%] px-[10%]'>
        <h1 className='text-white bg-none 
        font-semibold drop-shadow-2xl text-6xl'>Works and Projects</h1>
        <br></br>
        <h1 className='text-white break-words'>So the thing is, i don't really have a projects for now.</h1>
        <h1 className='text-white break-words'>I'll show you my school assignment instead. No choice ૮ ˙Ⱉ˙ ა rawr!</h1>
      </div> 
      <div className='flex-1 w-full py-[5%] px-[10%]'>
        <div className='flex flex-col '>
          <div className='flex break-words max-w-[50%] min-w-[200px] rounded-xl overflow-hidden'>
            <pre>
            <code>
            <SyntaxHighlighter language='cpp' style={atomOneDark}>
              {code1}
            </SyntaxHighlighter>
            </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Projects