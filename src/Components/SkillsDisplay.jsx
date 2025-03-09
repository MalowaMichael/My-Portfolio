import React from 'react'


//mock data
const langs = [
  {id:0, name:"JavaScript"},
  {id:1, name: "TypeScript"},
  {id:2, name: "Next.js"},
  {id:3, name: "Ice.js"},
  {id:4, name: "Python"},
  {id:5, name: "MySQL"}
]

const frameworks = [
  {indx:0, name: "CSS5", category: "styling"},
  {indx:1, name: "Tailwind CSS", category: "styling"},
  {indx:2, name: "React Boostrap", category: "styling"},
  {indx:3, name: "React", category: "scripting"},
  {indx:4, name: "Node Js", category: "scripting"},
  {indx:5, name: "Jquery", category: "scripting"}
]
const SkillsDisplay = () => {

  //array for only the the category styling
  const stylingFrameworks = frameworks.filter(frame => frame.category === 'styling')
  const scriptingFrameworks = frameworks.filter(frame => frame.category === 'scripting')

  return (
    <div className='mt-[5%] m-auto w-[90%]'>
      <div id='languages-section' className='block'>
        <p className='text-center font-normal text-[25px] text-white antialiased'>Languages</p>
      <div id="languages" className='flex flex-wrap items-center justify-center gap-[5%]'>
        {langs.map((language) => {
          return (
            <div>
              <div key = {language.id}
                  className='antialiased text-[#4ef0ff] text-[18px] tracking-wide my-4 cursor-pointer'
                >{language.name}
                
                <input type='range' className='w-full accent-[#1dff42] h-[6px]'/>
                </div>
          </div>
          )
        })}
      </div>


      </div>



      <div id = "frameworks-section" className='block mt-8'>
        <p className='text-center font-normal text-[25px] text-white antialiased'>Frameworks</p>
          <div id = "frameworks" className='flex justify-between'>
               {/**CSS Frameworks */}
               <div className='p-2 bg-transparent w-[50%]'>
                  <p className='text-xl text-center font-medium text-white pb-4 '>CSS Frameworks</p>
                    {stylingFrameworks.map((style) =>{
                     return (
                      <ul className='inline-flex m-auto p-8 w-l m-auto bg-transparent'>
                        <li key={style.indx} className='text-white text-center'>
                        {style.name}
                        <input type= "range" className='accent-[#1dff42] h-[4px] w-full'/>

                        </li>
                      </ul>
                     )
                    })}
                </div>         
            
            {/**Javascript Frameworks */}
            <div className='p-2 bg-transparent w-[50%]'>
              <p className='text-xl text-center font-medium text-white pb-4 '>JavaScript Frameworks</p>

              {scriptingFrameworks.map((style) =>{
                return (
                  <div className='flex m-auto p-8 w-l bg-transparent float-right'>
                    <div key = {style.indx} className=' text-white' >
                      {style.name}
                      <input type= "range" className='accent-[#1dff42] h-[4px] w-full'/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </div>
    </div>
  )
}

export default SkillsDisplay