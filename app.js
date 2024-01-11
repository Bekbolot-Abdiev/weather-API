// var dayOfWeek = 6;
// var dayName;

// switch (dayOfWeek) {
//     case 1:
//         dayName = "Понедельник";
//         break;
//     case 2:
//         dayName = "Вторник";
//         break;
//     case 3:
//         dayName = "Среда";
//         break;
//     case 4:
//         dayName = "Четверг";
//         break;
//     case 5:
//         dayName = "Пятница";
//         break;
//     case 6:
//         dayName = "Суббота";
//         break;
//     case 7:
//         dayName = "Воскресенье";
//         break;
//     default:
//         dayName = "Неверный день недели";
// }

// console.log(dayName); // Выведет "Среда", так как dayOfWeek равен 3


const input=document.querySelector('input')
const root=document.querySelector('#root')

const url='https://api.openweathermap.org/data/2.5/weather?q=' 
const apiKey='f631ea87daddf959f8d7a12c30009e4c'
const imgUrl='https://openweathermap.org/img/wn/'

// const mist='https://inbusiness.kz/uploads/46/images/s67DIFC4.png'

async function getWeather(name) {
    try {
        const res = await fetch(url+name+'&appid='+apiKey)
        const data = await res.json()
        console.log(data);
        renderInfo(data)
        description(data)

    } catch(error) {
        root.innerHTML='Город не найден'
        // document.body.style.backgroundImage="url('https://marketium.club/wp-content/uploads/2021/08/error-404-page-not-found.jpeg')"
    }

}
// getWeather('London')

function renderInfo(obj) {
    root.innerHTML=''
    root.innerHTML=`

    
    <div class='gradus'>
    <h1>${Math.floor(obj.main.temp-273,15)} °</h1>
    </div>
    <div class='name'>
    <h1>${obj.name}</h1>
    <p>Humidity: ${obj.main.humidity}%</p>
    <p>Wind: ${obj.wind.speed}k/m</p>
    </div>
    <div class='wind'>
    <img src='${imgUrl+obj.weather[0].icon}@2x.png' />
    <p>${obj.weather[0].main}</p>
    </div>

    `
}

function  description(obj) {
    let description=obj.weather[0].main
    // let color='red'

    switch (description) {
        case 'Rain':
            document.body.style.backgroundImage="url('https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/rain-drops-on-window-1827098_1920.jpg?strip=1')"
        break
        case 'Snow':
            document.body.style.backgroundImage="url('https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?cs=srgb&dl=pexels-ruvim-miksanskiy-1438761.jpg&fm=jpg')"
        break
        case 'Thunderstorm':
            document.body.style.backgroundImage="url('https://t4.ftcdn.net/jpg/01/75/67/33/360_F_175673325_fvQPssGBi5NkFAKwBU5R1F0eiTjOupDQ.jpg')"
        break
        case 'Mist':
            document.body.style.backgroundImage="url('https://us.images.westend61.de/0000881371pw/scenic-view-of-field-during-foggy-weather-CAVF24249.jpg')"
        break
        case 'Clouds':
            document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3VkZXN8ZW58MHx8MHx8fDA%3D')"
        break
        case 'Clear':
            document.body.style.backgroundImage="url('https://inbusiness.kz/uploads/2022-8/H4SIRIaG.webp')"
        break
        case 'Smoke':
            document.body.style.backgroundImage="url('https://livingasia.online/wp-content/uploads/2019/02/air_pollution_architecture_buildings_city_cityscape_downtown_fog_mist-1564103.jpgd_.jpeg')"
        default:
            document.body.style.backgroundImage="url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-844297.jpg&fm=jpg')"
    }
}

input.onchange=()=>{
    getWeather(input.value)
    input.value=''
}
