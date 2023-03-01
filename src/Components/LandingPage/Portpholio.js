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
            <div className="btns_nav">
            
            </div>
            <div className="crds2">
                {cards()}
            </div>
        </div>
    )
}