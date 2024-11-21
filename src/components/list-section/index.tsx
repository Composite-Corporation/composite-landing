import { tw } from 'twind';

const foundersList = [
  {
    name: 'Mary Catherine Hanafee LaPlante',
    title: 'CEO & Co-Founder',
    description: `Mary Catherine, with a background in Economics from Harvard and experience 
    at the EPA and Environmental Defense Fund, drives Composite.ai\'s development of 
    innovative ESG solutions`,
    image: "images/mc-headshot.png" ,
  },
  {
    name: 'Leon Chen',
    title: 'CTO & Co-Founder',
    description: `Leon studied Computer Science at Harvard and brings engineering expertise 
    from top companies like Google, SpaceX, and Doordash to drive the technical innovation 
    behind our platform.`,
    image: "images/leon-headshot.png" 
  },
];

const ListSection = () => (
  <section className={tw(`overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-8 text-center`)}>
        <p className={tw(`mt-2 pb-8 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
          Meet the founders
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-0 items-center`)}>
        {foundersList.map((item, index) => (
          <div key={index} className={tw(`w-full lg:w-1/2 px-8`)}>
            <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0 flex flex-col items-center justify-center`)}>
              <img 
                src={item.image}
                className={tw(`w-64 h-64 rounded-full object-cover`)} 
              />
              <div className={tw(`px-4 text-center`)}>
                <h2 className={tw(`my-4 text-xl font-semibold`)}>{item.name}</h2>
                <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ListSection;
