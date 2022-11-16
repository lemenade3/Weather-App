import D01 from './weather-icons/01d.svg'
import N01 from './weather-icons/01n.svg'
import D02 from './weather-icons/02d.svg'
import N02 from './weather-icons/02n.svg'
import D03 from './weather-icons/03.svg'
import D04 from './weather-icons/04.svg'
import D09 from './weather-icons/09d.svg'
import N09 from './weather-icons/09n.svg'
import D10 from './weather-icons/10d.svg'
import N10 from './weather-icons/10n.svg'
import D11 from './weather-icons/11d.svg'
import N11 from './weather-icons/11n.svg'
import D13 from './weather-icons/13d.svg'
import N13 from './weather-icons/13n.svg'
import D50 from './weather-icons/50d.svg'
import N50 from './weather-icons/50n.svg'

function returnIcon(icon) {
    let icons = {
        '01d': D01,
        '01n': N01,
        '02d': D02,
        '02n': N02,
        '03d': D03,
        '03n': D03,
        '04d': D04,
        '04n': D04,
        '09d': D09,
        '09n': N09,
        '10d': D10,
        '10n': N10,
        '11d': D11,
        '11n': N11,
        '13d': D13,
        '13n': N13,
        '50d': D50,
        '50n': N50,
        'default': 'error'
    }
    let result = icons[icon]
    return result;
    
}

export {returnIcon}