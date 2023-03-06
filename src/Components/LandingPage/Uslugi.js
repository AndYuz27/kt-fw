import "./style.css"
export default function Uslugi() {

    const uslugi = [
        {
            id:"1",
            "img": "https://win98icons.alexmeub.com/icons/png/channels-2.png",
            "title_uu": "подключение к спутниковому ТВ",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/watch?v=70IHS2vTGDw"
        },
        {
            id:"2",
            "img": "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-4.png",
            "title_uu": "подключение к интернету при помощи мобильной связи",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/shorts/ZSJgqAvqtOQ"
        },
        {
            id:"3",
            "img": "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-4.png",
            "title_uu": "подключение к интернету при помощи мобильной связи",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/shorts/ZSJgqAvqtOQ"
        },
        {
            id:"4",
            "img": "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-4.png",
            "title_uu": "подключение к интернету при помощи мобильной связи",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/shorts/ZSJgqAvqtOQ"
        },
        {
            id:"5",
            "img": "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-4.png",
            "title_uu": "подключение к интернету при помощи мобильной связи",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/shorts/ZSJgqAvqtOQ"
        },
        {
            id:"6",
            "img": "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-4.png",
            "title_uu": "подключение к интернету при помощи мобильной связи",
            "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!",
            "link": "https://www.youtube.com/shorts/ZSJgqAvqtOQ"
        },
        
        
    ]

    const cards = () =>{
        return uslugi.map(element => {
            return (
              <div key={element.id} className="fffffffff">
                <img src={element.img}/>
                <h3>{element.title_uu}</h3>
                <p>{element.descr}</p>
                <a href={element.link}>Узнать больше</a>
              </div>
            );
          });
    }

    return(
        <div className="jjjggg">
            <h2>Наши услуги</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore!</p>
            <div className="ljg">{cards()}</div>
            
        </div>
    )

}