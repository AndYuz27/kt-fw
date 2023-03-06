import "./style.css"
export default function Portpholio() {



    
    const uslugi = [
        {
            id:"1",
            "img": "https://zv-prhost.ru/wp-content/uploads/f/0/e/f0eeb8badfd2f8c3fbf5a251ae4a14d0.jpeg",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
        },
        {
            id:"2",
            "img": "https://i.pinimg.com/originals/8e/79/8c/8e798cecb72fb78127f88cd2d6ca5da9.jpg",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
        },
        {
            id:"3",
            "img": "https://asp24.ru/images/companies/1/ubnt-ptp/94abf3730f2cb951dc664361a20dadda.jpg",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
        }
    ]

    const cards = () =>{
        return uslugi.map(element => {
            return (
              <div key={element.id} className="fffffffff_11">
                <div className="img_crd2" style={{backgroundImage:` url(${element.img})`}}></div>
                <p>{element.descr}</p>
              </div>
            );
          });
    }

    return( 
        <div className="Portpholio_cast">
            <p>Портфолио</p>
            <h2>Наша работа</h2>
            <div className="bg_aaaaaa">
            
            </div>
            <div className="crds2">
                {cards()}
            </div>
            <div class="ides-container">
  <div class="ideas">
    <div className="ldd">
    <h3>Your idea into <span>reality</span></h3>
    <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
    </div>
    

    <ul class="list">

        <p class="number">1</p>
        <h3>Your idea</h3>
        <p>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>



        <p class="number">2</p>
        <h3>Strategy meeting</h3>
        <p>This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>



        <p class="number">3</p>
        <h3>Agile and Scrum framework</h3>
        <p>In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>


        <p class="number">4</p>
        <h3>Your website goes live</h3>
        <p>The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>

    </ul>
  </div>
</div>
        </div>
    )
}