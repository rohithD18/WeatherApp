import clearSky from '../assets/clear-day.png'
import rainy from '../assets/nature_13599906.png'
import clouds from '../assets/weather.png'
import moon from '../assets/moon.png'
import sun from '../assets/sunny.png'
import rain from '../assets/rain.png'
import moon1 from '../assets/moon1.png'
import drops from '../assets/water.png'
export const tempartureArr = [
  { id: 1, day: "SAT", degree: 30, pic: moon },
  { id: 2, day: "SUN", degree: 41, pic: sun  },
  { id: 3, day: "MON", degree: 27, pic: rain  },
  { id: 4, day: "TUE", degree: 34 , pic: moon },
  { id: 5, day: "WED", degree: 28, pic: rain },
  { id: 6, day: "THUR", degree: 46, pic: sun  },
  { id: 7, day: "FRI", degree: 35, pic: sun  },
];
export const otherCityForecast = [
  { id: 1, city: "Hyderabad", degree: 36, feels: "Clear Sky", weatherPic : moon1 },
  { id: 2, city: "Mumbai", degree: 36, feels: "Clear Sky", weatherPic : drops },
  { id: 3, city: "Bengaluru", degree: 20, feels: "Rainy", weatherPic : rain },
  { id: 4, city: "Chennai", degree: 35, feels: "Few Clouds", weatherPic : moon1 },
  { id: 5, city: "Ahmedabad", degree: 20, feels: "Rainy", weatherPic : rainy },
  { id: 6, city: "Kolkata", degree: 36, feels: "Clear Sky", weatherPic : sun },
];

export const timleyForecast = [
  { id: 1, time: "6 am", degree: 36, feels: "Clear Sky",  weatherPic : clearSky },
  { id: 2, time: "8 am", degree: 36, feels: "Clear Sky", weatherPic : clearSky },
  { id: 3, time: "10 am", degree: 20, feels: "Rainy", weatherPic : rainy },
  { id: 4, time: "12 pm", degree: 35, feels: "Few Clouds", weatherPic : clouds },
  { id: 5, time: "2 pm", degree: 20, feels: "Rainy", weatherPic : rainy },
  { id: 6, time: "4 pm", degree: 36, feels: "Clear Sky", weatherPic : clearSky },
  { id: 7, time: "6 pm", degree: 36, feels: "Clear Sky", weatherPic : clearSky },
  { id: 8, time: "8 pm", degree: 36, feels: "Clear Sky", weatherPic : clearSky },
  { id: 9, time: "10 pm", degree: 20, feels: "Rainy", weatherPic : rainy },
  { id: 10, time: "12 am", degree: 35, feels: "Few Clouds", weatherPic : clouds },
];
